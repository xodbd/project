/* eslint-disable */
import './css/reset.scss';
import './css/style.scss';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './component/header';
import Footer from './component/footer';
import Home from './pages/home';
import Login from './pages/login';

import axios from 'axios';

function App() {
  const [open, setOpen] = useState("");
  const snbOpen = () => {
      setOpen(open == "" ? "on" : "")
  }

  return (
    <div className="wrap">
      <div className='contents'>
        <Header open={open} snbOpen={snbOpen}></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/game" element={<Game />} />
          <Route path="/guestbook" element={<Guestbook />} />*/}
          <Route path="/login" element={<Login />} /> 
          <Route path="*" element={<div className='error-404 con-wrap'>404 Not Found</div>}/>
        </Routes>
        <Footer></Footer>
        <div className={`dimmed ${open}`} onClick={snbOpen}></div>
      </div>
    </div>
  );
}

export default App;
