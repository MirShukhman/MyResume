
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
                    <p className='job-descript'>
                        Emergency medical services and procedures.
                        Triaging patients and Managing patient flow throughout the clinic.
                    </p>
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
                    <p className='job-descript'>
                        Managing Nursing Staff and Inventory in a clinic branch.
                        Adapting and overcoming daily challenges during COVID-19 pandemic.
                    </p>
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
                    <p className='job-descript'>
                        Managing budgets of military units under Central District Command’s supervision.
                        Second Year – Head of Budgeting 340th Division
                    </p>
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


            <p className='volunteering'>Volunteering Work</p>

            <div className='job'>
                <div className='row'>
                    <GoTriangleRight className='job-icon' />
                    <p className='job-title'>Dog Foster Parent</p>
                </div>
                <div className='job-inner'>
                    <p className='job-place'>Be'er Sheva Loves Animals</p>
                    <p className='job-dates'>Dec 2021 - Jul 2023</p>
                    <p className='job-descript'></p>
                </div>
            </div>

            <div className='job'>
                <div className='row'>
                    <GoTriangleRight className='job-icon' />
                    <p className='job-title'>Emergency Medical Technician</p>
                </div>
                <div className='job-inner'>
                    <p className='job-place'>Magen David Adom</p>
                    <p className='job-dates'>Jul 2013 - Apr 2017</p>
                    <p className='job-descript'></p>
                </div>
            </div>

        </div>
    )
}

export default Experience