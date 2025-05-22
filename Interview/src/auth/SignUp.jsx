function SignUpForm() {
    return (
        <div className="w-[500px] m-auto">
            <h1 className="text-[30px] text-center my-[50px]">회원가입</h1>
            <form className="flex flex-col">
                <label className="text-[14px] my-2">이메일</label>
                <input
                    className="border border-[#cccccc] rounded-sm p-2 "
                    type="text"
                    placeholder="E-mail"
                    label="Email"
                />
                <label className="text-[14px] my-2">비밀번호</label>
                <input
                    className="border border-[#cccccc] rounded-sm p-2 "
                    type="password"
                    placeholder="password"
                />
                <label className="text-[14px] my-2">닉네임</label>
                <input
                    className="border border-[#cccccc] rounded-sm p-2 "
                    type="text"
                    placeholder="name"
                />
                <label className="text-[14px] my-2">성별</label>
                <div>
                    <label className="mr-2">
                        <input
                            className="mr-2"
                            type="radio"
                            name="gender"
                            value="남성"
                        />
                        남성
                    </label>
                    <label>
                        <input
                            className="mr-2"
                            type="radio"
                            name="gender"
                            value="여성"
                        />
                        여성
                    </label>
                </div>
            </form>
            <button className="w-full bg-blue-400 p-2 rounded-sm my-4">
                확인
            </button>
        </div>
    );
}
export default SignUpForm;
