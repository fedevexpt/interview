import { useNavigate } from "react-router";

function SelectJob() {
    const navigate = useNavigate();

    const handleJob = (job) => {
        localStorage.setItem("selectJob", job);
        navigate("/Question");
    };

    return (
        <div className="w-[500px] m-auto">
            <header className="w-[100px] text-center m-auto">
                <h1>LOGO</h1>
            </header>
            <h1 className="text-[40px] font-bold text-center my-6">
                직무를 선택하세요
            </h1>
            <div className="w-auto flex gap-[30px] ">
                <div
                    className="w-[47%] h-[100px] bg-[#eeeeee]"
                    onClick={() => {
                        handleJob("프론트엔드");
                    }}
                >
                    <p>프론트엔드</p>
                </div>
                <div
                    className="w-[47%] h-[100px] bg-[#eeeeee]"
                    onClick={() => {
                        handleJob("백엔드");
                    }}
                >
                    <p>백엔드</p>
                </div>
            </div>
            <ul className="w-auto flex flex-wrap justify-between my-6 gap-2">
                <li className="w-[47%] h-[100px] bg-[#eeeeee]">CS</li>
                <li className="w-[47%] h-[100px] bg-[#eeeeee]">기술</li>
                <li className="w-[47%] h-[100px] bg-[#eeeeee] ">인성</li>
                <li className="w-[47%] h-[100px] bg-[#eeeeee]">기타</li>
            </ul>
        </div>
    );
}
export default SelectJob;
