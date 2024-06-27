import { useState } from 'react';
import CreateForm from '../components/createProduct/CreateForm';
import TableList from '../components/createProduct/TableList';
import DeleteConfirm from '../components/modal/DeleteConfirm';
import { useProduct } from '../hooks/UseProduct';
import { Outlet } from 'react-router-dom';

export default function CreateProduct() {
  const { products, deleteLatestProduct, addProduct, deleteRowProduct } = useProduct();
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const [deleteType, setDeleteType] = useState(null);

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
      deleteLatestProduct();
    }
    closeDeleteModal();
  };

  return (
    <div className='font-roboto bg-white'>
      <CreateForm addProduct={addProduct} />
      <div className='divider'></div>
      <TableList products={products} deleteLatestProduct={deleteLatestProduct} openDeleteModal={openDeleteModal} />
      <DeleteConfirm isOpen={isDeleteModalOpen} onConfirm={confirmDelete} onCancel={closeDeleteModal} />
      <Outlet />
    </div>
  );
}
