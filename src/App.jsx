import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Episodes from "./components/Episodes";
import PlayingEpisode from "./components/PlayingEpisode";
import About from "./components/About";
import Hero from "./components/Hero";

function App() {
    return (
        <div className="m-8 max-w-6xl mx-auto">
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
    );
}

export default App;
