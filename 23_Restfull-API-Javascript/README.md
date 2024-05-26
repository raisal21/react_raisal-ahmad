## RESTful API dengan JavaScript

### Pengantar

RESTful API (Representational State Transfer Application Programming Interface) adalah gaya arsitektur yang memungkinkan komunikasi antara aplikasi berbeda melalui protokol HTTP. Dalam konteks JavaScript, kita menggunakan API ini untuk berinteraksi dengan server, mengambil data, mengirim data, dan melakukan operasi lainnya.

### MockAPI: Simulasi Backend

MockAPI adalah alat yang sangat berguna dalam pengembangan frontend. Ini memungkinkan kita untuk mensimulasikan endpoint API tanpa perlu backend yang sesungguhnya. Ini sangat membantu ketika backend belum siap atau sedang dalam pengembangan.

#### Contoh MockAPI Endpoint

```javascript
const data = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
];

// Endpoint GET untuk mengambil semua data
app.get("/users", (req, res) => {
  res.json(data);
});

// Endpoint GET untuk mengambil data berdasarkan ID
app.get("/users/:id", (req, res) => {
  const user = data.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
});

// Endpoint POST untuk menambahkan data baru
app.post("/users", (req, res) => {
  const newUser = {
    id: data.length + 1,
    name: req.body.name,
  };
  data.push(newUser);
  res.status(201).json(newUser);
});

// Endpoint PUT untuk memperbarui data
app.put("/users/:id", (req, res) => {
  const userIndex = data.findIndex((u) => u.id === parseInt(req.params.id));
  if (userIndex === -1) return res.status(404).json({ message: "User not found" });
  data[userIndex].name = req.body.name;
  res.json(data[userIndex]);
});

// Endpoint DELETE untuk menghapus data
app.delete("/users/:id", (req, res) => {
  const userIndex = data.findIndex((u) => u.id === parseInt(req.params.id));
  if (userIndex === -1) return res.status(404).json({ message: "User not found" });
  data.splice(userIndex, 1);
  res.json({ message: "User deleted" });
});
```

### Mengonsumsi MockAPI dengan JavaScript

Untuk mengonsumsi MockAPI, kita bisa menggunakan `fetch` API bawaan JavaScript atau library seperti `axios`. Berikut contoh menggunakan `fetch`:

```javascript
// Mengambil semua data
fetch("/users")
  .then((response) => response.json())
  .then((data) => console.log(data));

// Menambahkan data baru
fetch("/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ name: "New User" }),
})
  .then((response) => response.json())
  .then((data) => console.log(data));
```

### Kesimpulan

RESTful API dengan JavaScript adalah konsep penting dalam pengembangan web modern. Dengan memahami cara kerja API dan memanfaatkan alat seperti MockAPI, kita dapat membangun aplikasi yang interaktif dan dinamis.

