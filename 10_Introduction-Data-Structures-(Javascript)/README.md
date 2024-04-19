## Ringkasan Materi Lengkap: Introduction Data Structures JavaScript

### 1. Struktur Data (Data Structures)

Struktur data adalah cara untuk mengatur dan menyimpan data dalam program komputer. Pemilihan struktur data yang tepat sangat penting untuk performa dan efisiensi program. Beberapa struktur data umum dalam JavaScript:

* **Array:** Daftar elemen yang terurut dan dapat diakses dengan indeks.
* **Object:** Koleksi key-value pairs untuk menyimpan data terstruktur.
* **Set:** Koleksi elemen yang unik dan tidak terurut.
* **Map:** Koleksi key-value pairs yang dapat diakses dengan key.
* **Queue:** Struktur data FIFO (First In, First Out) untuk menyimpan urutan elemen.
* **Stack:** Struktur data LIFO (Last In, First Out) untuk menyimpan urutan elemen.

### 2. Array

Array adalah struktur data yang paling umum digunakan di JavaScript. Array menyimpan elemen-elemen yang terurut dan dapat diakses dengan indeks. Setiap elemen dalam array memiliki indeks unik yang dimulai dari 0.

**Contoh penggunaan array:**

```javascript
const numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]); // Output: 1
console.log(numbers[2]); // Output: 3

numbers.push(6); // Menambahkan elemen baru
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]
```

**Operasi array umum:**

* `length`: Mendapatkan panjang array.
* `[]`: Mengakses elemen array dengan indeks.
* `push()`: Menambahkan elemen baru ke akhir array.
* `pop()`: Menghapus elemen terakhir dari array.
* `shift()`: Menghapus elemen pertama dari array.
* `unshift()`: Menambahkan elemen baru ke awal array.
* `slice()`: Mengambil bagian dari array.
* `splice()`: Menghapus atau menambahkan elemen di tengah array.

### 3. Set

Set adalah struktur data yang menyimpan elemen-elemen yang unik dan tidak terurut. Set tidak memungkinkan duplikasi elemen.

**Contoh penggunaan set:**

```javascript
const mySet = new Set([1, 2, 3, 4, 4, 3]);
console.log(mySet.size); // Output: 3 (hanya elemen unik yang dihitung)
console.log(mySet.has(2)); // Output: true
console.log(mySet.has(5)); // Output: false

mySet.add(5); // Menambahkan elemen baru
console.log(mySet); // Output: Set {1, 2, 3, 4, 5}
```

**Operasi set umum:**

* `size`: Mendapatkan jumlah elemen dalam set.
* `has()`: Memeriksa apakah elemen tertentu ada dalam set.
* `add()`: Menambahkan elemen baru ke set.
* `delete()`: Menghapus elemen dari set.
* `clear()`: Menghapus semua elemen dari set.
* `values()`: Mengambil iterator yang mengembalikan nilai-nilai dalam set.
* `forEach()`: Melooping melalui setiap elemen dalam set.

**Kesimpulan:**

Struktur data seperti array dan set sangat penting untuk menyimpan dan mengelola data dalam program JavaScript. Memilih struktur data yang tepat dapat meningkatkan performa dan efisiensi program. 
