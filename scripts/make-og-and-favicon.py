"""Build clearer square favicons + OG preview image from the Ke mark."""
from __future__ import annotations

import base64
import io
import struct
from pathlib import Path

from PIL import Image, ImageFilter

ROOT = Path(r"c:\Users\harsh\OneDrive\Personal\Krishna Events Website")
PUBLIC = ROOT / "public"
MARK = PUBLIC / "logos" / "krishna-events-mark.png"


def knock_black(img: Image.Image, threshold: int = 22) -> Image.Image:
    img = img.convert("RGBA")
    px = img.load()
    w, h = img.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if a == 0:
                continue
            if r <= threshold and g <= threshold and b <= threshold:
                px[x, y] = (0, 0, 0, 0)
    return img


def trim(img: Image.Image, pad: int = 6) -> Image.Image:
    bbox = img.getbbox()
    if not bbox:
        return img
    l, t, r, b = bbox
    w, h = img.size
    return img.crop(
        (max(0, l - pad), max(0, t - pad), min(w, r + pad), min(h, b + pad))
    )


def fit_on_canvas(
    src: Image.Image,
    size: tuple[int, int],
    margin: float = 0.12,
    bg=(0, 0, 0, 255),
) -> Image.Image:
    canvas = Image.new("RGBA", size, bg)
    mw = int(size[0] * (1 - 2 * margin))
    mh = int(size[1] * (1 - 2 * margin))
    scale = min(mw / src.size[0], mh / src.size[1])
    nw = max(1, int(src.size[0] * scale))
    nh = max(1, int(src.size[1] * scale))
    resized = src.resize((nw, nh), Image.Resampling.LANCZOS)
    canvas.paste(resized, ((size[0] - nw) // 2, (size[1] - nh) // 2), resized)
    return canvas


def main() -> None:
    mark = trim(knock_black(Image.open(MARK)))
    # Slight unsharp for small icons
    crisp = mark.filter(ImageFilter.UnsharpMask(radius=1.2, percent=140, threshold=2))

    squares = {
        16: fit_on_canvas(crisp, (16, 16), margin=0.04),
        32: fit_on_canvas(crisp, (32, 32), margin=0.05),
        48: fit_on_canvas(crisp, (48, 48), margin=0.06),
        64: fit_on_canvas(crisp, (64, 64), margin=0.07),
        180: fit_on_canvas(mark, (180, 180), margin=0.1),
        256: fit_on_canvas(mark, (256, 256), margin=0.1),
        512: fit_on_canvas(mark, (512, 512), margin=0.1),
    }

    squares[512].save(PUBLIC / "favicon.png", optimize=True)
    squares[32].save(PUBLIC / "favicon-32x32.png", optimize=True)
    squares[16].save(PUBLIC / "favicon-16x16.png", optimize=True)
    squares[180].save(PUBLIC / "apple-touch-icon.png", optimize=True)
    squares[256].save(PUBLIC / "favicon-256.png", optimize=True)

    # Multi-size ICO (browsers pick best size)
    squares[256].save(
        PUBLIC / "favicon.ico",
        format="ICO",
        sizes=[(16, 16), (32, 32), (48, 48)],
    )
    ico = (PUBLIC / "favicon.ico").read_bytes()
    print("ico", len(ico), "sizes", struct.unpack_from("<H", ico, 4)[0])

    buf = io.BytesIO()
    squares[256].save(buf, format="PNG", optimize=True)
    b64 = base64.b64encode(buf.getvalue()).decode("ascii")
    (PUBLIC / "favicon.svg").write_text(
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">'
        f'<image width="256" height="256" href="data:image/png;base64,{b64}"/>'
        "</svg>\n",
        encoding="utf-8",
    )

    # Link-preview / OG: square Ke mark (Chrome uses this as the thumbnail)
    og_square = fit_on_canvas(mark, (1200, 1200), margin=0.16)
    og_square.save(PUBLIC / "og-image.png", optimize=True)

    # Wide OG (some platforms prefer 1.91:1)
    og_wide = fit_on_canvas(mark, (1200, 630), margin=0.18)
    og_wide.save(PUBLIC / "og-image-wide.png", optimize=True)

    print("favicon + og images written")


if __name__ == "__main__":
    main()
