import json
import re
import base64
import hashlib
from pathlib import Path
from PIL import Image
import io

ROOT = Path(r"c:\Users\harsh\OneDrive\Personal\Krishna Events Website")
OUT = ROOT / "public" / "images" / "instagram"
CDP = Path(
    r"C:\Users\harsh\.cursor\browser-logs\cdp-response-Runtime.evaluate-2026-11-23T12-46-07-860Z.json"
)


def ahash(im, size=16):
    g = im.convert("L").resize((size, size), Image.Resampling.BILINEAR)
    pixels = list(g.getdata())
    avg = sum(pixels) / len(pixels)
    return "".join("1" if p >= avg else "0" for p in pixels)


def hamming(a, b):
    return sum(x != y for x, y in zip(a, b))


existing_files = sorted(OUT.glob("ig-*.jpg"))
existing_hashes = []
existing_md5 = set()
max_n = 0
for f in existing_files:
    m = re.search(r"ig-(\d+)", f.stem)
    if m:
        max_n = max(max_n, int(m.group(1)))
    data = f.read_bytes()
    existing_md5.add(hashlib.md5(data).hexdigest())
    im = Image.open(io.BytesIO(data))
    existing_hashes.append(ahash(im))

raw = json.loads(CDP.read_text(encoding="utf-8"))
payload = json.loads(raw["result"]["value"])
print("scraped", payload.get("count"), "text", payload.get("text", "")[:80])

saved = []
next_n = max_n + 1
for r in payload.get("results", []):
    full = r.get("full")
    if not full or not str(full).startswith("data:image"):
        continue
    m = re.match(r"data:image/\w+;base64,(.+)", full, re.S)
    if not m:
        continue
    data = base64.b64decode(m.group(1))
    if len(data) < 45000:
        continue
    md5 = hashlib.md5(data).hexdigest()
    if md5 in existing_md5:
        print("md5 dup skip", len(data))
        continue
    try:
        im = Image.open(io.BytesIO(data))
    except Exception as e:
        print("bad image", e)
        continue
    h = ahash(im)
    if any(hamming(h, eh) <= 18 for eh in existing_hashes):
        print("near dup skip", im.size, len(data))
        continue

    fname = f"ig-{next_n:02d}.jpg"
    (OUT / fname).write_bytes(data)
    existing_md5.add(md5)
    existing_hashes.append(h)
    saved.append(
        {
            "id": f"ig-{next_n:02d}",
            "src": f"/images/instagram/{fname}",
            "title": f"Wedding moment {next_n}",
            "alt": (r.get("alt") or "Wedding celebration by Krishna Events")[:140],
            "w": im.size[0],
            "h": im.size[1],
            "bytes": len(data),
        }
    )
    print("saved", fname, im.size, len(data))
    next_n += 1

print("NEW", len(saved))
print(json.dumps([s["id"] for s in saved]))
(OUT / "new-batch.json").write_text(json.dumps(saved, indent=2), encoding="utf-8")
