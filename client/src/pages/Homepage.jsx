import { Banner, HeroSection, MissionSection, HomeProduct } from "../components";

function Homepage() {
    return (
        <main className='homepage'>
            <HeroSection />
            <MissionSection />
            <Banner />
            <HomeProduct />
        </main>
    );
}

export default Homepage;
