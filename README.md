# Jarvis — ovozli yordamchi

Bu sayt sizning ovozingizni eshitadi, Jarvis AI'dan javob oladi va uni ovoz chiqarib aytadi.

## Ishlatish uchun kerak bo‘ladigan narsalar

1. GitHub akkaunt.
2. Vercel akkaunt (GitHub bilan bepul kirsa bo‘ladi).
3. OpenAI API kaliti. Bu ChatGPT Plus obunasi emas; API ishlatilishiga qarab alohida to‘lov bo‘lishi mumkin.
4. Google Chrome brauzeri. Mikrofon Chrome'da yaxshiroq ishlaydi.

## 1-qadam — ZIP faylni ochish

1. `Jarvis-voice-assistant.zip` faylini yuklab oling.
2. Fayl ustiga o‘ng tugma bosing.
3. **Extract All / Hammasini chiqarish** tugmasini bosing.
4. Chiqqan papkani eslab qoling. Unda `index.html`, `app.js` va `api` papkasi bo‘ladi.

## 2-qadam — GitHub'ga yuklash

1. [github.com](https://github.com) saytiga kiring.
2. O‘ng yuqoridagi **+** tugmasi → **New repository** ni bosing.
3. Nomi sifatida `jarvis-voice-assistant` yozing va **Create repository** ni bosing.
4. Yangi ochilgan sahifada **uploading an existing file** ni tanlang.
5. ZIP ochilgandan keyin chiqqan papkadagi hamma fayl va `api` papkasini shu joyga tashlang.
6. Pastdagi **Commit changes** tugmasini bosing.

## 3-qadam — OpenAI API kalitini olish

1. [platform.openai.com/api-keys](https://platform.openai.com/api-keys) sahifasiga kiring.
2. **Create new secret key** tugmasini bosing.
3. Kalitni nusxalang va xavfsiz joyga saqlang. U odatda `sk-...` bilan boshlanadi.
4. Bu kalitni hech kimga yubormang va GitHub'ga yozmang.

## 4-qadam — Vercelga chiqarish

1. [vercel.com](https://vercel.com) saytiga kiring va GitHub orqali kiring.
2. **Add New → Project** tugmasini bosing.
3. `jarvis-voice-assistant` reposi yonidagi **Import** tugmasini bosing.
4. Sahifadagi **Environment Variables** bo‘limini oching.
5. Birinchi katakka `OPENAI_API_KEY` yozing.
6. Ikkinchi katakka 3-qadamda olgan `sk-...` kalitni qo‘ying.
7. **Deploy** tugmasini bosing va biroz kuting.
8. Vercel bergan sayt havolasini oching.

## 5-qadam — Jarvis bilan gaplashish

1. Saytni Chrome orqali oching.
2. Mikrofon belgisi tugmasini bosing.
3. Chrome mikrofon ruxsatini so‘rasa, **Allow / Ruxsat berish** ni bosing.
4. Masalan: “Bugun reja tuzib ber” deb ayting.

## Muammo bo‘lsa

- **Jarvis javob bermaydi:** Vercel'dagi `OPENAI_API_KEY` nomi to‘g‘ri yozilganini tekshiring.
- **Mikrofon ishlamaydi:** Chrome sozlamalarida saytga mikrofon ruxsati berilganini tekshiring.
- **O‘zbekcha so‘zlar noto‘g‘ri chiqadi:** gapni sal sekinroq ayting; matnni pastdagi maydonga yozib ham yuborish mumkin.

Kalit hech qachon `app.js` yoki `index.html`ga yozilmaydi; u faqat Vercel server qismida ishlatiladi.
"# Jarvis-" 
