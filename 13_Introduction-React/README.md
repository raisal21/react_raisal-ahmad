## Pengantar React

### 1. Apa itu React?

React adalah library JavaScript yang dikembangkan oleh Facebook untuk membangun antarmuka pengguna (UI) yang interaktif dan dinamis. React memungkinkan Anda untuk membuat komponen UI yang dapat digunakan kembali, yang dapat mempermudah pengembangan aplikasi web yang kompleks.

### 2. Mengapa Menggunakan React?

* **Komponen yang Dapat Digunakan Kembali:** React mendorong penggunaan komponen, yaitu blok kode independen yang mewakili bagian dari UI. Komponen ini dapat digunakan kembali di berbagai bagian aplikasi, meningkatkan efisiensi pengembangan dan pemeliharaan kode.
* **Virtual DOM:** React menggunakan Virtual DOM, representasi ringan dari DOM yang sebenarnya. Ketika ada perubahan data, React membandingkan Virtual DOM dengan DOM yang sebenarnya dan hanya memperbarui bagian yang diperlukan, menghasilkan performa yang lebih baik.
* **JSX:** React menggunakan JSX (JavaScript XML), ekstensi sintaksis JavaScript yang memungkinkan Anda menulis kode HTML-like dalam JavaScript. Ini membuat penulisan komponen React lebih intuitif.
* **Komunitas yang Besar:** React memiliki komunitas yang aktif dan besar, yang berarti banyak sumber daya, tutorial, dan dukungan yang tersedia.
* **Ekosistem yang Kaya:** React memiliki ekosistem yang luas dengan banyak library dan tools yang dapat membantu Anda membangun aplikasi yang lebih kompleks.

### 3. DOM vs Virtual DOM

| Fitur      | DOM (Document Object Model)                                | Virtual DOM                                                                    |
| :--------- | :---------------------------------------------------------- | :------------------------------------------------------------------------------ |
| Struktur   | Representasi langsung dari struktur HTML pada halaman web. | Representasi JavaScript dari DOM yang sebenarnya.                               |
| Pembaruan  | Memerlukan manipulasi langsung pada elemen HTML di browser. | React menghitung perbedaan antara Virtual DOM dan DOM sebenarnya, lalu memperbarui. |
| Performa   | Lebih lambat karena manipulasi langsung pada DOM browser.     | Lebih cepat karena pembaruan yang lebih efisien.                                 |

### 4. Create React App vs. create-vite@latest my-react-app

| Fitur             | Create React App                                                                 | create-vite@latest my-react-app                                                 |
| :---------------- | :---------------------------------------------------------------------------------- | :------------------------------------------------------------------------------ |
| Konfigurasi       | Sudah dikonfigurasi secara default.                                                | Memungkinkan konfigurasi yang lebih fleksibel.                                    |
| Toolchain         | Menggunakan Webpack.                                                               | Menggunakan Vite, yang dikenal lebih cepat dalam pengembangan.                   |
| Hot Module Reload | Tersedia.                                                                         | Tersedia dan biasanya lebih cepat dari Create React App.                         |
| Kemudahan Penggunaan | Lebih mudah digunakan untuk pemula karena tidak memerlukan konfigurasi tambahan. | Membutuhkan sedikit pengetahuan tentang konfigurasi untuk pengguna tingkat lanjut. |
| Popularitas       | Sangat populer dan banyak digunakan.                                               | Semakin populer karena kecepatan dan fleksibilitasnya.                           |

**Contoh Kode React (JSX):**

```javascript
import React from 'react';

function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
    </div>
  );
}

export default App;
```