import { NETFLIX_LOGO } from "./utils/constants";

const Header = () => {
    return(
        <header>
            <img src={NETFLIX_LOGO} className="pl-32 z-20 contrast-125 py-4 w-96 absolute" alt="" />
        </header>
    );
}

export default Header;