import { useNavigate } from "react-router-dom";
import '../../style/MobileProjectPage.css'
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
import { FaGithub } from "react-icons/fa";
import Clouds from "../../comps/backround/Clouds";

const PegasusMobile = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };
    const viewportHeight = window.innerHeight;

    return (
        <div className="project-page" >

            <Clouds height={viewportHeight} />

            <div className="project-page-inner-mobile" >

                <div className="nav-buttons-mobile" id='nav-buttons-pegasus'>
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


                <div className="proj-top-mobile">
                    <div id='pegasus-project-title'><h1 className="project-title">Pegasus</h1></div>

                </div>

                <h2>Tech Stack:</h2>
                <div className="tech-stack-mobile">
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

                <div className="project-main-mobile">
                    <p className="project-expl-mobile" id='project-expl-pegasus'>
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

                        <p className="not-depoyed">The Project is currently off the coud due to cost management.</p>
                        <p className="not-depoyed">If you would like to check out the project Live, please reach out via channels on Main Page.</p>

                        <div className="project-buttons" id='proj-page-buttons'>
                            <div className="project-button" onClick={() => window.open('https://github.com/MirShukhman/Project-2-Flights-Website', '_blank')} >
                                <button id='proj-border-button'> <FaCode className='proj-icon' /> Code</button>
                                <button className="proj-button-shadow" id='code-button-pegasus'></button>
                            </div>
                            {/* <div className="project-button" >
                                <button id='proj-border-button' onClick={() => window.open('https://tinyurl.com/pegasusmirshukhman', '_blank')}><TbWorld className='proj-icon' /> Live</button>
                                <button className="proj-button-shadow" id='live-button-pegasus'></button>
                            </div> */
                            }
                        </div>

                    </p>
                    <div className="project-screenshots-pegasus" id='project-screenshots-mobile'>
                        <div className="proj-scrnshot-mobile" id='scrnshot1' ></div>
                        <div className="proj-scrnshot-mobile" id='scrnshot2' ></div>
                        <div className="proj-scrnshot-mobile" id='scrnshot3' ></div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default PegasusMobile