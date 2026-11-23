"""Fallback: crop existing nav logo to keep ke + KRISHNA only (drop EVENTS/tagline)."""
from PIL import Image, ImageFilter, ImageEnhance
from pathlib import Path

ROOT = Path(r"c:\Users\harsh\OneDrive\Personal\Krishna Events Website")
src = ROOT / "public" / "logos" / "krishna-events-nav.png"
img = Image.open(src).convert("RGBA")
w, h = img.size

# Right-side wordmark sits roughly in the right 55% ; EVENTS/tagline are the lower
# ~40% of that text block. Keep full monogram height on the left, crop bottom of
# the overall canvas where the smaller lines live (approx lower 38%).
crop_bottom = int(h * 0.62)
cropped = img.crop((0, 0, w, crop_bottom))

# Trim transparent
bbox = cropped.getbbox()
if bbox:
    l, t, r, b = bbox
    pad = 6
    cropped = cropped.crop(
        (max(0, l - pad), max(0, t - pad), min(w, r + pad), min(crop_bottom, b + pad))
    )

# Upscale slightly for sharpness then sharpen
tw = int(cropped.size[0] * 1.6)
th = int(cropped.size[1] * 1.6)
cropped = cropped.resize((tw, th), Image.Resampling.LANCZOS)
cropped = cropped.filter(ImageFilter.UnsharpMask(radius=1.2, percent=140, threshold=2))

# Mild contrast for white wordmark
rgb = cropped.convert("RGB")
alpha = cropped.getchannel("A")
rgb = ImageEnhance.Contrast(rgb).enhance(1.08)
rgb = ImageEnhance.Sharpness(rgb).enhance(1.25)
out = rgb.convert("RGBA")
out.putalpha(alpha)

# Knock near-black again
px = out.load()
for y in range(out.size[1]):
    for x in range(out.size[0]):
        r, g, b, a = px[x, y]
        if r < 22 and g < 22 and b < 22:
            px[x, y] = (0, 0, 0, 0)

out = out.crop(out.getbbox())
# Target display height ~128px retina
target_h = 128
scale = target_h / out.size[1]
out = out.resize((max(1, int(out.size[0] * scale)), target_h), Image.Resampling.LANCZOS)

dest = ROOT / "public" / "logos" / "krishna-events-nav.png"
out.save(dest, optimize=True)
print("saved", dest, out.size)
