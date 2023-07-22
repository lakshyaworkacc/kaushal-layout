"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import AboutKGContent from "./AboutKG.content.jsx";

const AboutKG = () => {
    useEffect(() => {
        const aboutKGLeftSection = document.getElementById("about_kg_left_section");
        const aboutKGLeftSectionDiv = document.querySelector("left_section_div");

        gsap.registerPlugin(ScrollTrigger);

        const aboutKGTimeline = gsap.timeline({ paused: true });

        aboutKGTimeline.fromTo(
            aboutKGLeftSectionDiv,
            { y: 0 },
            {
                y: "1000vh",
                duration: 1,
                ease: "none",
            },
            0
        );

        const aboutKGScrollPin = ScrollTrigger.create({
            animation: aboutKGTimeline,
            trigger: aboutKGLeftSection,
            start: "top top",
            end: "bottom bottom",
            pin: true,
            markers: false,
        });

    });

    return (
        <div className="grid grid-cols-2 mb-10 h-[4000px] mx-5 px-6">
            <section id="about_kg_left_section">
                <div className="leading-[1.15rem] left_section_div">
                    <div className="py-12 px-10">
                        <h1 className="text-9xl px-10">
                            <span className="text-7xl">
                                About
                            </span>
                            <br />
                            <span>
                                Kaushal Gohil
                            </span>
                        </h1>
                    </div>
                </div>
            </section>

            <section id="about_kg_right_section" className="-ml-[7.5rem] mt-9 h-full">
                <AboutKGContent />
            </section>
        </div>
    );
};

export default AboutKG;