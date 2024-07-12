import { useNavigate } from "react-router-dom";
import { NETFLIX_LOGO } from "./utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "./utils/userSlice";

const Header = () => {

    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();

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

    return(
        <header className="flex bg-gradient-to-b from-black justify-between items-center " >
            <img src={NETFLIX_LOGO} className="pl-32 z-20 contrast-150 py-3 w-80" alt="" />

            { user && (<div className="pr-20 z-20 flex gap-4">
                <img className="w-12 rounded" src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp" alt="user-icon" />
                <button onClick={handelLogOut} className="bg-red-600 contrast-125 text-white self-center px-3 py-1 rounded">Log Out</button>
            </div>)}
        </header>
    );
}

export default Header;