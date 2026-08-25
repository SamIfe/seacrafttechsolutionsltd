/**
 * Rasterize the square STS mark into Next.js App Router icon files.
 * Source mark: public/images/logo/sts-mark.svg
 * Square lockup: scripts/favicon-square.svg
 *
 *   node scripts/generate-favicon.mjs
 */
import { writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const squareSvgPath = path.join(root, "scripts", "favicon-square.svg");
const appDir = path.join(root, "src", "app");

function icoFromPngs(pngs) {
  const count = pngs.length;
  const headerSize = 6 + 16 * count;
  let offset = headerSize;
  const entries = [];
  const payloads = [];

  for (const png of pngs) {
    const width = png.readUInt32BE(16);
    const height = png.readUInt32BE(20);
    entries.push({
      width: width >= 256 ? 0 : width,
      height: height >= 256 ? 0 : height,
      size: png.length,
      offset,
    });
    payloads.push(png);
    offset += png.length;
  }

  const buf = Buffer.alloc(offset);
  buf.writeUInt16LE(0, 0);
  buf.writeUInt16LE(1, 2);
  buf.writeUInt16LE(count, 4);

  let dir = 6;
  for (const entry of entries) {
    buf.writeUInt8(entry.width, dir);
    buf.writeUInt8(entry.height, dir + 1);
    buf.writeUInt8(0, dir + 2);
    buf.writeUInt8(0, dir + 3);
    buf.writeUInt16LE(1, dir + 4);
    buf.writeUInt16LE(32, dir + 6);
    buf.writeUInt32LE(entry.size, dir + 8);
    buf.writeUInt32LE(entry.offset, dir + 12);
    dir += 16;
  }

  let payloadOffset = headerSize;
  for (const png of payloads) {
    png.copy(buf, payloadOffset);
    payloadOffset += png.length;
  }

  return buf;
}

async function pngAt(size) {
  return sharp(squareSvgPath).resize(size, size, { fit: "fill" }).png().toBuffer();
}

const png16 = await pngAt(16);
const png32 = await pngAt(32);
const png180 = await pngAt(180);

await writeFile(path.join(appDir, "icon.png"), png32);
await writeFile(path.join(appDir, "apple-icon.png"), png180);
await writeFile(path.join(appDir, "favicon.ico"), icoFromPngs([png16, png32]));

console.log("Wrote src/app/favicon.ico (16+32), icon.png (32), apple-icon.png (180)");
