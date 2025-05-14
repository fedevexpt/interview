import { useState, useEffect } from "react";
import mokdata from "../data/mokQuestions";

function Question() {
    const [selectJob, setSelectedJob] = useState("");
    const filitered = mokdata.filter((q) => q.job === selectJob);

    useEffect(() => {
        const job = localStorage.getItem("selectJob");
        setSelectedJob(job);
    }, []);
    return (
        <div>
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
