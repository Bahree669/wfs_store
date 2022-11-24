import { useRef } from "react";
import { useEffect, useState } from "react";
import ClickableComponentRound from "../ClickableComponentRound/ClickableComponentRound";

const VideoModal = () => {
    const [videoOpen, setVideoOpen] = useState(false);
    const ytIframe = useRef();

    const toggleVideoOpen = () => {
        setVideoOpen((open) => !open);
    };

    useEffect(() => {
        if (videoOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [videoOpen]);

    return (
        <div className='videoModal'>
            <ClickableComponentRound
                onClick={toggleVideoOpen}
                role={"button"}
                name={
                    <>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='20'
                            height='20'
                            viewBox='0 0 24 24'
                            style={{ fill: "#004829", transform: "scale(0.9)" }}
                        >
                            <path d='M7 6v12l10-6z'></path>
                        </svg>
                        watch
                    </>
                }
                variant={"yellow"}
            />

            <dialog className='videoModal__dialog' open={videoOpen}>
                <div className='videoModal__dialog__container flex flex-col'>
                    <div className='videoModal__content flex'>
                        <iframe
                            ref={ytIframe}
                            width='853'
                            height='480'
                            src={videoOpen ? "https://www.youtube.com/embed/r-onGrSNm_I?autoplay=1" : ""}
                            title='JKT48 New Era Special Performance Video - Dialog Dengan Kenari'
                            frameBorder='0'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; '
                            allowFullScreen
                        ></iframe>
                    </div>

                    <button onClick={toggleVideoOpen} className='videoModal__close btn_reset'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            style={{ fill: "#004829" }}
                        >
                            <path d='M10 4H8v4H4v2h6zM8 20h2v-6H4v2h4zm12-6h-6v6h2v-4h4zm0-6h-4V4h-2v6h6z'></path>
                        </svg>
                    </button>
                </div>
            </dialog>
        </div>
    );
};

export default VideoModal;
