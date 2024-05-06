
import { useState, useEffect } from "react"
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Education from './sections/Education';
import About from './sections/About';
import Socials from './sections/Socials';
import Contact from "./sections/Contact";
import '../style/Sections.css';
import { RxChevronRight } from "react-icons/rx";

const ButtonComp = (props) => {
    const sectionsDict = {
        'Projects': <Projects />,
        'Skills': <Skills />,
        'Experience': <Experience />,
        'Education': <Education />,
        'About Me': <About />,
        'Links': <Socials />,
        'Get In Touch': <Contact />
    }
    const { title } = props
    const [sectionIsOpen, setSectionIsOpen] = useState(false)

    useEffect(() => {
        if (title === 'Get In Touch') {
            setSectionIsOpen(true);
        }
    }, []);

    const toggleSection = () => {
        setSectionIsOpen(!sectionIsOpen);
    };

    return (
        <div className="section-comp" id={title === 'Get In Touch' ? 'get-in-touch-section' : undefined}>
            <div className="section-header">
                <p onClick={toggleSection}>
                    <RxChevronRight className="circle-icon" id={sectionIsOpen ? 'circle-icon-down' : undefined} />
                    {title}</p>
                <div className="rectangle" id={title === 'About Me' ? "About-me" :
                    title === 'Get In Touch' ? 'Get-in-touch' : title}></div>
            </div>
            <div className='section-content' id={sectionIsOpen ? 'open' : 'closed'}>
                {sectionsDict[title]}
            </div>
        </div >
    )
}

export default ButtonComp