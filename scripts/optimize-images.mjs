import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const dir = path.join(root, 'public', 'images', 'instagram')

async function replaceFile(target, buffer) {
  const tmp = `${target}.${process.pid}.tmp.jpg`
  fs.writeFileSync(tmp, buffer)
  try {
    fs.renameSync(tmp, target)
  } catch {
    fs.copyFileSync(tmp, target)
    fs.unlinkSync(tmp)
  }
}

const files = fs.readdirSync(dir).filter((f) => /\.jpe?g$/i.test(f) && !f.includes('.tmp.'))
let saved = 0

for (const file of files) {
  if (file === 'ig-15-hero.jpg') continue
  const input = path.join(dir, file)
  const before = fs.statSync(input).size
  try {
    const buf = await sharp(input)
      .rotate()
      .resize({ width: 1600, height: 2000, fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 78, mozjpeg: true, progressive: true })
      .toBuffer()

    if (buf.length < before) {
      await replaceFile(input, buf)
      saved += before - buf.length
      console.log(
        `${file}: ${(before / 1024).toFixed(0)}KB → ${(buf.length / 1024).toFixed(0)}KB`,
      )
    } else {
      console.log(`${file}: kept`)
    }
  } catch (err) {
    console.warn(`${file}: skip — ${err.message}`)
  }
}

const heroSrc = path.join(dir, 'ig-15.jpg')
if (fs.existsSync(heroSrc)) {
  const heroOut = path.join(dir, 'ig-15-hero.jpg')
  const tmp = `${heroOut}.${process.pid}.tmp.jpg`
  await sharp(heroSrc)
    .rotate()
    .resize({ width: 1400, height: 1800, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 72, mozjpeg: true, progressive: true })
    .toFile(tmp)
  try {
    if (fs.existsSync(heroOut)) fs.unlinkSync(heroOut)
    fs.renameSync(tmp, heroOut)
  } catch {
    fs.copyFileSync(tmp, heroOut)
    try {
      fs.unlinkSync(tmp)
    } catch {
      /* ignore */
    }
  }
  console.log(`hero: ${(fs.statSync(heroOut).size / 1024).toFixed(0)}KB → ig-15-hero.jpg`)
}

console.log(`\nSaved ${(saved / 1024 / 1024).toFixed(2)} MB`)
