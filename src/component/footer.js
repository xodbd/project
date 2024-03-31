import {useNavigate} from 'react-router-dom';

function Footer() {
    let navigate = useNavigate();

    return (
        <footer>
            <div className="inner">
                <div className='footer-logo' onClick={()=>navigate("/")}><img src='/img/logo.png' alt=''/></div>
                <p className="copyright">Copyright 2024. Homeboy._.Doodle inc. all rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;