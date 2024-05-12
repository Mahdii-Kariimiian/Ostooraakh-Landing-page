import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="relative">
            <section className="p-16 min-h-[550px] flex flex-col justify-evenly items-center lg:flex-row gap-20">
                <div className="space-y-10 ">
                    <h1 className=" whitespace-nowrap font-bold text-2xl md:text-4xl">
                        پادکست طنز اسطوراخ
                    </h1>
                    <h2 className="whitespace-nowrap text-xl md:text-2xl">
                        داستان هایی از دل هزاره های منفی
                    </h2>
                </div>
                <p className="leading-10 text-md md:text-lg md:leading-[3rem]">
                    اسطوراخ همونطور که تقریبا از اسمش معلومه در مورد
                    اسطوره‌هاست. <br /> تو این پادکست داستان‌های اساطیری
                    تمدن‌های مختلف دنیای باستان رو تعریف می‌کنم. <br /> خدایان و
                    موجودات عجیب و غریب رو معرفی می‌‌کنم و میگم که با خودشون،
                    دنیا و انسان‌ها چه کارهایی که نکردن.
                </p>
            </section>
            <section className="text-center">
                <Link to='/episodes' className="bg-primary px-10 py-3 text-xl font-bold lg:absolute bottom-16 left-16">
                    <button>
                        گوش کن
                    </button>
                </Link>
            </section>
        </div>
    );
};

export default Hero;
Hero;
