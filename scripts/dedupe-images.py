from pathlib import Path
from PIL import Image
import hashlib
from collections import defaultdict

ROOT = Path(r"c:\Users\harsh\OneDrive\Personal\Krishna Events Website\public\images\instagram")


def ahash(im, size=16):
    g = im.convert("L").resize((size, size), Image.Resampling.BILINEAR)
    pixels = list(g.getdata())
    avg = sum(pixels) / len(pixels)
    return "".join("1" if p >= avg else "0" for p in pixels)


def hamming(a, b):
    return sum(x != y for x, y in zip(a, b))


files = sorted(ROOT.glob("ig-*.jpg"))
items = []
for f in files:
    im = Image.open(f)
    items.append(
        {
            "name": f.name,
            "hash": ahash(im),
            "size": im.size,
            "bytes": f.stat().st_size,
            "path": f,
            "id": f.stem,
        }
    )

print("Exact MD5 dups:")
md5s = defaultdict(list)
for it in items:
    md5s[hashlib.md5(it["path"].read_bytes()).hexdigest()].append(it["name"])
for v in md5s.values():
    if len(v) > 1:
        print(v)

print("\nNear dups (hamming <= 20 / 256):")
pairs = []
for i, a in enumerate(items):
    for b in items[i + 1 :]:
        d = hamming(a["hash"], b["hash"])
        if d <= 20:
            pairs.append((d, a, b))
            print(
                f"d={d}: {a['name']} {a['size']} {a['bytes']} <-> {b['name']} {b['size']} {b['bytes']}"
            )

# Cluster near-duplicates and keep largest file
parent = {it["name"]: it["name"] for it in items}


def find(x):
    while parent[x] != x:
        parent[x] = parent[parent[x]]
        x = parent[x]
    return x


def union(a, b):
    ra, rb = find(a), find(b)
    if ra != rb:
        parent[rb] = ra


for d, a, b in pairs:
    union(a["name"], b["name"])

clusters = defaultdict(list)
by_name = {it["name"]: it for it in items}
for it in items:
    clusters[find(it["name"])].append(it)

print("\nClusters (keep largest):")
keep = []
remove = []
for members in clusters.values():
    members = sorted(members, key=lambda x: x["bytes"], reverse=True)
    keep.append(members[0]["name"])
    if len(members) > 1:
        print("KEEP", members[0]["name"], "DROP", [m["name"] for m in members[1:]])
        remove.extend(m["name"] for m in members[1:])
    else:
        print("UNIQUE", members[0]["name"], members[0]["size"], members[0]["bytes"])

print("\nKEEP COUNT", len(keep))
print("REMOVE COUNT", len(remove))
print("REMOVE", remove)

# Prefer landscape/portrait quality: drop very small reel thumbs if many remain
quality = []
for name in keep:
    it = by_name[name]
    w, h = it["size"]
    # keep if reasonably large
    if it["bytes"] >= 90000 or (w >= 1000 and h >= 1000):
        quality.append(name)
    else:
        # keep some smaller unique ones if needed later
        quality.append(name)

Path(r"c:\Users\harsh\OneDrive\Personal\Krishna Events Website\scripts\dedupe-result.txt").write_text(
    "\n".join(["KEEP=" + ",".join(sorted(keep)), "REMOVE=" + ",".join(sorted(remove))]),
    encoding="utf-8",
)
