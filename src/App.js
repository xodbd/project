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

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const init = async() => {
    await auth.authStateReady();
    setIsLoading(false);
  }
  useEffect(()=>{
    init();
  }, []);

  const [open, setOpen] = useState("");
  const snbOpen = () => {
      setOpen(open == "" ? "on" : "")
  }
  
  const user = auth.currentUser;
  console.log(user);

  return (
    <div className="wrap">
      <Header open={open} snbOpen={snbOpen}></Header>
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
