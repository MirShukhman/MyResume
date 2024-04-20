import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import '../style/App.css';

const Footer = () => {

    return (
        <div className="footer">
            <div className="icons">
                <FaLinkedin className="footer-icon" onClick={() => window.open('https://www.linkedin.com/in/miriam-shukhman-2b0a19169/', '_blank')} />
                <FaGithub className="footer-icon" onClick={() => window.open('https://github.com/MirShukhman', '_blank')} />
            </div>
            <div className='footer-caption'>
                <p>&copy;2024 Mir Shukhman </p>
            </div>
        </div >
    )
}

export default Footer