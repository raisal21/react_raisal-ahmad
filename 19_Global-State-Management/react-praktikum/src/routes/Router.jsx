import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import CreateProduct from '../pages/CreateProduct';
import ProductDetail from '../pages/ProductDetail';
import PrivateRoute from './PrivateRoutes';
import { Provider } from 'react-redux';
import store from '../store/store';

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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default AppRoutes;
