import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

export const useProduct = () => useContext(ProductContext);