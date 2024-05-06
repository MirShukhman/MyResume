
import '../../style/Clouds.css';

const GetCloud = (props) => {
    const width = props.width
    const height = props.height
    const minTime = 40
    const maxTime = 100
    const minScale = 1
    const maxScale = 1.6


    const getPosition = () => {
        const randomTop = height + Math.random() * (10 - height);
        const randomLeft = (-width) + Math.random() * (width - (-width));

        const newPosition = {
            top: `${randomTop}px`,
            left: `${randomLeft}px`
        };

        return newPosition
    };

    const getAnimation = () => {
        const randomDirection = Math.round(Math.random());
        const randomTime = maxTime + Math.random() * (minTime - maxTime);
        const randomPosition = getPosition()

        if (randomDirection === 1) {
            const randomAnimation = {
                ...randomPosition,
                animation: `moveRightDown ${randomTime}s forwards infinite`
            }

            return randomAnimation
        }

        else {
            const randomAnimation = {
                ...randomPosition,
                animation: `moveRightUp ${randomTime}s forwards infinite`
            }

            return randomAnimation
        }
    }

    const animation = getAnimation()

    const getCloudStyle = () => {
        const randomSize = minScale + Math.random() * (maxScale - minScale);

        const randomCloud = {
            transform: `scale(${randomSize})`
        };

        return randomCloud
    }

    const cloudStyle = getCloudStyle()
    const direction = Math.round(Math.random())

    if (direction === 1) {
        return (
            <div className='cloud-right' style={animation}>
                <div style={cloudStyle} id='smail-circle'></div>
                <div style={cloudStyle} id='large-circle'></div>
                <div style={cloudStyle} id='medium-circle'></div>
            </div>
        );

    } else {

        return (
            <div className='cloud-left' style={animation}>
                <div style={cloudStyle} id='large-circle'></div>
                <div style={cloudStyle} id='medium-circle'></div>
                <div style={cloudStyle} id='smail-circle'></div>
            </div>
        );
    }
}

export default GetCloud