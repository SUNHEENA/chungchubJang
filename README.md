# 모바일 청첩장

Vercel 배포를 목표로 만든 React 기반 모바일 청첩장입니다. 예식 정보, 갤러리, 연락 버튼, 지도 링크, 계좌 복사, 참석 여부 전달 폼을 포함합니다.

## 빠른 시작

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:5173`을 열면 모바일 청첩장을 확인할 수 있습니다. 이 프로젝트는 별도 번들러 없이 브라우저 ESM CDN으로 React를 불러오기 때문에 로컬 설치가 가볍습니다.

## 내 정보로 수정하기

대부분의 문구와 예식 정보는 `src/invitationData.js`에서 수정할 수 있습니다.

- 신랑/신부 이름, 연락처, 부모님 성함
- 예식 날짜와 장소
- 네이버 지도 / 카카오맵 링크
- 갤러리 이미지 URL
- 계좌 정보와 초대 문구

디자인 색상, 여백, 카드 스타일은 `src/styles.css`에서 변경합니다.

## Vercel 배포

1. GitHub에 이 저장소를 올립니다.
2. Vercel에서 **Add New Project**를 누르고 GitHub 저장소를 연결합니다.
3. Build Command는 `npm run build`, Output Directory는 `dist`로 설정합니다.
4. Deploy를 누릅니다.

`api/rsvp.js`는 Vercel Serverless Function으로 동작합니다. 현재는 제출 내용을 Vercel 함수 로그에 남기고 성공 응답을 반환합니다. 실제 저장이 필요하면 Supabase, Google Sheets, Notion API, 이메일 발송 서비스 등을 연결하면 됩니다.

## 주요 명령어

```bash
npm run dev      # 로컬 개발 서버
npm run build    # 배포용 정적 파일 생성
npm run preview  # 빌드 결과 미리보기
npm run lint     # Node 문법 검사
```
