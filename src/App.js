/* eslint-disable */
import './css/reset.scss';
import './css/style.scss';
import { Routes, Route } from 'react-router-dom';
import Header from './component/header';
import Footer from './component/footer';
import Home from './pages/home';
import Nfts from './pages/nfts';

import axios from 'axios';

function App() {
  return (
    <div className="wrap">
      <Header></Header>
      <div className='contents'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nfts" element={<Nfts />} />
          {/* <Route path="/game" element={<Game />} />
          <Route path="/guestbook" element={<Guestbook />} />
          <Route path="/login" element={<Login />} /> */}
          <Route path="*" element={<div className='error-404'>404 Not Found</div>}/>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
