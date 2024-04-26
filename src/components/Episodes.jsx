import React from "react";
import episodes from "../episodes-details";
import { NavLink, Outlet } from "react-router-dom";

const Episodes = () => {
    console.log(episodes);
    return (
        <div>
            <div className="mb-10">
                <Outlet />
            </div>
            <div className="min-w-[200px] p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                {episodes.map((episode) => {
                    return (
                        <NavLink
                            key={episode.id}
                            className={({ isActive }) =>
                                isActive
                                    ? "relative bg-red-900"
                                    : "relative"
                            }
                            to={`/episodes/${episode.episode}`}
                        >
                            <div className="absolute inset-0 bg-black opacity-50"></div>
                            <div className="relative text-white p-5 min-h-[500px] flex flex-col gap-4">
                                <img src={episode.image} alt={episode.title} />
                                <div className="flex flex-col gap-4">
                                    <p className="">
                                        {" "}
                                        اپیزود {episode.episode}
                                    </p>
                                    <h2 className="line-clamp-2 text-xl font-bold">
                                        {episode.title}
                                    </h2>
                                    <p className="line-clamp-2">
                                        {episode.description}
                                    </p>
                                    <p className="text-sm">
                                        {" "}
                                        تاریخ انتشار : {episode.date}
                                    </p>
                                </div>
                            </div>
                        </NavLink>
                    );
                })}
            </div>
        </div>
    );
};

export default Episodes;
