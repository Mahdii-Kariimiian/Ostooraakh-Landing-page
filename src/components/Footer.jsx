import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTelegramFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiCastbox } from "react-icons/si";
import { SiApplepodcasts } from "react-icons/si";
import { FaSpotify } from "react-icons/fa";
import { SiGooglepodcasts } from "react-icons/si";

const Footer = () => {
    return (
        <div className="bg-black p-10 md:flex space-y-20 md:space-y-0 gap-20 items-start ">
            <div className="">
                <ul className="space-y-10">
                    <li>
                        <Link to="donation"> حمایت </Link>
                    </li>
                    <li>
                        <Link to="episodes"> قسمتها </Link>
                    </li>
                    <li>
                        <Link to="about">درباره پادکست</Link>
                    </li>
                </ul>
            </div>

            <div className="space-y-10">
                <div className="space-y-3">
                    <p> شبکه های اجتماعی : </p>
                    <ul className="flex gap-5 text-2xl">
                        <li className="hover:text-red-600">
                            <Link to="">
                                <FaTwitter />
                            </Link>
                        </li>
                        <li className="hover:text-red-600">
                            <Link to="">
                                <FaInstagram />
                            </Link>
                        </li>
                        <li className="hover:text-red-600">
                            <Link to="">
                                <RiTelegramFill />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="space-y-3">
                    <p>از اینجا گوش کنید:</p>
                    <ul className="flex gap-5 text-2xl">
                        <li className="hover:text-red-600">
                            <Link to="">
                                <SiCastbox />
                            </Link>
                        </li>
                        <li className="hover:text-red-600">
                            <Link to="">
                                <SiApplepodcasts />
                            </Link>
                        </li>
                        <li className="hover:text-red-600">
                            <Link to="">
                                <FaSpotify />
                            </Link>
                        </li>
                        <li className="hover:text-red-600">
                            <Link to="">
                                <SiGooglepodcasts />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                    <h3>نویسنده و تنظیم کننده : </h3>
                    <h2>مهدی کریمیان</h2>
                    <br />
                    <h3>گوینده :  </h3>
                    <h2>
                        کیوان شارخی
                    </h2>
                </div>
            <div className="md:mr-auto space-y-8">
                <div className="w-[200px] md:w-[150px]">
                    <img
                        src="../../public/white logo transparent.png"
                        alt="Logo"
                        aria-label="Logo"
                    />
                </div>
                
                <div className="space-y-3">
                    <p>توسعه داده شده توسط:</p>
                    <p>مهدی کریمیان </p>
                    <ul className="flex gap-5 text-2xl">
                        <li className="hover:text-red-600">
                            <Link to="">
                                <FaGithub />
                            </Link>
                        </li>
                        <li className="hover:text-red-600">
                            <Link to="">
                                <FaLinkedin />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
