import ContentWrapper from "../ContentWrapper/ContentWrapper";
import HomeProductGrid from "../HomeProductGrid/HomeProductGrid";
import ClickableComponentRound from "../ClickableComponentRound/ClickableComponentRound";

const HomeProduct = () => {
    return (
        <section className='homeProduct'>
            <ContentWrapper>
                <div className='homeProduct__content flex flex-col'>
                    <h2 className='homeProduct__title ff-sans fw-black capitalize'>
                        Check out our <br />
                        heavenly delicious fruits
                    </h2>

                    <HomeProductGrid>
                        <div className='homeProductGrid__product'></div>
                        <div className='homeProductGrid__product'></div>
                        <div className='homeProductGrid__product'></div>
                        <div className='homeProductGrid__product'></div>
                    </HomeProductGrid>

                    <ClickableComponentRound name={"see more products"} to={"/products"} variant={"green"} />
                </div>
            </ContentWrapper>
        </section>
    );
};

export default HomeProduct;
