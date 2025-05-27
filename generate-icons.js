const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// SVG 내용
const createSvg = (size) => `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="${size}" height="${size}" rx="${size * 0.167}" fill="url(#gradient)"/>
  <path d="M${size * 0.333} ${size * 0.389}L${size * 0.222} ${size * 0.5}L${size * 0.333} ${size * 0.611}" stroke="white" stroke-width="${size * 0.0278}" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M${size * 0.667} ${size * 0.389}L${size * 0.778} ${size * 0.5}L${size * 0.667} ${size * 0.611}" stroke="white" stroke-width="${size * 0.0278}" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M${size * 0.569} ${size * 0.333}L${size * 0.431} ${size * 0.667}" stroke="white" stroke-width="${size * 0.0278}" stroke-linecap="round"/>
  <defs>
    <linearGradient id="gradient" x1="0" y1="0" x2="${size}" y2="${size}" gradientUnits="userSpaceOnUse">
      <stop stop-color="#667EEA"/>
      <stop offset="1" stop-color="#764BA2"/>
    </linearGradient>
  </defs>
</svg>`;

// 생성할 아이콘 크기들
const sizes = [72, 96, 128, 144, 152, 192, 384, 512];

async function generateIcons() {
  const iconsDir = path.join(__dirname, 'public', 'images', 'icons');
  
  // 디렉토리가 없으면 생성
  if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir, { recursive: true });
  }

  for (const size of sizes) {
    const svg = createSvg(size);
    const outputPath = path.join(iconsDir, `icon-${size}x${size}.png`);
    
    try {
      await sharp(Buffer.from(svg))
        .png()
        .toFile(outputPath);
      
      console.log(`✅ Created: icon-${size}x${size}.png`);
    } catch (error) {
      console.error(`❌ Error creating icon-${size}x${size}.png:`, error);
    }
  }
}

// sharp 설치 안내
console.log('이 스크립트를 실행하려면 sharp 패키지가 필요합니다.');
console.log('설치 명령어: npm install sharp');
console.log('');
console.log('설치 후 다음 명령어로 실행하세요:');
console.log('node generate-icons.js');

// 주석 해제하여 실행
// generateIcons();