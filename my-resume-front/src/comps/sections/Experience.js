
import '../../style/Sections.css';
import '../../style/SectionContent.css';
import { GoTriangleRight } from "react-icons/go";

const Experience = () => {

    return (
        <div className='experience'>
            <div className='job'>
                <div className='row'>
                    <GoTriangleRight className='job-icon' />
                    <p className='job-title'>Paramedic</p>
                </div>
                <div className='job-inner'>
                    <p className='job-place'>TEREM Urgent Care</p>
                    <p className='job-dates'>May 2017 - Present</p>
                    <p className='job-descript'></p>
                </div>
            </div>
            <div className='job'>
                <div className='row'>
                    <GoTriangleRight className='job-icon' />
                    <p className='job-title'>Nursing Staff Manager</p>
                </div>
                <div className='job-inner'>
                    <p className='job-place'>TEREM Urgent Care</p>
                    <p className='job-dates'>Aug 2019 - Aug 2020</p>
                    <p className='job-descript'></p>
                </div>
            </div>
            <div className='job'>
                <div className='row'>
                    <GoTriangleRight className='job-icon' />
                    <p className='job-title'>Budgeting Assistant</p>
                </div>
                <div className='job-inner'>
                    <p className='job-place'>IDF, Central Command</p>
                    <p className='job-dates'>Oct 2017 - Oct 2019</p>
                    <p className='job-descript'></p>
                </div>
            </div>
            <div className='job'>
                <div className='row'>
                    <GoTriangleRight className='job-icon' />
                    <p className='job-title'>Medical Secretary</p>
                </div>
                <div className='job-inner'>
                    <p className='job-place'>Sha’arei Zedek Hospital, L&D Unit</p>
                    <p className='job-dates'>Sep 2015 - May 2017</p>
                    <p className='job-descript'></p>
                </div>
            </div>
            <div className='job'>
                <div className='row'>
                    <GoTriangleRight className='job-icon' />
                    <p className='job-title'>Barista and Cashier</p>
                </div>
                <div className='job-inner'>
                    <p className='job-place'>Sprinzak Cafeteria</p>
                    <p className='job-dates'>Nov 2016- May 2017</p>
                    <p className='job-dates'>Oct 2013 - May 2015</p>
                    <p className='job-descript'></p>
                </div>
            </div>
        </div>
    )
}

export default Experience