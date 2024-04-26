
import '../../style/SectionContent.css'
import { FaFileDownload } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Socials = () => {

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
            <div className="row">
                <FaFileDownload className='socials-icon' />
                <p>Download CV</p>
            </div>
        </div>
    )
}

export default Socials