# Summary Panduan Instalasi OpenAI pada React JS 18

## 1. Step-by-Step Pemasangan OpenAI di React

### a. Persiapan Proyek React
1. **Buat Proyek React Baru**
    ```bash
    npx create-react-app my-openai-app
    cd my-openai-app
    ```

2. **Instalasi Axios**
    Axios akan digunakan untuk melakukan permintaan HTTP ke OpenAI API.
    ```bash
    npm install axios
    ```

### b. Konfigurasi Proyek

3. **Membuat File Konfigurasi**
    Buat file `.env` di root proyek Anda untuk menyimpan API key secara aman.
    ```plaintext
    REACT_APP_OPENAI_API_KEY=your_openai_api_key
    ```

    Gantilah `your_openai_api_key` dengan API key yang Anda dapatkan dari OpenAI.

### c. Implementasi OpenAI API

4. **Buat Fungsi untuk Mengakses OpenAI API**
    Buat file `openaiService.js` di folder `src` untuk mengelola permintaan ke OpenAI API.
    ```javascript
    import axios from 'axios';

    const openaiApiKey = process.env.REACT_APP_OPENAI_API_KEY;

    const openaiService = axios.create({
      baseURL: 'https://api.openai.com/v1',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${openaiApiKey}`,
      },
    });

    export const getChatResponse = async (prompt) => {
      try {
        const response = await openaiService.post('/completions', {
          model: 'text-davinci-003',
          prompt: prompt,
          max_tokens: 150,
        });
        return response.data.choices[0].text.trim();
      } catch (error) {
        console.error("Error fetching data from OpenAI:", error);
        throw error;
      }
    };
    ```

## 2. API Keys dari OpenAI

### a. Mendapatkan API Key
1. **Daftar ke OpenAI**
    Kunjungi [OpenAI](https://beta.openai.com/signup/) dan daftar untuk mendapatkan akun.
    
2. **Buat API Key**
    Setelah mendaftar, masuk ke dashboard dan navigasi ke bagian API keys. Buat kunci API baru dan salin kunci tersebut ke file `.env` Anda.

## 3. Implementasi Text Chat Sederhana

### a. Buat Komponen Chat

5. **Buat Komponen Chat di React**
    Buat file `Chat.js` di folder `src/components`.

    ```javascript
    import React, { useState } from 'react';
    import { getChatResponse } from '../openaiService';

    const Chat = () => {
      const [input, setInput] = useState('');
      const [messages, setMessages] = useState([]);

      const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { sender: 'user', text: input };
        setMessages([...messages, userMessage]);

        try {
          const botResponse = await getChatResponse(input);
          setMessages([...messages, userMessage, { sender: 'bot', text: botResponse }]);
        } catch (error) {
          console.error("Error:", error);
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
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <button onClick={handleSend}>Send</button>
        </div>
      );
    };

    export default Chat;
    ```

### b. Tambahkan Komponen ke Aplikasi Utama

6. **Modifikasi App.js**
    Import dan gunakan komponen Chat di file `App.js`.

    ```javascript
    import React from 'react';
    import Chat from './components/Chat';

    const App = () => {
      return (
        <div className="App">
          <h1>React OpenAI Chat</h1>
          <Chat />
        </div>
      );
    };

    export default App;
    ```

### c. Jalankan Aplikasi

7. **Jalankan Aplikasi**
    ```bash
    npm start
    ```

    Buka browser dan navigasi ke `http://localhost:3000` untuk melihat aplikasi chat Anda yang terintegrasi dengan OpenAI.
