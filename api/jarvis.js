export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Faqat POST so‘rovi mumkin.' });
  const message = typeof req.body?.message === 'string' ? req.body.message.trim() : '';
  if (!message) return res.status(400).json({ error: 'Xabar yozilmadi.' });
  if (!process.env.OPENAI_API_KEY) return res.status(500).json({ error: 'OPENAI_API_KEY Vercel Environment Variables ichida sozlanmagan.' });
  try {
    const response = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
      body: JSON.stringify({ model: 'gpt-5.4-mini', instructions: 'Sen Jarvis ismli, samimiy va aqlli shaxsiy yordamchisan. Asosan o‘zbek tilida, qisqa va foydali javob ber. Agar foydalanuvchi boshqa tilda gapirsa, uning tilida javob ber.', input: message })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error?.message || 'AI javob bera olmadi.');
    const reply = data.output_text || 'Kechirasiz, javob yarata olmadim.';
    return res.status(200).json({ reply });
  } catch (error) { return res.status(500).json({ error: error.message || 'Server xatosi.' }); }
}
