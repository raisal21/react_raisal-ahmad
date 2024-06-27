// validationService.js

// Validasi Nama Produk
export const validateProductName = (name) => {
    if (!name) {
      return 'Product name cannot be empty.';
    }
    if (name.length > 10) {
      return 'Product name cannot exceed 10 characters.';
    }
    const invalidChars = /[@#\\/{}]/;
    if (invalidChars.test(name)) {
      return 'Product name cannot contain characters like @/#/{}';
    }
    return '';
  };
  
  // Validasi Kategori Produk
  export const validateProductCategory = (category) => {
    if (!category || category === 'Choose') {
      return 'Product category must be selected.';
    }
    return '';
  };
  
  // Validasi Gambar Produk
  export const validateProductImage = (image) => {
    if (!image) {
      return 'Product image cannot be empty.';
    }
    return '';
  };
  
  // Validasi Kondisi Produk
  export const validateProductFreshness = (freshness) => {
    if (!freshness) {
      return 'Product freshness must be selected.';
    }
    return '';
  };
  
  // Validasi Harga Produk
  export const validateProductPrice = (price) => {
    if (!price) {
      return 'Product price cannot be empty.';
    }
    const priceNumber = Number(price);
    if (isNaN(priceNumber) || priceNumber <= 0) {
      return 'Product price must be a positive number.';
    }
    return '';
  };
  
  // Validasi Semua Field
  export const validateAllFields = (product) => {
    return {
      name: validateProductName(product.name),
      category: validateProductCategory(product.category),
      image: validateProductImage(product.image),
      freshness: validateProductFreshness(product.freshness),
      price: validateProductPrice(product.price),
    };
  };
  