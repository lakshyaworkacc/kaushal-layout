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
// import MenuBtn from "../Button01/MenuBtn/MenuBtn.component";

const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if (isActive) setIsActive(false)
    }, [pathname])

    return (
        <>
            <header className="fixed top-0 left-0 mt-[1.5rem] ml-[20.4%] bg-white backdrop-blur-sm z-[9999] transition-all duration-[350ms] ease-in-out rounded-full p-1 px-8 flex flex-col w-[60%]">
                <div className="header__component transition-all duration-500 ease-out">
                    <div className="overflow-h idden p-1 bg-none">
                        <div className="header__container flex items-center justify-between transition-all duration-500 ease-out will-change-transform">

                            <div className="flex flex-col" onClick={() => { setIsActive(!isActive) }}>
                                <div className="group relative overflow-hidden cursor-pointer text-2xl uppercase text-black leading-[1.9rem">
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

                            {/* <Link href="/">
                                <Button01>Contact</Button01>
                            </Link> */}

                            <div className="" onClick={() => { setIsActive(!isActive) }}>
                                <Button01>Contact</Button01>
                            </div>

                        </div>
                    </div>
                </div>
            </header>
            <AnimatePresence mode="wait">
                {isActive && <CurvedNavigation />}
            </AnimatePresence>
        </>
    );
};

export default Header;