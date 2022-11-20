import ClickableComponentRound from "../ClickableComponentRound/ClickableComponentRound";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import HeroBackground from "../HeroBackground/HeroBackground";

function HeroSection() {
    return (
        <section className='heroSection flex' style={{ position: "relative" }}>
            <ContentWrapper>
                <div className='heroSection__container flex'>
                    <h1 className='heroSection__tagline ff-sans fw-black'>
                        Our fruits is organic, locally <br /> sourced and picked by hand <br /> to make sure you only
                        get
                        <br />
                        the best quality.
                    </h1>

                    <ClickableComponentRound to={"/"} name={"Get me some fruits"} />
                </div>
            </ContentWrapper>

            <HeroBackground />
        </section>
    );
}

export default HeroSection;
