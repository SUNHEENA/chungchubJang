import './styles.css';
import heroPhoto from './assets/hero/main.webp';
import weddingMusic from './assets/moonlight-invitation.mp3';

const galleryModules = import.meta.glob('./assets/gallery/*.webp', {
  eager: true,
  import: 'default'
});

const couple = {
  groom: '나선희',
  bride: '이지수',
  groomParents: '나창규 · 김옥례의 장남',
  brideParents: '이기원 · 박찬숙의 차녀'
};

const wedding = {
  date: 'October 25, 2026',
  weekday: 'Sunday',
  time: '2:00 PM',
  venue: '홀리데이인 광주',
  hall: '3층 로즈홀',
  address: '61955 광주 서구 상무누리로 55',
  phone: '062-610-7000',
  detailUrl: 'https://www.higwangju.com/index.php?cate=001002',
  naverUrl: 'https://naver.me/xRhEBct3',
  kakaoUrl: 'https://place.map.kakao.com/19925119'
};

const accounts = {
  groom: [
    { bank: '국민', holder: '나선희', number: '740502-00-064797' },
    { bank: '농협', holder: '나창규', number: '356-1426-5409-93' },
    { bank: '농협', holder: '김옥례', number: '616-02-265406' }
  ],
  bride: [
    { bank: '신한', holder: '이지수', number: '110-509-767604' },
    { bank: '농협', holder: '박찬숙', number: '671-02-230991' }
  ]
};

const galleryItems = Object.entries(galleryModules)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB, undefined, { numeric: true }))
  .map(([path, src], index) => ({
    src,
    label: `Wedding Moment ${index + 1}`,
    filename: path.split('/').pop()
  }));
const mapQuery = encodeURIComponent('홀리데이 인 광주 광주광역시 서구 치평동 상무누리로 55');

document.querySelector('#app').innerHTML = `
  <main class="invitation">
    <button class="music-toggle" type="button" data-music-toggle aria-label="배경음악 재생">♪</button>
    <audio data-wedding-music src="${weddingMusic}" preload="metadata" loop playsinline></audio>

    <section class="cover" aria-label="모바일 청첩장 커버">
      <img class="cover__image" src="${heroPhoto}" alt="눈 내리는 풍경 속 신랑 신부 일러스트" />
      <div class="cover__veil"></div>
      <div class="cover__text">
        <div
          style="display:inline-flex;align-items:center;gap:12px;padding:16px 22px;border:1px solid rgba(255,255,255,.5);border-radius:20px;background:rgba(255,255,255,.22);backdrop-filter:blur(16px);box-shadow:0 10px 30px rgba(74,63,56,.08);"
        >
          <span
            style="color:#2b2521;font-family:'Noto Serif KR',serif;font-size:clamp(34px,8vw,44px);font-weight:400;line-height:1.05;white-space:nowrap;"
          >
            ${couple.groom}
          </span>
          <em style="color:#b8aaa0;font-family:'Cormorant Garamond',serif;font-size:clamp(30px,7vw,38px);font-style:italic;line-height:1;">
            &
          </em>
          <span
            style="color:#2b2521;font-family:'Noto Serif KR',serif;font-size:clamp(34px,8vw,44px);font-weight:400;line-height:1.05;white-space:nowrap;"
          >
            ${couple.bride}
          </span>
        </div>
      </div>
    </section>

    <section class="section greeting reveal">
      <p class="section-kicker">소중한 분들을 초대합니다</p>
      <p>
        서로의 계절이 되어준 두 사람이<br />
        이제 같은 길 위에서<br />
        새로운 하루를 시작합니다.<br />
        소중한 걸음으로 함께 축복해 주세요.
      </p>
    </section>

    <section class="section couple reveal" aria-label="신랑 신부 소개">
      <div>
        <p class="role">Groom</p>
        <strong>${couple.groom}</strong>
        <span>${couple.groomParents}</span>
      </div>
      <i aria-hidden="true"></i>
      <div>
        <p class="role">Bride</p>
        <strong>${couple.bride}</strong>
        <span>${couple.brideParents}</span>
      </div>
    </section>

    <section class="section ceremony reveal" aria-label="예식 정보">
      <p>${wedding.date}</p>
      <p>${wedding.weekday}</p>
      <p>${wedding.time}</p>
      <strong>${wedding.venue}</strong>
      <span class="hall-name">${wedding.hall}</span>
    </section>

    <section class="section calendar reveal" aria-label="예식 달력">
      <div class="section-heading">
        <span>Calendar</span>
        <h2>October 2026</h2>
      </div>
      <div class="calendar-grid calendar-grid--week">
        ${['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day) => `<span>${day}</span>`).join('')}
      </div>
      <div class="calendar-grid">
        ${Array.from({ length: 35 }, (_, index) => {
          const day = index - 3;
          if (day < 1 || day > 31) {
            return '<span class="calendar-day is-empty"></span>';
          }

          return `<span class="calendar-day${day === 25 ? ' is-wedding' : ''}">${day}</span>`;
        }).join('')}
      </div>
      <p class="countdown" data-countdown></p>
    </section>

    <section id="gallery" class="section gallery reveal" aria-label="웨딩 갤러리">
      <div class="section-heading">
        <span>Gallery</span>
        <h2>Our Moments</h2>
      </div>
      <p class="gallery-note">좌우로 넘기며 두 사람의 순간을 만나보세요.</p>
      <div class="gallery-slider" data-gallery-slider aria-label="웨딩 사진 슬라이드">
        ${galleryItems.map((item, index) => `
          <figure class="gallery-slide" data-gallery-slide="${index}">
            <img src="${item.src}" alt="${item.label}" loading="lazy" decoding="async" />
          </figure>
        `).join('')}
      </div>
      <div class="gallery-navigator" aria-label="갤러리 사진 이동">
        <button class="gallery-navigator__button" type="button" data-gallery-prev aria-label="이전 사진">‹</button>
        <span class="gallery-navigator__count" data-gallery-count aria-live="polite">1 / ${galleryItems.length}</span>
        <div class="gallery-navigator__progress" aria-hidden="true"><i data-gallery-progress></i></div>
        <button class="gallery-navigator__button" type="button" data-gallery-next aria-label="다음 사진">›</button>
      </div>
    </section>

    <section class="section location reveal" aria-label="오시는 길">
      <div class="section-heading">
        <span>Location</span>
        <h2>오시는 길</h2>
      </div>
      <div class="map">
        <iframe
          title="홀리데이인 광주 지도"
          src="https://www.google.com/maps?q=${mapQuery}&output=embed"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div class="info-list">
        <section>
          <span class="line-icon" aria-hidden="true"></span>
          <div>
            <h3>장소</h3>
            <p>${wedding.venue} ${wedding.hall}</p>
          </div>
        </section>
        <section>
          <span class="line-icon" aria-hidden="true"></span>
          <div>
            <h3>주소</h3>
            <p>${wedding.address}</p>
            <button class="text-button" type="button" data-copy-address>주소 복사</button>
          </div>
        </section>
        <section>
          <span class="line-icon line-icon--car" aria-hidden="true"></span>
          <div>
            <h3>주차 안내</h3>
            <div class="route-detail">
              <p>홀리데이인 호텔 지상·지하 주차장</p>
              <p>제2주차장 및 김대중컨벤션센터 제1주차장 이용 가능</p>
            </div>
          </div>
        </section>
        <section>
          <span class="line-icon line-icon--train" aria-hidden="true"></span>
          <div>
            <h3>대중교통</h3>
            <div class="route-detail">
              <p><strong>김대중컨벤션센터(마륵)역 하차</strong><span>도보 5분 거리</span></p>
              <p>송정19, 운림50, 첨단20, 상무62, 대촌69, 송암73, 대촌270, 나주160</p>
              <p><strong>5.18 자유공원 하차</strong><span>도보 2~5분 거리</span></p>
              <p>좌석02, 순환01, 상무63, 상무64, 518</p>
              <p><strong>김대중컨벤션센터 하차</strong><span>도보 2~3분 거리</span></p>
              <p>일곡38, 상무64</p>
              <p class="route-note">버스 노선은 변경될 수 있으니 출발 전 확인 부탁드립니다.</p>
            </div>
          </div>
        </section>
        <section>
          <span class="line-icon line-icon--rail" aria-hidden="true"></span>
          <div>
            <h3>지하철 이용시</h3>
            <div class="route-detail">
              <p><strong>김대중컨벤션센터(마륵)역 하차</strong><span>4번 출구에서 도보 5분 거리</span></p>
              <p>광주송정역·광주공항역에서 지하철 1호선 이용</p>
              <p>광주 터미널(유스퀘어)에서는 택시 또는 버스 이용을 추천드립니다.</p>
            </div>
          </div>
        </section>
      </div>
      <div class="map-actions">
        <a href="tel:${wedding.phone}">전화</a>
        <a href="${wedding.detailUrl}" target="_blank" rel="noreferrer">상세 안내</a>
        <a href="${wedding.naverUrl}" target="_blank" rel="noreferrer">네이버 지도</a>
        <a href="${wedding.kakaoUrl}" target="_blank" rel="noreferrer">카카오 지도</a>
      </div>
      <small class="status" data-location-status aria-live="polite"></small>
    </section>

    <section class="section account-section reveal" aria-label="계좌번호">
      <div class="section-heading">
        <span>Account</span>
        <h2>마음 전하실 곳</h2>
      </div>
      ${[
        ['groom', '신랑측', accounts.groom],
        ['bride', '신부측', accounts.bride]
      ].map(([side, title, list]) => `
        <details class="account-accordion">
          <summary>${title}<span>⌄</span></summary>
          ${list.map((account, index) => `
            <div class="account-row">
              <dl>
                <div><dt>은행</dt><dd>${account.bank}</dd></div>
                <div><dt>예금주</dt><dd>${account.holder}</dd></div>
                <div>
                  <dt>계좌번호</dt>
                  <dd class="account-number">
                    <span>${account.number}</span>
                    <button class="copy-icon" type="button" data-copy-account="${side}-${index}" aria-label="계좌번호 복사">⎘</button>Copy
                  </dd>
                </div>
              </dl>
            </div>
          `).join('')}
        </details>
      `).join('')}
      <small class="status" data-account-status aria-live="polite"></small>
      <div class="copy-toast" data-copy-toast aria-live="polite" aria-hidden="true">
        <span data-copy-toast-title></span>
        <strong data-copy-toast-subtitle></strong>
        <p data-copy-toast-value></p>
      </div>
    </section>

    <footer class="site-credit reveal">
      <p>made by sun</p>
      <a href="mailto:skould@naver.com?subject=Wedding%20Invitation%20Bug%20Report" aria-label="버그 리포팅 메일 보내기">
        <span>🐞 버그 리포팅</span>
        <small>skould@naver.com</small>
      </a>
    </footer>
  </main>

`;

const weddingDate = new Date('2026-10-25T14:00:00+09:00');
const countdown = document.querySelector('[data-countdown]');

const updateCountdown = () => {
  const remaining = weddingDate.getTime() - Date.now();

  if (remaining <= 0) {
    countdown.textContent = '오늘은 예식일입니다.';
    return;
  }

  const days = Math.floor(remaining / 86400000);
  const hours = Math.floor((remaining % 86400000) / 3600000);
  const minutes = Math.floor((remaining % 3600000) / 60000);
  countdown.textContent = `예식까지 ${days}일 ${hours}시간 ${minutes}분`;
};

updateCountdown();
setInterval(updateCountdown, 60000);

const musicToggle = document.querySelector('[data-music-toggle]');
const weddingAudio = document.querySelector('[data-wedding-music]');

const setMusicPlaying = () => {
  musicToggle.textContent = 'Ⅱ';
  musicToggle.setAttribute('aria-label', '배경음악 정지');
};

const stopMusic = () => {
  weddingAudio.pause();
  musicToggle.textContent = '♪';
  musicToggle.setAttribute('aria-label', '배경음악 재생');
};

const playMusic = async () => {
  weddingAudio.volume = 0.32;
  await weddingAudio.play();
  setMusicPlaying();
};

musicToggle.addEventListener('click', async () => {
  if (!weddingAudio.paused) {
    stopMusic();
    return;
  }

  try {
    await playMusic();
  } catch {
    stopMusic();
  }
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.18 });

document.querySelectorAll('.reveal').forEach((section) => revealObserver.observe(section));

const copyText = async (value, statusElement, successMessage) => {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(value);
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = value;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      textarea.remove();
    }

    if (statusElement) {
      statusElement.textContent = successMessage;
    }

    return true;
  } catch {
    if (statusElement) {
      statusElement.textContent = '복사할 수 없어 직접 선택해 주세요.';
    }

    return false;
  }
};

document.querySelector('[data-copy-address]').addEventListener('click', () => {
  copyText(wedding.address, document.querySelector('[data-location-status]'), '').then((didCopy) => {
    if (didCopy) {
      document.querySelector('[data-location-status]').textContent = '';
      showCopyToast({
        title: '주소가 복사되었습니다',
        subtitle: `${wedding.venue} ${wedding.hall}`,
        value: wedding.address
      });
    }
  });
});

const copyToast = document.querySelector('[data-copy-toast]');
const copyToastTitle = document.querySelector('[data-copy-toast-title]');
const copyToastSubtitle = document.querySelector('[data-copy-toast-subtitle]');
const copyToastValue = document.querySelector('[data-copy-toast-value]');
let copyToastTimer;

const showCopyToast = ({ title, subtitle, value }) => {
  copyToast.hidden = false;
  copyToast.setAttribute('aria-hidden', 'false');
  copyToastTitle.textContent = title;
  copyToastSubtitle.textContent = subtitle;
  copyToastValue.textContent = value;

  window.clearTimeout(copyToastTimer);
  copyToast.classList.add('is-visible');
  copyToastTimer = window.setTimeout(() => {
    copyToast.classList.remove('is-visible');
    copyToast.setAttribute('aria-hidden', 'true');
  }, 2600);
};

document.querySelectorAll('[data-copy-account]').forEach((button) => {
  button.addEventListener('click', async () => {
    const [side, index] = button.dataset.copyAccount.split('-');
    const account = accounts[side][Number(index)];
    const didCopy = await copyText(account.number.replace(/\D/g, ''), document.querySelector('[data-account-status]'), '');

    if (didCopy) {
      document.querySelector('[data-account-status]').textContent = '';
      showCopyToast({
        title: '계좌번호가 복사되었습니다',
        subtitle: account.holder,
        value: account.number
      });
    }
  });
});

const videoPlaceholder = document.querySelector('[data-video-placeholder]');

if (videoPlaceholder) {
  videoPlaceholder.addEventListener('click', () => {
    document.querySelector('[data-video-status]').textContent = '영상 파일을 주시면 이 영역에 바로 연결하겠습니다.';
  });
}

const gallerySlider = document.querySelector('[data-gallery-slider]');
const gallerySlides = Array.from(document.querySelectorAll('[data-gallery-slide]'));
const galleryCount = document.querySelector('[data-gallery-count]');
const galleryProgress = document.querySelector('[data-gallery-progress]');
const galleryPrevious = document.querySelector('[data-gallery-prev]');
const galleryNext = document.querySelector('[data-gallery-next]');
let activeGalleryIndex = 0;
let galleryScrollFrame;

const updateGalleryNavigator = (index) => {
  activeGalleryIndex = Math.max(0, Math.min(index, gallerySlides.length - 1));
  galleryCount.textContent = `${activeGalleryIndex + 1} / ${gallerySlides.length}`;
  galleryProgress.style.transform = `scaleX(${(activeGalleryIndex + 1) / gallerySlides.length})`;
};

const moveGallery = (index) => {
  const targetIndex = (index + gallerySlides.length) % gallerySlides.length;
  gallerySlides[targetIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
};

if (gallerySlides.length) {
  updateGalleryNavigator(0);
  let galleryTouchStartX = 0;

  gallerySlider.addEventListener('scroll', () => {
    window.cancelAnimationFrame(galleryScrollFrame);
    galleryScrollFrame = window.requestAnimationFrame(() => {
      const nearestIndex = Math.round(gallerySlider.scrollLeft / gallerySlider.clientWidth);
      updateGalleryNavigator(nearestIndex);
    });
  }, { passive: true });

  galleryPrevious.addEventListener('click', () => moveGallery(activeGalleryIndex - 1));
  galleryNext.addEventListener('click', () => moveGallery(activeGalleryIndex + 1));

  gallerySlider.addEventListener('touchstart', (event) => {
    galleryTouchStartX = event.changedTouches[0].clientX;
  }, { passive: true });

  gallerySlider.addEventListener('touchend', (event) => {
    const distance = galleryTouchStartX - event.changedTouches[0].clientX;

    if (Math.abs(distance) < 42) {
      return;
    }

    if (distance > 0 && activeGalleryIndex === gallerySlides.length - 1) {
      moveGallery(0);
    }

    if (distance < 0 && activeGalleryIndex === 0) {
      moveGallery(gallerySlides.length - 1);
    }
  }, { passive: true });
}
