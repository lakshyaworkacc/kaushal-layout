"use client";

import { useEffect } from "react";

// Components
import Header from "@/components/ui/Header/Header.component";

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

    return(
        <>
            Home Page
        </>
    )
}