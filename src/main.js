import './styles.css';
import heroPhoto from './assets/main-photo.jpg';

const gallery = [
  heroPhoto,
];

const galleryItems = [
  {
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    label: 'sunny update \uc608\uc815 01'
  },
  {
    src: 'https://images.unsplash.com/photo-1529634597503-139d3726fed5?auto=format&fit=crop&w=1200&q=80',
    label: 'sunny update \uc608\uc815 02'
  },
  {
    src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
    label: 'sunny update \uc608\uc815 03'
  },
  {
    src: 'https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?auto=format&fit=crop&w=1200&q=80',
    label: 'sunny update \uc608\uc815 04'
  },
  {
    src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80',
    label: 'sunny update \uc608\uc815 05'
  }
];

const text = {
  ariaHero: '\ucd08\ub300\uc7a5 \uccab \ud654\uba74',
  heroAlt: '\ub530\ub73b\ud55c \ud587\uc0b4 \uc18d \uc6e8\ub529 \ubd80\ucf00',
  bride: '\uc774\uc9c0\uc218',
  groom: '\ub098\uc120\ud76c',
  intro1: '\uc11c\ub85c\uc758 \uacc4\uc808\uc774 \ub418\uc5b4\uc900 \ub450 \uc0ac\ub78c\uc774 \uc774\uc81c \uac19\uc740 \uae38 \uc704\uc5d0\uc11c \uc0c8\ub85c\uc6b4 \ud558\ub8e8\ub97c \uc2dc\uc791\ud569\ub2c8\ub2e4.',
  intro2: '\uc18c\uc911\ud55c \uac78\uc74c\uc73c\ub85c \ud568\uaed8 \ucd95\ubcf5\ud574 \uc8fc\uc138\uc694.',
  family1: '\ub098\ucc3d\uaddc \u00b7 \uae40\uc625\ub840\uc758 \uc7a5\ub0a8 \uc120\ud76c',
  family2: '\ubc15\ucc2c\uc219\uc758 \ucc28\ub140 \uc9c0\uc218',
  details: '\uc608\uc2dd \uc548\ub0b4',
  dateLabel: '\uc77c\uc2dc',
  dateValue: '2026\ub144 10\uc6d4 25\uc77c \uc77c\uc694\uc77c \uc624\ud6c4 2\uc2dc',
  calendarTitle: 'October 2026',
  calendarCaption: '\uc608\uc2dd\uae4c\uc9c0 \ub0a8\uc740 \uc2dc\uac04',
  placeLabel: '\uc7a5\uc18c',
  placeValue: '\ud640\ub9ac\ub370\uc774\uc778 \uad11\uc8fc',
  addressLabel: '\uc8fc\uc18c',
  addressValue: '61955 \uad11\uc8fc \uc11c\uad6c \uc0c1\ubb34\ub204\ub9ac\ub85c 55',
  addressCopy: '\uc8fc\uc18c \ubcf5\uc0ac',
  addressCopied: '\uc8fc\uc18c\uac00 \ubcf5\uc0ac\ub418\uc5c8\uc2b5\ub2c8\ub2e4.',
  call: '\uc804\ud654\ud558\uae30',
  detail: '\uc0c1\uc138 \uc548\ub0b4',
  naver: '\ub124\uc774\ubc84 \uc9c0\ub3c4',
  kakao: '\uce74\uce74\uc624 \uc9c0\ub3c4',
  transitTitle: '\uc548\ub0b4',
  subwayTitle: '\uc9c0\ud558\ucca0',
  busTitle: '\ubc84\uc2a4',
  trainTitle: '\uae30\ucc28',
  taxiTitle: '\ud0dd\uc2dc',
  galleryLabel: '\uc0ac\uc9c4',
  galleryAlt: '\uc6e8\ub529 \ubd84\uc704\uae30 \uc0ac\uc9c4',
  giftTitle: '\ub9c8\uc74c \uc804\ud558\uc2e4 \uacf3',
  copy: '\uacc4\uc88c \ubcf5\uc0ac',
  copied: '\ubcf5\uc0ac\ub418\uc5c8\uc2b5\ub2c8\ub2e4.',
  copyFailed: '\ubcf5\uc0ac\ud560 \uc218 \uc5c6\uc5b4 \uacc4\uc88c\ub97c \uc9c1\uc811 \uc120\ud0dd\ud574 \uc8fc\uc138\uc694.'
};

const accounts = [
  {
    bank: '\uad6d\ubbfc',
    number: '740502-66-064797',
    holder: '\ub098\uc120\ud76c'
  },
  {
    bank: '\uc2e0\ud55c',
    number: '110-509-767604',
    holder: '\uc774\uc9c0\uc218'
  }
];

const mapQuery = encodeURIComponent('\ud640\ub9ac\ub370\uc774 \uc778 \uad11\uc8fc \uad11\uc8fc\uad11\uc5ed\uc2dc \uc11c\uad6c \uce58\ud3c9\ub3d9 \uc0c1\ubb34\ub204\ub9ac\ub85c 55');

document.querySelector('#app').innerHTML = `
  <main class="invite">
    <button class="music-toggle" type="button" data-music-toggle aria-label="\ubc30\uacbd\uc74c\uc545 \uc7ac\uc0dd">\u25b6</button>
    <section class="hero" aria-label="${text.ariaHero}">
      <img class="hero__image" src="${gallery[0]}" alt="${text.heroAlt}" />
      <div class="hero__shade"></div>
      <div class="hero__copy">
        <p class="eyebrow">Wedding Invitation</p>
        <h1>${text.groom}<br />${text.bride}</h1>
        <p class="date">2026. 10. 25 SUN 14:00</p>
      </div>
    </section>

    <section class="calendar section" aria-label="${text.dateLabel}">
      <div class="calendar-card">
        <div class="calendar-card__header">
          <span>${text.calendarTitle}</span>
          <strong>10.25</strong>
        </div>
        <div class="calendar-grid calendar-grid--weekdays">
          ${['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day) => `<span>${day}</span>`).join('')}
        </div>
        <div class="calendar-grid">
          ${Array.from({ length: 35 }, (_, index) => {
            const day = index - 3;
            if (day < 1 || day > 31) {
              return '<span class="calendar-day is-muted"></span>';
            }

            return `<span class="calendar-day${day === 25 ? ' is-wedding-day' : ''}">${day}</span>`;
          }).join('')}
        </div>
        <p class="calendar-time">${text.dateValue}</p>
        <p class="countdown" data-countdown>${text.calendarCaption}</p>
      </div>
    </section>

    <section class="intro section">
      <p>${text.intro1}</p>
      <p>${text.intro2}</p>
      <div class="names">
        <span><strong>\ud83e\udd35 ${text.family1}</strong></span>
        <span><strong>\ud83d\udc70 ${text.family2}</strong></span>
      </div>
    </section>

    <section class="details section">
      <h2>${text.details}</h2>
      <dl>
        <div>
          <dt>${text.dateLabel}</dt>
          <dd>${text.dateValue}</dd>
        </div>
        <div>
          <dt>${text.placeLabel}</dt>
          <dd>${text.placeValue}</dd>
        </div>
        <div>
          <dt>${text.addressLabel}</dt>
          <dd>
            <span>${text.addressValue}</span>
            <button class="copy-icon" type="button" data-copy-address aria-label="${text.addressCopy}" title="${text.addressCopy}">\u2398</button>
          </dd>
        </div>
      </dl>
      <div class="map-preview">
        <iframe
          title="\ud640\ub9ac\ub370\uc774 \uc778 \uad11\uc8fc \uc9c0\ub3c4"
          src="https://www.google.com/maps?q=${mapQuery}&output=embed"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div class="actions">
        <a href="tel:062-610-7000"><span aria-hidden="true">\u260e</span>${text.call}</a>
        <a href="https://www.higwangju.com/index.php?cate=001002" target="_blank" rel="noreferrer"><span aria-hidden="true">\u2139</span>${text.detail}</a>
        <a href="https://naver.me/xRhEBct3" target="_blank" rel="noreferrer"><span aria-hidden="true">N</span>${text.naver}</a>
        <a href="https://place.map.kakao.com/19925119" target="_blank" rel="noreferrer"><span aria-hidden="true">K</span>${text.kakao}</a>
      </div>
      <div class="transit">
        <h3>${text.transitTitle}</h3>
        <section>
          <h4>${text.subwayTitle}</h4>
          <p>1\ud638\uc120 \uae40\ub300\uc911\ucee8\ubca4\uc158\uc13c\ud130(\ub9c8\ub975)\uc5ed 4\ubc88 \ucd9c\uad6c\uc5d0\uc11c \ub3c4\ubcf4\ub85c 8\ubd84</p>
        </section>
        <section>
          <h4>${text.busTitle}</h4>
          <p>5.18\uacf5\uc6d0\u00b7\uae40\ub300\uc911\ucee8\ubca4\uc158\uc13c\ud130\uc5ed\u00b7\ubcf4\ud6c8\ud68c\uad00 \uc815\ub958\uc7a5 \ub3c4\ubcf4\ub85c 4\ubd84</p>
          <p>\uc21c\ud65801, \uc88c\uc11d02, \uc77c\uace1388, \uc0c1\ubb3463, \uc0c1\ubb3464, 518</p>
        </section>
        <section>
          <h4>${text.trainTitle}</h4>
          <p>\uad11\uc8fc\uc1a1\uc815\uc5ed(KTX\u00b7SRT)</p>
          <p>${text.subwayTitle}: \uad11\uc8fc\uc1a1\uc815\uc5ed\uc5d0\uc11c 1\ud638\uc120(\uc18c\ud0dc\uc5ed \ubc29\uba74) \uc2b9\ucc28 \u2192 \uae40\ub300\uc911\ucee8\ubca4\uc158\uc13c\ud130(\ub9c8\ub975)\uc5ed \ud558\ucc28, 20\ubd84 \uc18c\uc694</p>
          <p>${text.busTitle}: \uad11\uc8fc\uc1a1\uc815\uc5ed \uc815\ub958\uc7a5\uc5d0\uc11c \uc88c\uc11d02 \uc2b9\ucc28 \u2192 5.18 \uc790\uc720\uacf5\uc6d0 \ud558\ucc28, 25\ubd84 \uc18c\uc694</p>
          <p>${text.taxiTitle}: 20\ubd84 \uc18c\uc694</p>
        </section>
      </div>
      <small class="details__status" aria-live="polite"></small>
    </section>

    <section class="gallery section" aria-label="${text.galleryLabel}">
      <h2>${text.galleryLabel}</h2>
      <div class="gallery__thumbs" aria-label="\uc0ac\uc9c4 \uc378\ub124\uc77c">
        ${galleryItems.map((item, index) => `
          <button class="gallery__thumb${index === 0 ? ' is-active' : ''}" type="button" data-gallery-index="${index}" aria-label="${text.galleryAlt} ${index + 1}">
            <img src="${item.src}" alt="" />
            <span>${index + 1}</span>
          </button>
        `).join('')}
      </div>
      <div class="gallery__viewer">
        <button class="gallery__nav gallery__nav--prev" type="button" data-gallery-prev aria-label="\uc774\uc804 \uc0ac\uc9c4">\u2039</button>
        <img class="gallery__main" src="${galleryItems[0].src}" alt="${text.galleryAlt} 1" />
        <div class="gallery__badge">${galleryItems[0].label}</div>
        <button class="gallery__nav gallery__nav--next" type="button" data-gallery-next aria-label="\ub2e4\uc74c \uc0ac\uc9c4">\u203a</button>
      </div>
    </section>

    <section class="message section">
      <h2>${text.giftTitle}</h2>
      <div class="accounts">
        ${accounts.map((account, index) => {
          const accountText = `${account.bank} ${account.number} ${account.holder}`;
          return `
            <div class="account">
              <p>${accountText}</p>
              <button class="copy-icon" type="button" data-account-index="${index}" aria-label="${text.copy}" title="${text.copy}">\u2398</button>
            </div>
          `;
        }).join('')}
      </div>
      <small id="copyStatus" aria-live="polite"></small>
    </section>
  </main>
`;

document.querySelectorAll('[data-account-index]').forEach((button) => {
  button.addEventListener('click', async () => {
    const status = document.querySelector('#copyStatus');
    const account = accounts[Number(button.dataset.accountIndex)];
    const accountText = `${account.bank} ${account.number} ${account.holder}`;

    try {
      await navigator.clipboard.writeText(accountText);
      status.textContent = text.copied;
    } catch {
      status.textContent = text.copyFailed;
    }
  });
});

const weddingDate = new Date('2026-10-25T14:00:00+09:00');
const countdown = document.querySelector('[data-countdown]');
const updateCountdown = () => {
  const remaining = weddingDate.getTime() - Date.now();

  if (remaining <= 0) {
    countdown.textContent = '\uc624\ub298\uc740 \uc608\uc2dd\uc77c\uc785\ub2c8\ub2e4.';
    return;
  }

  const days = Math.floor(remaining / 86400000);
  const hours = Math.floor((remaining % 86400000) / 3600000);
  const minutes = Math.floor((remaining % 3600000) / 60000);
  countdown.textContent = `${text.calendarCaption} ${days}\uc77c ${hours}\uc2dc\uac04 ${minutes}\ubd84`;
};

updateCountdown();
setInterval(updateCountdown, 60000);

let audioContext;
let musicNodes;
const musicToggle = document.querySelector('[data-music-toggle]');

const startMusic = () => {
  audioContext = audioContext || new AudioContext();
  const masterGain = audioContext.createGain();
  const filter = audioContext.createBiquadFilter();
  const oscillators = [196, 246.94, 329.63].map((frequency, index) => {
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();

    oscillator.type = index === 1 ? 'triangle' : 'sine';
    oscillator.frequency.value = frequency;
    gain.gain.value = index === 0 ? 0.035 : 0.018;
    oscillator.connect(gain).connect(filter);
    oscillator.start();
    return oscillator;
  });

  filter.type = 'lowpass';
  filter.frequency.value = 780;
  masterGain.gain.value = 0.42;
  filter.connect(masterGain).connect(audioContext.destination);
  musicNodes = { masterGain, oscillators };
  musicToggle.textContent = '\u275a\u275a';
  musicToggle.setAttribute('aria-label', '\ubc30\uacbd\uc74c\uc545 \uc815\uc9c0');
};

const stopMusic = () => {
  if (!musicNodes) {
    return;
  }

  musicNodes.masterGain.gain.setTargetAtTime(0, audioContext.currentTime, 0.08);
  window.setTimeout(() => {
    musicNodes.oscillators.forEach((oscillator) => oscillator.stop());
    musicNodes = null;
  }, 220);
  musicToggle.textContent = '\u25b6';
  musicToggle.setAttribute('aria-label', '\ubc30\uacbd\uc74c\uc545 \uc7ac\uc0dd');
};

musicToggle.addEventListener('click', async () => {
  if (musicNodes) {
    stopMusic();
    return;
  }

  startMusic();
});

document.querySelector('[data-copy-address]').addEventListener('click', async () => {
  const status = document.querySelector('.details__status');

  try {
    await navigator.clipboard.writeText(`${text.placeValue} ${text.addressValue}`);
    status.textContent = text.addressCopied;
  } catch {
    status.textContent = text.copyFailed;
  }
});

let activeGalleryIndex = 0;
const galleryMain = document.querySelector('.gallery__main');
const galleryBadge = document.querySelector('.gallery__badge');
const galleryThumbs = [...document.querySelectorAll('[data-gallery-index]')];

const setGalleryImage = (index) => {
  activeGalleryIndex = (index + galleryItems.length) % galleryItems.length;
  const item = galleryItems[activeGalleryIndex];

  galleryMain.src = item.src;
  galleryMain.alt = `${text.galleryAlt} ${activeGalleryIndex + 1}`;
  galleryBadge.textContent = item.label;
  galleryThumbs.forEach((thumb, thumbIndex) => {
    thumb.classList.toggle('is-active', thumbIndex === activeGalleryIndex);
  });
};

galleryThumbs.forEach((thumb) => {
  thumb.addEventListener('click', () => {
    setGalleryImage(Number(thumb.dataset.galleryIndex));
  });
});

document.querySelector('[data-gallery-prev]').addEventListener('click', () => {
  setGalleryImage(activeGalleryIndex - 1);
});

document.querySelector('[data-gallery-next]').addEventListener('click', () => {
  setGalleryImage(activeGalleryIndex + 1);
});
