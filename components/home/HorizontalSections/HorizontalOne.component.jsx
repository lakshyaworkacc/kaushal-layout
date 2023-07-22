"use client";

import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/all";

const HorizontalOne = () => {
    useEffect(() => {
        const firstHorizontalSection = document.getElementById("firstHorizontal");
        const firstHorizontalContent = gsap.utils.toArray(".firstHorizontalContentContainer");

        gsap.registerPlugin(ScrollTrigger);

        // LOGIC

        // YOUTUBE TUTORIAL METHOD

        // gsap.to(firstHorizontalContent, {
        //     xPercent: -104 * (firstHorizontalContent.length - 1),
        //     ease: "sine.out",
        //     scrollTrigger: {
        //         trigger: firstHorizontalSection,
        //         scrub: 1.5,
        //         pin: true,
        //         markers: false,
        // snap: 1 / (firstHorizontalContent.length - 1),
        //         end: "+=" + 5000,
        //     }
        // });


        // MY METHOD

        let hsTl = gsap.timeline()
            .to(firstHorizontalContent, {
                xPercent: -104 * (firstHorizontalContent.length - 1),
                ease: "power1.out"
            });

        ScrollTrigger.create({
            trigger: firstHorizontalSection,
            animation: hsTl,
            start: "+=" + 30,
            end: "+=" + 5000,
            scrub: 1.2,
            pin: true,
            markers: false,
        })
    });

    return (
        <section id="firstHorizontal" className="mx-8">
            <div className="m-auto pt-10">
                <div className="flex">

                    <div className='ml-16 firstHorizontalContentContainer'>
                        <div className="bg-nyawithGovernor">
                        </div>
                    </div>

                    <div className=' firstHorizontalContentContainer'>
                        <div className="bg-nyawithGovernor">
                        </div>
                    </div>

                    <div className=' firstHorizontalContentContainer'>
                        <div className="bg-nyawithGovernor">
                        </div>
                    </div>

                    <div className=' firstHorizontalContentContainer'>
                        <div className="bg-nyawithGovernor">
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default HorizontalOne