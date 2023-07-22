"use client";

import { useEffect } from "react";

// Components
import Header from "@/components/ui/Header/Header.component";
import HeroCarousel from "@/components/home/HeroCarousel.component";
import AboutKG from "@/components/home/AboutKG/AboutKG.component";
import HorizontalOne from "@/components/home/HorizontalSections/HorizontalOne.component";
import Achievements from "@/components/home/SwipingCards/Achievements.component";
import Projects from "@/components/home/SwipingCards/Projects.component";
import Footer from "@/components/ui/Footer/Footer.component";


export default function Home() {
    useEffect(() => {
        (
            async () => {
                const LocomotiveScroll = (await import('locomotive-scroll')).default
                const locomotiveScroll = new LocomotiveScroll({
                    lenisOptions: {
                        wrapper: window,
                        content: document.documentElement,
                        lerp: 0.5,
                        duration: 1.5,
                        orientation: 'vertical',
                        gestureOrientation: 'vertical',
                        smoothWheel: true,
                        smoothTouch: false,
                        wheelMultiplier: 1.2,
                        touchMultiplier: 2,
                        normalizeWheel: true,
                        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                    }
                });
            }
        )()
    }, [])

    return (

        <>
            <div className="mainHome xl:block sm:hidden md:hidden lg:hidden">
                <Header />
                <HeroCarousel />
                <AboutKG />
                <HorizontalOne />
                <Achievements />
                <Projects />
                <hr />
                <Footer />
            </div>

            <div className="xl:hidden sm:block md:block lg:block">
                <h1 className="text-8xl p-10">
                    Device Width must be 1440px minimum.
                </h1>
            </div>
        </>
    )
}   