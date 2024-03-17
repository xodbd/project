import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'

function Header() {
    return (
        <header>
            <h1 className='logo'>
                <Link to="/">Homeboy._.doodle<img src='' alt=''/></Link>
            </h1>
            <nav className='gnb'>
                <ul>
                    <li>
                        <Link to="/shop">PRODUCT</Link>
                    </li>
                    <li>
                        <Link to="/draw">DRAW</Link>
                    </li>
                    <li>
                        <Link to="/game">GAME</Link>
                    </li>
                    <li>
                        <Link to="/guestbook">GUESTBOOK</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;