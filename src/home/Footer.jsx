import { FaFacebook, FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa';
import mainLogoImage from "../assets/mainLogo.jpg"
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className=" text-white bg-slate-6 bg-black">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-4 px-8">


                <div className="flex">
                    <Link
                        to="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center m-0"
                    >
                        <img
                            className="max-w-[312px] min-w-[190px] max-h-[111px]  bg-gray-900 p-4 rounded-md"
                            src={mainLogoImage} alt=""
                        />
                    </Link>
                </div>
                <div className='flex items-center'>  <FaEnvelope className="text-gray-500 text-xl mt-2 " />
                    {/* <span className="ml-2 text-black lg:mx-4 mx-4 mt-2">yourproject@jordancollective.com</span> */}
                </div>

                <div className="flex items-center mt-2 md:mt-0 lg:mt-0">
                    <FaEnvelope className="text-gray-500 text-xl hidden " />
                    <span className="ml-2 text-black hidden">yourproject@jordancollective.com</span>
                    <div className="flex">
                        {/* <a href="https://www.facebook.com">
                            <FaFacebook className="text-black text-xl mx-2" />
                        </a>
                        <a href="https://www.instagram.com">
                            <FaInstagram className="text-black text-xl mx-2" />
                        </a>
                        <a href="https://www.youtube.com">
                            <FaYoutube className="text-black text-xl mx-2" />
                        </a> */}

                        <a
                            href='tel:+888888'
                            rel='noreferrer'
                            target='_blank'
                            className="flex gap-2 text-white"
                        >
                            <span>
                                Contact:
                            </span>
                            <span>
                                +8888888888
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <hr className='text-white mx-12 mb-2 mt-[-8px]' />
            <div
                className='text-center text-xs'>
                <p>Developed by : Software Team, PickABoo  Software Firm Limited.
                </p>
                <p>Copyright © 1983-2023  PickABoo  Software Firm Limited.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
