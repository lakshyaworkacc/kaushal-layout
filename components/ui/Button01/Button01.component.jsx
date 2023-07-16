import Link from "next/link";

const Button01 = ({ children }) => {
    return (
        // Button container
        <div className="group relative overflow-hidden cursor-pointer text-2xl uppercase text-black leading-[1.9rem">

            {/* Static Button */}
            <span className="inline-block p-1 transition duration-500 ease-out group-hover:translate-y-[120%] group-hover:-rotate-12">
                {children}
            </span>

            {/* Transitioned Button */}
            <span className="absolute left-0 inline-block p-[6px] transition duration-500 ease-out translate-y-[120%] rotate-[20deg] group-hover:translate-y-0 group-hover:rotate-0 ">
                {children}
            </span>

        </div>
    );
};

export default Button01;