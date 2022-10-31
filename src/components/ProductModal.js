import React, { useState } from "react";
import PictureForm from "./PictureCard";

function ProductModal({ open, handleClose, handleOpen }) {
  const [form, setForm] = useState({
    useCategory: "",
    usePrice: "",
    useTitle: "",
    useDescription: "",
    useDtae: "",
    usePicture: ""
  })

  const categoryHandler = (e) => {
    setForm((prevState) => {
      return ({ ...prevState, useCategory: e.target.value })
    })
    console.log(form);
  }

  const priceHandler = (e) => {
    setForm((prevState) => {
      return ({ ...prevState, usePrice: e.target.value })
    })
    console.log(form);
  }

  const descriptionHandle = (e) => {
    setForm((prevState) => {
      return ({ ...prevState, useDescription: e.target.value })
    })
    console.log(form);
  }

  const titleHandleChange = (e) => {
    setForm((prevState) => {
      return ({ ...prevState, useTitle: e.target.value })
    })
    console.log(form);
  }
  const dateHandler = (e) => {
    setForm((prevState) => {
      return ({ ...prevState, useDtae: e.target.value })
    })
    console.log(form);
  }
  const pictureHandler = (e) => {
    setForm((prevState) => {
      return ({ ...prevState, usePicture: e.target.value })
    })
    console.log(form);
  }
  const handleSudmit = (e) => {
    e.preventDefault()
    const saveProduct = {
      category: form.useCategory,
      price: form.usePrice,
      description: form.useDescription,
      title: form.useTitle,
      date: form.useDtae,
      picture: form.usePicture
    }
    console.log('SAVE PRODUCT FORM ===', saveProduct);
  }

  return (
    <>
      {/* Add Product Modal */}
      <div
        open={open}
        handleClos={handleClose}
        handleOpen={handleOpen}
        id='addNewProductModal'
        className='fixed z-10 inset-0 overflow-y-auto'
        role='dialog'
        aria-modal='true'
      >
        <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
          <div
            className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
            aria-hidden='true'
          ></div>
          <span
            className='hidden sm:inline-block sm:align-middle sm:h-screen'
            aria-hidden='true'
          >
            &#8203;
          </span>
          <div className='relative inline-block align-bottom bg-red-100 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6'>
            <div className='absolute top-0 right-0 pt-4 pr-4'>
              <button
                onClick={handleClose}
                type='button'
                className='bg-bg-red-100 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-300'
              >
                <span className='sr-only'>Close</span>
                <svg
                  className='h-12 w-12'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
            <div className='sm:flex sm:items-start'>
              <div className='bg-red-100 py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24'>
                <div className='relative max-w-xl mx-auto'>
                  <div className='text-center'>
                    <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
                      Add New Product
                    </h2>
                    
                  </div>
                  <div className='mt-12'>
                    <form
                      onSubmit={handleSudmit}
                      name='addProduct'
                      action='#'
                      method='POST'
                      className='grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'
                     >
                      <div className='sm:col-span-2'>
                        <label
                          for='name'
                          className='block text-sm font-medium text-gray-700'
                        >
                          Title
                        </label>
                        <div className='mt-1'>
                          <input
                            type='text'
                            name='name'
                            id='name'
                            autocomplete='name'
                            onChange={titleHandleChange}
                            value={form.useTitle}
                            className='py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md'
                          />
                        </div>
                      </div>

                      <div className='sm:col-span-2'>
                        <label
                          for='price'
                          className='block text-sm font-medium text-gray-700'
                        >
                          Price
                        </label>
                        <div className='mt-1'>
                          <input
                            id='price'
                            name='price'
                            type='number'
                            onChange={priceHandler}
                            value={form.usePrice}
                            autocomplete='price'
                            className='py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md'
                          />
                        </div>
                      </div>
                      <div className='sm:col-span-2'>
                        <label
                          for='category'
                          className='block text-sm font-medium text-gray-700'
                        >
                          Category
                        </label>
                        <div className='mt-1'>
                          <select
                            id='category'
                            name='category'
                            type='text'
                            autocomplete='category'
                            onChange={categoryHandler}
                            value={form.useCategory}
                            className='py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md'
                          >
                            <option value='men'>Men</option>
                            <option value='women'>Women</option>
                            <option value='kids'>Kids</option>
                          </select>
                        </div>
                      </div>
                      <div className='sm:col-span-2'>
                        <label
                          for='date'
                          className='block text-sm font-medium text-gray-700'
                        >
                          Date
                        </label>
                        <div className='mt-1'>
                          <input
                            id='date'
                            name='date'
                            type='date'
                            autocomplete='date'
                            onChange={dateHandler}
                            value={form.useDtae}
                            className='py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md'
                          />
                        </div>
                      </div>
                      <div className='sm:col-span-2'>
                        <div className='sm:col-span-6'>
                          <label
                            for='product-photo'
                            className='block text-sm font-medium text-gray-700'
                          >
                            Product photo{" "}
                          </label>
                          <div className='mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md'>
                            <div className='space-y-1 text-center'>
                              <svg
                                className='mx-auto h-12 w-12 text-gray-400'
                                stroke='currentColor'
                                fill='none'
                                viewBox='0 0 48 48'
                                aria-hidden='true'
                              >
                                <path
                                  d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                                  stroke-width='2'
                                  stroke-linecap='round'
                                  stroke-linejoin='round'
                                />
                              </svg>
                              <div className='flex text-sm text-gray-600'>
                                <label
                                  for='photo'
                                  className='relative cursor-pointer bg-white rounded-md font-medium text-lg text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500'
                                >
                                  <span>Upload a file</span>
                                  <input
                                    id='photo'
                                    name='photo'
                                    type='file'
                                    onChange={pictureHandler}
                                    value={form.usePicture}
                                    className='sr-only'
                                  />
                                </label>
                              </div>
                              <p className='text-gray-500'>
                                PNG or JPG up to 10MB
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='sm:col-span-2'>
                        <label
                          for='desrciption'
                          className='block text-sm font-medium text-gray-700'
                        >
                          Desrciption
                        </label>
                        <div className='mt-1'>
                          <textarea
                            id='desrciption'
                            name='desrciption'
                            rows='4'
                            onChange={descriptionHandle}
                            value={form.useDescription}
                            className='py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md'
                          ></textarea>
                        </div>
                      </div>

                      <div className='sm:col-span-2'>
                        <button
                          onSubmit={handleSudmit}
                          type='submit'
                          className='w-full inline-flex items-center justify-center px-6 py-3 text-2xl font-medium rounded-md text-white bg-green-400 hover:bg-green-300'
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductModal;