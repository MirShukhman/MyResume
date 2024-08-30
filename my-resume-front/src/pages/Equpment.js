
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import '../style/ProjectPage.css'
import { FaCode } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { IoHome } from "react-icons/io5";
import { IoArrowBackCircle } from "react-icons/io5";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import OpenImage from "../comps/OpenImage";
import EqupmentMobile from "./mobile-pages/EqupmentMobile";
import Clouds from "../comps/backround/Clouds";

const Equpment = () => {
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
                window.innerWidth < 768 ? (<EqupmentMobile />) :
                    (
                        <div className="project-page" >

                            <Clouds height={viewportHeight} />

                            {imageIsOpen && <OpenImage onClose={closeImage} project={'equpment'} id={imageIsOpen} />}

                            <div className="project-page-inner" >

                                <div className="proj-top">
                                    <div id='equpment-project-title'><h1 className="project-title">Equpment Orders Mangment System</h1></div>

                                    <div className="nav-buttons" id='nav-buttons-equpment'>
                                        <div className="nav-button">
                                            <button onClick={() => { handleNavigation('/project-pegasus'); }}><IoArrowBackCircle /></button>
                                            <p className="nav-button-caption">Prev Project</p>
                                        </div>
                                        <div className="nav-button">
                                            <button onClick={() => { handleNavigation('/'); }}><IoHome /></button>
                                            <p className="nav-button-caption">Home</p>
                                        </div>
                                        <div className="nav-button">
                                            <button onClick={() => { handleNavigation('/project-eventhub'); }}><IoArrowForwardCircleSharp /></button>
                                            <p className="nav-button-caption">Next Project</p>
                                        </div>
                                    </div>

                                </div>

                                <h2>Tech Stack:</h2>
                                <div className="tech-stack">
                                    <div className='skill'>
                                        <p>MySQL</p>
                                        <GrMysql className='skill-icon' />
                                    </div>
                                    <div className='skill'>
                                        <p>Python</p>
                                        <FaPython className='skill-icon' />
                                    </div>
                                    <div className='skill'>
                                        <p>Django</p>
                                        <SiDjango className='skill-icon' />
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

                                <div className="project-main">
                                    <p className="project-expl" id="project-expl-equpment">
                                        <p>
                                            Equipment Order Management System built using Django, React, and MySQL. The project was inspired by my desire to practice Django skills and to improve upon the equipment ordering system used at the clinic network where I previously worked. The system is designed to be a web application with a simple and user-friendly interface, primarily in Hebrew.
                                        </p>

                                        <h3>Features</h3>
                                        <h4>Branch Admin Interface:</h4>
                                        <ul>
                                            <li>Easy Order Creation: Allows branch admins to create orders with a categorized view of available equipment.</li>
                                            <li>Order Status Tracking: Track the status of orders from creation to fulfillment.</li>
                                            <li>Order Confirmation:  Confirm the receipt of equipment at the branch.</li>
                                            <li>Branch Switching: Easily switch between branches for ordering or tracking purposes.</li>
                                            <li>Profile Management: Update personal information and change passwords.</li>
                                        </ul>
                                        <h4>Global Admin Interface:</h4>
                                        <ul>
                                            <li>Management of Branches, Suppliers, and Equipment: View, create, and update branches, suppliers, equipment items, and categories.</li>
                                            <li>User Management: Create new users (external registration is not available), view users, promote them to admins, or block them from the system.</li>
                                            <li>Approval System: Flag certain equipment items as "Manager Approval Required." Orders containing these items will need national admin approval before being sent to suppliers.</li>
                                            <li>Order Monitoring: View orders requiring attention (those not yet sent to suppliers or containing items requiring approval).</li>
                                            <li>Order Filtering: Filter orders based on various criteria.</li>
                                            <li>Order Dispatch: Generate Word files for orders by branch and supplier, which can be annotated and sent to suppliers. Future updates plan to send PDF orders directly via email.</li>
                                        </ul>

                                        <h4>User Authentication:</h4>
                                        <p>
                                            The system uses Django's Token Authentication for user identification and stores passwords hashed in the database.
                                        </p>

                                        <h3>Future Plans</h3>
                                        <ul>
                                            <li>Mobile Compatibility: Currently, the system is designed for desktop use only. Future updates will include mobile support.</li>
                                            <li>Direct PDF Dispatch: Automate the process of sending PDF order files directly to supplier email addresses.</li>
                                            <li>Usage Analytics: Implement periodic consumption average calculations for each branch, region, and national level.</li>
                                            <li>Client Requests: Any additional features as requested by clients.</li>
                                        </ul>

                                        <h3>Live Demo</h3>
                                        <p>
                                            The live demo of the system showcases a fictional multi-branch clinic inspired by the original project concept. <span id='live-view-warning'>Please note that the demo is intended for desktop use only at this time.</span> For your convenience, demo user data is available here and on the login page.
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
                                                    <td>FirstAdmin</td>
                                                    <td id='border-equpment'>FirstAdminPassword123</td>
                                                    <td>Admin</td>
                                                </tr>
                                                <tr>
                                                    <td>betty12345</td>
                                                    <td id='border-equpment'>betty12345</td>
                                                    <td>Regular</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <div className="project-buttons" id='proj-page-buttons'>
                                            <div className="project-button" onClick={() => window.open('https://github.com/MirShukhman/Equpment', '_blank')}>
                                                <button id='proj-border-button'> <FaCode className='proj-icon' /> Code</button>
                                                <button className="proj-button-shadow" id='code-button-equpment'></button>
                                            </div>
                                            <div className="project-button" onClick={() => window.open('https://mirshukhman.github.io/Equpment/', '_blank')}>
                                                <button id='proj-border-button'><TbWorld className='proj-icon' /> Live</button>
                                                <button className="proj-button-shadow" id='live-button-equpment'></button>
                                            </div>

                                        </div>

                                    </p>
                                    <div className="project-screenshots-equpment">
                                        <div className="proj-scrnshot" id='scrnshot1' onClick={() => openImage('1')}></div>
                                        <div className="proj-scrnshot" id='scrnshot2' onClick={() => openImage('2')}></div>
                                        <div className="proj-scrnshot" id='scrnshot3' onClick={() => openImage('3')}></div>
                                    </div>
                                </div>

                            </div>

                        </div >)
            }
        </>
    )
}

export default Equpment