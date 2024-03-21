## Ringkasan Materi "CSS"

**1. Pengantar CSS**

* **CSS (Cascading Style Sheets):** Bahasa untuk mengatur gaya dan tata letak website.
* **Fungsi:** Menghias elemen HTML (warna, ukuran, font, background, dll.).
* **Kemampuan:** Mengatur posisi elemen (float, align, display, position, dll.).

**2. Menambahkan File CSS**

* **External CSS:** Cara umum, file CSS terpisah (.css) dihubungkan ke HTML.
    * `<link rel="stylesheet" href="main.css">` (diletakkan di `<head>`).
* **Internal CSS:** Gaya CSS didefinisikan di dalam tag `<style>` di HTML.
* **Inline CSS:** Gaya CSS diterapkan langsung pada elemen HTML (prioritas tinggi).

**3. Cara Penulisan CSS**

* **Selector:** Elemen HTML yang ingin ditata (ID, Class, tag HTML).
* **Properti:** Gaya yang ingin diterapkan (warna, ukuran font, dll.).
* **Nilai:** Nilai properti (warna, ukuran).

**Contoh:**

```css
h1 {
  color: red;
  font-size: 24px;
}
```

**4. Penanda**

* **ID (#):** Unik, hanya satu elemen dengan ID yang sama.
* **Class (.)**: Dapat digunakan berulang kali pada elemen HTML.

**5. Pengelompokan CSS**

Beberapa selector dapat dikelompokkan dalam satu deklarasi style.

**Contoh:**

```css
h1, h2, h3 {
  color: blue;
}
```

**6. Properti Font CSS**

* **font:** Semua properti font dalam satu deklarasi.
* **font-family:** Jenis font.
* **font-size:** Ukuran font.
* **font-weight:** Ketebalan font.
* **font-style:** Gaya font (normal, italic, oblique).

**7. Margin & Padding CSS**

* **margin:** Membuat ruang di luar elemen.
* **padding:** Membuat ruang di dalam elemen.

**8. Background CSS**

* **background-color:** Warna latar belakang.
* **background-image:** Gambar latar belakang.
* **background-repeat:** Mengatur pengulangan gambar.
* **background-size:** Ukuran gambar.
* **background-position:** Posisi gambar.

**9. Link Event CSS**

* **:hover:** Gaya saat mouse berada di atas elemen.
* **:active:** Gaya saat elemen ditekan.
* **:visited:** Gaya saat elemen telah dikunjungi.

**10. Transisi CSS**

Mengubah nilai properti dengan halus dalam durasi tertentu.

**11. CSS Display**

Menentukan tampilan elemen:

* **block:** Elemen baru di baris baru.
* **inline-block:** Lebar sesuai kebutuhan.
* **none:** Menyembunyikan elemen.