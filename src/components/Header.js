import { Link, useLocation, useNavigate } from "react-router-dom";
import { NETFLIX_LOGO } from "./utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { addUser, removeUser } from "./utils/userSlice";
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
// import { toggleGptSearch } from "./utils/gptSlice";
// import { setLangValue } from "./utils/configSlice";

const Header = () => {

    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    // const isGptTrue = useSelector((store) => store.gpt.isGptTrue);
    const location = useLocation();
    const [showMenu, setShowMenu] = useState(false);

    // console.log(location.pathname);

    const handelLogOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            
          }).catch((error) => {
            // An error happened.
          });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties

              // https://firebase.google.com/docs/reference/js/auth.user
              const{ uid, displayName, email } = user;
              dispatch(addUser({ uid: uid, displayName: displayName, email: email }));
              navigate("/browse");
              // ...
            } else {
              // User is signed out
              dispatch(removeUser());
              navigate('/');
            }
        });
      }, []);

      const handeluserIcon = () => {
        setShowMenu(true);
      }

      const handelCancelIcon = () => {
        setShowMenu(false);
      }

    return(
        <header className="flex bg-gradient-to-b absolute w-screen from-black justify-between items-start " >
            <img src={NETFLIX_LOGO} className="pl-12 z-20 contrast-150 py-3 w-44" alt="" />

            { 
            // location.pathname !== '/browse' 
            // || 
            user && (<div className="pr-20 z-20 flex items-center gap-4">

                {!showMenu && <img onClick={handeluserIcon} className="cursor-pointer w-10 rounded my-5 self-start" src="/avatar icon.png" alt="user-icon" />}
                
                {showMenu && <div className="mt-2 bg-zinc-950 border-2 border-solid border-red-700">
                  <ul className="flex flex-col items-center ">
                      <div className="border-b border-solid flex justify-center border-red-700 py-1 w-full">
                        {/* <img className="cursor-pointer w-8 rounded" src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp" alt="user-icon" /> */}
                        <span onClick={handelCancelIcon} className="cursor-pointer hover:text-red-600 material-symbols-outlined">
                          close
                        </span>
                      </div>

                      <li className="w-full cursor-pointer hover:text-red-600 contrast-150 px-6 text-center py-2 border-b border-solid border-red-700">{user.displayName}</li>
                      <Link to={'/browse'} className="w-full">
                        <li className="cursor-pointer hover:text-red-600 contrast-150 px-6 text-center py-2 border-b border-solid border-red-700">Home</li>
                      </Link>
                      <Link to={'/browse/your-reviews'}>
                        <li className="w-full cursor-pointer hover:text-red-600 contrast-150 px-6 text-center py-2 border-b border-solid border-red-700">Your Reviews</li>
                      </Link>
                      <li className="w-full cursor-pointer hover:text-red-600 contrast-150 px-6 text-center py-2 border-b border-solid border-red-700">Your Wishlist</li>
                      <li className="w-full cursor-pointer hover:text-red-600 contrast-150 px-6 text-center py-2 border-b border-solid border-red-700" onClick={handelLogOut} >Log Out</li>
                  </ul>
                </div>}

                {/* <button onClick={handelLogOut} className="bg-red-600 contrast-125 text-white self-center px-3 py-1 rounded">Log Out</button> */}

            </div>)}
        </header>
    );
}

export default Header;