import { useState } from "react";
function Answer({ answer }) {
    const [input, setInput] = useState("");
    const [submit, setSubmit] = useState(false);

    const answerBtn = (e) => {
        e.preventDefault();
        setSubmit(true);
    };
    return (
        <form className="my-4 flex flex-col">
            <label className="my-2">내 답변</label>
            {!submit ? (
                <>
                    <input
                        className="w-[100%] h-[100px] border border-[#eeeeee] px-2"
                        type="text"
                        placeholder="내 답변을 작성하세요."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button
                        onClick={answerBtn}
                        className="mt-4 bg-blue-400 text-white py-2 px-4 rounded"
                    >
                        확인
                    </button>
                </>
            ) : (
                <>
                    <p className="bg-gray-100 p-2 rounded mb-2">
                        📝 내 답변: {input}
                    </p>
                    <p className="bg-green-100 p-2 rounded">
                        ✅ 예시 답변: {answer}
                    </p>
                </>
            )}
        </form>
    );
}

export default Answer;
