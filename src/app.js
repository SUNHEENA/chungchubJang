import React, { useMemo, useState } from 'https://esm.sh/react@19.2.1';
import { createRoot } from 'https://esm.sh/react-dom@19.2.1/client';
import { html } from 'https://esm.sh/htm@3.1.1/react';
import {
  CalendarDays,
  Camera,
  CheckCircle2,
  Copy,
  Gift,
  Heart,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from 'https://esm.sh/lucide-react@0.468.0';
import { invitation } from './invitationData.js';

function getDday(date) {
  const wedding = new Date(date).getTime();
  const today = new Date().getTime();
  return Math.ceil((wedding - today) / (1000 * 60 * 60 * 24));
}

function copyText(text, label) {
  navigator.clipboard.writeText(text);
  alert(`${label}이(가) 복사되었습니다.`);
}

function App() {
  const dday = useMemo(() => getDday(invitation.date), []);
  const [status, setStatus] = useState('idle');

  async function handleRsvp(event) {
    event.preventDefault();
    setStatus('submitting');

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('RSVP request failed');
      }

      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return html`
    <main>
      <section className="hero section-card">
        <div className="hero-image" role="img" aria-label="웨딩 부케와 신랑 신부 이미지"></div>
        <div className="hero-content">
          <p className="eyebrow">Wedding Invitation</p>
          <h1>
            ${invitation.groom.shortName} <${Heart} size=${24} fill="currentColor" /> ${invitation.bride.shortName}
          </h1>
          <p className="hero-date">${invitation.dateText}</p>
          <p className="hero-place">${invitation.venue.name}</p>
          <div className="dday">${dday >= 0 ? `D-${dday}` : '결혼식이 진행되었습니다'}</div>
        </div>
      </section>

      <section className="section-card greeting">
        <p className="eyebrow">Invitation</p>
        <h2>소중한 분들을 초대합니다</h2>
        <p>${invitation.message}</p>
        <div className="family">
          <p>
            ${invitation.groom.father} · ${invitation.groom.mother}의 아들
            <strong>${invitation.groom.name}</strong>
          </p>
          <p>
            ${invitation.bride.father} · ${invitation.bride.mother}의 딸
            <strong>${invitation.bride.name}</strong>
          </p>
        </div>
      </section>

      <section className="section-card quick-actions">
        <a href=${`tel:${invitation.groom.phone}`}><${Phone} size=${18} /> 신랑에게 전화</a>
        <a href=${`tel:${invitation.bride.phone}`}><${Phone} size=${18} /> 신부에게 전화</a>
        <a href=${`sms:${invitation.groom.phone}`}><${MessageCircle} size=${18} /> 축하 문자</a>
      </section>

      <section className="section-card calendar">
        <div className="section-title">
          <${CalendarDays} />
          <div>
            <p className="eyebrow">Wedding Day</p>
            <h2>예식 일정</h2>
          </div>
        </div>
        <div className="calendar-box">
          <span>10월</span>
          <strong>24</strong>
          <em>토요일 오후 1:30</em>
        </div>
      </section>

      <section className="section-card gallery">
        <div className="section-title">
          <${Camera} />
          <div>
            <p className="eyebrow">Gallery</p>
            <h2>우리의 순간</h2>
          </div>
        </div>
        <div className="gallery-grid">
          ${invitation.gallery.map(
            (image) => html`<img key=${image} src=${image} alt="웨딩 갤러리" loading="lazy" />`,
          )}
        </div>
      </section>

      <section className="section-card location">
        <div className="section-title">
          <${MapPin} />
          <div>
            <p className="eyebrow">Location</p>
            <h2>오시는 길</h2>
          </div>
        </div>
        <div className="map-card">
          <p className="venue-name">${invitation.venue.name}</p>
          <p>${invitation.venue.address}</p>
          <p>${invitation.venue.tel}</p>
        </div>
        <div className="map-buttons">
          <a href=${invitation.venue.naverMap} target="_blank" rel="noreferrer">네이버 지도</a>
          <a href=${invitation.venue.kakaoMap} target="_blank" rel="noreferrer">카카오맵</a>
        </div>
        <ul className="transport">
          <li>지하철: 9호선 선정릉역 4번 출구 도보 7분</li>
          <li>주차: 예식장 지하 주차장 2시간 무료</li>
        </ul>
      </section>

      <section className="section-card account">
        <div className="section-title">
          <${Gift} />
          <div>
            <p className="eyebrow">For your heart</p>
            <h2>마음 전하실 곳</h2>
          </div>
        </div>
        <button type="button" onClick=${() => copyText(invitation.groom.account, '신랑 계좌')}>
          <${Copy} size=${16} /> ${invitation.groom.account}
        </button>
        <button type="button" onClick=${() => copyText(invitation.bride.account, '신부 계좌')}>
          <${Copy} size=${16} /> ${invitation.bride.account}
        </button>
      </section>

      <section className="section-card rsvp">
        <div className="section-title">
          <${Send} />
          <div>
            <p className="eyebrow">RSVP</p>
            <h2>참석 여부 전달</h2>
          </div>
        </div>
        <form onSubmit=${handleRsvp}>
          <label>성함 <input name="name" placeholder="홍길동" required /></label>
          <label>연락처 <input name="phone" placeholder="010-0000-0000" required /></label>
          <label>
            참석 여부
            <select name="attendance" defaultValue="참석" required>
              <option>참석</option>
              <option>불참</option>
              <option>미정</option>
            </select>
          </label>
          <label>동행 인원 <input name="guests" type="number" min="0" defaultValue="0" /></label>
          <label>전하고 싶은 말 <textarea name="message" placeholder="축하 메시지를 남겨주세요." rows="4"></textarea></label>
          <button disabled=${status === 'submitting'} type="submit">
            ${status === 'submitting' ? '전송 중...' : '참석 여부 보내기'}
          </button>
        </form>
        ${status === 'success' &&
        html`<p className="form-message success"><${CheckCircle2} size=${16} /> 소중한 답변이 전달되었습니다.</p>`}
        ${status === 'error' && html`<p className="form-message error">잠시 후 다시 시도해 주세요.</p>`}
      </section>
    </main>
  `;
}

createRoot(document.getElementById('root')).render(html`<${React.StrictMode}><${App} /></${React.StrictMode}>`);
