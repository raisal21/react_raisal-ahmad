## Fundamental React (React 18)

### 1. Komposisi Komponen (Component Composition)

React mendorong penggunaan komponen yang dapat digunakan kembali (reusable components). Konsep ini memungkinkan Anda untuk membangun UI yang kompleks dengan menggabungkan komponen-komponen yang lebih kecil.

```javascript
function Welcome({ name }) {
  return <h1>Halo, {name}!</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Dunia" />
      <Welcome name="React" />
    </div>
  );
}
```

### 2. Siklus Hidup Komponen (React Lifecycle)

React 18 memperkenalkan perubahan signifikan pada siklus hidup komponen, terutama dengan penghapusan beberapa metode lifecycle lama seperti `componentWillMount`, `componentWillReceiveProps`, dan `componentWillUpdate`. Sebagai gantinya, Anda dapat menggunakan Hooks seperti `useEffect` untuk mengelola efek samping dan sinkronisasi dengan DOM.

```javascript
import { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Anda mengklik ${count} kali`;
  }, [count]); // Efek samping hanya berjalan saat `count` berubah

  return (
    <div>
      <p>Anda mengklik {count} kali</p>
      <button onClick={() => setCount(count + 1)}>
        Klik saya
      </button>
    </div>
  );
}
```

### 3. Kondisi dan Daftar (Conditional and List)

React menyediakan cara yang mudah untuk merender elemen secara kondisional atau merender daftar item.

```javascript
function MyList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}
```

### 4. Struktur Direktori (Directory Structure)

Struktur direktori proyek React harus terorganisir dengan baik. Prinsip utamanya adalah komponen yang sering digunakan bersama harus ditempatkan berdekatan. Anda dapat mengelompokkan komponen berdasarkan fitur atau jenisnya.

```
src/
├── components/
│   ├── Button.jsx
│   ├── Input.jsx
│   └── ...
├── pages/
│   ├── HomePage.jsx
│   ├── AboutPage.jsx
│   └── ...
├── App.jsx
└── index.js
```

### 5. Styling Inline (Pendekatan Terbaik)

React memungkinkan Anda untuk menambahkan gaya langsung ke elemen JSX menggunakan objek gaya. Ini adalah pendekatan yang baik untuk menjaga gaya tetap terlokalisir dan mudah dikelola.

```javascript
const buttonStyle = {
  backgroundColor: 'blue',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
};

function MyButton() {
  return <button style={buttonStyle}>Klik Saya</button>;
}
```