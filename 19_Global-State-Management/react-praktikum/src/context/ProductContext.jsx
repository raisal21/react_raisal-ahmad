/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, { ...product, id: products.length + 1 }]);
  };

  const deleteLatestProduct = () => {
    if (products.length > 0) {
      setProducts(products.slice(0, -1));
    }
  };

  const deleteRowProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, deleteLatestProduct, deleteRowProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext };

// Move the useProduct function to a separate file
