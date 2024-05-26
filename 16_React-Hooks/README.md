## Penanganan Event (Event Handling) dengan Hooks pada React 18

### 1. Mengapa Hooks pada React Diciptakan?

Hooks diperkenalkan dalam React 16.8 untuk mengatasi beberapa masalah yang muncul dalam pengembangan komponen class:

* **Kompleksitas:** Komponen class bisa menjadi rumit dan sulit dikelola saat menangani state dan lifecycle yang kompleks.
* **Duplikasi Kode:** Logika yang sama sering harus diulang di beberapa metode lifecycle atau komponen yang berbeda.
* **Sulitnya Pengujian:** Komponen class lebih sulit diuji karena state dan lifecycle tersembunyi di dalam instance class.

Hooks memungkinkan Anda untuk menggunakan state dan fitur React lainnya dalam komponen fungsional, membuatnya lebih sederhana, mudah dibaca, dan mudah diuji.

### 2. Jenis-jenis Hooks pada React Berdasarkan Fungsinya

| Jenis Hooks   | Fungsi                                                                                                                               | Contoh                                                                                                                                                                                                                                                                |
| :------------ | :------------------------------------------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Basic**     | `useState`: Mengelola state lokal.                                                                                                   | `const [count, setCount] = useState(0);`                                                                                                                                                                                                                         |
|              | `useEffect`: Melakukan efek samping (side effects) setelah render.                                                                  | `useEffect(() => { document.title = `Anda mengklik ${count} kali`; }, [count]);`                                                                                                                                                                                      |
|              | `useContext`: Mengakses nilai dari React Context.                                                                                     | `const theme = useContext(ThemeContext);`                                                                                                                                                                                                                       |
| **Additional** | `useReducer`: Alternatif untuk `useState` yang lebih cocok untuk state yang kompleks.                                                | `const [state, dispatch] = useReducer(reducer, initialState);`                                                                                                                                                                                                 |
|              | `useCallback`: Memoization untuk fungsi agar tidak dibuat ulang pada setiap render.                                                   | `const memoizedCallback = useCallback(() => { doSomething(a, b); }, [a, b]);`                                                                                                                                                                                   |
|              | `useMemo`: Memoization untuk nilai yang dihitung agar tidak dihitung ulang pada setiap render.                                         | `const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`                                                                                                                                                                                      |
|              | `useRef`: Untuk menyimpan nilai yang bertahan selama siklus hidup komponen tanpa memicu render ulang.                                 | `const inputRef = useRef(null);`                                                                                                                                                                                                                             |
|              | `useImperativeHandle`: Untuk menyesuaikan instance ref yang terekspos ke komponen induk.                                               | `useImperativeHandle(ref, () => ({ focusInput() { inputRef.current.focus(); } }));`                                                                                                                                                                            |
|              | `useLayoutEffect`: Mirip dengan `useEffect`, tetapi berjalan secara sinkron setelah semua perubahan DOM terjadi.                          | `useLayoutEffect(() => { // Lakukan sesuatu setelah perubahan DOM }, []);`                                                                                                                                                                                         |
|              | `useDebugValue`: Untuk menampilkan label pada nilai custom hook di React DevTools.                                                  | `useDebugValue(value, formatterFn);`                                                                                                                                                                                                                          |
|              | `useDeferredValue`: Untuk menunda render ulang bagian UI yang tidak terlalu penting, meningkatkan responsivitas pada interaksi pengguna. | `const deferredValue = useDeferredValue(value);`                                                                                                                                                                                                                   |
|              | `useTransition`: Untuk menandai pembaruan state sebagai transisi, memungkinkan React untuk memprioritaskan render ulang yang lebih penting. | `const [isPending, startTransition] = useTransition(); startTransition(() => { /* Update state di sini */ });`                                                                                                                                                         |
|              | `useId`: Menghasilkan ID unik yang stabil di seluruh server dan client.                                                              | `const id = useId();`                                                                                                                                                                                                                                           |

### 3. Aturan Penggunaan Hooks Secara General

* **Hanya Panggil Hooks di Tingkat Atas:** Jangan panggil Hooks di dalam loops, conditions, atau nested functions.
* **Hanya Panggil Hooks dari Komponen React:** Jangan panggil Hooks dari fungsi JavaScript biasa.
* **Hanya Panggil Hooks dari Komponen Fungsional:** Jangan panggil Hooks dari dalam komponen class.

### 4. Bentuk-bentuk useEffect Abuse yang Sering Dilakukan Pemula

* **Memperbarui State tanpa Dependensi:** Menyebabkan infinite loop karena perubahan state memicu `useEffect` lagi.
* **Efek Samping yang Tidak Perlu:** Menggunakan `useEffect` untuk logika yang seharusnya bisa dilakukan di dalam fungsi komponen.
* **Terlalu Banyak Dependensi:** Menyebabkan `useEffect` berjalan terlalu sering dan menurunkan performa.

### 5. Custom Hooks

Custom Hooks adalah fungsi yang dimulai dengan "use" dan dapat memanggil Hooks lain di dalamnya. Mereka memungkinkan Anda untuk mengekstrak logika komponen yang dapat digunakan kembali.

```javascript
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    // ... (logika untuk mengambil nilai dari local storage)
  });

  // ... (logika untuk menyimpan nilai ke local storage)

  return [storedValue, setStoredValue];
}
```