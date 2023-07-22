import { useRef } from "react";
import emailjs from "@emailjs/browser";
import SocialPallete from "../../SocialPallete/SocialPallete.component";
import { VscSend } from "react-icons/vsc";
import { FaArrowRight } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_gbu159n",
                "template_gwg3tph",
                form.current,
                "66Ju-w-oFGruEr5JS"
            )
            .then(
                (result) => {
                    toast.success('Message Received!', {
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    })
                    e.target.reset();
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    const ContactInput = ({ label, type, name, placeholder }) => {
        return (
            <div className="max-w-5xl border-b-[1.5px] border-gray-300 border-opacity-30 pb-3 mb-9">
                <p className="text-xl pb-2">
                    {label}
                </p>

                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    className="h-full w-full bg-transparent outline outline-0 focus:outline-0 text-gray-300 opacity-60 placeholder:text-gray-200 placeholder:opacity-50"
                />
            </div>
        )
    }

    return (
        <div className="h-screen w-screen pt-14 px-24 mx-[14vw] mt-5">
            <div className="text-6xl font-medium leading-tight">
                Hello! Let's have a Chat!
            </div>

            <SocialPallete />

            {/* Main Form */}
            <form className="pt-7" ref={form} onSubmit={sendEmail}>
                <ContactInput
                    label="What's Your Name?"
                    type="text"
                    name='user_name'
                    placeholder="Full Name"
                />

                <ContactInput
                    label="Your Email?"
                    type="email"
                    name='user_email'
                    placeholder="Email Address"
                />

                <ContactInput
                    label="Your Mobile Number?"
                    type="text"
                    name='user_number'
                    placeholder="Mobile Number"
                />

                <ContactInput
                    label="Tell us About Yourself"
                    type="text"
                    name='user_message'
                    placeholder="Your Overview"
                />


                <div className="flex flex-row gap-3">
                    <input type="submit" value="Send" className="text-2xl pl-16 cursor-pointer" />
                    <div className="bg-white text-2xl text-black p-4 rounded-full -ml-40 cursor-pointer">
                        <VscSend />
                    </div>
                </div>

            </form>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    )
}

export default ContactForm