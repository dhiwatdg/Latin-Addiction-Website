// Generate delivery variants; preserve every original source photograph.
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { mkdir, stat } from 'node:fs/promises';
const target = new URL('../public/images/optimised/', import.meta.url);
await mkdir(target, {recursive:true});
const sources = [
  ['locations/mk-bg.png','mk-bg',[640,1280,1920],75],
  ['locations/leicester-bg.png','leicester-bg',[640,1280,1920],75],
  ['locations/reading-bg.png','reading-bg',[640,1280,1920],75],
  ['instructors/Dhiwa & Gloria.jpeg','founders',[96,400,800],82],
];
for (const [source,name,widths,quality] of sources) {
  const input = new URL(`../public/images/${source}`, import.meta.url);
  const original = (await stat(input)).size;
  for (const width of widths) {
    const file = new URL(`${name}-${width}.webp`,target);
    const info = await sharp(await import('node:fs/promises').then(fs=>fs.readFile(input))).rotate().resize({width,withoutEnlargement:true}).webp({quality}).toFile(fileURLToPath(file));
    console.log(`${name}-${width}: ${info.size} bytes (original ${original})`);
  }
}
