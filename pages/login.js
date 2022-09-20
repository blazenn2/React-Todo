import React, { useState, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const login = () => {
    const [isLogin, setIsLogin] = useState(1);
    const name = useRef('');
    const email = useRef('');
    const password = useRef('');
    const rePassword = useRef('');
    const submitHandler = e => {
        e.preventDefault();
        if (isLogin) {

        } else {
            if (email && password && rePassword && name) {
                if (password !== rePassword) notifyError("Your password doesn't match");
                
            } else notifyError("Sign up is incomplete")
        }
    };
    const notifyError = errorMsg => toast.error(errorMsg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const notifySuccess = successMsg => toast.success(successMsg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    return (
        <div className='h-screen flex items-center bg-light_blue relative'>
            <ToastContainer />
            <div className={`flex items-center justify-center ${isLogin ? "h-1/3 md:h-2/5 lg:h-2/6" : "h-2/5 md:h-1/2 lg:h-2/5"} w-full`}>
                <form className='w-4/5 md:w-1/2 lg:w-1/5 h-full rounded-lg bg-light_gray1 shadow-2xl p-8 flex flex-col justify-between' onSubmit={submitHandler}>
                    {isLogin ? (<>
                        <div className='flex items-center justify-start'>
                            <img src='./favicon-32x32.png' className='' />
                            <h1 className='pl-4 text-2xl'>LOGIN</h1>
                        </div>
                        <div className='flex flex-col'>
                            <h2>Email</h2>
                            <input className='w-full rounded-lg p-2 outline-none shadow-xl border border-[#fff]' type='email' ref={email} required />
                        </div>
                        <div className='flex flex-col'>
                            <h2>Password</h2>
                            <input className='w-full rounded-lg p-2 outline-none shadow-xl border border-[#fff]' type='password' ref={password} required />
                        </div>
                        <div className='flex flex-col'>
                            <button type='submit' className='bg-light_pink w-full text-light_gray py-2 rounded-lg hover:bg-light_pink_hover active:bg-light_pink_active shadow-xl'>Login</button>
                        </div>
                        <div className='flex flex-col justify-center'>
                            <div>Need an account? <span className='cursor-pointer hover:text-bright_blue' onClick={() => setIsLogin(!isLogin)}>Sign up</span></div>
                        </div>
                    </>) : (<>
                        <div className='flex items-center justify-start'>
                            <img src='./favicon-32x32.png' className='' />
                            <h1 className='pl-4 text-2xl'>SIGN UP</h1>
                        </div>
                        <div className='flex flex-col'>
                            <h2>Name</h2>
                            <input className='w-full rounded-lg p-2 outline-none shadow-xl border border-[#fff]' type='name' ref={name} required />
                        </div>
                        <div className='flex flex-col'>
                            <h2>Email</h2>
                            <input className='w-full rounded-lg p-2 outline-none shadow-xl border border-[#fff]' type='email' ref={email} required />
                        </div>
                        <div className='flex flex-col'>
                            <h2>Password</h2>
                            <input className='w-full rounded-lg p-2 outline-none shadow-xl border border-[#fff]' type='password' ref={password} required />
                        </div>
                        <div className='flex flex-col'>
                            <h2>Re-Type Password</h2>
                            <input className='w-full rounded-lg p-2 outline-none shadow-xl border border-[#fff]' type='password' ref={rePassword} required />
                        </div>
                        <div className='flex flex-col'>
                            <button type='submit' className='bg-light_pink w-full text-light_gray py-2 rounded-lg hover:bg-light_pink_hover active:bg-light_pink_active shadow-xl'>Sign Up</button>
                        </div>
                        <div className='flex flex-col justify-center'>
                            <div>Already have an account? <span className='cursor-pointer hover:text-bright_blue' onClick={() => setIsLogin(!isLogin)}>Login</span></div>
                        </div>
                    </>)}
                </form>
            </div>
        </div>
    )
}

export default login
