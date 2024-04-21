import {Link} from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            <div className="inner">
                <div className='footer-logo'><Link to={"/"}>R.House</Link></div>
                <p className="copyright">Copyright 2024. R.House inc. all rights reserved.</p>
            </div>
        </footer>
    );
}