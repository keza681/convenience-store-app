import React, { useState } from "react";
import ProductModal from "./ProductModal";
import axios from 'axios'
import SingleCard from "./singleCard";

function HomePage() {
  const [open, setOpen] = useState(false);
  const [productList, setProductList] = useState([]);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  const fetchProducts = async () => {
    const response = await axios.get("http://localhost:5003/products");
    setProductList(response.data.data);
  }
  if (productList.length < 1) {
    fetchProducts();
  }

  return (
    <>
      <div className='relative bg-red-100 overflow-hidden'>
        <div className='relative pt-6 pb-16 sm:pb-24'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6'>
            <nav className='relative flex items-center justify-between sm:h-10 md:justify-center'>
              <div className='flex items-center flex-1 md:absolute md:inset-y-0 md:left-0'>
                <div className='flex items-center justify-between w-full md:w-auto'>
                  <button>
                    <span className="material-symbols-outlined text-7xl mt-4">
                      local_convenience_store
                    </span>
                  </button>
                </div>
              </div>

            </nav>
          </div>
          <div className='mt-16 mx-auto max-w-7xl px-4 sm:mt-24'>
            <div className='text-center'>
              <h1 className='text-3xl tracking-tight font-bold text-gray-900 sm:text-4xl md:text-5xl'>
                <span className='block xl:inline'>
                  Local Convenience {' '}
                </span>
                <span className='block text-black-300 xl:inline'>Store Ltd</span>
              </h1>
              <p className='max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>
                A convenience store for a small retail business that stocks a
                range of everyday items such as coffee, groceries, snack foods,
                confectionery, soft drinks, ice creams, etc.
              </p>
            </div>
          </div>

          <div className='max-w-7xl mx-auto px-4 sm:px-6'>
            <nav className='relative flex items-center justify-between sm:h-10 md:justify-center'>
              <div className='md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0'>
                <div className='mt-3 rounded-md shadow sm:mt-0 sm:ml-3'>
                  <button
                    onClick={handleOpen}
                    className='w-full flex items-center justify-center px-8 py-3 border border-black-500 text-base font-medium rounded-md text-black-600 bg-gray-100 hover:bg-gray-50 md:py-4 md:text-lg md:px-10'
                  >
                    Add New
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {open && (
        <ProductModal handleClose={handleClose} handleOpen={handleOpen} setData={setProductList} data={productList} />
      )}

      <div className='p-8 bg-[#f3f3f3]'>
        <SingleCard data={productList} />
      </div>


    </>
  );
}

export default HomePage;