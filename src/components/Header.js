import { useNavigate } from "react-router-dom";
import { NETFLIX_LOGO } from "./utils/constants";
import { useSelector } from "react-redux";
import { auth } from "./utils/firebase";
import { signOut } from "firebase/auth";

const Header = () => {

    const navigate = useNavigate();
    const user = useSelector((store) => store.user);

    const handelLogOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate('/');
          }).catch((error) => {
            // An error happened.
          });
    }

    return(
        <header className="flex justify-between items-center" >
            <img src={NETFLIX_LOGO} className="pl-32 z-20 contrast-150 py-3 w-80" alt="" />

            { user && (<div className="pr-20 flex gap-4">
                <img className="w-12 rounded" src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp" alt="user-icon" />
                <button onClick={handelLogOut} className="bg-red-600 contrast-125 text-white self-center px-3 py-1 rounded">Log Out</button>
            </div>)}
        </header>
    );
}

export default Header;