import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import SignUpPage from "./pages/SignUpPage";
import SelectJob from "./pages/SelectJob";
import Question from "./pages/Question";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/SignUp" element={<SignUpPage />}></Route>
                    <Route path="/SelectJob" element={<SelectJob />}></Route>
                    <Route path="/Question" element={<Question />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
