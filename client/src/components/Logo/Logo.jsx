import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to='/' className='logo ff-sans fw-black flex' title='Go to Homepage'>
            <div className='logo__word flex'>
                W
                <span className='logo__word__rest' style={{ "--lrw": "15px" }}>
                    e
                </span>
            </div>

            <div className='logo__word flex'>
                S
                <span className='logo__word__rest' style={{ "--lrw": "30px" }}>
                    ell
                </span>
            </div>

            <div className='logo__word flex'>
                F
                <span className='logo__word__rest' style={{ "--lrw": "45px" }}>
                    ruits
                </span>
            </div>
        </Link>
    );
};

export default Logo;
