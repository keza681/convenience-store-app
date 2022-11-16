import React, { useState } from "react";
import axios from "axios";

function ProductModal({ open, handleClose, handleOpen, props }) {
  const [form, setForm] = useState({
    title: "",
    price: "",
    description: "",
    image: ""
  });
  const [image, setImage] = useState("")

  const formHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", form.title);
    formData.append("price", form.price)
    await axios.post("http://localhost:5003/products", formData)
    props.setData([...props.data, form])
    setForm({
      title: "",
      price: "",
      description: "",
      image: ""
    });
  }
  const getChangeImage = (e) => {
    setImage(e.target.files[0])
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
                      name='addProduct'
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
                            onChange={formHandler}
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
                            onChange={formHandler}
                            value={form.price}
                            autocomplete='price'
                            className='py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md'
                          />
                        </div>
                      </div>

                      <div className='sm:col-span-2'>
                        <label
                          for='price'
                          className='block text-sm font-medium text-gray-700'
                        >
                          Image
                        </label>
                        <div className='mt-1'>
                          <input
                            id='image url'
                            name='image'
                            type='file'
                            onChange={getChangeImage}
                            autocomplete='image'
                            className='py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md'
                          />
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
                            id='image url'
                            name='description'
                            type='text'
                            placeholder='enter the description'
                            onChange={formHandler}
                            value={form.description}
                            autocomplete='description'
                            className='py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md'
                          />
                        </div>
                      </div>

                      <div className='sm:col-span-2'>
                        <button
                          onClick={handleSubmit}
                          type='submit'
                          className='w-full inline-flex items-center justify-center px-6 py-3 text-2xl font-medium rounded-md text-white bg-green-400 hover:bg-green-300'
                        >
                          Add product
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