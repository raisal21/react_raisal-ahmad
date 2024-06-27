import { useDispatch } from 'react-redux';
import { deleteLatestProduct, deleteRowProduct } from '../store/productSlice';
import { useState } from 'react';
import CreateForm from '../components/createProduct/CreateForm';
import TableList from '../components/createProduct/TableList';
import DeleteConfirm from '../components/modal/DeleteConfirm';
import { Outlet } from 'react-router-dom';

export default function CreateProduct() {
  const dispatch = useDispatch();
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const [deleteType, setDeleteType] = useState(null);

  const openDeleteModal = (product, type) => {
    setProductToDelete(product);
    setDeleteType(type);
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setProductToDelete(null);
    setDeleteType(null);
    setDeleteModalOpen(false);
  };

  const confirmDelete = () => {
    if (deleteType === 'row' && productToDelete) {
      dispatch(deleteRowProduct(productToDelete.id)); // Dispatch the action to delete the row product
    } else if (deleteType === 'latest') {
      dispatch(deleteLatestProduct());
    }
    closeDeleteModal();
  };

  return (
    <div className='font-roboto bg-white'>
      <CreateForm />
      <div className='divider'></div>
      <TableList openDeleteModal={openDeleteModal} />
      <DeleteConfirm isOpen={isDeleteModalOpen} onConfirm={confirmDelete} onCancel={closeDeleteModal} />
      <Outlet />
    </div>
  );
}
