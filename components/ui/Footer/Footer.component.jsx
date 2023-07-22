import { FaInstagram, FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { VscSend } from "react-icons/vsc";

const Footer = () => {
    return (
        <div className="px-20 py-14 h-[30rem] bg-menu text-white my-12 mx-20 rounded-3xl">
            <div className="flex justify-between">
                <h2 className="text-4xl text-gray-200">Kaushal Gohil</h2>
                <a href="mailto: hello@kaushalgohil.com" className="text-gray-300 opacity-60 font-medium text-lg mt-3 underline duration-300 transition-all hover:text-gray-100 hover:opacity-90">hello@kaushalgohil.com</a>
            </div>

            <div className="text-gray-500 opacity-20 mt-5">
                <hr />
            </div>

            <div className="flex flex-row gap-40 mt-10 justify-between">
                <h2 className="text-4xl text-gray-200">
                    Subscribe to my Newsletter
                </h2>

                <form action="">
                    <div className="flex flex-row w-[25rem] mt-3">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="h-full w-full bg-transparent outline outline-0 focus:outline-0 text-gray-300 opacity-60 text-lg placeholder:text-gray-200 placeholder:opacity-50 placeholder:text-lg"
                        />
                        <div className="flex flex-row">
                            <input type="submit" value=" " className="text-2xl pl-6 mr-14" />
                            <div className="text-lg -ml-20 cursor-pointer">
                                <VscSend />
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div className="text-gray-500 opacity-20 mt-3">
                <hr />
            </div>

            <div className="mt-7">
                <div className="flex flex-row gap-3 text-gray-300 text-lg opacity-60 text-center justify-center">
                    <div className="flex flex-row gap-2">
                        <div className="mt-1">
                            <FaInstagram />
                        </div>
                        kaushal_gohil1999
                    </div>
                    <p>|</p>
                    <div className="flex flex-row gap-1">
                        <div className="mt-1">
                            <FaFacebookF />
                        </div>
                        kaushal_gohil1999
                    </div>
                    <p>|</p>
                    <div className="flex flex-row gap-2">
                        <div className="mt-1">
                            <FaLinkedinIn />
                        </div>
                        kaushal_gohil1999
                    </div>
                    <p>|</p>
                    <div className="flex flex-row gap-2">
                        <div className="mt-1">
                            <FaTwitter />
                        </div>
                        kaushal_gohil1999
                    </div>
                </div>
            </div>
            <h2 className="text-gray-200 text-7xl text-center mt-6 italic font-black tracking-[0.05rem]">
                #youcanitsthatsimple
            </h2>


            <div className="text-gray-500 opacity-20 mt-6">
                <hr />
            </div>

            <div className="mt-5 text-center text-lg text-gray-300 opacity-60">
                <p>©2023 by Kaushal Gohil</p>
            </div>
        </div>
    )
}

export default Footer