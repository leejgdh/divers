# Node.js 기반의 이미지 사용
FROM node:14-alpine 

# 앱 디렉토리 생성
WORKDIR /app

# 앱 의존성 설치
COPY package*.json ./
RUN npm install

# 앱 소스 추가
COPY . .

# 앱 빌드
RUN npm run build

# 포트 설정
EXPOSE 3000

# 앱 실행
CMD ["npm", "start"]
