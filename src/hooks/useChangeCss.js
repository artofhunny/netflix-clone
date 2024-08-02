import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useChangeCss = (before, after) => {
    const [cssText, setCssText] = useState(before);
    const location = useLocation();

    useEffect(
        () => {
            (location.pathname !== "/browse") ? setCssText(after) : setCssText(before);
        },
        []
    );

    return cssText;
}

export default useChangeCss;