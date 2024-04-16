import { Link, useNavigate } from 'react-router-dom';
import { SlUser } from "react-icons/sl";
import { SlMenu } from "react-icons/sl";
import { VscClose } from "react-icons/vsc";
import { useState } from 'react';

function Header(props) {

    return (
        <>
            <header>
                <div className='inner'>
                    <div className='snb-btn'
                        onClick={props.snbOpen}
                    >
                        <SlMenu className='icon'/>
                    </div>
                    <h1 className='logo'>
                        <Link to={"/"}>R.House</Link>
                    </h1>
                    <div className='utility'>
                        <Link to={"/login"}><SlUser className='icon'/></Link>
                    </div>
                </div>
            </header>
            <div className={`snb-wrap ${props.open}`}>
                <div className='snb-top'>
                    <div><Link to={"/"}>김태융님</Link></div>
                    <div className='snb-close' onClick={props.snbOpen}><VscClose className='icon'/></div>
                </div>
                <nav>
                    <ul className='snb'>
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
            </div>
        </>
    );
}

export default Header;