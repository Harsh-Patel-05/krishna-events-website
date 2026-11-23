"""Validate: no missing files, no gallery dups, list home reuse."""
import re
from pathlib import Path
from collections import Counter, defaultdict

ROOT = Path(r"c:\Users\harsh\OneDrive\Personal\Krishna Events Website")
IMG = ROOT / "public" / "images" / "instagram"
SRC = ROOT / "src"

existing = {p.name for p in IMG.glob("ig-*.jpg")}
print("Files on disk:", len(existing), sorted(existing))

refs = []
for f in SRC.rglob("*"):
    if f.suffix not in {".js", ".jsx"}:
        continue
    text = f.read_text(encoding="utf-8")
    for m in re.finditer(r"/images/instagram/(ig-\d+\.jpg)", text):
        refs.append((str(f.relative_to(ROOT)).replace("\\", "/"), m.group(1)))

missing = sorted({name for _, name in refs if name not in existing})
print("Missing refs:", missing or "none")

# Gallery unique list from media.js
media = (SRC / "data" / "media.js").read_text(encoding="utf-8")
gallery_ids = re.findall(r"id: '(ig-\d+)'", media)
print("Gallery ids:", len(gallery_ids), "unique:", len(set(gallery_ids)))
dups = [i for i, c in Counter(gallery_ids).items() if c > 1]
print("Gallery id dups:", dups or "none")

# Home file references
home_files = [
    SRC / "data" / "site.config.js",
    SRC / "data" / "gallery.js",
    SRC / "data" / "media.js",
    SRC / "data" / "destinations.js",
    SRC / "components" / "sections" / "About.jsx",
    SRC / "components" / "sections" / "WhyUs.jsx",
    SRC / "components" / "sections" / "InstagramFeed.jsx",
    SRC / "components" / "sections" / "Gallery.jsx",
    SRC / "components" / "sections" / "FinalCTA.jsx",
]
home_imgs = []
for f in home_files:
    if not f.exists():
        continue
    text = f.read_text(encoding="utf-8")
    # only concrete paths, not media.pageHeroes
    home_imgs += re.findall(r"/images/instagram/(ig-\d+\.jpg)", text)

# Resolve media.js home keys only
# Count occurrence of each ig file in media home slots
home_slots = re.findall(
    r"(?:homeHero|homeAbout|homeWhyUs|homeCta|featured|destinations|instagramFeed)[\s\S]*?/images/instagram/(ig-\d+\.jpg)",
    (SRC / "data" / "media.js").read_text(encoding="utf-8"),
)
print("Home media slot images:", home_slots)
print("Home media duplicates:", [i for i, c in Counter(home_slots).items() if c > 1] or "none")

print("\nAll src refs count:", len(refs))
by = Counter(n for _, n in refs)
print("Most referenced:")
for name, c in by.most_common(8):
    print(f"  {name}: {c}")
