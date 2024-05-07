import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { MdEditDocument } from "react-icons/md";
import '../style/Footer.css';

const Footer = () => {

    const downloadPDF = () => {
        const pdfPath = '/Resume_Download_Mir_Shukhman.pdf';
        const link = document.createElement('a');
        link.href = pdfPath;
        link.download = 'Resume_Mir_Shukhman.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <footer className="footer">
            <div className="icons">
                <div className='icon-linkendin'>
                    <p className='icon-caption' id='icon-caption-linkendin'>Linkedin </p>
                    <FaLinkedin className="footer-icon" id='footer-icon-resume'
                        onClick={() => window.open('https://www.linkedin.com/in/miriam-shukhman-2b0a19169/', '_blank')} />
                </div>
                <div className='icon-github'>
                    <p className='icon-caption' id='icon-caption-github'>GitHub </p>
                    <FaGithub className="footer-icon" id='footer-icon-resume'
                        onClick={() => window.open('https://github.com/MirShukhman', '_blank')} />
                </div>
                <div className='icon-resume' onClick={downloadPDF}>
                    <p className='icon-caption' id='icon-caption-resume'>Download CV</p>
                    <MdEditDocument className="footer-icon" id='footer-icon-resume' />
                </div>
            </div>
            <div className='footer-caption'>
                <p>&copy;2024 Mir Shukhman </p>
            </div>
        </footer >
    )
}

export default Footer