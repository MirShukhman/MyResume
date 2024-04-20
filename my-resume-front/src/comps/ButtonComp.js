
import { useState, useEffect } from "react"
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Education from './sections/Education';
import About from './sections/About';
import Socials from './sections/Socials';
import Contact from "./sections/Contact";
import '../style/Sections.css';

const ButtonComp = (props) => {
    const sectionsDict = {
        'Projects': <Projects />,
        'Skills': <Skills />,
        'Experience': <Experience />,
        'Education': <Education />,
        'About Me': <About />,
        'Socials': <Socials />,
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
        <div className="section-comp" id={title === 'Get In Touch' ? 'get-in-touch' : undefined}>
            <div className="section-header"><p onClick={toggleSection}>{title}</p></div>
            {sectionIsOpen && sectionsDict[title]}
        </div >
    )
}

export default ButtonComp