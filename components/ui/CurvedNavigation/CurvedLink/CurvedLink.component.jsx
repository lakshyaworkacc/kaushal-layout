import Link from 'next/link';
import { motion } from 'framer-motion';
import { slide, scale } from '../animation';
import Button01 from '../../Button01/Button01.component';

export default function CurvedLink({ data, isActive, setSelectedIndicator }) {

    const { title, href, index } = data;

    return (
        <motion.div className="relative flex items-center ml-auto mr-auto mt-4" onMouseEnter={() => { setSelectedIndicator(href) }} custom={index} variants={slide} initial="initial" animate="enter" exit="exit">
            <motion.div variants={scale} animate={isActive ? "open" : "closed"} className="w-[16px] h-[16px] bg-white rounded-full absolute left-[-20px]"></motion.div>
            <Button01>
                <Link href={href}>
                    <div className='text-white text-7xl m-3 font-medium'>
                        {title}
                    </div>
                </Link>
            </Button01>
        </motion.div >
    )
}