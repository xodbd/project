import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Join(){
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = async(e) => {
        e.preventDefault();

        if(isLoading || name === "" || email === "" || password === "") return;

        try {
            setIsLoading(true);
            const credentials = await createUserWithEmailAndPassword(auth, email, password);
            console.log(credentials.user);
            await updateProfile(credentials.user, {
                displayName: name,
            });
            navigate("/");
        } catch (err) {
            console.error(err);
        } finally {

        }

        console.log(name, email, password);
    }

    return(
        <div className="join-wrap con-wrap">
            <div className="inner">
                <h1 className="title">Join</h1>
                <div className="form-area" onSubmit={onSubmit}>
                    <form className="join-form" >
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" placeholder="Name" required onChange={(e)=>{setName(e.target.value)}}/>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="Email" required onChange={(e)=>{setEmail(e.target.value)}}/>
                        </div>
                        <div className="form-group">
                            <label>PW</label>
                            <input type="password" placeholder="PW" required onChange={(e)=>{setPassword(e.target.value)}}/>
                        </div>
                        <div className="form-group">
                            <button type="submit" value="Join">{isLoading ? "로딩 중.." : "회원가입"}</button>
                        </div>
                    </form>
                    {error !== "" ? <p className="error-txt">{error}</p> : null}
                </div>
            </div>
        </div>
    )
}