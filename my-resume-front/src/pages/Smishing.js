import { useNavigate } from "react-router-dom";
import { useState } from "react";
import '../style/ProjectPage.css'
import { FaCode } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { IoArrowBackCircle } from "react-icons/io5";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import OpenImage from "../comps/OpenImage";
import SmishingMobile from "./mobile-pages/SmishingMobile";
import Clouds from "../comps/backround/Clouds";

const Smishing = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    const [imageIsOpen, setImageIsOpen] = useState(false);

    function openImage(id) {
        setImageIsOpen(id);
    }

    function closeImage() {
        setImageIsOpen(false);
    }

    const viewportHeight = window.innerHeight;

    return (
        <>
            {window.innerWidth < 768 ? (<SmishingMobile />) :

                (<div className="project-page">

                    <Clouds height={viewportHeight} />

                    {imageIsOpen && <OpenImage onClose={closeImage} project={'smishing'} id={imageIsOpen} />}

                    <div className="project-page-inner">

                        <div className="proj-top">
                            <div id='smishing-project-title'><h1 className="project-title">Smishing Buster </h1>
                                <h2 className="project-title">App Presentation </h2></div>

                            <div className="nav-buttons" id='nav-buttons-smishing'>
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

                        </div>

                        <h2>Tech Stack:</h2>
                        <div className="tech-stack">
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

                        <h2>Deployed Using:</h2>
                        <div className="tech-stack">
                            <div className='skill'>
                                <p>GitHub</p>
                                <FaGithub className='skill-icon' />
                            </div>
                        </div>

                        <div className="project-main">
                            <p className="project-expl">
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
                                    <div className="project-button" onClick={() => window.open('https://mirshukhman.github.io/Smishing-Buster/', '_blank')}>
                                        <button id='proj-border-button'><TbWorld className='proj-icon' /> Live</button>
                                        <button className="proj-button-shadow" id='live-button-smishing'></button>
                                    </div>
                                </div>

                            </p>
                            <div className="project-screenshots-smishing">
                                <div className="proj-scrnshot" id='scrnshot1' onClick={() => openImage('1')}></div>
                                <div className="proj-scrnshot" id='scrnshot2' onClick={() => openImage('2')}></div>
                                <div className="proj-scrnshot" id='scrnshot3' onClick={() => openImage('3')}></div>
                            </div>
                        </div>

                    </div>

                </div>)
            }
        </>
    )
}

export default Smishing