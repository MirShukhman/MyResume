
import '../../style/Sections.css';
import '../../style/SectionContent.css';
import { FaCode } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';

const Projects = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="projects">

            <div className="project" id='eventhub-project'>
                <div className="screenshot"></div>
                <p className="title" id='eventhub'>EventHub</p>
                <div className='proj-bottom'>
                    <div className="description">EventHub is a platform that allowes registered users to
                        organise events, or find and register for other's events. After event, users can leave reviewes
                        and upload images from the event.</div>

                    <div className="buttons">
                        <div className="project-button" onClick={() => { handleNavigation('/MyResume/project-eventhub'); }}>
                            <button id='border-button'>Read More</button>
                            <button className="button-shadow" id='read-more-button'></button>
                        </div>
                        <div className="project-button" onClick={() => window.open('https://github.com/MirShukhman/Project-3-Event-Hub', '_blank')}>
                            <button id='border-button'> <FaCode className='proj-icon' /> Code</button>
                            <button className="button-shadow" id='code-button'></button>
                        </div>
                        <div className="project-button" >
                            <button id='border-button'><TbWorld className='proj-icon' /> Live</button>
                            <button className="button-shadow" id='live-button'></button>
                        </div>
                    </div>

                </div>
            </div>

            <div className="project" id='pegasus-project'>
                <div className="screenshot" id='pegasus-screenshot'></div>
                <p className="title" id='pegasus'>Pegasus</p>
                <div className='proj-bottom'>
                    <div className="description">Pegasus is an online platform that allowes Airlines
                        to post upcoming flights, and for Customers to search for flights & purchase tickets.</div>

                    <div className="buttons" id='pegasus-buttons'>
                        <div className="project-button" onClick={() => { handleNavigation('/MyResume/project-pegasus'); }}>
                            <button id='border-button'>Read More</button>
                            <button className="button-shadow" id='read-more-button'></button>
                        </div>
                        <div className="project-button" onClick={() => window.open('https://github.com/MirShukhman/Project-2-Flights-Website', '_blank')}>
                            <button id='border-button'> <FaCode className='proj-icon' /> Code</button>
                            <button className="button-shadow" id='code-button'></button>
                        </div>
                        <div className="project-button">
                            <button id='border-button'><TbWorld className='proj-icon' /> Live</button>
                            <button className="button-shadow" id='live-button'></button>
                        </div>
                    </div>

                </div>
            </div>

            <div className="project" id='smishing-project'>
                <div className="screenshot" id='smishing-screenshot'></div>
                <p className="title" id='smishing'>Smishing Buster</p>
                <p className="title" id='smishing-bottom-title'>App Presentation</p>
                <div className='proj-bottom' id='smishing-bottom'>
                    <div className="description">An Academic Presentation Webpage of a final CS Degree Project.
                        The Project is a Smishing Buster App and the Webpage showcases the app for academic
                        presentation purposes.</div>

                    <div className="buttons" id='smishing-buttons'>
                        <div className="project-button" onClick={() => { handleNavigation('/MyResume/project-smishing'); }}>
                            <button id='border-button'>Read More</button>
                            <button className="button-shadow" id='read-more-button'></button>
                        </div>
                        <div className="project-button" onClick={() => window.open('https://github.com/MirShukhman/Smishing-Buster', '_blank')}>
                            <button id='border-button'> <FaCode className='proj-icon' /> Code</button>
                            <button className="button-shadow" id='code-button'></button>
                        </div>
                        <div className="project-button">
                            <button id='border-button'><TbWorld className='proj-icon' /> Live</button>
                            <button className="button-shadow" id='live-button'></button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Projects