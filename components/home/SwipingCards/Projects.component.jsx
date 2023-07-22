"use client";

import SwipingCardsHeading from './SwipingCards.heading'
import SwipingCardsContent from './SwipingCards.content'
import PhotoCard from './SwipingCards.photocard';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

const ProjectsSection = () => {
    useEffect(() => {
        const proj_details = gsap.utils.toArray(".proj_content_section:not(:first-child)");
        const proj_photos = gsap.utils.toArray(".proj_photo:not(:first-child)");

        gsap.set(proj_photos, { yPercent: 101 });

        const achAllPhotos = gsap.utils.toArray(".proj_photo");


        let latestAch = gsap.matchMedia();

        latestAch.add("(min-width: 600px)", () => {
            ScrollTrigger.create({
                trigger: ".proj_gallery",
                start: "top top",
                end: "bottom bottom",
                pin: ".proj_right"
            });

            proj_details.forEach((proj_detail, index) => {

                let proj_headline = proj_detail.querySelector("h1");
                let proj_animation = gsap.timeline()
                    .to(proj_photos[index], { yPercent: 0 })
                    .set(achAllPhotos[index], { autoAlpha: 0 })

                ScrollTrigger.create({
                    trigger: proj_headline,
                    start: "top 75%",
                    end: "top 35%",
                    animation: proj_animation,
                    scrub: true,
                    markers: false,
                })
            })
        })
    });

    return (
        <div className='px-20 pt-20 mt-5'>
            <SwipingCardsHeading>
                Latest Projects
            </SwipingCardsHeading>

            <div className="mt-5">
                <div className="proj_gallery flex">
                    <div className="proj_right h-screen w-[50%] flex flex-col justify-center">
                        <div className="proj_photos w-[40vw] h-[40vw] rounded-3xl relative overflow-hidden drop-shadow-xl">
                            <PhotoCard background="bg-[crimson]" />
                            <PhotoCard background="bg-[MediumSeaGreen]" />
                            <PhotoCard background="bg-[deepPink]" />
                            <PhotoCard background="bg-[dodgerblue]" />
                            <PhotoCard background="bg-[violet]" />
                        </div>
                    </div>
                    <div className="proj_left w-[50%]">
                        <div className="proj_content m-auto w-[80%]">
                            <SwipingCardsContent
                                title="Red"
                                description="Red is a color often associated with strong emotions such as passion, love, and anger. It's a bold and attention-grabbing color that can evoke feelings of excitement, warmth, and energy."
                            >
                                <p>
                                    Red is a color often associated with strong emotions such as passion, love, and anger. It's a bold and attention-grabbing color that can evoke feelings of excitement, warmth, and energy.
                                </p>
                                <p>
                                    Red is a color often associated with strong emotions such as passion, love, and anger. It's a bold and attention-grabbing color that can evoke feelings of excitement, warmth, and energy.
                                </p>
                                <p>
                                    Red is a color often associated with strong emotions such as passion, love, and anger. It's a bold and attention-grabbing color that can evoke feelings of excitement, warmth, and energy.
                                </p>
                            </SwipingCardsContent>
                            <SwipingCardsContent
                                title="Green"
                            >
                                <p>
                                    Green is a color that is often associated with nature, growth, and harmony. It is a calming and relaxing color that can evoke feelings of balance, stability, and freshness. In color psychology, green is said to represent balance and stability, making it a popular choice for branding and marketing in the health and wellness industry.
                                </p>
                            </SwipingCardsContent>
                            <SwipingCardsContent
                                title="Pink"
                            >
                                <p>
                                    Pink is a color that is often associated with femininity, romance, and sweetness. It is a softer and more delicate shade of red that can evoke feelings of warmth, love, and nurturing.
                                </p>
                                <p>
                                    In the world of branding and marketing, pink is often used to target a female audience or to promote products that are associated with beauty, love, or romance.
                                </p>
                                <p>
                                    Pink is also used in the food industry, as it is associated with sweetness and desserts. Pink is often used in breast cancer awareness campaigns, as it has become the signature color of the movement.
                                </p>
                                <p>
                                    Pink is also commonly used in baby showers and weddings, as it symbolizes love, innocence, and new beginnings.
                                </p>
                            </SwipingCardsContent>
                            <SwipingCardsContent
                                title="Blue"
                            >
                                <p>
                                    Blue is a color that is often associated with calmness, trust, and reliability. It is a peaceful and serene color that can evoke feelings of stability, security, and professionalism. In color psychology, blue is said to represent loyalty and trust, making it a popular choice for branding and marketing in the finance and technology industries.
                                </p>
                            </SwipingCardsContent>
                            <SwipingCardsContent
                                title="Violet"
                            >
                                <p>
                                    Violet is the color of light at the short wavelength end of the visible spectrum, between blue and invisible ultraviolet. It is one of the seven colors that Isaac Newton labeled when dividing the spectrum of visible light in 1672. Violet light has a wavelength between approximately 380 and 435 nanometers. The color's name is derived from the violet flowe
                                </p>
                            </SwipingCardsContent>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProjectsSection;