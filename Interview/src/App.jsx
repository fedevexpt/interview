import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import SelectJob from "./pages/SelectJob";
import Question from "./pages/Question";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/SelectJob" element={<SelectJob />}></Route>
                    <Route path="/Question" element={<Question />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
