import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { DLT } from "../Redux/Actions/Action";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PropagateLoader } from 'react-spinners';


import { Dispatch } from "redux";




export default function Cart() {
  const [open, setOpen] = useState(true)
  const dispatch = useDispatch();
  const getdata = useSelector((state) => state.CartRedcuer.Carts);

  let carts = getdata;


  const DLt = (id) => {
    dispatch(DLT(id));
  };


  let a;
  if (carts.length === 0) {
    a =  <img src="https://cdn.dribbble.com/users/2433152/screenshots/6181369/empty_state.png" alt="" />;
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
           
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                            <Link to={'/Home'}>
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                            >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                              </Link>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                              <div><h1 className="text-6xl">{a}</h1></div>
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {carts.map((product,id) => (
                              <li key={product.id} className="flex py-6">
                                <Link to={'/Cart/'+`${product.id}`}>
                                <div className="h-32 w-32 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"  >
                                  <img
                                    src={product.thumbnail}
                                    
                                    className="h-full w-full object-cover object-center cursor-pointer"
                                    />
                                </div>
                                    </Link>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900 cursor-pointer">
                                      <h3>
                                        <a href={product.href}>{product.title}</a>
                                      </h3>
                                      <p className="ml-4">{product.price}</p>
                                    </div>
                                   
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">Qty {carts.length}</p>

                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                        onClick={() => {DLt(product.id)
                                        
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
                                        
                                        }} >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <span className="font-semibold">
              {" "}
              ₹

              {carts
                .map((items) => items.price)
                .reduce((total, value) => total + value, 0)}
            </span>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div className="mt-6">
                        <a
                        
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Checkout
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or
                          <Link to={'/Home'}>
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => setOpen(false)}
                            >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                              </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
        <ToastContainer/>
      </Dialog>
    </Transition.Root>
  )
}
