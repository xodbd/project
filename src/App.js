/* eslint-disable */
import './css/reset.scss';
import './css/style.scss';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { auth } from "./firebase";
import Header from './component/header';
import Footer from './component/footer';
import Loading from './component/loading';
import Home from './pages/home';
import Login from './pages/login';
import Join from './pages/join';
import { useDispatch, useSelector } from 'react-redux';
import { setUserName, login } from "./store";

function App() {
  let dispatch = useDispatch();

  // 로그인
  const [isLogin, setIsLogin] = useState(false);
  const fbLogin = useSelector((state) => state.fbLogin);

  // 유저
  const [userName, setUserName] = useState("");

  // 로딩
  const [isLoading, setIsLoading] = useState(true);

  const init = async() => {
    await auth.authStateReady();
    setIsLoading(false);
    if(auth.currentUser == null) {
      console.log("로그인 하삼");
    } else {
      setIsLogin(true);
      setUserName(auth.currentUser.displayName);
    }
  }
  useEffect(()=>{
    init();
  }, []);

  // 사이드 내비
  const [open, setOpen] = useState("");
  const snbOpen = () => {
      setOpen(open == "" ? "on" : "")
  }

  return (
    <div className="wrap">
      <Header open={open} snbOpen={snbOpen} isLogin={isLogin} userName={userName}></Header>
      <div className='contents'>
        {isLoading ? <Loading /> : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/join" element={<Join />} />
            <Route path="*" element={<div className='error-404 con-wrap'>404 Not Found</div>} />
          </Routes>
        )}
      </div>
      <Footer></Footer>
      <div className={`dimmed ${open}`} onClick={snbOpen}></div>
    </div>
  );
}

export default App;
