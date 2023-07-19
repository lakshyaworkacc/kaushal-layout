"use client";

import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";

// Images for Carousel
// import c3 from "../../public/HeroCarousel/ONE.jpg";
import c3 from "../../public/HeroCarousel/ONE.jpg";

const HeroCarousel = () => {
    return (
        <div className="relative max-w-[100vw] w-full mx-auto">
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                showIndicators={true}
                showArrows={true}
                showStatus={false}
                dynamicHeight={false}
            >
                <div>
                    <Image
                        src={c3}
                        width={1080}
                        height={720}
                    />
                </div>
                <div>
                    <Image
                        src={c3}
                        width={1080}
                        height={720}
                    />
                </div>
                <div>
                    <Image
                        src={c3}
                        width={1080}
                        height={720}
                    />
                </div>
            </Carousel>
        </div>
    );
};

export default HeroCarousel;