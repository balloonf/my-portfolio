// Base64로 인코딩된 1x1 투명 PNG
const base64PNG = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==";

// PNG 파일 생성
const fs = require('fs');
const path = require('path');

const outputPath = path.join(__dirname, 'public', 'images', 'icons', 'icon-144x144.png');
const buffer = Buffer.from(base64PNG, 'base64');

fs.writeFileSync(outputPath, buffer);
console.log('Created placeholder PNG file at:', outputPath);