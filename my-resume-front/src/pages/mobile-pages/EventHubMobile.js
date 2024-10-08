
import { useNavigate } from "react-router-dom";
import '../../style/MobileProjectPage.css'
import { FaCode } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { FaReact } from "react-icons/fa";
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

const EventHubMobile = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };
    const viewportHeight = window.innerHeight;


    return (
        <div className="project-page" >

            <Clouds height={viewportHeight} />

            <div className="project-page-inner-mobile" >

                <div className="nav-buttons-mobile" id='nav-buttons-eventhub'>
                    <div className="nav-button">
                        <button onClick={() => { handleNavigation('/project-equpment'); }}><IoArrowBackCircle /></button>
                        <p className="nav-button-caption">Prev Project</p>
                    </div>
                    <div className="nav-button">
                        <button onClick={() => { handleNavigation('/'); }}><IoHome /></button>
                        <p className="nav-button-caption">Home</p>
                    </div>
                    <div className="nav-button">
                        <button onClick={() => { handleNavigation('/project-pegasus'); }}><IoArrowForwardCircleSharp /></button>
                        <p className="nav-button-caption">Next Project</p>
                    </div>
                </div>

                <div className="proj-top-mobile">
                    <div id='eventhub-project-title'><h1 className="project-title">EventHub</h1></div>

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
                            Welcome to EventHub, your go-to online platform for effortlessly organizing and discovering exciting events.
                            Whether you're looking to host your own event or join others in memorable experiences, EventHub has you covered.
                        </p>
                        <p>
                            For Attendees:

                            Discover a plethora of events tailored to your interests through our intuitive search function. Filter events by dates, categories,
                            and more to find the perfect match.
                            After attending an event, share your thoughts and memories by leaving reviews and uploading images, enriching the community experience.
                        </p>
                        <p>
                            For Organizers:

                            Seamlessly create and manage events with our user-friendly interface. Decide whether your event is public or private,
                            with the option to approve registrations for private events.
                            Keep your attendees informed with updates or cancellations, ensuring a smooth and transparent event experience for all.
                        </p>
                        <p>
                            Personalized Experience:

                            Enjoy a personalized dashboard where you can effortlessly keep track of events you've attended, registered for, or organized.
                            Easily manage your profile and create new events with just a few clicks.
                        </p>
                        <p>
                            Unlimited Possibilities:

                            At EventHub, any user can wear multiple hats. Be an attendee at one event and an organizer at another – the choice is yours!
                            There's no limit to the number
                            of events you can participate in or organize, allowing you to fully immerse yourself in our vibrant community.
                        </p>
                        <p>
                            Administrative Features:

                            Access an exclusive Administrator interface with enhanced capabilities. Manage event categories, activate or deactivate users,
                            and appoint or revoke administrative roles with ease.
                            Administrators enjoy all the functionalities of regular users while overseeing the smooth operation of the platform,
                            ensuring a vibrant and secure community.
                        </p>
                        <p>
                            Join EventHub today and unlock a world of endless possibilities, where every event is an opportunity for connection and discovery.
                            Start creating and experiencing unforgettable moments, one event at a time.
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
                                    <td>user1</td>
                                    <td id='border-eventhub'>password1</td>
                                    <td>Admin</td>
                                </tr>
                                <tr>
                                    <td>user1</td>
                                    <td id='border-eventhub'>password1</td>
                                    <td>Regular</td>
                                </tr>
                                <tr>
                                    <td>user1</td>
                                    <td id='border-eventhub'>password1</td>
                                    <td>Regular</td>
                                </tr>
                            </tbody>
                        </table>

                        <p className="not-depoyed">The Project is currently off the coud due to cost management.</p>
                        <p className="not-depoyed">If you would like to check out the project Live, please reach out via channels on Main Page.</p>

                        <div className="project-buttons" id='proj-page-buttons'>
                            <div className="project-button" onClick={() => window.open('https://github.com/MirShukhman/Project-3-Event-Hub', '_blank')}>
                                <button id='proj-border-button'> <FaCode className='proj-icon' /> Code</button>
                                <button className="proj-button-shadow" id='code-button-eventhub'></button>
                            </div>

                            {/* <div className="project-button" >
                                <button id='proj-border-button' onClick={() => window.open('http://52.154.67.55', '_blank')}><TbWorld className='proj-icon' /> Live</button>
                                <button className="proj-button-shadow" id='live-button-eventhub'></button>
                            </div> */
                            }
                        </div>

                    </p>
                    <div className="project-screenshots-eventhub" id='project-screenshots-mobile'>
                        <div className="proj-scrnshot-mobile" id='scrnshot1' ></div>
                        <div className="proj-scrnshot-mobile" id='scrnshot2' ></div>
                        <div className="proj-scrnshot-mobile" id='scrnshot3' ></div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default EventHubMobile