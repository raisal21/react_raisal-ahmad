import { useParams } from 'react-router-dom';
import { useProduct } from '../hooks/UseProduct';

const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useProduct();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="p-4 bg-white h-screen text-black">
      <h1 className="text-xl font-bold mb-4 text-black">Product Detail</h1>
      <pre>{JSON.stringify(product, null, 2)}</pre>
    </div>
  );
};

export default ProductDetail;
