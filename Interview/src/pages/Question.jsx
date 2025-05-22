import { useState, useEffect } from "react";
import mokdata from "../data/mokQuestions";

function Question() {
    const [selectJob, setSelectedJob] = useState("");
    const filitered = mokdata.filter((q) => q.job === selectJob);
    const qeustionClick = () => {};

    useEffect(() => {
        const job = localStorage.getItem("selectJob");
        setSelectedJob(job);
    }, []);
    return (
        <div className="w-[500px] m-auto">
            <button
                className="w-[47%] h-[100px] bg-[#eeeeee]"
                onClick={qeustionClick}
            >
                랜덤 질문 보기
            </button>
            <h1>질문리스트</h1>
            <div>선택한 직업 :{selectJob}</div>
            <ul>
                질문:
                {filitered.map((job, index) => {
                    return <li key={index}>{job.question}</li>;
                })}
            </ul>
        </div>
    );
}

export default Question;
