import { useState, useEffect } from 'react'
import '../style/OpenImage.css'
import { IoMdCloseCircle } from "react-icons/io";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const OpenImage = (props) => {
    const [id, setId] = useState(`${props.id}`)
    const image = `${props.project}${id}`;

    function nextImage() {
        const idValue = Number(id)
        if (id < 3) {
            const newId = idValue + 1
            setId(newId.toString())
        }
        else {
            setId('1')
        }
    }

    function prevImage() {
        const idValue = Number(id)
        if (idValue > 1) {
            const newId = idValue - 1
            setId(newId.toString())
        }
        else {
            setId('3')
        }
    }

    useEffect(() => { console.log(id) }, [id]);

    return (
        <div className="window" >
            <div className="image-window-inner" id={image}>
                <div className="close" onClick={props.onClose}><IoMdCloseCircle /></div>
                <div className='arrows'>
                    <div className="prev-img" onClick={prevImage}><FaChevronLeft /></div>
                    <div className="next-img" onClick={nextImage}><FaChevronRight /></div>
                </div>
            </div>
        </div>
    )
}

export default OpenImage