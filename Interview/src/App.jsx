import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import TechQ from "./pages/Practice/TechQ";
import LanguageQ from "./pages/Practice/LanguageQ";
import CSQ from "./pages/Practice/CSQ";
import EtcQ from "./pages/Practice/EtcQ";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/SignUp" element={<SignUpPage />}></Route>
                    <Route path="/Login" element={<LoginPage />}></Route>
                    <Route
                        path="/practice/TechQuestion"
                        element={<TechQ />}
                    ></Route>
                    <Route
                        path="/practice/LanguageQuestion"
                        element={<LanguageQ />}
                    ></Route>
                    <Route
                        path="/practice/CSQuestion"
                        element={<CSQ />}
                    ></Route>
                    <Route
                        path="/practice/EtcQuestion"
                        element={<EtcQ />}
                    ></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
