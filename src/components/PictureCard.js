import React from "react";

const PictureForm = ({ saveProduct }) => {
    console.log(saveProduct);
    return (
        <div>
            <li class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
                <div class="flex-1 flex flex-col p-8">

                    <img class="w-50 h-50 flex-shrink-0 mx-auto "
                        src="https://plus.unsplash.com/premium_photo-1661265937496-76adfe4beb54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                        alt="" />

                    <h3 class="mt-6 text-gray-900 text-2xl font-medium">Product name</h3>
                    <dl class="mt-1 flex-grow flex flex-col justify-between">
                        <dd class="text-gray-500 text-lg">Frw.</dd>
                        <dd class="text-gray-500 text-lg">description: </dd>
                        <dd class="mt-3">
                            <span
                                class="px-3 py-2 text-center text-green-800 text-lg  font-medium bg-green-100 rounded-full">CATEGORY :</span>
                        </dd>
                    </dl>
                </div>
                <a href="#"
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-gray-100 hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                    View 
                </a>
            </li>

            <li class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
                <div class="flex-1 flex flex-col p-8">

                    <img class="w-40 h-30 flex-shrink-0 mx-auto "
                        src="https://plus.unsplash.com/premium_photo-1664374288538-8cf4ccb17890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt="" />

                    <h3 class="mt-6 text-gray-900 text-2xl font-medium">Product name</h3>
                    <dl class="mt-1 flex-grow flex flex-col justify-between">
                        <dd class="text-gray-500 text-lg">Frw.</dd>
                        <dd class="text-gray-500 text-lg">description: </dd>
                        <dd class="mt-3">
                            <span
                                class="px-3 py-2 text-center text-green-800 text-lg  font-medium bg-green-100 rounded-full">CATEGORY :</span>
                        </dd>
                    </dl>
                </div>
                <a href="#"
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-gray-100 hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                    View 
                </a>
            </li>
        </div>
    )
}
export default PictureForm;