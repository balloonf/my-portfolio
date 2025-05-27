# PWA 아이콘 생성 가이드

## SVG 파일이 생성되었습니다:
- icon-144x144.svg
- icon-192x192.svg  
- icon-512x512.svg

## PNG 변환 방법:

### 방법 1: 온라인 변환기 사용
1. https://cloudconvert.com/svg-to-png 접속
2. 각 SVG 파일 업로드
3. 해당 크기로 변환 (144x144, 192x192 등)

### 방법 2: convert-to-png.html 사용
1. 브라우저에서 `/images/icons/convert-to-png.html` 열기
2. "PNG로 다운로드" 버튼 클릭

### 방법 3: Sharp 패키지 사용
```bash
npm install sharp
```

그 다음 generate-icons.js의 마지막 줄 주석 해제 후 실행:
```bash
node generate-icons.js
```

## 필요한 PNG 크기:
- 72x72
- 96x96
- 128x128
- 144x144
- 152x152
- 192x192
- 384x384
- 512x512