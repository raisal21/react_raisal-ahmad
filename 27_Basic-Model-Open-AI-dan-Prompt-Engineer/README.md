# Panduan Penggunaan Basic Model OpenAI dan Prompt Engineering pada React JS 18

Panduan ini menjelaskan model-model yang disediakan oleh OpenAI, konsep prompt engineering, jenis-jenis prompt berdasarkan kegunaannya, setting API OpenAI, serta implementasi prompt awal dalam aplikasi React JS 18.

## 1. Model-model pada OpenAI

OpenAI menyediakan beberapa model yang dapat digunakan untuk berbagai keperluan pemrosesan bahasa alami. Beberapa model utama termasuk:
- **GPT-3**: Generative Pre-trained Transformer 3, yang terdiri dari beberapa versi:
  - `text-davinci-003`: Model paling canggih dengan kemampuan pemahaman dan pembuatan teks yang sangat baik.
  - `text-curie-001`: Model yang lebih cepat dan lebih murah dibandingkan Davinci, tetapi tetap kuat.
  - `text-babbage-001`: Model yang lebih ringan, cocok untuk tugas yang tidak terlalu kompleks.
  - `text-ada-001`: Model paling dasar, sangat cepat dan murah, cocok untuk tugas sederhana.

## 2. Prompt Engineer

Prompt engineering adalah teknik untuk merancang dan mengoptimalkan prompt (input) yang diberikan ke model AI agar menghasilkan output yang diinginkan. Ini melibatkan pemahaman tentang cara model AI memproses dan merespons input, serta eksperimen untuk menemukan formulasi prompt yang paling efektif.

## 3. Jenis-jenis Prompt Engineering Berdasarkan Kegunaan

Prompt engineering dapat dibagi berdasarkan tujuan atau kegunaannya, seperti:
- **Instruksi Langsung**: Memberikan perintah eksplisit kepada model.
  ```plaintext
  Tulis esai tentang pentingnya pendidikan.
  ```
- **Pengisian Blanks**: Menggunakan placeholder yang harus diisi oleh model.
  ```plaintext
  Manusia pertama yang mendarat di bulan adalah _____.
  ```
- **Contoh Pasangan Input-Output**: Memberikan contoh pasangan input-output untuk memberikan konteks.
  ```plaintext
  Q: Apa warna langit pada hari cerah?
  A: Biru.
  Q: Apa warna rumput?
  A: Hijau.
  ```

## 4. Setting API pada OpenAI

Beberapa parameter penting yang dapat dikonfigurasi saat menggunakan OpenAI API:
- **Engine**: Model yang digunakan, misalnya `text-davinci-003`.
- **Max Tokens**: Batasan jumlah token (kata atau bagian dari kata) dalam output.
- **Temperature**: Pengaturan kreativitas model, dengan rentang 0 hingga 1. Nilai lebih tinggi menghasilkan output yang lebih kreatif.
- **Top P**: Menentukan diversifikasi output dengan mengendalikan probabilitas kumulatif. Nilai lebih rendah mengurangi diversifikasi.
- **Frequency Penalty**: Penalti untuk mengurangi pengulangan kata-kata tertentu.
- **Presence Penalty**: Penalti untuk mengurangi pengulangan topik tertentu.

Contoh konfigurasi dalam kode:
```javascript
const response = await openaiService.post('/completions', {
  model: 'text-davinci-003',
  prompt: 'Tulis esai tentang pentingnya pendidikan.',
  max_tokens: 150,
  temperature: 0.7,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
});
```

## 5. Memasang Prompt Awal

### a. Menambahkan Prompt Awal dalam Komponen Chat

1. **Modifikasi Komponen Chat**: Tambahkan prompt awal di komponen `Chat.js`.
    ```javascript
    import React, { useState, useEffect } from 'react';
    import { getChatResponse } from '../openaiService';

    const Chat = () => {
      const [input, setInput] = useState('');
      const [messages, setMessages] = useState([]);

      useEffect(() => {
        const initialPrompt = "Kamu adalah asisten AI yang ramah. Bagaimana saya bisa membantu Anda hari ini?";
        handleSend(initialPrompt, true);
      }, []);

      const handleSend = async (message, isSystemMessage = false) => {
        if (!message.trim()) return;

        const userMessage = { sender: isSystemMessage ? 'system' : 'user', text: message };
        setMessages([...messages, userMessage]);

        if (!isSystemMessage) {
          try {
            const botResponse = await getChatResponse(message);
            setMessages([...messages, userMessage, { sender: 'bot', text: botResponse }]);
          } catch (error) {
            console.error("Error:", error);
          }
        }

        setInput('');
      };

      return (
        <div>
          <div>
            {messages.map((msg, index) => (
              <div key={index} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
                <p><strong>{msg.sender}:</strong> {msg.text}</p>
              </div>
            ))}
          </div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend(input)}
          />
          <button onClick={() => handleSend(input)}>Send</button>
        </div>
      );
    };

    export default Chat;
    ```

2. **Implementasikan Prompt Awal**:
    Ketika komponen `Chat` pertama kali dimuat, prompt awal akan dikirim ke OpenAI API dan responsnya akan ditampilkan di UI.

### b. Jalankan Aplikasi

3. **Jalankan Aplikasi**:
    ```bash
    npm start
    ```

    Buka browser dan navigasi ke `http://localhost:3000` untuk melihat aplikasi chat dengan prompt awal.
