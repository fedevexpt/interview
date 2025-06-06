import { useState } from "react";
import DropDown from "../../components/DropDown";
import QuestionCard from "../../components/QuestionCard";
import Header from "../../components/Header";

function EtcQ() {
    const [selected, setSelected] = useState("web-cs");

    return (
        <div className="w-[500px]  border border-[#eeeeee] m-auto mt-10 p-6">
            <Header />
            <div>
                <h1 className="text-3xl my-4">CS</h1>
                <DropDown
                    items={["ALL", "web-cs"]}
                    onSelect={(value) => setSelected(value)}
                    selected={selected}
                />
            </div>

            <div>
                <QuestionCard category="CS" selected={selected} />
            </div>
        </div>
    );
}

export default EtcQ;
