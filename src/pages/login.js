import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
    const [loginId, setLoginId] = useState("");
    const [loginPw, setLoginPw] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        
    };

    return (
        <div className="con-wrap login-wrap">
            <div className="inner">
                <h1 className="title">LOGIN</h1>
                <div className="form-area">
                    <form className="login-form">
                        <div className="form-group">
                            <label>ID</label>
                            <input type="text" placeholder="ID" onChange={(e)=>{setLoginId(e.target.value)}}/>
                        </div>
                        <div className="form-group">
                            <label>PW</label>
                            <input type="password" placeholder="PW" onChange={(e)=>{setLoginPw(e.target.value)}}/>
                        </div>
                        <div className="form-group">
                            <button type="submit">로그인</button>
                        </div>
                    </form>
                </div>
                <div className="join-btn">
                    <Link to={"/join"}>회원가입</Link>
                </div>
            </div>
        </div>
    )
}