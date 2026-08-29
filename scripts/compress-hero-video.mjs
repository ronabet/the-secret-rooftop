#!/usr/bin/env node
/**
 * Compress hero background drone footage for web delivery.
 *
 * Usage:
 *   npm run compress:hero-video
 *   npm run compress:hero-video -- /path/to/source.mp4
 *
 * Default source: src/assets/video/source/DJI_20260826183926_0098_D.MP4
 */
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const defaultSource = 'src/assets/video/source/DJI_20260826183926_0098_D.MP4';
const inputArg = process.argv[2];
const input = path.resolve(inputArg || defaultSource);
const outDir = path.resolve('public/hero');
const loopSeconds = 22;
const maxWidth = 1920;

if (!fs.existsSync(input)) {
  console.error(`\nSource video not found:\n  ${input}\n`);
  console.error('Place the DJI file at the default path above, or pass a custom path:');
  console.error('  npm run compress:hero-video -- /path/to/video.mp4\n');
  process.exit(1);
}

fs.mkdirSync(outDir, { recursive: true });

const mp4Out = path.join(outDir, 'rooftop-drone.mp4');
const webmOut = path.join(outDir, 'rooftop-drone.webm');
const posterOut = path.join(outDir, 'rooftop-drone-poster.jpg');

const scaleFilter = `scale='min(${maxWidth},iw)':-2:flags=lanczos`;
const trim = `-t ${loopSeconds}`;

console.log(`Compressing hero video from:\n  ${input}\n`);

execSync(
  `ffmpeg -y -hide_banner -loglevel error -i "${input}" ${trim} -an -vf "${scaleFilter}" -c:v libx264 -profile:v main -pix_fmt yuv420p -crf 28 -preset medium -movflags +faststart "${mp4Out}"`,
  { stdio: 'inherit' }
);

execSync(
  `ffmpeg -y -hide_banner -loglevel error -i "${input}" ${trim} -an -vf "${scaleFilter}" -c:v libvpx-vp9 -b:v 0 -crf 34 -row-mt 1 -deadline good "${webmOut}"`,
  { stdio: 'inherit' }
);

execSync(
  `ffmpeg -y -hide_banner -loglevel error -ss 1 -i "${input}" -vframes 1 -vf "${scaleFilter}" -q:v 3 "${posterOut}"`,
  { stdio: 'inherit' }
);

const report = (file) => {
  const size = fs.statSync(file).size;
  console.log(`${path.basename(file)}: ${Math.round(size / 1024)}KB`);
};

console.log('\nOutputs:');
report(mp4Out);
report(webmOut);
report(posterOut);
