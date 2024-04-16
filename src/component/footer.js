import {Link} from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div className="inner">
                <div className='footer-logo'><Link to={"/"}>R.House</Link></div>
                <p className="copyright">Copyright 2024. R.House inc. all rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;