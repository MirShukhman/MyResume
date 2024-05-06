
import '../../style/Clouds.css';
import GetCloud from './GetCloud';

const Clouds = (props) => {
    const heightOfChoice = props.height
    const viewportWidth = window.innerWidth;

    return (
        <div className='clouds'>
            <GetCloud width={viewportWidth * 0.8} height={heightOfChoice} />
            <GetCloud width={viewportWidth * 0.8} height={heightOfChoice} />
            <GetCloud width={viewportWidth * 0.8} height={heightOfChoice} />
            <GetCloud width={viewportWidth * 0.8} height={heightOfChoice} />

            <GetCloud width={viewportWidth * 0.8} height={heightOfChoice} />
            <GetCloud width={viewportWidth * 0.8} height={heightOfChoice} />
            <GetCloud width={viewportWidth * 0.8} height={heightOfChoice} />
            <GetCloud width={viewportWidth * 0.8} height={heightOfChoice} />

        </div>
    )
}

export default Clouds