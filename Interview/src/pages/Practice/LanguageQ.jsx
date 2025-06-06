import { useState } from "react";
import Header from "../../components/Header";
import DropDown from "../../components/DropDown";
import QuestionCard from "../../components/QuestionCard";

function LanguageQ() {
    const [selected, setSelected] = useState("javascript");

    return (
        <div>
            <div className="w-[500px]  border border-[#eeeeee] m-auto mt-10 p-6">
                <Header />
                <div>
                    <h1 className="text-3xl my-4">언어</h1>
                    <DropDown
                        items={["ALL", "html", "css", "javascript"]}
                        onSelect={(value) => setSelected(value)}
                        selected={selected}
                    />
                </div>
                <div>
                    <QuestionCard category="language" selected={selected} />
                </div>
            </div>
        </div>
    );
}

export default LanguageQ;
