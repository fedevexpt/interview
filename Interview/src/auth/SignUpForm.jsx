import { useState, useRef } from "react";
import { supabase } from "../supabaseClient.js";

function SignUpForm() {
    const [signUp, setSignUp] = useState({
        email: "",
        password: "",
        userName: "",
        gender: "",
    });

    const inputRef = useRef();

    const handleChange = (e) => {
        const { name, value } = e.target;

        setSignUp((prev) => ({
            ...prev,
            [name]: value,
        }));
        // console.log(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log("제출됌");

        const { data, error } = await supabase.auth.signUp({
            email: signUp.email,
            password: signUp.password,
            options: {
                data: {
                    userName: signUp.userName,
                    gender: signUp.gender,
                },
            },
        });

        if (error) {
            console.log("회원가입 실패", error.message);
            inputRef.current.focus();
            return;
        } else {
            console.log("회원가입 성공", data);
        }
    };

    return (
        <div className="w-[500px] m-auto">
            <h1 className="text-[30px] text-center my-[50px]">회원가입</h1>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <label className="text-[14px] my-2">이메일</label>
                <input
                    ref={inputRef}
                    name="email"
                    onChange={handleChange}
                    value={signUp.email}
                    className="border border-[#cccccc] rounded-sm p-2 "
                    type="text"
                    placeholder="E-mail"
                    label="Email"
                />
                <label className="text-[14px] my-2">비밀번호</label>
                <input
                    name="password"
                    value={signUp.password}
                    onChange={handleChange}
                    className="border border-[#cccccc] rounded-sm p-2 "
                    type="password"
                    placeholder="password"
                />
                <label className="text-[14px] my-2">닉네임</label>
                <input
                    name="userName"
                    onChange={handleChange}
                    value={signUp.userName}
                    className="border border-[#cccccc] rounded-sm p-2 "
                    type="text"
                    placeholder="name"
                />
                <label className="text-[14px] my-2">성별</label>
                <div>
                    <label className="mr-2">
                        <input
                            name="gender"
                            onChange={handleChange}
                            value="남성"
                            className="mr-2"
                            type="radio"
                        />
                        남성
                    </label>
                    <label>
                        <input
                            name="gender"
                            onChange={handleChange}
                            value="여성"
                            className="mr-2"
                            type="radio"
                        />
                        여성
                    </label>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-400 p-2 rounded-sm my-4"
                >
                    확인
                </button>
            </form>
        </div>
    );
}
export default SignUpForm;
