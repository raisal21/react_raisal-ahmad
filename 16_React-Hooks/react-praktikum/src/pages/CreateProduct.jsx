import { useState } from 'react';
import Header from '../components/Header';
import CreateForm from '../components/CreateForm';
import TableList from '../components/TableList';
import DeleteConfirm from '../components/modal/DeleteConfirm';

export default function CreateProduct() {
    const [products, setProducts] = useState([]);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [productToDelete, setProductToDelete] = useState(null);
    const [deleteType, setDeleteType] = useState(null);

    const addProduct = (product) => {
      setProducts([...products, { ...product, id: products.length + 1 }]);
  };

  const deleteLatestProduct = () => {
    if (products.length > 0) {
        setProductToDelete(products[products.length - 1]);
        setDeleteType('latest');
        setDeleteModalOpen(true);
    }
};

  const deleteRowProduct = (id) => {
      setProducts(products.filter(product => product.id !== id));
      closeDeleteModal();
  };

  const openDeleteModal = (product) => {
      setProductToDelete(product);
      setDeleteType('row');
      setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
      setProductToDelete(null);
      setDeleteType(null);
      setDeleteModalOpen(false);
  };

  const confirmDelete = () => {
    if (deleteType === 'row' && productToDelete) {
        deleteRowProduct(productToDelete.id);
    } else if (deleteType === 'latest') {
        setProducts(products.slice(0, -1));
        closeDeleteModal();
    }
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
                openDeleteModal={openDeleteModal}
            />
            <DeleteConfirm 
                isOpen={isDeleteModalOpen} 
                onConfirm={confirmDelete} 
                onCancel={closeDeleteModal} 
            />
        </div>
    );
}