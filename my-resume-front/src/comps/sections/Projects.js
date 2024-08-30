
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

            <div className="project" id='equpment-project'>

                <p className="title" id='equpment' onClick={() => { handleNavigation('/project-equpment'); }}>
                    Equpment Orders</p>
                <p className="title" id='equpment-bottom-title'
                    onClick={() => { handleNavigation('/project-equpment'); }}>
                    Mangment System</p>
                <div className='proj-bottom' id='equpment-bottom'>
                    <div className="description">

                        The Equipment Order Management System is a web application designed to streamline
                        equipment ordering for multi-branch establishments.
                        It offers branch and global admin interfaces for order creation, status tracking,
                        equipment management, and user administration, all within a secure, token-based authentication
                        system.
                    </div>

                    <div className="buttons" id='equpment-buttons'>
                        <div className="project-button" onClick={() => { handleNavigation('/project-equpment'); }}>
                            <button id='border-button'>Read More</button>
                            <button className="button-shadow" id='read-more-button'></button>
                        </div>
                        <div className="project-button" onClick={() => window.open('https://github.com/MirShukhman/equpment', '_blank')}>
                            <button id='border-button'> <FaCode className='proj-icon' /> Code</button>
                            <button className="button-shadow" id='code-button'></button>
                        </div>
                        <div className="project-button" onClick={() => window.open('https://mirshukhman.github.io/equpment/', '_blank')}>
                            <button id='border-button'><TbWorld className='proj-icon' /> Live</button>
                            <button className="button-shadow" id='live-button'></button>
                        </div>
                    </div>

                </div>
            </div>

            <div className="project" id='eventhub-project'>

                <p className="title" id='eventhub' onClick={() => { handleNavigation('/project-eventhub'); }}>
                    EventHub</p>
                <div className='proj-bottom'>
                    <div className="description">EventHub is a platform that allowes registered users to
                        organise events, or find and register for other's events. After event, users can leave reviewes
                        and upload images from the event.</div>

                    <div className="buttons" id='eventhub-buttons'>
                        <div className="project-button" onClick={() => { handleNavigation('/project-eventhub'); }}>
                            <button id='border-button'>Read More</button>
                            <button className="button-shadow" id='read-more-button'></button>
                        </div>
                        <div className="project-button" onClick={() => window.open('https://github.com/MirShukhman/Project-3-Event-Hub', '_blank')}>
                            <button id='border-button'> <FaCode className='proj-icon' /> Code</button>
                            <button className="button-shadow" id='code-button'></button>
                        </div>
                        {/* <div className="project-button" onClick={() => window.open('http://52.154.67.55', '_blank')} >
                            <button id='border-button'><TbWorld className='proj-icon' /> Live</button>
                            <button className="button-shadow" id='live-button'></button>
                        </div> */
                        }
                    </div>

                </div>
            </div>

            <div className="project" id='pegasus-project'>

                <p className="title" id='pegasus' onClick={() => { handleNavigation('/project-pegasus'); }}>
                    Pegasus</p>
                <div className='proj-bottom'>
                    <div className="description">Pegasus is an online platform that allowes Airlines
                        to post upcoming flights, and for Customers to search for flights & purchase tickets.</div>

                    <div className="buttons" id='pegasus-buttons'>
                        <div className="project-button" onClick={() => { handleNavigation('/project-pegasus'); }}>
                            <button id='border-button'>Read More</button>
                            <button className="button-shadow" id='read-more-button'></button>
                        </div>
                        <div className="project-button" onClick={() => window.open('https://github.com/MirShukhman/Project-2-Flights-Website', '_blank')}>
                            <button id='border-button'> <FaCode className='proj-icon' /> Code</button>
                            <button className="button-shadow" id='code-button'></button>
                        </div>
                        {/* <div className="project-button" onClick={() => window.open('http://tinyurl.com/pegasusmirshukhman', '_blank')}>
                            <button id='border-button'><TbWorld className='proj-icon' /> Live</button>
                            <button className="button-shadow" id='live-button'></button>
                        </div> */
                        }
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Projects