export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', ['POST']);
    return response.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, phone, attendance, guests = '0', message = '' } = request.body ?? {};

  if (!name || !phone || !attendance) {
    return response.status(400).json({ message: '이름, 연락처, 참석 여부는 필수입니다.' });
  }

  const rsvp = {
    name: String(name),
    phone: String(phone),
    attendance: String(attendance),
    guests: Number(guests),
    message: String(message),
    createdAt: new Date().toISOString(),
  };

  console.log('Wedding RSVP received', rsvp);

  return response.status(200).json({ ok: true, rsvp });
}
