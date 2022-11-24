import { Link } from "react-router-dom";

const ClickableComponentRound = ({ role, to, name, variant, ...rest }) => {
    if (role === "button")
        return (
            <button
                {...rest}
                className={`clickableComponentRound clickableComponentRound--${variant} btn_reset ff-sans fw-sm fs-sm focus__ring`}
            >
                <span className='clickableComponentRound__name flex'>{name}</span>
                <span className='clickableComponentRound__wiper flex'>{name}</span>
            </button>
        );

    return (
        <Link
            to={to}
            className={`clickableComponentRound clickableComponentRound--${variant} ff-sans fw-sm fs-sm focus__ring`}
        >
            <span className='clickableComponentRound__name flex'>{name}</span>
            <span className='clickableComponentRound__wiper flex'>{name}</span>
        </Link>
    );
};

export default ClickableComponentRound;
