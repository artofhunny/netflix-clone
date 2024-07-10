import { useState } from "react";
import Header from "./Header";
// import { BG_IMG } from "./utils/constants";

const Login = () => {

    const [isSignIn, setIsSignIn] = useState(true);

    const handelToggleForm = () => {
        setIsSignIn(!isSignIn);
    }

    return(
        <div className="relative" >
            <Header />
            <div className="w-full z-0 h-screen 
               bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/537e2c5e-c750-4d4c-9f7a-e66fe93eb977/IN-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_b00eeb83-a7e8-4b5b-8ff7-86ed92c51caf_large.jpg')]" >                 
            </div>

            <div className="h-screen flex justify-center pt-20 w-full bg-opacity-30 absolute top-0 bg-black z-10">

                <div className=" px-12 py-16 flex flex-col self-start bg-opacity-75 gap-8 bg-black">
                    <p className=" font-bold text-4xl text-white">
                        {(isSignIn) ? "Sign In" : "Sign Up"}
                    </p>
                    {
                       !isSignIn && <input
                        type="text" 
                        className="bg-slate-700 border border-solid border-gray-100 border-opacity-45 rounded bg-opacity-60 outline-none text-xl px-8 py-2 text-white" 
                        placeholder="Full Name" 
                   />
                    }
                    <input
                         type="email" 
                         className="bg-slate-700 border border-solid border-gray-100 border-opacity-45 rounded bg-opacity-60 outline-none text-xl px-8 py-2 text-white" 
                         placeholder="Email" 
                    />

                    <input type="password" 
                        className="bg-slate-700 border border-solid border-gray-100 border-opacity-45 rounded bg-opacity-60 outline-none text-xl px-8 py-2 text-white" 
                        placeholder="Password" />

                    <button className="text-white rounded font-bold text-xl py-4 bg-[#ff0000]">
                        {(isSignIn) ? "Sign In" : "Sign Up"}
                    </button>

                    <p className="text-white cursor-pointer" onClick={handelToggleForm} >
                        {(isSignIn) ? "New to Netflix? Sign Up Now" : "Already regester? Sign In"}
                    </p>
                </div>
                
                
            </div>

            
        </div>
    );
}

export default Login;