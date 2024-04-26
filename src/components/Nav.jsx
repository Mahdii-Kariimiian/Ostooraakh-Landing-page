import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <header className=" p-10 flex justify-between items-center">
            
            <div className="w-[100px] md:w-[150px]">
                <Link to="/">
                    <img 
                        src="/white logo transparent.png"
                        alt="Logo"
                        aria-label="Logo"
                    />
                </Link>
            </div>
            <div className="font-bold">
                <ul className="max-md:hidden flex gap-2">
                    <li className="hover:bg-red-600 px-6 py-2">
                        <Link to="donation"> حمایت </Link>
                    </li>
                    <li className="hover:bg-red-600 px-6 py-2">
                        <Link to="episodes"> قسمتها </Link>
                    </li>
                    <li className="hover:bg-red-600 px-6 py-2">
                        <Link to="about">درباره پادکست</Link>
                    </li>
                </ul>
            </div>
            {/* Hamburger Menu */}
            <button onClick={handleClick} className="md:hidden text-4xl relative z-10">
                <RxHamburgerMenu />
            </button>
            {isClicked && (
                <div
                    onClick={handleClick}
                    className="absolute bg-black min-w-[150px] w-1/2 pt-20 top-0 bottom-0 left-0 md:hidden text-center z-20"
                >
                    <ul className="space-y-16 text-xl font-bold">
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
            )}
        </header>
    );
};

export default Nav;
