from pathlib import Path
import re
from collections import Counter

ROOT = Path(r"c:\Users\harsh\OneDrive\Personal\Krishna Events Website")
OUT = ROOT / "public" / "images" / "instagram"
files = {p.name for p in OUT.glob("ig-*.jpg")}

refs = set()
for p in (ROOT / "src").rglob("*"):
    if p.suffix.lower() in {".js", ".jsx", ".ts", ".tsx", ".css", ".html"}:
        text = p.read_text(encoding="utf-8", errors="ignore")
        for m in re.finditer(r"/images/instagram/(ig-\d+\.jpg)", text):
            refs.add(m.group(1))

missing = sorted(refs - files)
extra = sorted(files - refs)
print("on disk", len(files), "referenced", len(refs))
print("missing", missing)
print("unreferenced", extra)

media = (ROOT / "src" / "data" / "media.js").read_text(encoding="utf-8")
gallery = re.findall(r"src: '(/images/instagram/ig-\d+\.jpg)'", media)
print("gallery entries", len(gallery), "unique", len(set(gallery)))
print("gallery dups", [x for x in set(gallery) if gallery.count(x) > 1])

port = (ROOT / "src" / "data" / "portfolio.js").read_text(encoding="utf-8")
pimgs = re.findall(r"'/images/instagram/(ig-\d+\.jpg)'", port)
print("portfolio multi-use", [k for k, v in Counter(pimgs).items() if v > 1])
