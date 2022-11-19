const GridContainer = ({ children, variant }) => {
    return <div className={`gridContainer gridContainer--${variant}`}>{children}</div>;
};

export default GridContainer;
