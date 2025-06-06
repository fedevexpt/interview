import { supabase } from "../supabaseClient";
import { useEffect, useState } from "react";
import Answer from "./Answer";

function QuestionCard({ category, selected }) {
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        } else {
            alert("첫 번째 질문입니다.");
        }
    };

    const handleNext = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex((prev) => prev + 1);
        } else {
            alert("모든 질문을 완료했어요!");
        }
    };

    useEffect(() => {
        const fetchTechQ = async () => {
            let query = supabase
                .from("questions")
                .select("*")
                .eq("category", category);

            // "ALL"이 아니면 name 필터 추가
            if (selected !== "ALL") {
                query = query.eq("name", selected);
            }

            const { data, error } = await query;

            if (error) {
                console.log("불러오기 실패:", error.message);
            } else {
                console.log("불러오기 성공:", data);
                setQuestions(data);
                setCurrentIndex(0);
                console.log("selected 값:", selected);
            }
        };

        fetchTechQ();
    }, [category, selected]);

    return (
        <div>
            {questions.length > 0 && (
                <div
                    key={questions[currentIndex].id}
                    className="border p-2 my-2 rounded"
                >
                    <h2 className="text-2xl my-4">
                        {questions[currentIndex].name.toUpperCase()}
                    </h2>
                    <h3>{questions[currentIndex].question}</h3>
                    <Answer
                        answer={questions[currentIndex].answer}
                        // id={questions[currentIndex].id}
                    />
                    <div className="flex justify-between">
                        <button
                            onClick={handlePrev}
                            className="mt-4 bg-blue-400 text-white py-2 px-4 rounded"
                        >
                            ← 이전 질문
                        </button>
                        <button
                            onClick={handleNext}
                            className="mt-4 bg-blue-400 text-white py-2 px-4 rounded"
                        >
                            다음 질문 →
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
export default QuestionCard;
