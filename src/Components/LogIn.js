import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropagateLoader from "react-spinners/PropagateLoader";
import { useState } from 'react';



export default function LogIn() {
  const [loading,setloading]=useState(false);
  useEffect(()=>{
setloading(true);
setTimeout(()=>{
setloading(false);
},2000)
  },[])
  
   
  return (
    <div className='w-[100%] h-[100vh] bg-orange-400' >
      <section className="bg-gray-50 " style={{backgroundImage:'url( https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a65f1b65-2580-4dba-a69c-6cb8799492d2/d727cq3-498b026e-d0b8-4af3-b0fc-243b3d2d5784.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E2NWYxYjY1LTI1ODAtNGRiYS1hNjljLTZjYjg3OTk0OTJkMlwvZDcyN2NxMy00OThiMDI2ZS1kMGI4LTRhZjMtYjBmYy0yNDNiM2QyZDU3ODQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.9eJtF9ZBB0NnJ6y31WAar-U3Kv79LY8YcmcaB0UKC0E)',
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover'}}>
       {loading ?(
         <div className="App bg-black flex  flex-col w-[100%] justify-center items-center  h-[100vh]"  style={{backgroundImage:'url( https://media1.giphy.com/media/JpScsr53qh6sR6dSeJ/giphy.gif)',
         backgroundRepeat:'no-repeat',
         backgroundSize:'cover'}} >

<PropagateLoader color="#36d7b7"   />
         <h1 className='text-4xl text-neutral-200 mt-10'>Please Wait...</h1>
       </div>
      ):
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
          Universal Store
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required/>
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required/>
                          </div>
                          <div className="ml-3 text-sm">
                            <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 text-white">Forgot password?</a>
                  </div>
                  <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-lime-500" onClick={()=>{

let email1 = document.getElementById('email').value
let password = document.getElementById('password').value

console.log(email1)

                    let email = JSON.parse(sessionStorage.getItem('Email'))
                    
                    let pass = JSON.parse(sessionStorage.getItem('Pass'))
                    
                    if(email==email1,password==pass){
                        setTimeout(() => window.location.href='http://localhost:3000/Home', 5000);
                        toast.success('Log In Successfully')
                        setTimeout(() => toast('🦄 Redirecting To Home Page', {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            }), 3000);
                    }else{
                        toast.error('Please Enter Valid Crendtials.')
                    }

                  }}>Sign in</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500"><Link to={'/'}>Sign Up</Link></a>
                  </p>
             
          </div>
      </div>
  </div>}
</section>
<ToastContainer/>
    </div>
  )
}
