import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from "framer-motion";
import { menuSlide } from './animation';
import "./CurvedNavigation.style.scss";
import CurvedLink from './CurvedLink/CurvedLink.component';
import Curve from './Curve/Curve.component';

const navItems = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "Work",
        href: "/work",
    },
    {
        title: "About",
        href: "/about",
    },
    {
        title: "Contact",
        href: "/contact",
    },
]

const CurvedNavigation = () => {

    const pathname = usePathname();
    const [selectedIndicator, setSelectedIndicator] = useState(pathname);

    return (
        <motion.div
            variants={menuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
            className="h-screen w-[100vw] bg-menu fixed left-0 top-0 z-[10] text-white"
        >
            <div className="h-full p-[100px] flex flex-col justify-between box-border">
                <div onMouseLeave={() => { setSelectedIndicator(pathname) }} className="flex flex-col fz-[56px] mt-12">
                    {
                        navItems.map((data, index) => {
                            return <CurvedLink key={index} data={{ ...data, index }} isActive={selectedIndicator == data.href} setSelectedIndicator={setSelectedIndicator}></CurvedLink>
                        })
                    }
                </div>
            </div>
            <Curve />
        </motion.div>
    );
};

export default CurvedNavigation;