import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const imagesDir = path.resolve('src/assets/images');
const files = fs.readdirSync(imagesDir).filter((f) => /\.(jpe?g|png)$/i.test(f));

for (const file of files) {
  const input = path.join(imagesDir, file);
  const temp = `${input}.tmp`;
  const ext = path.extname(file).toLowerCase();
  const maxWidth = file.includes('logo') ? 800 : 1600;

  let pipeline = sharp(input).rotate().resize({ width: maxWidth, withoutEnlargement: true });

  if (ext === '.png') {
    pipeline = pipeline.png({ quality: 80, compressionLevel: 9 });
  } else {
    pipeline = pipeline.jpeg({ quality: 78, mozjpeg: true });
  }

  await pipeline.toFile(temp);
  fs.renameSync(temp, input);
  const { size } = fs.statSync(input);
  console.log(`${file}: ${Math.round(size / 1024)}KB`);
}
