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
        <div className="p-5 border border-sky-300 md:flex space-y-20 md:space-y-0 gap-20 items-center ">
            <div className="">
                <ul className="space-y-5">
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

            <div className="space-y-5">
                <div className="space-y-3">
                    <p> شبکه های اجتماعی : </p>
                    <ul className="flex gap-5 text-2xl">
                        <li>
                            <Link to="">
                                <FaTwitter />
                            </Link>
                        </li>
                        <li>
                            <Link to="">
                                <FaInstagram />
                            </Link>
                        </li>
                        <li>
                            <Link to="">
                                <RiTelegramFill />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="space-y-3">
                    <p>از اینجا گوش کنید:</p>
                    <ul className="flex gap-5 text-2xl">
                        <li>
                            <Link to="">
                                <SiCastbox />
                            </Link>
                        </li>
                        <li>
                            <Link to="">
                                <SiApplepodcasts />
                            </Link>
                        </li>
                        <li>
                            <Link to="">
                                <FaSpotify />
                            </Link>
                        </li>
                        <li>
                            <Link to="">
                                <SiGooglepodcasts />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="md:mr-auto space-y-5">
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
                        <li>
                            <Link to="">
                                <FaGithub />
                            </Link>
                        </li>
                        <li>
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
