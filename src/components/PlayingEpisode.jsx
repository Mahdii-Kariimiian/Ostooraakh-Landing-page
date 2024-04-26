import React from "react";
import { useParams } from "react-router";
import episodes from "../episodes-details";
import Playing from "./Playing";

const PlayingEpisode = () => {
    const param = useParams().id;

    const selectedEpisode = episodes.find(
        (episode) => episode.episode == param
    );

    return (
        <div className="relative p-5">
            <div className="absolute inset-0 bg-sky-950 opacity-50"></div>
            <div className="space-y-5 md:flex gap-6 relative z-10 text-white ">
                <img
                    className="md:max-w-[300px]"
                    src={selectedEpisode.image}
                    alt={selectedEpisode.title}
                />
                <div className="space-y-5 flex flex-col justify-between">
                    <h1 className="font-bold text-2xl">
                        {selectedEpisode.title}
                    </h1>
                    <h2>قسمت {selectedEpisode.episode}</h2>
                    <p>{selectedEpisode.description}</p>
                    <p>تاریخ انتشار : {selectedEpisode.date}</p>
                    <div className="">
                        <Playing src={selectedEpisode.file} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayingEpisode;
