import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Episodes from "./components/Episodes";
import PlayingEpisode from "./components/PlayingEpisode";
import About from "./components/About";
import Hero from "./components/Hero";

function App() {
    return (
        <div className="relative">
            {/* Background with opacity */}
            <div className="bg-mobile md:bg-desktop bg-cover bg-no-repeat bg-center text-white relative">
                <div className="absolute inset-0 bg-black opacity-50"></div> {/* Opacity overlay */}
                
                {/* Content container */}
                <div className="p-8 flex flex-col justify-center items-center relative z-10">
                    {/* Content */}
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Home />}>
                                <Route index element={<Hero />} />
                                <Route path="/episodes" element={<Episodes />} />
                                <Route
                                    path="/episodes/:id"
                                    element={<PlayingEpisode />}
                                />
                            </Route>
                            <Route path="/about" element={<About />} />
                        </Routes>
                    </BrowserRouter>
                </div>
            </div>
        </div>
    );
}

export default App;
