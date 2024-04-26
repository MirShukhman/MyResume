
import '../../style/Sections.css';
import '../../style/SectionContent.css';
import { FaCode } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";

const Projects = () => {

    return (
        <div className="projects">

            <div className="project">
                <div className="screenshot"></div>
                <p className="title" id='eventhub'>EventHub</p>
                <div className='proj-bottom'>
                    <div className="description">jKDbfhkjd bfldsbljbgl djkgblj kdblgjkdbjkg dbkjbj dbgj</div>
                    <div className="buttons">
                        <div className="project-button">
                            <button id='border-button'>Read More</button>
                            <button className="button-shadow" id='read-more-button'></button>
                        </div>
                        <div className="project-button" >
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

            <div className="project">
                <div className="screenshot"></div>
                <p className="title">Pegasus</p>
                <div className='proj-bottom'>
                    <div className="description">jKDbfhkj dbfldsbljbgldj kgbljkdblgjkdb jkgdbkjb jdbgj</div>
                    <div className="buttons">
                        <div className="project-button">
                            <button id='border-button'>Read More</button>
                            <button className="button-shadow" id='read-more-button'></button>
                        </div>
                        <div className="project-button">
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