## Ringkasan Materi "Version Control and Branch Management (Git)"

**1. Pengantar**

* Version control: Melacak perubahan file dan kode.
* Git: Sistem version control populer.
* Branch management: Mengelola versi kode berbeda.

**2. Konsep Utama**

* Revision: Setiap perubahan pada kode.
* VCS: Sistem untuk melacak revisi.
* SCM: Mengelola kode, umumnya sebelum VCS.
* RCS: Melacak revisi file teks.
* Git Repository: Menyimpan file kode dan history revisi.
* Github: Platform hosting repository Git.

**3. Penggunaan Git**

* Setup: `git config` untuk nama dan email.
* Staging Area: Memilih revisi untuk dikomitkan.
* Git Stash: Menyimpan perubahan sementara.
* Git Diff: Membandingkan revisi kode.
* .gitignore: File untuk mengecualikan file/folder dari commit.
* Inspecting Repository:
    * `git log --one line`: Menampilkan history revisi.
    * `git checkout "log name"`: Memuat revisi tertentu.
    * `git reset "log name"`: Memundurkan revisi.

**4. Sinkronisasi**

* Remote Server: Menyimpan versi kode terbaru.
* `git remote -v`: Menampilkan remote server.
* `git fetch`: Mengunduh revisi terbaru.
* `git pull`: Mengunduh dan menggabungkan revisi.

**5. Branches**

* Cabang pengembangan terpisah dari kode utama.
* `git branch --list`: Menampilkan daftar cabang.
* `-D` (hapus cabang), `-a` (menampilkan cabang remote).
* `git push -u <branch>`: Push cabang ke remote server.

**6. Pull Request**

* Meminta penggabungan kode dari cabang ke kode utama.
* Review dan diskusi sebelum penggabungan.

**7. Konflik**

* Perbedaan perubahan pada file sama dari dua cabang.
* Perbedaan perubahan pada file antara remote repository dengan platform editing.

**8. Tips Penting**

* Sering commit perubahan kecil.
* Deskripsi commit jelas dan informatif.
* Gunakan branching untuk isolasi dan review.
* Push kode ke remote server.

**9. Bonus: "In Case of Fire"**

* `git commit`
* `git push`
* Tinggalkan area kerja.