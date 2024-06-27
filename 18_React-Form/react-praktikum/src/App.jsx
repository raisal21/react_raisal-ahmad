import Header from './components/Header';
import { RouterProvider } from 'react-router-dom';
import AppRoutes from './routes/Router';
// import CreateProduct from "./pages/CreateProduct"
// import LandingPage from "./pages/LandingPage"

export default function App() {
  return (
    <>
      <Header />
      <AppRoutes />
    </>
  )
}