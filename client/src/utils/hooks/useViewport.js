import { useState } from "react";
import { useEffect } from "react";

const useViewport = () => {
    const [vw, setVw] = useState(window.innerWidth);

    useEffect(() => {
        const trackViewport = () => {
            setVw(window.innerWidth);
        };

        window.addEventListener("resize", trackViewport, false);

        return () => {
            window.removeEventListener("scroll", trackViewport);
        };
    }, [vw]);

    return vw;
};

export default useViewport;
