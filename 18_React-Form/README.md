## Formulir React (React Forms)

### 1. Controlled Component

Dalam React, controlled component adalah elemen formulir yang nilainya dikelola oleh state komponen React. Perubahan pada nilai input akan memperbarui state, yang kemudian memicu render ulang komponen.

**Contoh Controlled Component (Input Teks):**

```javascript
import React, { useState } from 'react';

function MyForm() {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <form>
      <label>
        Nama:
        <input type="text" value={name} onChange={handleChange} />
      </label>
    </form>
  );
}
```

**Tag `<textarea>` dan `<select>`:**

Anda juga dapat menggunakan prinsip controlled component pada elemen `<textarea>` dan `<select>` dengan cara yang sama.

**Menangani Banyak Input:**

Gunakan nama unik untuk setiap input dan simpan nilainya dalam objek state.

```javascript
const [formData, setFormData] = useState({
  nama: '',
  email: '',
  // ...
});
```

### 2. Uncontrolled Component

Uncontrolled component adalah elemen formulir yang nilainya dikelola oleh DOM itu sendiri, bukan oleh React. Anda dapat mengakses nilai input menggunakan ref.

**Contoh Uncontrolled Component (Input Teks):**

```javascript
import React, { useRef } from 'react';

function MyForm() {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    // ...
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nama:
        <input type="text" ref={inputRef} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
```

**Nilai Default:**

Anda dapat mengatur nilai default pada uncontrolled component menggunakan atribut `defaultValue`.

**Tag `<input type="file">`:**

Elemen `<input type="file">` harus selalu menjadi uncontrolled component karena alasan keamanan.

### 3. Uncontrolled Component vs Controlled Component

| Fitur                   | Uncontrolled Component                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Controlled Component                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| :----------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sumber Nilai             | DOM (Document Object Model)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | State komponen React                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Pengaturan Nilai Default | Menggunakan atribut `defaultValue`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Menggunakan state awal.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Pembaruan Nilai          | Nilai diperbarui secara otomatis oleh DOM saat pengguna berinteraksi dengan input.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Nilai diperbarui dengan memanggil fungsi `setState` atau hook yang sesuai untuk mengubah state yang terkait dengan input.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Akses ke Nilai           | Menggunakan ref untuk mendapatkan referensi ke elemen input dan mengakses nilainya.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Nilai tersedia langsung dalam state komponen.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Penggunaan Umum          | Lebih sederhana untuk kasus penggunaan yang tidak memerlukan manipulasi nilai input secara langsung oleh React. Cocok untuk input file dan kasus-kasus di mana Anda hanya perlu membaca nilai input saat formulir dikirim.                                                                                                                                                                                                                                                                                                                                                                                                                                          | Lebih fleksibel dan memberikan kontrol lebih besar atas perilaku input. Cocok untuk validasi input secara real-time, pembaruan UI dinamis berdasarkan nilai input, dan kasus-kasus di mana Anda perlu memanipulasi nilai input sebelum mengirim formulir.                                                                                                                                                                                                                                                                                                                                                                                    |

### 4. Apa yang Membuat Elemen 'Controlled'?

Sebuah elemen input menjadi "controlled" jika memiliki atribut `value` yang terikat dengan state React dan event handler `onChange` yang memperbarui state tersebut saat nilai input berubah.

### 5. Tipe Validasi Data Form

* **Client-side Validation:** Dilakukan di sisi browser menggunakan JavaScript. Memberikan umpan balik instan kepada pengguna tetapi tidak sepenuhnya aman karena dapat dilewati.
* **Server-side Validation:** Dilakukan di sisi server setelah formulir dikirimkan. Penting untuk keamanan aplikasi tetapi mungkin menyebabkan latensi karena memerlukan komunikasi dengan server.
