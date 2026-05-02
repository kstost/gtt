# 💧 GTT 자동 계산기

수액 가트(gtt)를 화면 탭으로 측정해 gtt/min과 cc/hr을 자동 계산하는 모바일 친화형 PWA 앱입니다.

사용방법 영상: [https://youtu.be/5xy_fA-HPuE](https://youtu.be/5xy_fA-HPuE)

![image.jpg](https://gtt.cokac.com/image.jpg)

---

## 📱 주요 기능

* 방울이 떨어질 때마다 화면을 탭하여 실시간 GTT 계산
* 최근 방울 간격을 기반으로 gtt/min 자동 산출
* 20 gtt/mL 기준 cc/hr 자동 환산
* 방울 수, 경과 시간, 방울 간격 기록 표시
* 1~40 gtt/min 환산표 제공
* 현재 측정값에 가까운 환산표 행 자동 강조
* 모바일 홈 화면 추가가 가능한 PWA 지원
* Service Worker를 통한 오프라인 사용 지원

---

## ▶️ 사용 방법

1. 앱을 실행합니다.
2. 수액 방울이 떨어질 때마다 중앙 화면을 한 번씩 탭합니다.
3. 두 번째 탭부터 방울 간격이 기록됩니다.
4. 여러 번 탭하면 최근 간격을 기준으로 gtt/min이 계산됩니다.
5. 화면 중앙에서 현재 gtt/min과 cc/hr 값을 확인합니다.
6. "환산표" 버튼을 누르면 GTT 환산표를 볼 수 있습니다.
7. 다시 측정하려면 "초기화" 버튼을 누릅니다.

---

## 🧮 계산 기준

본 앱은 한국에서 흔히 사용하는 매크로 수액 세트 기준인 20 gtt/mL를 사용합니다.

cc/hr 계산식:
cc/hr = gtt/min × 60 ÷ 20

---

## ⌨️ 키보드 사용 (PC 환경)

* 스페이스바(Space)를 눌러 탭 입력을 대신할 수 있습니다.

---

## 📦 PWA 설치 방법

### iPhone / iPad

1. Safari에서 앱 주소 접속
2. 공유 버튼 클릭
3. "홈 화면에 추가" 선택

### Android

1. Chrome에서 앱 접속
2. 메뉴 버튼 클릭
3. "홈 화면에 추가" 또는 "앱 설치" 선택

---

## 🌐 배포 주소

[https://gtt.cokac.com/](https://gtt.cokac.com/)

---

## 📁 프로젝트 구조

루트 디렉토리에 다음 파일들이 필요합니다:

* index.html
* manifest.json
* sw.js
* favicon.ico
* icon-32.png
* icon-152.png
* icon-167.png
* icon-180.png
* icon-192.png
* icon-512.png

---

## ⚠️ 안내 및 주의사항

본 앱은 GTT를 편리하게 계산해주는 역할을 하는 앱입니다.
의료용으로 실무에서 사용하시는 만큼 프로그램의 검수 과정을 거치신 후 사용하시는 것을 권고드립니다.

또한 소스코드는 아래 GitHub 저장소에 공개되어 있으니 참고하여 사용해주시기 바랍니다.

[https://github.com/kstost/gtt](https://github.com/kstost/gtt)

---

## ❤️ Credits

Nguyen Thi Hoai Thu가 감사함을 담아 우먼피아 여성병원께
