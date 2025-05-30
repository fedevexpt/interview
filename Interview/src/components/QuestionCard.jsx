import { supabase } from "../supabaseClient";
import { useEffect, useState } from "react";

function QuestionCard() {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const fetchTechQ = async () => {
            const { data, error } = await supabase
                .from("questions")
                .select("*")
                .eq("category", "기술");

            if (error) {
                console.log("불러오기 실패:", error.message);
            } else {
                console.log("불러오기 성공:", data);
                setQuestions(data);
            }
        };

        fetchTechQ();
    }, []);

    return (
        <div>
            <h1>category</h1>
            {questions.map((q) => (
                <div key={q.id} className="border p-2 my-2 rounded">
                    <h3>{q.question}</h3>
                </div>
            ))}
        </div>
    );
}
export default QuestionCard;
