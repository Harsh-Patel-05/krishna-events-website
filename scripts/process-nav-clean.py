from PIL import Image, ImageFilter, ImageEnhance
from pathlib import Path

ROOT = Path(r"c:\Users\harsh\OneDrive\Personal\Krishna Events Website")
SRC = Path(
    r"C:\Users\harsh\.cursor\projects\c-Users-harsh-OneDrive-Personal-Krishna-Events-Website\assets\krishna-events-nav-full.jpg"
)
OUT = ROOT / "public" / "logos" / "krishna-events-nav.png"


def knock_black(img: Image.Image, threshold: int = 26) -> Image.Image:
    img = img.convert("RGBA")
    px = img.load()
    w, h = img.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if r <= threshold and g <= threshold and b <= threshold:
                px[x, y] = (0, 0, 0, 0)
            elif r <= threshold + 18 and g <= threshold + 18 and b <= threshold + 18:
                soft = max(0, min(255, int(((r + g + b) / 3 - threshold) * (255 / 18))))
                px[x, y] = (r, g, b, soft)
    return img


img = knock_black(Image.open(SRC))
bbox = img.getbbox()
if bbox:
    l, t, r, b = bbox
    pad = 12
    img = img.crop(
        (
            max(0, l - pad),
            max(0, t - pad),
            min(img.size[0], r + pad),
            min(img.size[1], b + pad),
        )
    )

rgb = ImageEnhance.Contrast(img.convert("RGB")).enhance(1.08)
rgb = ImageEnhance.Sharpness(rgb).enhance(1.3)
alpha = img.getchannel("A")
img = rgb.convert("RGBA")
img.putalpha(alpha)
img = img.filter(ImageFilter.UnsharpMask(radius=1.1, percent=135, threshold=2))

# Re-knock blacks after enhance
img = knock_black(img, threshold=20)
if img.getbbox():
    img = img.crop(img.getbbox())

target_h = 152
scale = target_h / img.size[1]
img = img.resize((max(1, int(img.size[0] * scale)), target_h), Image.Resampling.LANCZOS)
img.save(OUT, optimize=True)
print("saved", OUT, img.size)
