"use client";

// Utilities
import Link from "next/link";

// Components
import Button01 from "../Button01/Button01.component";
import HeaderTitle from "./HeaderTitle/HeaderTitle.component";
// import MenuBtn from "../Button01/MenuBtn/MenuBtn.component";

const Header = () => {

    return (
        <header className="fixed top-0 left-0 mt-[1.5rem] ml-[20.4%] bg-white backdrop-blur-sm z-[9999] transition-all duration-[350ms] ease-in-out rounded-full p-1 px-8 flex flex-col w-[60%]">
            <div className="header__component transition-all duration-500 ease-out">
                <div className="overflow-hidden p-1 bg-none">
                    <div className="header__container flex items-center justify-between transition-all duration-500 ease-out will-change-transform">

                        <Button01>menu</Button01>
                        {/* <MenuBtn /> */}

                        <HeaderTitle title="Kaushal Gohil" />

                        <Link href="/">
                            <Button01>contact</Button01>
                        </Link>

                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;