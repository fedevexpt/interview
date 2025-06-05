import { useState } from "react";
import DropDown from "../../components/DropDown";
import QuestionCard from "../../components/QuestionCard";

function TechQ() {
    const [selected, setSelected] = useState("react");

    return (
        <div className="w-[500px]  border border-[#eeeeee] m-auto mt-10 p-6">
            <div>
                <h1>기술</h1>
                <DropDown
                    items={["ALL", "react", "tech-stack"]}
                    onSelect={(value) => setSelected(value)}
                    selected={selected}
                />
            </div>

            <div>
                <QuestionCard selected={selected} />
            </div>
        </div>
    );
}

export default TechQ;
