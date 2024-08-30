import { useNavigate } from "react-router-dom";
import '../../style/MobileProjectPage.css'
import { FaCode } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { IoArrowBackCircle } from "react-icons/io5";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import Clouds from "../../comps/backround/Clouds";

const SmishingMobile = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };
    const viewportHeight = window.innerHeight;


    return (
        <div className="project-page">

            <Clouds height={viewportHeight} />

            <div className="project-page-inner-mobile">

                <div className="nav-buttons-mobile" id='nav-buttons-smishing'>
                    <div className="nav-button">
                        <button onClick={() => { handleNavigation('/MyResume/project-pegasus'); }}><IoArrowBackCircle /></button>
                        <p className="nav-button-caption">Prev Project</p>
                    </div>
                    <div className="nav-button">
                        <button onClick={() => { handleNavigation('/MyResume'); }}><IoHome /></button>
                        <p className="nav-button-caption">Home</p>
                    </div>
                    <div className="nav-button">
                        <button onClick={() => { handleNavigation('/MyResume/project-eventhub'); }}><IoArrowForwardCircleSharp /></button>
                        <p className="nav-button-caption">Next Project</p>
                    </div>
                </div>

                <div className="proj-top-mobile">
                    <div id='smishing-project-title'><h1 className="project-title">Smishing Buster </h1>
                        <h2 className="project-title">App Presentation </h2></div>

                </div>

                <h2>Tech Stack:</h2>
                <div className="tech-stack-mobile">
                    <div className='skill'>
                        <p>React</p>
                        <FaReact className='skill-icon' />
                    </div>
                    <div className='skill'>
                        <p>HTML</p>
                        <FaHtml5 className='skill-icon' />
                    </div>
                    <div className='skill'>
                        <p>CSS</p>
                        <FaCss3Alt className='skill-icon' />
                    </div>
                </div>


                <div className="project-main-mobile">
                    <p className="project-expl-mobile">
                        <p>
                            The website is an Academic Presentation of a final project for CS degree.
                            The project being presented is a Smishing Buster App.
                        </p>
                        <p>
                            The website showcases the project in a simplistic manner, alike the app itself, witch
                            has a very simple two-button UI. The website is divided into three
                            pages: Why, How and Demo. Demo section features a video demonstration of the app,
                            inside a frame mimicing a smartphone.
                        </p>

                        <div className="project-buttons" id='proj-page-buttons'>
                            <div className="project-button" onClick={() => window.open('https://github.com/MirShukhman/Smishing-Buster', '_blank')} >
                                <button id='proj-border-button'> <FaCode className='proj-icon' /> Code</button>
                                <button className="proj-button-shadow" id='code-button-smishing'></button>
                            </div>
                            <div className="project-button" >
                                <button id='proj-border-button' onClick={() => window.open('https://mirshukhman.github.io/Smishing-Buster/', '_blank')}><TbWorld className='proj-icon' /> Live</button>
                                <button className="proj-button-shadow" id='live-button-smishing'></button>
                            </div>
                        </div>

                    </p>
                    <div className="project-screenshots-smishing" id='project-screenshots-mobile'>
                        <div className="proj-scrnshot-mobile" id='scrnshot1' ></div>
                        <div className="proj-scrnshot-mobile" id='scrnshot2' ></div>
                        <div className="proj-scrnshot-mobile" id='scrnshot3' ></div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default SmishingMobile