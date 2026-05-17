import './styles.css';

const gallery = [
  'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1529634597503-139d3726fed5?auto=format&fit=crop&w=1200&q=80'
];

const text = {
  ariaHero: '\ucd08\ub300\uc7a5 \uccab \ud654\uba74',
  heroAlt: '\ub530\ub73b\ud55c \ud587\uc0b4 \uc18d \uc6e8\ub529 \ubd80\ucf00',
  bride: '\uc815\ucd08\ud76c',
  groom: '\uc7a5\ud604\uc6b0',
  intro1: '\uc11c\ub85c\uc758 \uacc4\uc808\uc774 \ub418\uc5b4\uc900 \ub450 \uc0ac\ub78c\uc774 \uc774\uc81c \uac19\uc740 \uae38 \uc704\uc5d0\uc11c \uc0c8\ub85c\uc6b4 \ud558\ub8e8\ub97c \uc2dc\uc791\ud569\ub2c8\ub2e4.',
  intro2: '\uc18c\uc911\ud55c \uac78\uc74c\uc73c\ub85c \ud568\uaed8 \ucd95\ubcf5\ud574 \uc8fc\uc138\uc694.',
  family1: '\uc815\ubbfc\uc218 \u00b7 \uae40\ud61c\uc9c4\uc758 \uc7a5\ub140 \ucd08\ud76c',
  family2: '\uc7a5\ud0dc\ud6c8 \u00b7 \ubc15\uc120\uc601\uc758 \uc7a5\ub0a8 \ud604\uc6b0',
  details: '\uc608\uc2dd \uc548\ub0b4',
  dateLabel: '\uc77c\uc2dc',
  dateValue: '2026\ub144 6\uc6d4 20\uc77c \ud1a0\uc694\uc77c \ub0ae 12\uc2dc 30\ubd84',
  placeLabel: '\uc7a5\uc18c',
  placeValue: '\ub77c\uc6c0\uc544\ud2b8\uc13c\ud130 2\uce35 \ub9c8\uc81c\uc2a4\ud2f1 \ubcfc\ub8f8',
  addressLabel: '\uc8fc\uc18c',
  addressValue: '\uc11c\uc6b8 \uac15\ub0a8\uad6c \uc5b8\uc8fc\ub85c 564',
  call: '\uc804\ud654\ud558\uae30',
  map: '\uc9c0\ub3c4\ubcf4\uae30',
  galleryLabel: '\uc0ac\uc9c4',
  galleryAlt: '\uc6e8\ub529 \ubd84\uc704\uae30 \uc0ac\uc9c4',
  giftTitle: '\ub9c8\uc74c \uc804\ud558\uc2e4 \uacf3',
  copy: '\uacc4\uc88c \ubcf5\uc0ac',
  copied: '\ubcf5\uc0ac\ub418\uc5c8\uc2b5\ub2c8\ub2e4.',
  copyFailed: '\ubcf5\uc0ac\ud560 \uc218 \uc5c6\uc5b4 \uacc4\uc88c\ub97c \uc9c1\uc811 \uc120\ud0dd\ud574 \uc8fc\uc138\uc694.'
};

const accountText = '\uc2e0\ud55c 110-000-000000 \uc7a5\ud604\uc6b0';

document.querySelector('#app').innerHTML = `
  <main class="invite">
    <section class="hero" aria-label="${text.ariaHero}">
      <img class="hero__image" src="${gallery[0]}" alt="${text.heroAlt}" />
      <div class="hero__shade"></div>
      <div class="hero__copy">
        <p class="eyebrow">Wedding Invitation</p>
        <h1>${text.bride}<br />${text.groom}</h1>
        <p class="date">2026. 06. 20 SAT 12:30</p>
      </div>
    </section>

    <section class="intro section">
      <p>${text.intro1}</p>
      <p>${text.intro2}</p>
      <div class="names">
        <span>${text.family1}</span>
        <span>${text.family2}</span>
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
          <dd>${text.addressValue}</dd>
        </div>
      </dl>
      <div class="actions">
        <a href="tel:010-0000-0000">${text.call}</a>
        <a href="https://map.naver.com/p/search/%EB%9D%BC%EC%9B%80%EC%95%84%ED%8A%B8%EC%84%BC%ED%84%B0" target="_blank" rel="noreferrer">${text.map}</a>
      </div>
    </section>

    <section class="gallery section" aria-label="${text.galleryLabel}">
      ${gallery.map((src, index) => `<img src="${src}" alt="${text.galleryAlt} ${index + 1}" />`).join('')}
    </section>

    <section class="message section">
      <h2>${text.giftTitle}</h2>
      <p>${accountText}</p>
      <button type="button" id="copyAccount">${text.copy}</button>
      <small id="copyStatus" aria-live="polite"></small>
    </section>
  </main>
`;

document.querySelector('#copyAccount').addEventListener('click', async () => {
  const status = document.querySelector('#copyStatus');

  try {
    await navigator.clipboard.writeText(accountText);
    status.textContent = text.copied;
  } catch {
    status.textContent = text.copyFailed;
  }
});
