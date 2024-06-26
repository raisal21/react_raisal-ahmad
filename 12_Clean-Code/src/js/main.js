document.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('form');
    const alertContainer = document.getElementById('alert-container');
    const alertMessage = document.getElementById('alert-message');
    const tableBody = document.querySelector('#table tbody');
    const addNewButton = document.getElementById('add-new');
    const deleteLatestButton = document.getElementById('delete-latest');
    const searchInput = document.getElementById('search');
  
    // Fungsi validasi input
    function validateName(name) {
        if (name.length > 25) {
            return "Product name must not exceed 25 characters.";
        } else if (name.length < 4) {
            return "Product name must be at least 4 characters.";
        } else if (/[@/#{}]/.test(name)) {
            return "Product name must not contain symbols @, #, {, or }.";
        }
        return null; // No error
    }
  
    function validatePrice(price) {
        // Memastikan harga harus berupa angka dan tidak boleh kosong
        if (!price || isNaN(Number(price)) || price <= 0) {
            return "Price must be a valid positive number.";
        }
        return null;
    }
  
    function validateRequired(value, fieldName) {
        if (!value) {
            return `The ${fieldName} field must be filled in.`;
        }
        return null;
    }
  
    function validateFreshness() {
        const freshnessOptions = document.querySelectorAll('input[name="product_freshness"]');
        return Array.from(freshnessOptions).some(radio => radio.checked);
    }
  
    // Fungsi untuk menampilkan pesan error
    function showError(inputElement, message) {
        const errorElement = inputElement.nextElementSibling; // Asumsikan elemen error berada tepat setelah input
        if (errorElement && errorElement.classList.contains('invalid-feedback')) {
            errorElement.textContent = message;
            errorElement.classList.remove('hidden');
            inputElement.classList.add('input-error');
        }
        inputElement.classList.add('border-red-500');
    }
  
    // Fungsi untuk menghapus pesan error
    function clearError(inputElement) {
        const errorElement = inputElement.nextElementSibling;
        if (errorElement && errorElement.classList.contains('invalid-feedback')) {
            errorElement.textContent = '';
            errorElement.classList.add('hidden');
            inputElement.classList.remove('input-error');
        }
        inputElement.classList.remove('border-red-500');
    }
  
    // Validasi setiap input saat nilainya berubah
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            let error = null;
            if (this.id === 'name') {
                error = validateName(this.value);
            } else if (this.id === 'price') {
                error = validatePrice(this.value);
            } else if (this.required) { // Validasi untuk input yang wajib diisi (required)
                error = validateRequired(this.value, this.name);
            }
  
            if (error) {
                showError(this, error);
            } else {
                clearError(this);
            }
  
            // Validasi radio button setelah input lain selesai divalidasi
            if (this.type !== 'radio') {
                const freshnessError = validateFreshness() ? null : 'Please select a product freshness.';
                if (freshnessError) {
                    showError(document.querySelector('fieldset'), freshnessError);
                } else {
                    clearError(document.querySelector('fieldset'));
                }
            }
        });
    });
  
    // Validasi formulir saat disubmit
    form.addEventListener('submit', function(event) {
        event.preventDefault();
  
        // Validasi semua input secara keseluruhan
        let isValid = true;
        inputs.forEach(input => {
            let error = null;
            if (input.id === 'name') {
                error = validateName(input.value);
            } else if (input.id === 'price') {
                error = validatePrice(input.value);
            } else if (input.required) {
                error = validateRequired(input.value, input.name);
            }
  
            if (error) {
                showError(input, error);
                isValid = false;
            } else {
                clearError(input);
            }
        });
  
        // Validasi radio button
        const freshnessError = validateFreshness() ? null : 'Please select a product freshness.';
        if (freshnessError) {
            showError(document.querySelector('fieldset'), freshnessError);
            isValid = false;
        } else {
            clearError(document.querySelector('fieldset'));
        }
  
        if (isValid) {
            // Formulir valid, tambahkan data ke tabel
            const formData = new FormData(form);
            const row = document.createElement('tr');
  
            row.innerHTML = `
                <td><button class="btn btn-md bg-red-700 w-full">Delete</button></td>
                <td>${tableBody.rows.length + 1}</td>
                <td>${formData.get('product_name')}</td>
                <td>${formData.get('product-category')}</td>
                <td>${formData.get('product_freshness')}</td>
                <td>${formData.get('additional_description')}</td>
                <td>${formData.get('product_price')}</td>
            `;
  
            tableBody.appendChild(row);
  
            // Bersihkan form
            form.reset();
  
            // Tampilkan pesan sukses
            showAlert("Form submitted successfully!", "alert-success");
  
            // Tambahkan event listener untuk tombol hapus
            row.querySelector('.btn-danger').addEventListener('click', function() {
                row.remove();
            });
  
        } else {
            showAlert("Error! Please fill all required fields.", "alert-error");
        }
    });
  
    // Fungsi untuk menampilkan alert
    function showAlert(message, type) {
        alertMessage.innerHTML = message;
        alertContainer.className = `alert ${type}`;
        alertContainer.classList.remove('hidden');
        alertContainer.classList.add('block');
        setTimeout(() => {  
            alertContainer.classList.add('hidden');
            alertContainer.classList.remove('block');
        }, 3000);
    }

    // Event listener untuk tombol Add New
    addNewButton.addEventListener('click', function(event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Event listener untuk tombol Delete Latest
    deleteLatestButton.addEventListener('click', function(event) {
        event.preventDefault();
        if (tableBody.rows.length > 0) {
            tableBody.deleteRow(tableBody.rows.length - 1);
        }
    });

    // Fungsi untuk melakukan filter pencarian
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const rows = tableBody.querySelectorAll('tr');
        rows.forEach(row => {
            const productName = row.cells[2].textContent.toLowerCase();
            if (productName.includes(searchTerm)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });
  });
  