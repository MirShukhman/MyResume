
import '../../style/SectionContent.css'
import { FaFileDownload } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Socials = () => {

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
        <div className='socials'>
            <div className="row"
                onClick={() => window.open('https://www.linkedin.com/in/miriam-shukhman-2b0a19169/', '_blank')}>
                <FaLinkedin className='socials-icon' />
                <p>LinkedIn </p>
            </div>
            <div className="row" id='row-github'
                onClick={() => window.open('https://github.com/MirShukhman', '_blank')}>
                <FaGithub className='socials-icon' />
                <p>GitHub </p>
            </div>
            <div className="row" onClick={downloadPDF}>
                <FaFileDownload className='socials-icon' />
                <p>Download CV</p>
            </div>
        </div>
    )
}

export default Socials