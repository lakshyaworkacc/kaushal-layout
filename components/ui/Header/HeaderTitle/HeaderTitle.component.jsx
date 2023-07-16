"use client";

import { useRef } from "react";
import { gsap } from "gsap";

const HeaderTitle = ({ title }) => {
    const titleRef = useRef(null);

    // Function when the title is hovered.
    const onTitleEnter = () => {
        // Fetching the attributes
        const currentColor = titleRef.current.getAttribute("data-color");
        const titleH1 = titleRef.current.firstChild;

        // Color Decider
        const nextColor = currentColor === '#a6e2e3'
            ? '#8566f6'
            : currentColor === '#8566f6'
                ? '#ed7c50'
                : '#a6e2e3';

        // Setting next color data
        titleRef.current.setAttribute("data-color", nextColor);

        // Color Change Effect
        gsap.to(titleH1, {
            color: currentColor,
            duration: 0.2,
            ease: 'power1.out',
        });

        // Scale Effect
        gsap.to(titleH1, {
            fontSize: "2.15rem",
            duration: 1,
            ease: 'power3.out',
        });
    };

    // Function when the title is unhovered.
    const onTitleLeave = () => {
        // Fetching the title h1.
        const titleH1 = titleRef.current.firstChild;

        // Setting back the black color.
        gsap.to(titleH1, {
            color: "#000",
            duration: 0.2,
            ease: "power3.out",
        });

        // Setting back the scale size
        gsap.to(titleH1, {
            fontSize: "2rem",
            duration: 1,
            ease: "power3.out",
        });
    };

    return (
        <div
            ref={titleRef}
            onMouseEnter={onTitleEnter}
            onMouseLeave={onTitleLeave}
            data-color='#a6e2e3'
            className='pointer-events-auto text-[2rem] cursor-pointer leading-none transition duration-500 ease-out'
        >
            <h1>{title}</h1>
        </div>
    )
}

export default HeaderTitle