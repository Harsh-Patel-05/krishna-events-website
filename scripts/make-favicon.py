"""Build Ke-only favicon assets from HQ nav logo (matches navbar mark)."""
from __future__ import annotations

import base64
import io
import struct
from pathlib import Path

from PIL import Image

ROOT = Path(r"c:\Users\harsh\OneDrive\Personal\Krishna Events Website")
ASSETS = Path(
    r"C:\Users\harsh\.cursor\projects\c-Users-harsh-OneDrive-Personal-Krishna-Events-Website\assets"
)
PUBLIC = ROOT / "public"
OUT = PUBLIC / "logos"


def knock_black(img: Image.Image, threshold: int = 26) -> Image.Image:
    img = img.convert("RGBA")
    px = img.load()
    w, h = img.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if r <= threshold and g <= threshold and b <= threshold:
                px[x, y] = (0, 0, 0, 0)
            elif r <= threshold + 16 and g <= threshold + 16 and b <= threshold + 16:
                soft = max(0, min(255, int(((r + g + b) / 3 - threshold) * (255 / 16))))
                px[x, y] = (r, g, b, soft)
    return img


def trim(img: Image.Image, pad: int = 8) -> Image.Image:
    bbox = img.getbbox()
    if not bbox:
        return img
    l, t, r, b = bbox
    w, h = img.size
    return img.crop(
        (max(0, l - pad), max(0, t - pad), min(w, r + pad), min(h, b + pad))
    )


def is_content(r: int, g: int, b: int) -> bool:
    return not (r <= 28 and g <= 28 and b <= 28)


def extract_ke(src: Image.Image) -> Image.Image:
    w, h = src.size
    px = src.load()

    cols = [
        sum(1 for y in range(h) if is_content(*px[x, y][:3])) for x in range(w)
    ]
    active = [i for i, c in enumerate(cols) if c > 5]
    gaps = []
    prev = active[0]
    for x in active[1:]:
        if x - prev > 15:
            gaps.append((prev, x))
        prev = x

    ke_right = (gaps[0][0] + 8) if gaps else int(w * 0.42)

    rows = [
        sum(1 for x in range(ke_right) if is_content(*px[x, y][:3])) for y in range(h)
    ]
    ys = [i for i, c in enumerate(rows) if c > 3]
    top, bot = ys[0], ys[-1]

    mx = max(cols[:ke_right] or [1])
    dense = next(i for i, c in enumerate(cols[:ke_right]) if c >= mx * 0.35)
    favicon_left = max(0, dense - 90)  # keep short left flourish

    ke = src.crop(
        (favicon_left, max(0, top - 20), min(w, ke_right + 10), min(h, bot + 20))
    )
    return trim(knock_black(ke), pad=8)


def make_square(
    src_img: Image.Image, size: int, margin: float = 0.07, bg=(0, 0, 0, 255)
) -> Image.Image:
    m = max(1, int(size * margin))
    inner = size - 2 * m
    scale = min(inner / src_img.size[0], inner / src_img.size[1])
    nw = max(1, int(src_img.size[0] * scale))
    nh = max(1, int(src_img.size[1] * scale))

    work = src_img
    while work.size[0] > nw * 2 and work.size[1] > nh * 2:
        work = work.resize((work.size[0] // 2, work.size[1] // 2), Image.Resampling.LANCZOS)
    resized = work.resize((nw, nh), Image.Resampling.LANCZOS)

    canvas = Image.new("RGBA", (size, size), bg)
    canvas.paste(resized, ((size - nw) // 2, (size - nh) // 2), resized)
    return canvas


def main() -> None:
    hq = ASSETS / "krishna-events-nav-hq.jpg"
    src = Image.open(hq if hq.exists() else OUT / "krishna-events-nav.png").convert("RGBA")
    ke = extract_ke(src)
    print(f"ke mark {ke.size}")
    ke.save(OUT / "krishna-events-mark.png", optimize=True)

    def margin_for(size: int) -> float:
        # Small tab icons need tighter crop so Ke stays readable
        if size <= 32:
            return 0.02
        if size <= 64:
            return 0.04
        return 0.06

    imgs = {s: make_square(ke, s, margin=margin_for(s)) for s in (16, 32, 48, 64, 128, 180, 256, 512)}

    imgs[512].save(PUBLIC / "favicon.png", optimize=True)
    imgs[32].save(PUBLIC / "favicon-32x32.png", optimize=True)
    imgs[16].save(PUBLIC / "favicon-16x16.png", optimize=True)
    imgs[180].save(PUBLIC / "apple-touch-icon.png", optimize=True)
    imgs[256].save(PUBLIC / "favicon-256.png", optimize=True)

    imgs[256].save(
        PUBLIC / "favicon.ico",
        format="ICO",
        sizes=[(16, 16), (32, 32), (48, 48), (64, 64)],
    )
    data = (PUBLIC / "favicon.ico").read_bytes()
    count = struct.unpack_from("<H", data, 4)[0]
    print(f"favicon.ico {len(data)} bytes, {count} sizes")

    buf = io.BytesIO()
    imgs[256].save(buf, format="PNG", optimize=True)
    b64 = base64.b64encode(buf.getvalue()).decode("ascii")
    svg = (
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">'
        f'<image width="256" height="256" href="data:image/png;base64,{b64}"/>'
        "</svg>\n"
    )
    (PUBLIC / "favicon.svg").write_text(svg, encoding="utf-8")
    print(f"favicon.png {imgs[512].size} {(PUBLIC / 'favicon.png').stat().st_size} bytes")
    print("done")


if __name__ == "__main__":
    main()
