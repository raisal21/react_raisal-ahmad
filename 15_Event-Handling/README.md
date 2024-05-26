## Penanganan Event (Event Handling) pada React 18

### 1. State (useState, setState)

State adalah data yang dimiliki oleh sebuah komponen dan dapat berubah seiring waktu. Perubahan state akan memicu React untuk merender ulang komponen tersebut. Hook `useState` digunakan untuk mengelola state dalam komponen fungsional.

```javascript
import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

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

### 2. Statefull vs Stateless Component

* **Stateless Component:** Komponen yang tidak memiliki state internal. Mereka menerima props sebagai input dan merender UI berdasarkan props tersebut.
* **Statefull Component:** Komponen yang memiliki state internal. Mereka dapat mengubah state mereka sendiri sebagai respons terhadap event atau interaksi pengguna.

### 3. Event Handling pada React

React menyediakan cara yang mirip dengan HTML untuk menangani event. Event handler adalah fungsi yang dipanggil ketika event tertentu terjadi.

**Contoh Event Handling:**

```javascript
function MyButton() {
  function handleClick() {
    alert('Tombol diklik!');
  }

  return <button onClick={handleClick}>Klik saya</button>;
}
```

**Beberapa Jenis Event pada React:**

* **Clipboard Events:** `onCopy`, `onCut`, `onPaste`
* **Form Events:** `onChange`, `onSubmit`, `onFocus`, `onBlur`
* **Mouse Events:** `onClick`, `onDoubleClick`, `onMouseOver`, `onMouseOut`
* **Generic Events:** `onError`, `onLoad`

**Contoh Event Handling pada Form:**

```javascript
function MyForm() {
  const [name, setName] = useState('');

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Halo, ${name}!`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nama:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
```

**Catatan:**

* Event handler dalam React adalah fungsi, bukan string seperti pada HTML.
* Nama event dalam React menggunakan camelCase (misalnya, `onClick` bukan `onclick`).
* React memiliki sistem event sintetis yang memberikan lapisan abstraksi di atas event browser asli.