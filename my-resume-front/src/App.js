
import './style/App.css';
import './style/Hero.css';
import ButtonComp from './comps/ButtonComp';
import Footer from './comps/Footer';
import EventHub from './pages/EventHub';
import Pegasus from './pages/Pegasus';
import Smishing from './pages/Smishing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/MyResume' element={
          <>
            <div className='hero'>
              <p id='hero-top'>Hi, I am Mir</p>
              <p id='hero-main'>
                I am a Full Stack Developer, with a passion of making user-friendly and approachable apps, that just make life a little easier.
                My passion in programming is the back-end, but I love building a colorful and inviting interface.
                In non-programing aspects I am a paramedic, pet mom, and hate being bored.
                I can also make ugly but very tasty cakes. </p>
            </div>

            {/* Conditional rendering for mobile and PC */}
            {window.innerWidth < 768 ? (
              <div className='main'>
                <ButtonComp title={'Projects'} />
                <ButtonComp title={'Skills'} />
                <ButtonComp title={'Experience'} />
                <ButtonComp title={'Education'} />
                <ButtonComp title={'About Me'} />
                <ButtonComp title={'Socials'} />
                <ButtonComp title={'Get In Touch'} />
              </div>
            ) : (
              <div className='main'>
                <div className='column'>
                  <ButtonComp title={'Projects'} />
                  <ButtonComp title={'Skills'} />
                  <ButtonComp title={'Experience'} />
                  <ButtonComp title={'Education'} />
                </div>
                <div className='column'>
                  <ButtonComp title={'About Me'} />
                  <ButtonComp title={'Socials'} />
                  <ButtonComp title={'Get In Touch'} />
                </div>
              </div>
            )}

          </>} />

        <Route path='/project-eventhub' element={<EventHub />} />
        <Route path='/project-pegasus' element={<Pegasus />} />
        <Route path='/project-smishing' element={<Smishing />} />

      </Routes>

      <Footer />

    </div >
  );
}

export default App;
