## Manajemen State Global pada Formulir React (React 18)

### 1. Global State Management (Manual vs Redux)

* **Manual:** Mengangkat state ke komponen induk dan meneruskannya sebagai props ke komponen anak. Pendekatan ini sederhana untuk aplikasi kecil, tetapi bisa menjadi rumit dan sulit dikelola saat aplikasi bertambah besar.
* **Redux:** Library pihak ketiga yang menyediakan solusi terpusat untuk mengelola state global. Redux membantu menjaga state tetap terorganisir, mudah diprediksi, dan mudah didebug, terutama pada aplikasi yang kompleks.

### 2. React-Redux

React-Redux adalah library yang menghubungkan React dengan Redux. Ini menyediakan komponen dan hook yang memudahkan Anda untuk berinteraksi dengan Redux store dari komponen React Anda.

* **`Provider`:** Komponen ini membungkus aplikasi React Anda dan menyediakan Redux store ke semua komponen di dalamnya.
* **`connect` (Higher-Order Component):** Fungsi ini menghubungkan komponen React dengan Redux store, memungkinkan komponen untuk membaca state dari store dan mengirim action untuk mengubahnya.
* **`useSelector` (Hook):** Hook ini memungkinkan komponen React untuk membaca data dari Redux store.
* **`useDispatch` (Hook):** Hook ini memberikan akses ke fungsi `dispatch` Redux, yang digunakan untuk mengirim action ke store.

### 3. React Toolkit (RTK)

React Toolkit (RTK) adalah library resmi yang menyederhanakan penggunaan Redux. RTK menyediakan beberapa fitur yang memudahkan pembuatan action, reducer, dan slice Redux.

* **`configureStore`:** Fungsi ini membuat Redux store dengan konfigurasi yang optimal.
* **`createSlice`:** Fungsi ini membuat slice Redux, yang merupakan kombinasi dari reducer dan action creator.
* **`createAsyncThunk`:** Fungsi ini membuat action creator untuk menangani operasi asynchronous seperti mengambil data dari API.
* **`createEntityAdapter`:** Fungsi ini membantu mengelola data yang dinormalisasi dalam bentuk entitas.

### 4. Komponen Redux (Actions, Reducer, dan Store)

* **Actions:** Objek JavaScript yang mendeskripsikan perubahan yang ingin Anda lakukan pada state.
* **Reducer:** Fungsi murni yang menerima state saat ini dan action, lalu mengembalikan state baru berdasarkan action tersebut.
* **Store:** Objek yang menyimpan state aplikasi Anda dan menyediakan metode untuk mengakses dan memperbarui state.

### 5. `createSlice()` (RTK)

Fungsi `createSlice` dari React Toolkit menyederhanakan pembuatan slice Redux. Ini memungkinkan Anda untuk mendefinisikan nama slice, state awal, dan reducer dalam satu objek.

```javascript
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // ... reducer lainnya
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```

**Contoh Penggunaan React-Redux dan RTK:**

```javascript
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={() => dispatch(increment())}>
          +
        </button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>
    </div>
  );
}
```

Tentu, mari kita lanjutkan rangkuman materi tentang React Form dengan fokus pada Global State Management menggunakan Redux dan React-Redux, dalam format Markdown (.md) dan bahasa Indonesia:

## Manajemen State Global pada Formulir React (React 18) - Lanjutan

### 6. Redux Store (Memasang)

Redux store adalah objek yang menyimpan seluruh state aplikasi Anda. Untuk menggunakan Redux dalam aplikasi React, Anda perlu membuat dan mengkonfigurasi store, lalu menyediakannya ke seluruh komponen menggunakan `Provider` dari React-Redux.

```javascript
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Gabungkan semua reducer Anda di sini

const store = configureStore({
  reducer: rootReducer,
});

// ... dalam komponen utama Anda
<Provider store={store}>
  <App />
</Provider>
```

### 7. State Hooks Redux

React-Redux menyediakan dua hook utama untuk berinteraksi dengan Redux store:

* **`useSelector`:** Hook ini digunakan untuk membaca data dari Redux store. Anda memberikan sebuah fungsi selector yang memilih bagian state yang Anda butuhkan.
* **`useDispatch`:** Hook ini memberikan Anda akses ke fungsi `dispatch` dari Redux store, yang digunakan untuk mengirim action dan memicu perubahan state.

### 8. Redux Thunk (Apa itu Thunk? Dan Mengapa Itu Perlu?)

* **Thunk:** Thunk adalah fungsi yang membungkus eksekusi fungsi lain. Dalam konteks Redux, thunk memungkinkan Anda untuk mengirim action yang bukan hanya objek biasa, tetapi juga fungsi.
* **Mengapa Thunk Penting:** Thunk memungkinkan Anda untuk menangani logika asynchronous (seperti mengambil data dari API) di dalam action creator Redux. Ini membuat kode Anda lebih terstruktur dan mudah dikelola.

```javascript
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetch('/api/users');
  const data = await response.json();
  return data;
});
```

### 9. Asynchronous Dispatch dan Conditional Dispatch

* **Asynchronous Dispatch:** Mengirim action yang berisi fungsi thunk, yang akan menangani operasi asynchronous dan mengirim action lain setelah operasi selesai.
* **Conditional Dispatch:** Mengirim action berdasarkan kondisi tertentu, misalnya berdasarkan state saat ini atau hasil dari operasi asynchronous.

### 10. Persisted State (Menyimpan State ke Storage)

Untuk menyimpan state Redux ke local storage atau session storage, Anda dapat menggunakan library seperti `redux-persist`. Library ini akan secara otomatis menyimpan state ke storage saat berubah dan memuatnya kembali saat aplikasi dimulai.
