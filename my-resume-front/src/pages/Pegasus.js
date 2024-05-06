import { useNavigate } from "react-router-dom";
import { useState } from "react";
import '../style/ProjectPage.css'
import { FaCode } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { SiMicrosoftazure } from "react-icons/si";
import { FaDocker } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { IoArrowBackCircle } from "react-icons/io5";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import OpenImage from "../comps/OpenImage";
import PegasusMobile from './mobile-pages/PegasusMobile'
import Clouds from "../comps/backround/Clouds";

const Pegasus = () => {
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
            {
                window.innerWidth < 768 ? (<PegasusMobile />) :
                    (
                        <div className="project-page" >

                            <Clouds height={viewportHeight} />

                            {imageIsOpen && <OpenImage onClose={closeImage} project={'pegasus'} id={imageIsOpen} />}

                            <div className="project-page-inner" >

                                <div className="proj-top">
                                    <div id='pegasus-project-title'><h1 className="project-title">Pegasus</h1></div>

                                    <div className="nav-buttons" id='nav-buttons-pegasus'>
                                        <div className="nav-button">
                                            <button onClick={() => { handleNavigation('/MyResume/project-eventhub'); }}><IoArrowBackCircle /></button>
                                            <p className="nav-button-caption">Prev Project</p>
                                        </div>
                                        <div className="nav-button">
                                            <button onClick={() => { handleNavigation('/MyResume'); }}><IoHome /></button>
                                            <p className="nav-button-caption">Home</p>
                                        </div>
                                        <div className="nav-button">
                                            <button onClick={() => { handleNavigation('/MyResume/project-smishing'); }}><IoArrowForwardCircleSharp /></button>
                                            <p className="nav-button-caption">Next Project</p>
                                        </div>
                                    </div>

                                </div>

                                <h2>Tech Stack:</h2>
                                <div className="tech-stack">
                                    <div className='skill'>
                                        <p>MSSQL</p>
                                        <SiMicrosoftsqlserver className='skill-icon' />
                                    </div>
                                    <div className='skill'>
                                        <p>Python</p>
                                        <FaPython className='skill-icon' />
                                    </div>
                                    <div className='skill'>
                                        <p>Flask</p>
                                        <SiFlask className='skill-icon' />
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
                                        <p>Azure</p>
                                        <SiMicrosoftazure className='skill-icon' />
                                    </div>
                                    <div className='skill'>
                                        <p>Docker</p>
                                        <FaDocker className='skill-icon' />
                                    </div>
                                </div>

                                <div className="project-main">
                                    <p className="project-expl" id='project-expl-pegasus'>
                                        <p>
                                            Introducing Pegasus: Your Ultimate Flight Booking Platform.
                                            Pegasus is your go-to online platform bridging the gap between Airlines and Customers seeking seamless flight ticket purchases.
                                        </p>
                                        <p>
                                            For Customers:

                                            Effortless Flight Search: Find the perfect flight tailored to your needs with ease. Utilize our intuitive search functionality,
                                            filtering by dates, origin, and destination countries to discover your ideal itinerary.
                                            Streamlined Ticket Management: Keep track of your booked flights effortlessly with the "My Tickets" section.
                                            Need to make changes? Cancel tickets instantly with just one click, ensuring flexibility and convenience.
                                        </p>
                                        <p>
                                            For Airlines:

                                            Simplified Flight Management: Empowering Airline Companies with a user-friendly interface for hassle-free flight management.
                                            Easily add, update, or cancel flights with just a few clicks, ensuring seamless operations.
                                            Enhanced Security: Rest assured with our token system, safeguarding the integrity of flight data. Each airline enjoys exclusive
                                            access to their flight information in the "My Flights" section, ensuring data privacy and security.
                                        </p>
                                        <p>
                                            Administrative Features:

                                            Empowered Administration: Gain access to our exclusive Administrator interface, equipped with enhanced capabilities to
                                            streamline platform management.
                                            Effortless Oversight: Manage airline companies, add or revoke administrative roles with
                                            unparalleled ease, ensuring smooth platform governance.
                                        </p>
                                        <p>
                                            Join Pegasus today and experience the future of flight booking – where convenience, security, and efficiency converge to elevate
                                            your travel experience.
                                        </p>

                                        <h3>Demo Users To Check Out:</h3>
                                        <table>
                                            <thead>
                                                <th>Username</th>
                                                <th >Password</th>
                                                <th>User Type</th>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Admin111</td>
                                                    <td id='border-pegasus'>VerySecurePassword111</td>
                                                    <td>Admin</td>
                                                </tr>
                                                <tr>
                                                    <td>UFOAirlines</td>
                                                    <td id='border-pegasus'>UfO000</td>
                                                    <td>Airline</td>
                                                </tr>
                                                <tr>
                                                    <td>GinnyC</td>
                                                    <td id='border-pegasus'>Ginny444</td>
                                                    <td>Customer</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <div className="project-buttons" id='proj-page-buttons'>
                                            <div className="project-button" onClick={() => window.open('https://github.com/MirShukhman/Project-2-Flights-Website', '_blank')} >
                                                <button id='proj-border-button'> <FaCode className='proj-icon' /> Code</button>
                                                <button className="proj-button-shadow" id='code-button-pegasus'></button>
                                            </div>
                                            <div className="project-button" onClick={() => window.open('https://tinyurl.com/pegasusmirshukhman', '_blank')}>
                                                <button id='proj-border-button'><TbWorld className='proj-icon' /> Live</button>
                                                <button className="proj-button-shadow" id='live-button-pegasus'></button>
                                            </div>
                                        </div>

                                    </p>
                                    <div className="project-screenshots-pegasus">
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

export default Pegasus