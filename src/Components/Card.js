import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropagateLoader from "react-spinners/PropagateLoader";


import { dispatch} from 'redux'
import Data from "./APIs/API";

import { ADD } from "../Redux/Actions/Action";


export default function Card() {
  const Watch = JSON.parse(localStorage.getItem('Data'))
  const Watch1 = localStorage.getItem('dat')
  const [items, setitems] = useState(Watch);


  const dispatch = useDispatch();
 
  const getdata = useSelector((state) => state.CartRedcuer.Carts);


  const send = (e) => {
    dispatch(ADD(e));
  };
  const [loading,setloading]=useState(false);
  useEffect(()=>{
setloading(true);
setTimeout(()=>{
setloading(false);
},10)
  },[])
  
  return (
    
    
    
    <div className='w-[100%] h-auto bg-amber-400'>
       {loading ?(
         <div className="App bg-black flex  flex-col w-[100%] justify-center items-center  h-[100vh]"   >

<PropagateLoader   color='red' />
         <h1 className='text-4xl text-neutral-200 mt-10'>Loading Products...</h1>
       </div>
      ):

  <ul
          className="lg:w-[100%] 
          lg:grid grid-cols-3 rounded-xl"
        >
          {items.map((product, index) => (
            <div
              className="w-[40vh] shadow-2xl     h-[47vh] max-w-sm bg-white border  rounded-xl    ml-10 mt-24"
              key={product.id}
            >
              <a >
                <img
                  className="h-[25vh] w-[100%] "
                  src={product.thumbnail}
                  alt="product image"
                />
              </a>
              <div className="px-5 mt-6 pb-5">
                <a >
                  <h5 className="text-xl font-semibold tracking-tight  text-red-700 text-center mt-1">
                    {product.title}
                  </h5>
                </a>
               <div>
                {/* <span>
                  {product.description}
                </span> */}
               </div>
                <div className="flex items-center justify-between ">
                  <span className="text-lg font-bold text-red-600 sm:mt-16">
                    ${product.price}
                  </span>
                  <div className='w-[100%] rounded-lg h-[5vh] sm:mt-12 '>
                </div>
                </div>
              </div>
              
                <a  class="relative inline-flex items-center justify-start px-12 cursor-pointer   py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
<span class="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
<span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white"   onClick={() => {
  send(product)
  toast.success('Added To Cart Successfully.')
}
}>Add To Cart</span>
</a>
            </div>
          ))}
        </ul>}
        <ToastContainer/>
</div>
  )
}
