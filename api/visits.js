import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();

const todayInKorea = () => new Intl.DateTimeFormat('en-CA', {
  timeZone: 'Asia/Seoul',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit'
}).format(new Date());

const hasCookie = (request, name) => request.headers.cookie
  ?.split(';')
  .some((cookie) => cookie.trim().startsWith(`${name}=`));

export default async function handler(request, response) {
  const date = todayInKorea();
  const key = `wedding:visits:${date}`;
  const cookieName = `wedding_visit_${date.replaceAll('-', '')}`;
  const alreadyCounted = hasCookie(request, cookieName);

  try {
    let count;

    if (alreadyCounted) {
      count = await redis.get(key);
    } else {
      count = await redis.incr(key);

      if (count === 1) {
        await redis.expire(key, 172800);
      }

      response.setHeader(
        'Set-Cookie',
        `${cookieName}=1; Max-Age=86400; Path=/; HttpOnly; SameSite=Lax; Secure`
      );
    }

    response.setHeader('Cache-Control', 'no-store');
    response.status(200).json({ count: Number(count ?? 0) });
  } catch (error) {
    console.error('Daily visit counter failed', error);
    response.status(503).json({ count: null });
  }
}
