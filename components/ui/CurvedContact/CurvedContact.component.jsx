import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { menuSlide } from './CurvedContact.animation';
import ContactCurve from './ContactCurve.component';
import ContactForm from './ContactForm/ContactForm.component';

const CurvedContact = () => {
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
                <ContactForm />
            <ContactCurve />
        </motion.div>
    )
}

export default CurvedContact