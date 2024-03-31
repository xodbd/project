import { Link, useNavigate } from 'react-router-dom';
import { SlUser } from "react-icons/sl";

function Header() {
    let navigate = useNavigate();

    return (
        <header>
            <h1 className='logo'>
                <Link to={"/"}><img src='/img/logo.png' alt=''/></Link>
            </h1>
            <nav>
                <ul className='gnb'>
                    <li>
                        <Link to={"/nfts"}>NFTs</Link>
                    </li>
                    <li>
                        <Link to={"/game"}>GAME</Link>
                    </li>
                    <li>
                        <Link to={"/guestbook"}>GUESTBOOK</Link>
                    </li>
                </ul>
            </nav>
            <div className='utility'>
                <Link to={"/login"}><SlUser /></Link>
            </div>
        </header>
    );
}

export default Header;