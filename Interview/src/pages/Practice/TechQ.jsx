import DropDown from "../../components/DropDown";
import QuestionCard from "../../components/QuestionCard";

function TechQ() {
    return (
        <div className="w-[500px] border border-[#eeeeee] m-auto mt-10 p-6">
            <div>
                <h1>기술</h1>
                <DropDown items={["react", "next", "tech-stack"]} />
            </div>

            <div className=" border border-[#eeeeee]">
                <QuestionCard />
            </div>
        </div>
    );
}

export default TechQ;
