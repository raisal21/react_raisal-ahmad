## Ringkasan Materi JavaScript: Landasan Web Development

**1. Nilai JavaScript (JavaScript Values)**

* Nilai JavaScript (value) adalah data yang dimanipulasi oleh program.
* Berbagai tipe nilai:
    * Numbers (angka): untuk representasi numerik (10, 3.14).
    * Strings (teks): untuk teks dan karakter ('hello', "world").
    * Booleans (nilai logika): true atau false.
    * Objects (obyek): kumpulan properti (key-value pairs).
    * Arrays (array): daftar terurut dari nilai (variabel).
    * Functions (fungsi): blok kode yang dapat dipanggil untuk melakukan tugas.
    * `undefined`: nilai yang belum ditetapkan.
    * `null`: nilai yang secara eksplisit ditetapkan sebagai tidak ada.

**2. Variabel JavaScript (JavaScript Variables)**

* Variabel digunakan untuk menyimpan nilai.
* Deklarasi dengan keyword `var`, `let`, atau `const`.
* Penamaan mengikuti Camel Case atau snake_case.
* Contoh:

```javascript
let name = "John";
const age = 30;
var greeting = "Hello";
```

**3. Destructuring JavaScript (Destructuring Assignment)**

* Teknik untuk mengekstrak nilai dari objek atau array ke dalam variabel.
* Mempermudah dan mempersingkat penulisan kode.
* Contoh:

```javascript
const person = { name: "Alice", age: 25 };
let { name, age } = person; // Destructuring assignment
```

**4. Metode JavaScript (JavaScript Methods)**

* Fungsi yang terkait dengan objek.
* Digunakan untuk melakukan operasi pada objek tersebut.
* Contoh:

```javascript
const string = "Hello World";
let length = string.length; // Method untuk menghitung panjang string
```

**5. Alur Kontrol JavaScript (JavaScript Control Flow)**

* Struktur logis program untuk mengatur eksekusi kode.
* Pernyataan seperti `if`, `else`, `for`, `while`, dan `switch`.
* Digunakan untuk membuat keputusan dan perulangan.
* Contoh:

```javascript
let number = 10;
if (number > 5) {
  console.log("Number is greater than 5");
} else {
  console.log("Number is less than or equal to 5");
}
```
## Ringkasan Materi JavaScript: Lanjutan Web Development

**6. Fungsi JavaScript (JavaScript Functions)**

* Blok kode yang dapat dipanggil untuk melakukan tugas tertentu.
* Menerima input (parameter) dan mengembalikan output (return value).
* Deklarasi dengan keyword `function`.
* Contoh:

```javascript
function sayHello(name) {
  console.log("Hello, " + name);
}

sayHello("Bob"); // Output: Hello, Bob
```

**7. Kelas JavaScript (JavaScript Classes)**

* Konsep untuk membuat blueprint objek.
* Mendefinisikan properti dan method yang dimiliki oleh objek.
* Memudahkan pembuatan objek dengan struktur yang sama.
* Contoh:

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello, my name is " + this.name);
  }
}

const person1 = new Person("Alice", 30);
person1.greet(); // Output: Hello, my name is Alice
```

**8. Async/Await JavaScript (JavaScript Async/Await)**

* Mekanisme untuk menangani operasi asynchronous (tidak sinkron).
* Membuat kode asynchronous menjadi lebih mudah dibaca dan ditulis.
* Digunakan dengan Promises.
* Contoh:

```javascript
async function fetchData() {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  return data;
}

fetchData().then(data => console.log(data));
```

**9. DOM JavaScript (JavaScript Document Object Model - DOM)**

* Representasi berstruktur dari dokumen HTML.
* Objek JavaScript yang memungkinkan manipulasi elemen HTML.
* Digunakan untuk mengakses, mengubah, dan menambah konten halaman web secara dinamis.
* Contoh:

```javascript
const heading = document.getElementById("main-heading");
heading.textContent = "New Heading";
```