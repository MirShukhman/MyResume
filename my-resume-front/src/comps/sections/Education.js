
import '../../style/Sections.css';
import '../../style/SectionContent.css';
import { GoTriangleRight } from "react-icons/go";

const Education = () => {

    return (
        <div className='education'>

            <div className='job' id='school'>
                <div className='row'>
                    <GoTriangleRight className='job-icon' id='education-icon' />
                    <p className='job-title'>John Bryce Academy</p>
                </div>
                <div className='job-inner'>
                    <p className='job-place'>Python Full Stack Cource</p>
                    <p className='job-dates'>Graduating: May 2024</p>
                    <p className='job-descript'>
                    </p>
                </div>
            </div>

            <div className='job' id='school'>
                <div className='row'>
                    <GoTriangleRight className='job-icon' id='education-icon' />
                    <p className='job-title'>Ariel University</p>
                </div>
                <div className='job-inner'>
                    <p className='job-place'>Emergency Medical Technology: Paramedic</p>
                    <p className='job-dates'>Graduated: May 2017</p>
                    <p className='job-descript'>
                    </p>
                </div>
            </div>

            <div className='job' id='school'>
                <div className='row'>
                    <GoTriangleRight className='job-icon' id='education-icon' />
                    <p className='job-title'>Leyada High School</p>
                </div>
                <div className='job-inner'>
                    <p className='job-place'>Bagrut & HS Diploma</p>
                    <p className='job-dates'>Graduated: May 2015</p>
                    <p className='job-descript'>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Education