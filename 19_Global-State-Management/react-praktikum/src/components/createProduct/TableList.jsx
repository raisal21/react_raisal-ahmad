/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TailwindLogo from '../../assets/icons/Tailwind.svg';
import AddNew from '../button/AddNewB';
import DelLatest from '../button/DeleteLatestB';
import DelRow from '../button/DeleteRowB';
import EditRow from '../button/EditRowB';
import Search from '../../assets/icons/Search.svg';

export default function TableList({ openDeleteModal }) {
  const products = useSelector((state) => state.product.products);
  const [searchTerm, setSearchTerm] = useState('');
  const [productsWithUUID, setProductsWithUUID] = useState([]);
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const updatedProducts = products.map(product => ({
      ...product,
      id: product.id || uuidv4()
    }));
    setProductsWithUUID(updatedProducts);
  }, [products]);

  const filteredProducts = productsWithUUID.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRowClick = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <section className="mx-auto grid grid-row-3 md:justify-center text-[#212529] sm:space-y-4 md:space-y-8 sm:px-2 md:px-6">
      <div className="flex flex-col items-center text-center text-[#212529] space-y-2">
        <a href="#" onClick={() => navigate("/")}>
          <img className="sm:w-[72px]" src={TailwindLogo} alt="Tailwind Logo" />
        </a>
        <h1 className="sm:text-xl md:text-3xl lg:text-3xl font-semibold lg:leading-[38px]">List Product&apos;s</h1>
        <p className="sm:text-[10px] lg:text-xl lg:leading-[30px] font-thin sm:w-72 md:w-96 lg:w-full text-center lg:px-[220px]">
          This table dynamically displays the product data you submit through the form above. It&apos;s built with Tailwind CSS for a clean, responsive, and easily customizable layout.
        </p>
      </div>

      <div className="flex md:justify-between md:flex-row sm:flex-col sm:space-y-2 md:space-x-0">
        <div className="flex sm:justify-between md:justify-start md:space-x-2">
          <AddNew />
          <DelLatest onClick={() => openDeleteModal(null, 'latest')}/>
        </div>

        <div className="flex items-center input sm:input-sm lg:input-md gap-2 max-w-xs">
          <img src={Search} alt="Search" />
          <input
            id="search"
            placeholder="Search"
            type="text"
            className="grow border-none focus:ring-0"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table sm:table-xs lg:table-lg" id="table">
          <thead className="border-t-2 border-b-4 lg:text-lg text-bold text-black">
            <tr>
              <th>Action</th>
              <th>No</th>
              <th>Product Name</th>
              <th>Product Category</th>
              <th>Image</th>
              <th>Product Freshness</th>
              <th>Additional Description</th>
              <th>Product Price</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product, index) => (
              <tr key={product.id} onClick={() => handleRowClick(product.id)}>
                <td className='flex gap-1'>
                  <EditRow />
                  <DelRow onClick={(e) => { e.stopPropagation(); openDeleteModal(product, 'row'); }} />
                </td>
                <td>{index + 1001}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>
                  <img src={URL.createObjectURL(product.image)} alt={product.name} className="w-20" />
                </td>
                <td>{product.freshness}</td>
                <td>{product.desc}</td>
                <td>{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
