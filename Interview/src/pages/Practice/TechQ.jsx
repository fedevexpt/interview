import { useState } from "react";
import DropDown from "../../components/DropDown";
import QuestionCard from "../../components/QuestionCard";
import Header from "../../components/Header";

function TechQ() {
    const [selected, setSelected] = useState("react");

    return (
        <div className="w-[500px]  border border-[#eeeeee] m-auto mt-10 p-6">
            <Header />
            <div>
                <h1 className="text-3xl my-4">기술</h1>
                <DropDown
                    items={["ALL", "react", "tech-stack"]}
                    onSelect={(value) => setSelected(value)}
                    selected={selected}
                />
            </div>

            <div>
                <QuestionCard category="기술" selected={selected} />
            </div>
        </div>
    );
}

export default TechQ;
