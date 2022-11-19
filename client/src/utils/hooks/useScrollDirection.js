import { useEffect, useState } from "react";

const useScrollDirection = () => {
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        const trackScroll = (e) => {
            const delta = e.wheelDelta;

            if (delta > 0) {
                setDirection(1);
            } else {
                setDirection(-1);
            }
        };

        window.addEventListener("wheel", (e) => trackScroll(e), false);

        return () => {
            window.removeEventListener("wheel", trackScroll);
        };
    }, [direction]);

    return direction;
};

export default useScrollDirection;
