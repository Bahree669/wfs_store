import React from "react";

const HeaderCtrlButton = ({ state, ...rest }) => {
    return (
        <button
            {...rest}
            className='headerCtrlBtn btn_reset flex flex-col'
            style={{ "--gap": state ? ".9em" : ".3em" }}
            aria-controls='mainNav'
            aria-expanded={state}
            aria-pressed={state}
        >
            <span className='sr_only'>{state ? "close menu" : "open menu"}</span>

            <div className='headerCtrlBtn__bar headerCtrlBtn__bar--top'></div>
            <div className='headerCtrlBtn__bar headerCtrlBtn__bar--bottom'></div>
        </button>
    );
};

export default HeaderCtrlButton;
