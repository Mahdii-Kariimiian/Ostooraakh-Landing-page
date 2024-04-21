import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
    const [isClicked, setIsClicked] = useState(false);

    console.log(isClicked);
    const handleClick = () => {
        setIsClicked(!isClicked);
    };
    return (
        <header className="p-5 flex justify-between items-center bg-sky-100 ">
            <div className="w-[100px] md:w-[150px]">
                <img
                    src="../../public/black Logo.png"
                    alt="Logo"
                    aria-label="Logo"
                />
            </div>

            <div>
                <ul className="max-md:hidden flex gap-10">
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
            {/* Hamburger Menu */}
            <button onClick={handleClick} className="md:hidden text-4xl">
                <RxHamburgerMenu />
            </button>
            {isClicked && (
                <div
                    onClick={handleClick}
                    className="absolute bg-sky-200 min-w-[150px] w-1/2 pt-20 top-0 bottom-0 left-0 md:hidden text-center"
                >
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
            )}
        </header>
    );
};

export default Nav;
