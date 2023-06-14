import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DLT } from "../Redux/Actions/Action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProductDetails() {
  const [Data, SetData] = useState([]);

  const { id } = useParams();


  const dispatch = useDispatch();
  const carts = useSelector((state) => state.CartRedcuer.Carts);

  const DLt = (id) => {
    dispatch(DLT(id));
  };

  const compare = () => {
    let ComparedData = carts.filter((product) => {
      return product.id == id;
    });

    SetData(ComparedData);
  };

  useEffect(() => {
    compare();
  }, [id]);
  return (
    <div className="w-[100%] h-[100vh] bg-pink-500 flex justify-center items-center ">
      <ul className="flex flex-row w-[100%]">
        {Data.map((product, index) => (
          <div className="w-[100%] h-[60vh]  flex flex-row justify-center items-center"
          style={{background: 'rgb(63,94,251)',
            background: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 42%, rgba(144,84,189,1) 43%)'}}>
            <div className="w-[60%] h-[60vh]">
              <img
                className="w-[60%] h-[50vh] rounded-xl mt-11"
                src={product.thumbnail}
                alt=""
              />
            </div>
            <div className=" w-[50vh] h-[50vh] flex flex-col items-center">
                
<div className="w-[100%] flex text-3xl "><h1 className=" ml-10">{product.title}</h1></div>
<div className="w-[100%] flex text-3xl mt-5 "><h1 className="ml-10">₹
{product.price}</h1></div>
<div className="w-[100%] flex text-lg mt-5 text-zinc-700  "><h1 className="w-[420px] ml-8">{product.description}</h1></div>
<div className="w-[100%] flex text-lg mt-5 font-semibold text-black  "><h1 className=" ml-8"> Rating:  {product.rating}</h1></div>
<div className="w-[100%] flex text-lg mt-3 text-black  "><h1 className=" ml-8"> ⭐⭐⭐⭐⭐</h1></div>
<div className="w-[100%] flex text-lg mt-5 font-semibold text-black  "><h1 className=" ml-8">Category:  {product.category}</h1></div>
<div className="w-[100%] flex text-lg mt-5 font-semibold text-black  "><h1 className=" ml-8">Brand:  {product.brand}</h1></div>
<div className="w-[100%] flex text-lg mt-5 font-semibold text-black  "><h1 className=" ml-8">Price:  {product.price}/-</h1> <h1 className=" ml-8 bg-red-300 px-4 py-2 font-bold text-2xl rounded-md" onClick={()=>{
 let a = product.price 
 a=a+a
 console.log(a)
}}>+</h1>
<h1 className=" ml-8 bg-red-300 px-4 py-2 font-bold text-2xl rounded-md">-</h1></div>

<div className="w-[100%] flex text-lg mt-5 font-semibold text-black justify-center  "><a   onClick={() => {DLt(product.id)
                                          console.log(product.id)
                                            toast('🦄 Removed Item Successfully', {
                                                position: "top-center",
                                                autoClose: 5000,
                                                hideProgressBar: false,
                                                closeOnClick: true,
                                                pauseOnHover: true,
                                                draggable: true,
                                                progress: undefined,
                                                theme: "light",
                                                })
                                        
                                        }}  className="relative px-5 py-3 overflow-hidden cursor-pointer font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
<span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
<span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
<span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
<span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
<span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
<span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Remove From Cart</span>
</a></div>


            </div>
          </div>
        ))}
      </ul>

      <ToastContainer />
    </div>
  );
}
