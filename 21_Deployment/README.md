## Deployment Aplikasi React 18

### 1. Create React App (Deployment)

Create React App (CRA) adalah tool resmi untuk membuat proyek React dengan cepat. CRA menyediakan script `build` yang akan menghasilkan bundel aplikasi yang siap untuk di-deploy.

```bash
npm run build
```

Setelah menjalankan perintah ini, Anda akan menemukan folder `build` di dalam direktori proyek Anda. Folder ini berisi semua file statis yang diperlukan untuk menjalankan aplikasi Anda.

### 2. Vercel (Deployment)

Vercel adalah platform deployment yang populer untuk aplikasi React. Vercel menyediakan antarmuka yang mudah digunakan dan integrasi yang baik dengan GitHub.

**Langkah-langkah Deployment dengan Vercel:**

1. **Buat Akun Vercel:** Jika Anda belum memiliki akun, buatlah akun gratis di Vercel.
2. **Hubungkan dengan GitHub:** Hubungkan akun Vercel Anda dengan repositori GitHub yang berisi proyek React Anda.
3. **Import Proyek:** Pilih proyek yang ingin Anda deploy dari daftar repositori GitHub Anda.
4. **Konfigurasi Build:** Vercel akan secara otomatis mendeteksi proyek Create React App dan mengkonfigurasi pengaturan build yang sesuai.
5. **Deploy:** Klik tombol "Deploy" untuk memulai proses deployment. Vercel akan membangun aplikasi Anda dan menyediakan URL untuk mengaksesnya.

### 3. Deployment Vercel saat Tidak pada Branch Utama (main)

Vercel memungkinkan Anda untuk melakukan deployment dari branch selain branch utama. Anda dapat memilih branch yang ingin Anda deploy dari pengaturan proyek di Vercel.

### 4. API saat Melakukan Deployment

Jika aplikasi Anda menggunakan API, pastikan Anda telah mengkonfigurasi URL API yang benar dalam file `.env` atau pengaturan lingkungan lainnya. Anda mungkin perlu menggunakan variabel lingkungan untuk menyimpan URL API agar mudah diubah saat berpindah lingkungan (misalnya, dari development ke production).

### 5. Surge (Deployment)

Surge adalah alternatif lain untuk deployment aplikasi React. Surge menawarkan deployment yang cepat dan mudah, terutama untuk proyek statis.

**Langkah-langkah Deployment dengan Surge:**

1. **Install Surge:** `npm install --global surge`
2. **Build Proyek:** `npm run build`
3. **Navigasi ke Folder Build:** `cd build`
4. **Jalankan Surge:** `surge`

Surge akan meminta Anda untuk memasukkan domain (misalnya, `nama-aplikasi-anda.surge.sh`) dan kemudian mengunggah file-file Anda ke server Surge.