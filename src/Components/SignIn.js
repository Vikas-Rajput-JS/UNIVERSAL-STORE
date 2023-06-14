import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropagateLoader from "react-spinners/PropagateLoader";
import { useState } from 'react';

export default function SignIn() {
   
    const [loading,setloading]=useState(false);
  useEffect(()=>{
setloading(true);
setTimeout(()=>{
setloading(false);
},2000)
  },[])
//   https://media1.giphy.com/media/JpScsr53qh6sR6dSeJ/giphy.gif
  return (
    <div className='w-[100%] h-[100vh] bg-orange-400  ' style={{backgroundImage:'url(https://res.cloudinary.com/practicaldev/image/fetch/s--Rpm5i2vq--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zzszorn7hxyvther2lea.gif)',
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover'}}>
         {loading ?(
         <div className="App bg-black flex  flex-col w-[100%] justify-center items-center  h-[100vh]" >

<PropagateLoader color="#36d7b7"  />
         <h1 className='text-4xl text-neutral-200 mt-10'>Please Wait...</h1>
       </div>
      ):
     
<div className="bg-grey-lighter min-h-screen flex flex-col ">
            <div className="container max-w-sm mx-auto flex-1 w-[60%] flex flex-col items-center justify-center px-2 shadow-2xl shadow-black">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    

                    <input id='input1'
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Full Name" required />

                    <input 
                    id='input2'
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" required />

                    <input 
                    id='input3'
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" required />
                    <input 
                    
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password" required />

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-green text-black bg-amber-500 hover:bg-green-dark focus:outline-none my-1"
                        onClick={()=>{

                            
                            let inpt = document.getElementById('input1').value
                            let inpt2 = document.getElementById('input2').value
                            let inpt3 = document.getElementById('input3').value
                            
                            
                
                            
                            if(inpt!='',inpt2!='',inpt3!=''){
                                // window.location.href='http://localhost:3000/login'
                                toast.success('Account created successfully.')
                               
                                
                                setTimeout(() => window.location.href='http://localhost:3000/login', 5000);
                                setTimeout(() => toast('🦄 Redirecting To LogIn Page', {
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
                     
                     
                        
                        
                        // localStorage.setItem('Name',JSON.stringify(inpt))
                        sessionStorage.setItem('Name',JSON.stringify(inpt))
                        sessionStorage.setItem('Email',JSON.stringify(inpt2))
                        sessionStorage.setItem('Pass',JSON.stringify(inpt3))
                        
                        
                        
                      }}>Create Account</button>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" >
                            Terms of Service
                        </a> and 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" >
                            Privacy Policy
                        </a>
                    </div>
                        
                </div>

                <div className="text-grey-dark mt-6 bg-cyan-400 rounded-2xl px-8 py-4">
                    Already have an account? 
                    <a className="no-underline border-b border-blue text-blue" href="/login">
                        Log in
                    </a>.
                </div>
            </div>
        </div>}
         <ToastContainer/>
    </div>

  )
}
