
import '../../style/SectionContent.css'
import { FaPython } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { HiOutlineDatabase } from "react-icons/hi";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiMicrosoftazure } from "react-icons/si";
import { FaDocker } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { SiNgrok } from "react-icons/si";

const Skills = () => {

    return (
        <div className="skills">
            <div className="row">
                <div className='skill'>
                    <p>Python</p>
                    <FaPython className='skill-icon' />
                </div>
                <div className='skill'>
                    <p>Flask</p>
                    <SiFlask className='skill-icon' />
                </div>
                <div className='skill'>
                    <p>Django</p>
                    <SiDjango className='skill-icon' />
                </div>
                <div className='skill'>
                    <p>React</p>
                    <FaReact className='skill-icon' />
                </div>
            </div>
            <div className="row">
                <div className='skill'>
                    <p>HTML</p>
                    <FaHtml5 className='skill-icon' />
                </div>
                <div className='skill'>
                    <p>CSS</p>
                    <FaCss3Alt className='skill-icon' />
                </div>
                <div className='skill'>
                    <p>JavaScript</p>
                    <RiJavascriptFill className='skill-icon' />
                </div>
                <div className='skill'>
                    <p>MySQL</p>
                    <GrMysql className='skill-icon' />
                </div>
            </div>
            <div className="row">
                <div className='skill'>
                    <p>MSSQL</p>
                    <SiMicrosoftsqlserver className='skill-icon' />
                </div>
                <div className='skill'>
                    <p>Git</p>
                    <FaGitAlt className='skill-icon' />
                </div>
                <div className='skill'>
                    <p>Azure</p>
                    <SiMicrosoftazure className='skill-icon' />
                </div>
                <div className='skill'>
                    <p>Docker</p>
                    <FaDocker className='skill-icon' />
                </div>
            </div>
            
        </div>
    )
}

export default Skills