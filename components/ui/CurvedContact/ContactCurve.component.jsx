"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function ContactCurve() {

    useEffect(() => {
        const body = document.body;
        
        body.classList.add("scroll-down");
    })

    const initialPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q-100 ${window.innerHeight / 2} 100 0`
    const targetPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q100 ${window.innerHeight / 2} 100 0`

    const contactcurve = {
        initial: {
            d: initialPath
        },
        enter: {
            d: targetPath,
            transition: { duration: 1.6, ease: [0.76, 0, 0.24, 1] }
        },
        exit: {
            d: initialPath,
            transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
        }
    }

    return (
        <svg className="absolute top-0 left-[-99px] rotate-0 w-[100px] h-full fill-menu stroke-none">
            <motion.path variants={contactcurve} initial="initial" animate="enter" exit="exit"></motion.path>
        </svg>
    )
}
