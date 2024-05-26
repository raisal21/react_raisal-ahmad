## Penanganan Routing dengan React Router (v6+)

### 1. Multi Page Application (MPA) vs Single Page Application (SPA)

* **MPA:** Setiap halaman dimuat ulang sepenuhnya dari server saat navigasi terjadi.
* **SPA:** Hanya konten yang diperlukan yang dimuat secara dinamis tanpa memuat ulang seluruh halaman, memberikan pengalaman pengguna yang lebih lancar. React Router memungkinkan pembuatan SPA dengan mudah.

### 2. Menggunakan URL Params pada React Router v6+

URL params memungkinkan untuk mengirimkan data melalui URL.

```javascript
<Route path="/produk/:id" element={<DetailProduk />} />
```

Dalam komponen `DetailProduk` dapat mengakses nilai `id` menggunakan `useParams` hook:

```javascript
import { useParams } from 'react-router-dom';

function DetailProduk() {
  const { id } = useParams();
  // ... gunakan id untuk mengambil data produk
}
```

### 3. Perbedaan Link dan Navigate

* **`<Link>`:** Komponen ini membuat tautan yang memungkinkan navigasi dalam aplikasi tanpa memuat ulang halaman.
* **`useNavigate`:** Hook ini menggantikan `useHistory` pada React Router v6. Ini menyediakan fungsi `navigate` untuk melakukan navigasi secara terprogram.

```javascript
import { Link, useNavigate } from 'react-router-dom';

function MyComponent() {
  const navigate = useNavigate();

  return (
    <div>
      <Link to="/about">Tentang Kami</Link>
      <button onClick={() => navigate('/contact')}>Hubungi Kami</button>
    </div>
  );
}
```

### 4. Hooks Routing React

* **`useParams`:** Mengambil URL params.
* **`useLocation`:** Mengakses informasi lokasi saat ini, termasuk pathname, search, hash, dan state.
* **`useNavigate`:** Melakukan navigasi secara terprogram.
* **`useMatch`:** Memeriksa apakah path saat ini cocok dengan pola tertentu.
* **`useResolvedPath`:** Menyelesaikan path relatif menjadi path absolut.

### 5. Update Penting pada React Router v6+

* **Penghapusan `<Switch>`:** Digantikan oleh `<Routes>`.
* **Penggunaan Elemen `<Route>`:** Rute sekarang didefinisikan sebagai elemen anak dari `<Routes>`.
* **`useNavigate` Menggantikan `useHistory`:** Untuk navigasi terprogram.
* **Relative Links:** `<Link to="..">` untuk naik satu tingkat di hierarki rute.

### 6. Nested Route

Nested route memungkinkan untuk membuat hierarki rute yang lebih kompleks.

```javascript
<Routes>
  <Route path="/topics" element={<Topics />}>
    <Route path=":topicId" element={<Topic />} />
  </Route>
</Routes>
```

**Catatan:**

* React Router v6+ menggunakan konsep "element" pada `<Route>` untuk merender komponen yang sesuai dengan path.
* Gunakan nested route untuk membuat layout yang lebih kompleks dan mengatur komponen berdasarkan hierarki URL.

