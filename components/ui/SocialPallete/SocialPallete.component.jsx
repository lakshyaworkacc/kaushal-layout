import { FaInstagram, FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const SocialPallete = () => {
    return (
        <div className="pt-4 flex flex-row gap-5 text-gray-300 opacity-60 max-w-5xl">
            <p>hello@kaushalgohil.com</p>
            <p>|</p>
            <div className="flex flex-row gap-2">
                <div className="mt-1">
                    <FaInstagram />
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
            <p>|</p>
            <div className="flex flex-row gap-2">
                <div className="mt-1">
                    <FaLinkedinIn />
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
        </div>
    )
}

export default SocialPallete