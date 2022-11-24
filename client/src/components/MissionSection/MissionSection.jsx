import { useEffect, useState } from "react";

import GridContainer from "../GridContainer/GridContainer";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import ClickableComponentRound from "../ClickableComponentRound/ClickableComponentRound";
import VideoModal from "../VideoModal/VideoModal";

const MissionSection = () => {
    const [containerWidth, setContainerWidth] = useState(90);

    const getWidth = () => {
        const outputStart = 90;
        const outputEnd = 100;

        const inputStart = 0;
        const inputEnd = 100;

        const y = scrollY / 5;
        const input = y <= 100 ? y : 100;

        const output = outputStart + ((outputEnd - outputStart) / (inputEnd - inputStart)) * (input - inputStart);

        setContainerWidth(output);
    };

    useEffect(() => {
        window.addEventListener("scroll", getWidth, false);
        return () => {
            window.removeEventListener("scroll", getWidth);
        };
    }, []);

    return (
        <div className='gradient__black'>
            <section className='missionSection' style={{ "--c-width": `${containerWidth}%` }}>
                <ContentWrapper>
                    <div className='missionSection__content'>
                        <GridContainer variant={"reverse"}>
                            <div className='missionSection__image'>
                                <div className='missionSection__image__img'>
                                    <VideoModal />
                                </div>
                            </div>

                            <div className='missionSection__content--right flex flex-col'>
                                <p className='ff-sans fs-sm'>Why we do this?</p>

                                <h2 className='ff-sans fw-black capitalize'>
                                    our mision <br /> is to help local farmer <br /> market their products <br /> while
                                    also helping them <br /> transition to organic <br /> farming for better <br />{" "}
                                    environment.
                                </h2>

                                <ClickableComponentRound to={"/impacts"} name={"see our impacts"} variant={"green"} />
                            </div>
                        </GridContainer>
                    </div>
                </ContentWrapper>
            </section>
        </div>
    );
};

export default MissionSection;
