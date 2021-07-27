import { FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';
import { FaSnapchat } from 'react-icons/fa';

function Footer() {
    return (
        <footer>
            <h3>Bootstrap Bar</h3>
            <div className='footer-icons'>
                <div className='instagram'>
                    <FiInstagram />
                </div>
                <div className='facebook'>
                    <FiFacebook />
                </div>
                <div className='twitter'>
                    <FiTwitter />
                </div>
                <div className='snapchat'>
                    <FaSnapchat />
                </div>
            </div>
        </footer>
    )
}

export default Footer;