import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../supabaseClient";

function LoginForm() {
    const navigate = useNavigate();

    const goSignUp = () => {
        navigate("/SignUp");
    };

    const [login, setLogin] = useState({
        email: "",
        password: "",
    });

    const loginChange = (e) => {
        const { name, value } = e.target;

        setLogin((prev) => ({ ...prev, [name]: value }));
        console.log(value);
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        const { email, password } = login;
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            alert("로그인 실패:" + error.message);
        } else {
            alert("로그인 성공", data);
        }
    };

    return (
        <div className="w-[500px] m-auto">
            <h1 className="text-[30px] text-center my-[50px]">로그인</h1>
            <form onSubmit={handleLogin} className="flex flex-col">
                <label>이메일</label>
                <input
                    name="email"
                    value={login.email}
                    onChange={loginChange}
                    className="border border-[#cccccc] rounded-sm p-2 "
                    placeholder="이메일을 입력하세요."
                />
                <label>비밀번호</label>
                <input
                    name="password"
                    value={login.password}
                    onChange={loginChange}
                    className="border border-[#cccccc] rounded-sm p-2 "
                    type="password"
                    placeholder="비밀번호를 입력하세요."
                />
                <button className="w-full bg-blue-400 p-2 rounded-sm my-4">
                    로그인
                </button>
            </form>
            <div className="flex justify-end">
                <button type="submit" onClick={goSignUp}>
                    회원가입
                </button>
            </div>
        </div>
    );
}

export default LoginForm;
