import { useEffect, useState } from "react";

const useScrollDirection = () => {
    const [scrollPos, setScrollPos] = useState(0);
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        const trackScroll = () => {
            if (document.body.getBoundingClientRect().top > scrollPos) {
                setDirection(1);
            } else {
                setDirection(-1);
            }

            setScrollPos(document.body.getBoundingClientRect().top);
        };

        window.addEventListener("scroll", () => trackScroll(), false);

        return () => {
            window.removeEventListener("scroll", trackScroll);
        };
    }, [scrollPos]);

    return direction;
};

export default useScrollDirection;
