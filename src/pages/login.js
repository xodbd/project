import { auth } from "../firebase";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Join(){
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = async(e) => {
        e.preventDefault();
        setError("");

        if(isLoading || email === "" || password === "") return;

        try {
            setIsLoading(true);
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch (err) {
            if(err instanceof FirebaseError) {
                setError(err.message);
            }
        } finally {
            setIsLoading(false);
        }
    }

    return(
        <div className="login-wrap con-wrap">
            <div className="inner">
                <h1 className="title">LOGIN</h1>
                <div className="form-area" onSubmit={onSubmit}>
                    <form className="login-form">
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="Email" required onChange={(e)=>{setEmail(e.target.value)}}/>
                        </div>
                        <div className="form-group">
                            <label>PW</label>
                            <input type="password" placeholder="PW" required onChange={(e)=>{setPassword(e.target.value)}}/>
                        </div>
                        <div className="form-group">
                            <button type="submit" value="Login">{isLoading ? "로딩 중.." : "로그인"}</button>
                        </div>
                    </form>
                    {error !== "" ? <p className="error-txt">{error}</p> : null}
                </div>
                <div className="join-btn">
                    <Link to={"/join"}>회원가입</Link>
                </div>
            </div>
        </div>
    )
}