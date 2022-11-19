import { Link } from "react-router-dom";

function LinkButton({ to, name, variant }) {
    return (
        <Link to={to} className={`linkButton linkButton--${variant} ff-sans fw-sm fs-n focus__ring`}>
            {name}
        </Link>
    );
}

export default LinkButton;
