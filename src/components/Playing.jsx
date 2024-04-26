import React from "react";
import ReactAudioPlayer from "react-audio-player";

const Playing = ({ src }) => {
    return (
        <div>
            <ReactAudioPlayer
                listenInterval={1000}
                className="w-full"
                src={src}
                controls
            />
        </div>
    );
};

export default Playing;
