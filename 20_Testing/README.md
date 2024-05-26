## Pengujian React (React Testing)

### 1. React Testing

Pengujian React adalah proses verifikasi bahwa komponen dan logika aplikasi React Anda berfungsi seperti yang diharapkan. Ini membantu Anda menemukan dan memperbaiki bug lebih awal, meningkatkan kualitas kode, dan memberikan kepercayaan diri saat melakukan perubahan pada aplikasi.

### 2. Alur Step-by-Step Melakukan Testing

1. **Tulis Test Case:** Tentukan apa yang ingin Anda uji dan tulis test case yang menggambarkan perilaku yang diharapkan.
2. **Render Komponen:** Gunakan library pengujian seperti React Testing Library untuk merender komponen React Anda dalam lingkungan pengujian.
3. **Interaksi dengan Komponen:** Gunakan query dari React Testing Library untuk menemukan elemen dalam komponen yang telah dirender dan berinteraksi dengannya (misalnya, mengklik tombol, mengisi formulir).
4. **Buat Assertion:** Gunakan assertion (pernyataan yang memeriksa apakah sesuatu benar) untuk memverifikasi bahwa hasil interaksi sesuai dengan yang diharapkan.

### 3. Tools (Jest vs React Testing Library)

* **Jest:** Framework pengujian JavaScript yang populer, sering digunakan bersama React Testing Library. Jest menyediakan fungsi-fungsi untuk menjalankan test, membuat assertion, dan mocking.
* **React Testing Library (RTL):** Library yang dirancang khusus untuk pengujian komponen React. RTL mendorong praktik pengujian yang berfokus pada pengalaman pengguna, bukan pada detail implementasi komponen.

### 4. Component Rendering and Debugging pada React Testing

React Testing Library menyediakan beberapa fungsi untuk merender komponen dan melakukan debugging:

* **`render`:** Merender komponen React ke dalam container virtual.
* **`screen`:** Objek global yang menyediakan query untuk menemukan elemen dalam komponen yang telah dirender.
* **`debug`:** Fungsi untuk mencetak representasi DOM dari komponen yang telah dirender, berguna untuk debugging.

### 5. Testing Category

* **Unit Testing:** Menguji komponen secara individual, terisolasi dari komponen lain.
* **Integration Testing:** Menguji interaksi antara beberapa komponen.
* **End-to-End Testing (E2E):** Menguji seluruh alur aplikasi dari awal hingga akhir, termasuk interaksi dengan backend dan database.

### 6. Testing Handle Event

```javascript
import { render, screen, fireEvent } from '@testing-library/react';

test('klik tombol memicu event', () => {
  const handleClick = jest.fn();
  render(<button onClick={handleClick}>Klik saya</button>);

  fireEvent.click(screen.getByText('Klik saya'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

### 7. Testing Handle Asynchronous

```javascript
test('mengambil data dari API', async () => {
  const fetchData = jest.fn().mockResolvedValue({ data: 'Hello' });
  render(<MyComponent fetchData={fetchData} />);

  await waitFor(() => expect(fetchData).toHaveBeenCalledTimes(1));
  expect(screen.getByText('Hello')).toBeInTheDocument();
});
```

### 8. Testing Custom Hooks

```javascript
import { renderHook, act } from '@testing-library/react-hooks';
import useCounter from './useCounter';

test('useCounter hook', () => {
  const { result } = renderHook(() => useCounter());

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);
});
```
