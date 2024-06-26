/* eslint-disable react/prop-types */
import { useState } from 'react';
import TailwindLogo from '../assets/icons/Tailwind.svg';
import Info from '../assets/icons/Info(2).svg';
import { ErrorAlert } from './modal/ErrorAlert';
import { SuccessAlert } from './modal/SuccessAlert';
import {
  validateProductName,
  validateProductCategory,
  validateProductImage,
  validateProductFreshness,
  validateProductPrice,
  validateAllFields
} from '../services/validationServices';

export default function CreateForm({addProduct}) {
  const [formValues, setFormValues] = useState({
    name: '',
    category: '',
    image: null,
    freshness: '',
    price: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    category: '',
    image: '',
    freshness: '',
    price: '',
  });

  const cleanValues = {
    name: '',
    category: '',
    image: null,
    freshness: '',
    price: '',
  };

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormValues({
      ...formValues,
      [name]: files ? files[0] : value,
    });

    let error = '';
    switch (name) {
      case 'name':
        error = validateProductName(value);
        break;
      case 'category':
        error = validateProductCategory(value);
        break;
      case 'image':
        error = validateProductImage(files ? files[0] : value);
        break;
      case 'freshness':
        error = validateProductFreshness(value);
        break;
      case 'price':
        error = validateProductPrice(value);
        break;
      default:
        break;
    }
    setFormErrors({ ...formErrors, [name]: error });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateAllFields(formValues);
    setFormErrors(errors);

    if (!errors.name && !errors.category && !errors.image && !errors.freshness && !errors.price) {
        addProduct(formValues);
        setFormSubmitted(true);
        setFormValues(cleanValues)
        console.log('Form is valid:', formValues);
      } else {
        setFormSubmitted(false);
      }
    };

  return (
    <section className="mx-auto lg:w-[936px]">
      <div className="flex flex-col items-center text-center text-[#212529] space-y-2">
        <img className="sm:w-[72px]" src={TailwindLogo} alt="Tailwind Logo" />
        <h1 className="sm:text-xl  md:text-3xl font-semibold leading-[38px]">Create Product</h1>
        <p className="sm:text-[10px] lg:text-xl lg:leading-[30px] font-thin sm:w-72 md:w-96 lg:w-full">
          This form is built entirely with Tailwind CSS&apos;s utility classes, providing a flexible and customizable design. Each required input has validation states that are triggered when you try to submit the form without filling it out completely.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="lg:mx-[140px] sm:px-2 lg:px-6 sm:py-3 lg:py-12 grid grid-cols-1 gap-7">
        <div className="inline-flex items-center gap-2">
          <h2 className="font-semibold md:text-2xl text-[#212529]">Detail Product</h2>
          <div>
            <button type="button" className="btn btn-xs btn-circle bg-white border-2 border-[#00ACC1]" onClick={() => document.getElementById('modal_detail').showModal()}>
              <img src={Info} alt="Info" className="w-3" />
            </button>
            <dialog id="modal_detail" className="modal modal-bottom lg:modal-middle">
              <div className="modal-box bg-[#00ACC1] text-white">
                <h3 className="font-bold text-2xl">About Detail Product</h3>
                <p className="py-4">This section is for entering detailed information about the product you want to create. Fill out each field carefully to ensure accuracy and completeness of your product listing. <br /><br /> Press ESC key to close!</p>
              </div>
            </dialog>
          </div>
        </div>

        <div className="grid grid-rows-2 text-[#212529]">
          <label htmlFor="name" className="sm:text-xs lg:text-base font-normal">Product Name</label>
          <input
            id="name"
            name="name"
            type="text"
            className={`input input-bordered sm:input-sm md:input-md ${formErrors.name ? 'border-red-500' : ''}`}
            value={formValues.name}
            onChange={handleChange}
          />
          {formErrors.name && <span className="text-red-500">{formErrors.name}</span>}
        </div>

        <div className="grid grid-rows-2 text-[#212529]">
          <label htmlFor="category" className="sm:text-xs lg:text-base font-normal">Product Category</label>
          <select
            id="category"
            name="category"
            className={`select select-bordered w-full sm:select-sm md:select-md sm:text-[10px] lg:text-base ${formErrors.category ? 'border-red-500' : ''}`}
            value={formValues.category || ""}  // Set default value here
            onChange={handleChange}
          >
            <option value="" disabled>Choose</option> 
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Home">Home</option>
            <option value="Other">Other</option>
          </select>
          {formErrors.category && <span className="text-red-500">{formErrors.category}</span>}
        </div>

        <div className="grid grid-rows-2 text-[#212529]">
          <label htmlFor="image" className="sm:text-xs lg:text-base font-normal">Image of Product</label>
          <input
            id="image"
            name="image"
            type="file"
            className={`file-input sm:file-input-sm lg:file-input-md ${formErrors.image ? 'border-red-500' : ''}`}
            onChange={handleChange}
          />
          {formErrors.image && <span className="text-red-500">{formErrors.image}</span>}
        </div>

        <fieldset className="grid grid-rows-2 text-[#212529]">
          <legend className="sm:text-xs lg:text-base font-normal">Product Freshness</legend>

          <div className="flex">
            <label htmlFor="new" className="label cursor-pointer space-x-2">
              <input
                id="new"
                type="radio"
                name="freshness"
                className={`radio sm:radio-xs lg:radio-md ${formErrors.freshness ? 'border-red-500' : ''}`}
                value="Brand New"
                checked={formValues.freshness === "Brand New"}
                onChange={handleChange}
              />
              <span className="label-text sm:text-xs lg:text-base">Brand New</span>
            </label>
          </div>
          <div className="flex">
            <label htmlFor="second" className="label cursor-pointer space-x-2">
              <input
                id="second"
                type="radio"
                name="freshness"
                className={`radio sm:radio-xs lg:radio-md ${formErrors.freshness ? 'border-red-500' : ''}`}
                value="Second Hand"
                checked={formValues.freshness === "Second Hand"}
                onChange={handleChange}
              />
              <span className="label-text sm:text-xs lg:text-base">Second Hand</span>
            </label>
          </div>
          <div className="flex">
            <label htmlFor="refurbished" className="label cursor-pointer space-x-2">
              <input
                id="refurbished"
                type="radio"
                name="freshness"
                className={`radio sm:radio-xs lg:radio-md ${formErrors.freshness ? 'border-red-500' : ''}`}
                value="Refurbished"
                checked={formValues.freshness === "Refurbished"}
                onChange={handleChange}
              />
              <span className="label-text sm:text-xs lg:text-base">Refurbished</span>
            </label>
          </div>
          {formErrors.freshness && <span className="text-red-500">{formErrors.freshness}</span>}
        </fieldset>

        <div className="grid text-[#212529] space-y-6">
          <label htmlFor="desc" className="sm:text-xs lg:text-base font-normal">Additional Description</label>
          <textarea
            id="desc"
            name="desc"
            className="textarea sm:textarea-sm md:textarea-md"
            value={formValues.desc}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-rows-2 text-[#212529]">
          <label htmlFor="price" className="text-base font-normal">Product Price</label>
          <div className={`flex items-center input gap-2 sm:input-sm md:input-md ${formErrors.price ? 'border-red-500' : ''}`}>
            <span>$</span>
            <input
              id="price"
              name="price"
              type="text"
              className="grow border-none focus:ring-0"
              value={formValues.price}
              onChange={handleChange}
            />
          </div>
          {formErrors.price && <span className="text-red-500">{formErrors.price}</span>}
        </div>

        {Object.values(formErrors).some(error => error) && (
          <ErrorAlert message="Please correct the errors in the form." />
        )}

        {formSubmitted && (
          <SuccessAlert />
        )}

        <div className="lg:px-10 lg:mt-16">
          <button type="submit" className="btn btn-primary w-full lg:text-xl lg:tooltip" data-tip="Pastikan data yang di input benar!">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
