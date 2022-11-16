import React from "react";

const PictureForm = ({ item }) => {
    const { _id, image, title, price } = item;
    return (
        <div>
            <li class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200 h-[600px]">
                <div class="flex-1 flex flex-col">

                    <img class="w-[100%] h-[300px] flex-shrink-0 mx-auto "
                        src={`http://localhost:5003/images/${image}`}
                        alt="" />
                    <div>
                        <h3 class="mt-6 text-gray-900 text-2xl font-medium">Title: {title}</h3>
                        <dl class="mt-1 flex-grow flex flex-col justify-between">
                            <dd class="text-gray-500 text-lg">Price: {price}{""}$</dd>
                            <dd class="text-gray-500 text-lg">{'description'} </dd>
                            <dd class="mt-3">
                                <span
                                    class="px-3 py-2 text-center text-green-800 text-lg  font-medium bg-green-100 rounded-full">{'category'}</span>
                            </dd>
                        </dl>

                    </div>


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