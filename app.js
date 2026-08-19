const messages = document.querySelector('#messages');
const form = document.querySelector('#chatForm');
const input = document.querySelector('#textInput');
const mic = document.querySelector('#micButton');
const status = document.querySelector('#status');
const subtitle = document.querySelector('#subtitle');

let recognition;
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
if (SpeechRecognition) {
  recognition = new SpeechRecognition();
  recognition.lang = 'uz-UZ'; recognition.interimResults = false; recognition.continuous = false;
  recognition.onstart = () => { document.body.classList.add('listening'); status.innerHTML = '<i></i> Tinglayapman'; subtitle.textContent = 'Gapiring, eshitib turibman...'; };
  recognition.onend = () => { document.body.classList.remove('listening'); status.innerHTML = '<i></i> Tayyor'; subtitle.textContent = 'Mikrofonni bosing va gapiring.'; };
  recognition.onerror = () => addMessage('Mikrofon yoki nutqni aniqlash ishlamadi. Matn yozib yuboring.', 'assistant');
  recognition.onresult = e => send(e.results[0][0].transcript);
} else { mic.disabled = true; subtitle.textContent = 'Brauzeringiz ovozli aniqlashni qo‘llamaydi. Chrome ishlating.'; }
mic.addEventListener('click', () => recognition?.start());
form.addEventListener('submit', e => { e.preventDefault(); send(input.value); });

function addMessage(text, role) {
  const item = document.createElement('article'); item.className = `message ${role}`;
  if (role === 'assistant') item.innerHTML = '<span>J</span>';
  const textNode = document.createElement('p'); textNode.textContent = text; item.append(textNode);
  messages.append(item); messages.scrollTop = messages.scrollHeight; return item;
}
function speak(text) {
  if (!('speechSynthesis' in window)) return;
  speechSynthesis.cancel(); const voice = new SpeechSynthesisUtterance(text); voice.lang = 'uz-UZ'; voice.rate = 1; speechSynthesis.speak(voice);
}
async function send(text) {
  text = text.trim(); if (!text) return; input.value = ''; addMessage(text, 'user');
  const pending = addMessage('O‘ylayapman...', 'assistant');
  try {
    const response = await fetch('/api/jarvis', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({message:text}) });
    const data = await response.json(); if (!response.ok) throw new Error(data.error);
    pending.querySelector('p').textContent = data.reply; speak(data.reply);
  } catch (error) { pending.querySelector('p').textContent = error.message || 'Ulanishda xatolik yuz berdi.'; }
  messages.scrollTop = messages.scrollHeight;
}
