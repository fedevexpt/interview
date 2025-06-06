import { Link } from "react-router-dom";
function Header() {
    return (
        <div className=" flex justify-between">
            <h1>
                <Link to="/">Home</Link>
            </h1>
            <div className="flex gap-2">
                <Link to="/SignUp">회원가입</Link>
                <p>/</p>
                <Link to="/Login">로그인</Link>
            </div>
        </div>
    );
}

export default Header;
