import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import CreateProduct from '../pages/CreateProduct';
import ProductDetail from '../pages/ProductDetail';
import PrivateRoute from './PrivateRoutes';
import { ProductProvider } from '../context/ProductContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/products",
    element: <PrivateRoute element={<CreateProduct />} />,
  },
  {
    path: "/products/:id",
    element: <ProductDetail />,
  },
]);

const AppRoutes = () => {
  return (
    <ProductProvider>
      <RouterProvider router={router} />
    </ProductProvider>
  );
};

export default AppRoutes;
