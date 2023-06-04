

import '../../pages/contact/contact.css'
import cn from '../../assets/cn.jpg'

const Contact = () => {

    return (
        <div>
            <div className="lg:my-16 my-32">
                <section
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${cn})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "repeat",
                        height: "720px",
                    }}
                    className="main_form flex flex-col justify-center">

                    <div className="from_section p-2 text-center max-w-[720px] mx-auto ">
                        <h4 className="mb-6 lg:mt-6 text-2xl font-semibold text-white">
                            CONTACT US
                        </h4>
                        <h1 id='start' className="start text-3xl md:text-4xl mb-10 text-[#D0B47F]">
                            Submit a Message
                        </h1>
                        <form
                            action="https://formspree.io/f/mjvdaovd"
                            method="POST"
                            className="mx-auto flex flex-col gap-2 lg:w-11/12 w-11/12 text-white"
                        >
                            <input
                                type="text"
                                id="firstName"
                                className="bg-[#ffffff00] hover:border-b-gray-50"
                                placeholder="Your firstName*"
                                name="firstName"
                            />
                            <input
                                type="text"
                                id="lastName"
                                className="bg-[#ffffff00] hover:border-b-gray-50"
                                placeholder="Your lastName*"
                                name="lastName"
                            />
                            <input
                                type="email"
                                id="email"
                                required
                                className="bg-[#ffffff00] hover:border-b-gray-50"
                                name="email"
                                placeholder="Your Email*"
                            />
                            <input
                                type="number"
                                id="phoneNumber"
                                className="bg-[#ffffff00] hover:border-b-gray-50"
                                name="phoneNumber"
                                placeholder="Your phoneNumber*"
                            />
                            <textarea
                                id="message"
                                className="bg-[#ffffff00] mt-5"
                                name="message"
                                cols="10"
                                rows="5"
                                placeholder="Message"
                            />
                            <input
                                className="baton mt-5 rounded-full border-[2px] border-yellow-500 text-[#FFD700] mx-auto items-center"
                                type="submit"
                                value="Submit"
                            />

                        </form>
                        <div>
                            <p className='text-white my-4 text-justify'>
                                We at PickABoo are dedicated to providing exceptional support and assistance to our valued users. If you have any questions, concerns, or feedback regarding our dating website or any aspect of your experience, we encourage you to reach out to us. Our team is here to listen, guide, and ensure that your journey on PickABoo is a positive and fulfilling one.
                            </p>
                        </div>
                    </div>

                </section>

            </div>
        </div>
    );
};

export default Contact;
