import { Link } from "react-router-dom";

function LinkButton({ to, name, variant }) {
    return (
        <Link to={to} className={`linkButton linkButton--${variant} ff-sans fw-sm fs-sm focus__ring`}>
            <span className='linkButton__name'>{name}</span>
            <span className='linkButton__wiper'>{name}</span>
        </Link>
    );
}

export default LinkButton;
