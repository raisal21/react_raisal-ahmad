## Pengantar RESTful API

### 1. API: Penjelasan Lengkap

**API (Application Programming Interface)** adalah perantara yang memungkinkan komunikasi antara aplikasi berbeda. Bayangkan seperti pelayan di restoran:  (aplikasi) memesan makanan (data), pelayan menyampaikannya ke dapur (server), lalu membawakan makanan yang sudah siap (respon).

**RESTful API** adalah jenis API yang mengikuti prinsip arsitektur REST (Representational State Transfer), yang membuatnya:

* **Stateless:** Setiap permintaan berdiri sendiri, tidak menyimpan informasi sesi.
* **Client-Server:** Pemisahan jelas antara klien (frontend) dan server (backend).
* **Cacheable:** Respon bisa disimpan sementara untuk meningkatkan efisiensi.
* **Layered System:** Arsitektur berlapis untuk fleksibilitas dan skalabilitas.
* **Uniform Interface:** Menggunakan metode standar (GET, POST, PUT, DELETE) dan format data (JSON).

### 2. Apa itu REST?

REST adalah gaya arsitektur yang mendefinisikan cara membangun API yang terstruktur, efisien, dan mudah digunakan. Dalam konteks React,  akan sering menggunakan RESTful API untuk mengambil data dari backend dan menampilkannya di komponen React.

### 3. JSON (JavaScript Object Notation)

JSON adalah format pertukaran data yang ringan dan mudah dibaca manusia. Ini adalah format yang paling umum digunakan dalam RESTful API karena mudah diurai oleh JavaScript. Contoh data JSON:

```json
{
  "nama": "John Doe",
  "umur": 30,
  "kota": "Jakarta"
}
```

Dalam React,  bisa menggunakan `fetch` API atau library seperti `axios` untuk mengirim permintaan ke RESTful API dan mendapatkan data JSON.

### 4. HTTP Response Code

HTTP Response Code adalah kode tiga digit yang dikirim oleh server sebagai respon terhadap permintaan HTTP. Kode ini memberikan informasi tentang status permintaan, apakah berhasil, gagal, atau memerlukan tindakan lebih lanjut. Beberapa kode umum:

* **200 OK:** Permintaan berhasil.
* **201 Created:** Sumber daya berhasil dibuat.
* **400 Bad Request:** Permintaan tidak valid.
* **401 Unauthorized:** Autentikasi gagal.
* **404 Not Found:** Sumber daya tidak ditemukan.
* **500 Internal Server Error:** Kesalahan di sisi server.

### 5. OpenAPI (dahulu Swagger)

OpenAPI adalah spesifikasi untuk mendeskripsikan RESTful API. Dengan OpenAPI, bisa membuat dokumentasi interaktif yang memudahkan developer lain untuk memahami dan menggunakan API .

**Contoh Kode (React 18 dengan `fetch`)**

```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    // Lakukan sesuatu dengan data JSON
  })
  .catch(error => {
    // Tangani kesalahan
  });
```
