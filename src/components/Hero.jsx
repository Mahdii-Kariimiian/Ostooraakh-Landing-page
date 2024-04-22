import React from "react";
import { useState, useEffect } from "react";

const Hero = () => {
    useEffect(() => {
        fetch("http://localhost:3000/episodes")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return res.json();
            })
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div className="">
            <section className="p-5 border border-sky-200 min-h-[500px] flex flex-col justify-evenly items-center md:flex-row gap-20">
                <div className="space-y-10 ">
                    <h1 className=" whitespace-nowrap font-bold text-2xl md:text-4xl">
                        پادکست طنز اسطوراخ{" "}
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
        </div>
    );
};

export default Hero;
Hero;
