
import '../style/Hero.css';
import Clouds from './backround/Clouds';

const Header = () => {
    const height = 300

    return (
        <div className='hero'>

            <Clouds height={height} />

            <div className='hero-inner'>

                <div className='hero-text'>
                    <p id='hero-top'>
                        Hi, I am Mir
                    </p>
                    {window.innerWidth < 768 ? (
                        <p id='hero-main'>
                            Full Stack Web Developer
                        </p>

                    ) :
                        (
                            <p id='hero-main'>
                                Full Stack Web Developer | Software Developer
                            </p>
                        )}
                </div>


            </div>

        </div>

    )
}

export default Header