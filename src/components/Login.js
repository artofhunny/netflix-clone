import { useRef, useState } from "react";
import Header from "./Header";
import { dataValidation } from "./validation";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./utils/userSlice";
import { useNavigate } from "react-router-dom";
// import { BG_IMG } from "./utils/constants";

const Login = () => {

    const [isSignIn, setIsSignIn] = useState(true);
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const userData = useSelector((store) => store.user);

    const handelToggleForm = () => {
        setIsSignIn(!isSignIn);
    }

    const handelFormSubmit = (e) => {
        e.preventDefault();
        const message = dataValidation(password.current.value, email.current.value, (isSignIn) ? null : name.current.value);

        setErrorMessage(message);
        if(errorMessage) return;

        if(!isSignIn){
            // Sign up
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user);

                    updateProfile(user, {
                        displayName: name.current.value, 
                        photoURL: "https://example.com/jane-q-user/profile.jpg"
                      }).then(() => {
                        // Profile updated!
                        const { uid, displayName, photoURL, email } = auth.currentUser;
                        dispatch(addUser({
                            uid: uid,
                            displayName: displayName,
                            email: email
                        }));

                        // ...
                      }).catch((error) => {
                        // An error occurred
                        // ...
                      });

                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                    setErrorMessage(errorMessage + errorCode);
                });

        }
        else{
            // Sign in

            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;

                    setErrorMessage(errorCode + " " + errorMessage);
                });
        }

    }

    return(
        <div className="relative" >
            {/* <Header /> */}
            <div className="w-full z-0 h-screen absolute
               bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/537e2c5e-c750-4d4c-9f7a-e66fe93eb977/IN-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_b00eeb83-a7e8-4b5b-8ff7-86ed92c51caf_large.jpg')]" >                 
            </div>
            
            

            <form onSubmit={handelFormSubmit} 
            className="h-screen flex flex-col w-full bg-opacity-30 absolute top-0 bg-black z-10">

                <Header />

                <div className="self-center px-12 py-16 flex flex-col self-start bg-opacity-75 gap-8 bg-black">
                    <p className=" font-bold text-4xl text-white">
                        {(isSignIn) ? "Sign In" : "Sign Up"}
                    </p>
                    {
                       !isSignIn && <input
                        type="text" 
                        ref={name}
                        className="bg-slate-700 border border-solid border-gray-100 border-opacity-45 rounded bg-opacity-60 outline-none text-xl px-8 py-2 text-white" 
                        placeholder="Full Name" 
                   />
                    }
                    <input
                         type="text"
                         ref={email}
                         className="bg-slate-700 border border-solid border-gray-100 border-opacity-45 rounded bg-opacity-60 outline-none text-xl px-8 py-2 text-white" 
                         placeholder="Email" 
                    />

                    <input type="password" 
                        ref={password}
                        className="bg-slate-700 border border-solid border-gray-100 border-opacity-45 rounded bg-opacity-60 outline-none text-xl px-8 py-2 text-white" 
                        placeholder="Password" />

                    {
                        errorMessage && 
                        <p className="text-red-600 font-bold text-lg bg-white pl-5 py-1">
                            {errorMessage}
                        </p>
                    }

                    <button className="text-white rounded font-bold text-xl py-4 bg-[#ff0000]">
                        {(isSignIn) ? "Sign In" : "Sign Up"}
                    </button>

                    <p className="text-white cursor-pointer" onClick={handelToggleForm} >
                        {(isSignIn) ? "New to Netflix? Sign Up Now" : "Already regester? Sign In"}
                    </p>
                </div>
                
                
            </form>


            
        </div>
    );
}

export default Login;