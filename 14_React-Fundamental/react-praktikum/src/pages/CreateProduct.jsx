import { useState } from 'react';
import Header from '../components/Header';
import CreateForm from '../components/CreateForm';
import TableList from '../components/TableList';

export default function CreateProduct() {
    const [products, setProducts] = useState([]);

    const addProduct = (product) => {
      setProducts([...products, { ...product, id: products.length + 1 }]);
    };
  
    const deleteLatestProduct = () => {
      setProducts(products.slice(0, -1));
    };

    const deleteRowProduct = (id) => {
        setProducts(products.filter(product => product.id !== id));
      };

    return (
        <div className='font-roboto bg-white'>
            <Header />
            <CreateForm 
                addProduct={addProduct} 
            />
            <div className='divider'></div> 
            <TableList 
                products={products} 
                deleteLatestProduct={deleteLatestProduct} 
                deleteRowProduct={deleteRowProduct}
            />
        </div>
    );
}