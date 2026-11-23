from PIL import Image
from pathlib import Path

ROOT = Path(r"c:\Users\harsh\OneDrive\Personal\Krishna Events Website")
ASSETS = Path(r"C:\Users\harsh\.cursor\projects\c-Users-harsh-OneDrive-Personal-Krishna-Events-Website\assets")
OUT = ROOT / "public" / "logos"


def knock_black(img: Image.Image, threshold: int = 24) -> Image.Image:
    img = img.convert("RGBA")
    pixels = img.load()
    w, h = img.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            # Near-black plate -> transparent
            if r <= threshold and g <= threshold and b <= threshold:
                pixels[x, y] = (0, 0, 0, 0)
            # Soften near-black fringing
            elif r <= threshold + 18 and g <= threshold + 18 and b <= threshold + 18:
                soft = max(0, min(255, int(((r + g + b) / 3 - threshold) * (255 / 18))))
                pixels[x, y] = (r, g, b, soft)
    return img


def trim(img: Image.Image, pad: int = 8) -> Image.Image:
    bbox = img.getbbox()
    if not bbox:
        return img
    l, t, r, b = bbox
    l = max(0, l - pad)
    t = max(0, t - pad)
    r = min(img.size[0], r + pad)
    b = min(img.size[1], b + pad)
    return img.crop((l, t, r, b))


def save_scaled(img: Image.Image, path: Path, max_h: int):
    if img.size[1] > max_h:
        scale = max_h / img.size[1]
        img = img.resize(
            (max(1, int(img.size[0] * scale)), max_h),
            Image.Resampling.LANCZOS,
        )
    img.save(path, optimize=True)
    print(f"saved {path.name} {img.size}")


# Full stacked logo (footer / loader / brand)
stacked = Image.open(ASSETS / "krishna-events-logo-hq.jpg")
stacked = trim(knock_black(stacked), pad=12)
save_scaled(stacked, OUT / "krishna-events-logo.png", 640)
save_scaled(stacked, OUT / "krishna-events-logo-clear.png", 640)

# Horizontal nav logo if usable; else use stacked for nav too
nav_src = ASSETS / "krishna-events-nav-hq.jpg"
if nav_src.exists():
    nav = trim(knock_black(Image.open(nav_src)), pad=10)
    # Prefer horizontal if wider than tall
    if nav.size[0] >= nav.size[1] * 1.15:
        save_scaled(nav, OUT / "krishna-events-nav.png", 160)
    else:
        save_scaled(stacked, OUT / "krishna-events-nav.png", 160)
else:
    save_scaled(stacked, OUT / "krishna-events-nav.png", 160)

# Favicon = Ke mark only (cropped from nav); logo.png keeps stacked brand
save_scaled(stacked, ROOT / "public" / "logo.png", 256)

nav_logo = OUT / "krishna-events-nav.png"
if nav_logo.exists():
    nav_img = Image.open(nav_logo).convert("RGBA")
    # Gap between Ke monogram and wordmark (~x 267–298 at full size)
    cut = max(1, int(nav_img.size[0] * 0.45))
    mark = trim(knock_black(nav_img.crop((0, 0, cut, nav_img.size[1]))), pad=4)
    mark.save(OUT / "krishna-events-mark.png", optimize=True)
    print(f"saved krishna-events-mark.png {mark.size}")

    side = 128
    margin = int(side * 0.1)
    inner = side - margin * 2
    scale = min(inner / mark.size[0], inner / mark.size[1])
    nw = max(1, int(mark.size[0] * scale))
    nh = max(1, int(mark.size[1] * scale))
    resized = mark.resize((nw, nh), Image.Resampling.LANCZOS)
    square = Image.new("RGBA", (side, side), (0, 0, 0, 255))
    square.paste(resized, ((side - nw) // 2, (side - nh) // 2), resized)
    fav_path = ROOT / "public" / "favicon.png"
    square.save(fav_path, optimize=True)
    print(f"saved {fav_path.name} {square.size}")
else:
    save_scaled(stacked, ROOT / "public" / "favicon.png", 128)
