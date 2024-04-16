import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [login, setLogin] = useState({
        id: "",
        pw: ""
    });

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // 로그인 처리 로직
        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(login),
        });
        
        if (response.ok) {
            // 로그인 성공 시 리디렉션
            navigate('/');
        } else {
            // 로그인 실패 시 에러 처리
            console.error('로그인에 실패했습니다.');
        }
    };

    return (
        <div className="con-wrap login-wrap">
            <h1 className="title">LOGIN</h1>
            <div className="form-area">
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>ID</label>
                        <input type="text" placeholder="ID" onChange={(e)=>{setLogin({...login, id:e.target.value})}}/>
                    </div>
                    <div className="form-group">
                        <label>PW</label>
                        <input type="password" placeholder="PW" onChange={(e)=>{setLogin({...login, pw:e.target.value})}}/>
                    </div>
                    <div className="form-group">
                        <button type="submit">로그인</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;