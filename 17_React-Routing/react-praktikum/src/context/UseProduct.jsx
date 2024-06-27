import { useContext } from 'react';
import { ProductContext } from './ProductContext';

export const useProduct = () => useContext(ProductContext);