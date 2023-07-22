"use client";

// Utilities
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { opacity } from "../CurvedNavigation/animation";

// Components
import Button01 from "../Button01/Button01.component";
import HeaderTitle from "./HeaderTitle/HeaderTitle.component";
import CurvedNavigation from "../CurvedNavigation/CurvedNavigation.component";
import CurvedContact from "../CurvedContact/CurvedContact.component";
// import MenuBtn from "../Button01/MenuBtn/MenuBtn.component";

const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();

    const [ isContactActive, setIsContactActive] = useState(false);

    useEffect(() => {
        if (isActive) setIsActive(false);
        if (isContactActive) setIsContactActive(false);
    }, [pathname])

    useEffect(() => {
        const body = document.body;
        let lastScroll = 0;


        window.addEventListener("scroll", () => {
            const currentScroll = window.scrollY;

            if (currentScroll <= 0) {
                body.classList.remove("scroll-up");
                return;
            };

            if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
                body.classList.remove("scroll-up");
                body.classList.add("scroll-down");
            } else if (
                currentScroll < lastScroll &&
                body.classList.contains("scroll-down")
            ) {
                body.classList.remove("scroll-down");
                body.classList.add("scroll-up");
            };

            lastScroll = currentScroll;
        });
    });

    return (
        <>
            <header className="fixed top-0 left-0 mt-[1rem] ml-[20.4%] bg-white z-[9999] transition-all duration-[350ms] ease-in-out rounded-full p-1 px-8 flex flex-col w-[60%] scale-[0.9]">
                <div className="header__component transition-all duration-500 ease-out">
                    <div className="overflow-h idden p-1 bg-none">
                        <div className="header__container flex items-center justify-between transition-all duration-500 ease-out will-change-transform">

                            <div className="flex flex-col" onClick={() => { setIsActive(!isActive); setIsContactActive(false) }}>
                                <div className="group relative overflow-hidden cursor-pointer text-2xl uppercase text-black">
                                    {/* Static Button */}
                                    <span className={` ${!isActive ? "visible" : "hidden"} inline-block p-1 pr-[0.55rem] transition duration-500 ease-out tracking-wide`}>
                                        <motion.p variants={opacity} animate={!isActive ? "open" : "closed"}>Menu</motion.p>
                                    </span>

                                    {/* Static Button */}
                                    <span className={` ${isActive ? "visible" : "hidden"} inline-block p-1 transition duration-500 ease-out`}>
                                        <motion.p variants={opacity} animate={isActive ? "open" : "closed"}>Close</motion.p>
                                    </span>
                                </div>
                            </div>
                            {/* <MenuBtn /> */}

                            <HeaderTitle title="Kaushal Gohil" />

                            <div className="flex flex-col" onClick={() => { setIsContactActive(!isContactActive); setIsActive(false) }}>
                                <div className="group relative overflow-hidden cursor-pointer text-2xl uppercase text-black">
                                    {/* Static Button */}
                                    <span className={` ${!isContactActive ? "visible" : "hidden"} inline-block p-1 pr-[0.55rem] transition duration-500 ease-out tracking-wide`}>
                                        <motion.p variants={opacity} animate={!isContactActive ? "open" : "closed"}>Contact</motion.p>
                                    </span>

                                    {/* Static Button */}
                                    <span className={` ${isContactActive ? "visible" : "hidden"} inline-block p-1 transition duration-500 ease-out pl-[3.15rem]`}>
                                        <motion.p variants={opacity} animate={isContactActive ? "open" : "closed"}>Close</motion.p>
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </header>

            <AnimatePresence mode="wait">
                {isActive && <CurvedNavigation />}
            </AnimatePresence>

            <AnimatePresence mode="wait">
                {isContactActive && <CurvedContact />}
            </AnimatePresence>
        </>
    );
};

export default Header;