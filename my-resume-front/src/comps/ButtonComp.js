
import { useState } from "react"
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Education from './sections/Education';
import About from './sections/About';
import Socials from './sections/Socials';

const ButtonComp = (props) => {
    const sectionsDict = {
        'Projects': <Projects />,
        'Skills': <Skills />,
        'Experience': <Experience />,
        'Education': <Education />,
        'About Me': <About />,
        'Socials': <Socials />
    }
    const { title } = props
    const [sectionIsOpen, setSectionIsOpen] = useState(false)

    const toggleSection = () => {
        setSectionIsOpen(!sectionIsOpen);
    };

    return (
        <div className="section-comp">
            <p onClick={toggleSection} >{title}</p>
            {sectionIsOpen && sectionsDict[title]}
        </div>
    )
}

export default ButtonComp