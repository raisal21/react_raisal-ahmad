/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import LanguageT from './toogle/LanguageT';
import TailwindLogo from '../assets/icons/Tailwind.svg';
import Info from '../assets/icons/Info(2).svg';
import { ErrorAlert } from './modal/ErrorAlert';
import { SuccessAlert } from './modal/SuccessAlert';
import  LoginAlert from './modal/LoginAlert';
import {
  validateProductName,
  validateProductCategory,
  validateProductImage,
  validateProductFreshness,
  validateProductPrice,
  validateAllFields
} from '../services/validationServices';
import { heading } from '../services/translationServices';

export default function CreateForm({addProduct}) {
  const [formValues, setFormValues] = useState({
    name: '',
    category: '',
    image: null,
    desc: '',
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
    desc: '',
    freshness: '',
    price: '',
  };

  const [language, setLanguage] = useState('en');
  const [showLoginAlert, setShowLoginAlert] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  useEffect(() => {
    setShowLoginAlert(true);
    const timer = setTimeout(() => {
      setShowLoginAlert(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };
  

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
      setShowSuccessAlert(true);
      setShowErrorAlert(false);
      setFormValues(cleanValues);
      console.log('Form is valid:', formValues);
      setTimeout(() => {
        setShowSuccessAlert(false);
      }, 3000);
    } else {
      setShowErrorAlert(true);
      setShowSuccessAlert(false);
      setTimeout(() => {
        setShowErrorAlert(false);
      }, 3000);
    }
    };

    function handleClickRandom() {
      const randomNumber = Math.floor(Math.random() * 1000); 
      console.log('Random Number Tailwind Logo:', randomNumber); 
    }

  return (
    <>
        <div className='flex justify-end'>
          {showLoginAlert && <LoginAlert />}
        </div>
        
        <section className="mx-auto lg:w-[936px]">
          <div className='flex justify-start mt-4'>
            <LanguageT onChange={handleLanguageChange} />
          </div>

          <div className="flex flex-col items-center text-center text-[#212529] space-y-2">
            <a href="#" onClick={handleClickRandom}>
              <img className="sm:w-[72px]" src={TailwindLogo} alt="Tailwind Logo" />
            </a>
            <h1 className="sm:text-xl md:text-3xl font-semibold leading-[38px]">
              {heading.title[language]}
            </h1>
            <p className="sm:text-[10px] lg:text-xl lg:leading-[30px] font-thin sm:w-72 md:w-96 lg:w-full">
              {heading.description[language]}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="lg:mx-[140px] sm:px-2 lg:px-6 sm:py-3 lg:py-12 grid grid-cols-1 gap-7">
            <div className="inline-flex items-center gap-2">
              <h2 className="font-semibold md:text-2xl text-[#212529]">
              {heading.form_title[language]}
              </h2>
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
              <label htmlFor="name" className="sm:text-xs lg:text-base font-normal">
                {heading.form_name[language]}
              </label>
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
              <label htmlFor="category" className="sm:text-xs lg:text-base font-normal">
                {heading.form_category[language]}
              </label>
              <select
                id="category"
                name="category"
                className={`select select-bordered w-full sm:select-sm md:select-md sm:text-[10px] lg:text-base ${formErrors.category ? 'border-red-500' : ''}`}
                value={formValues.category || ""}  // Set default value here
                onChange={handleChange}
              >
                <option value="" disabled>{heading.category_choose[language]}</option> 
                <option value="Electronics">{heading.category_electronics[language]}</option>
                <option value="Clothing">{heading.category_clothing[language]}</option>
                <option value="Home">{heading.category_home[language]}</option>
                <option value="Other">{heading.category_other[language]}</option>
              </select>
              {formErrors.category && <span className="text-red-500">{formErrors.category}</span>}
            </div>

            <div className="grid grid-rows-2 text-[#212529]">
              <label htmlFor="image" className="sm:text-xs lg:text-base font-normal">
                {heading.form_image[language]}
              </label>
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
              <legend className="sm:text-xs lg:text-base font-normal">
                {heading.form_freshness[language]}
              </legend>

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
                  <span className="label-text sm:text-xs lg:text-base">{heading.freshness_new[language]}</span>
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
                  <span className="label-text sm:text-xs lg:text-base">{heading.freshness_second[language]}</span>
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
                  <span className="label-text sm:text-xs lg:text-base">{heading.freshness_refurbished[language]}</span>
                </label>
              </div>
              {formErrors.freshness && <span className="text-red-500">{formErrors.freshness}</span>}
            </fieldset>

            <div className="grid text-[#212529] space-y-6">
              <label htmlFor="desc" className="sm:text-xs lg:text-base font-normal">{heading.form_desc[language]}</label>
              <textarea
                id="desc"
                name="desc"
                className="textarea sm:textarea-sm md:textarea-md"
                value={formValues.desc}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-rows-2 text-[#212529]">
              <label htmlFor="price" className="text-base font-normal">
                {heading.form_price[language]}
              </label>
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

            {showErrorAlert && (
              <ErrorAlert message="Please correct the errors in the form." />
            )}

            {showSuccessAlert && (
              <SuccessAlert />
            )}

            <div className="lg:px-10 lg:mt-16">
              <button type="submit" className="btn btn-primary w-full lg:text-xl lg:tooltip" data-tip="Pastikan data yang di input benar!">
                {heading.button_submit[language]}
              </button>
            </div>
          </form>
        </section>
    
    </>

  );
}
