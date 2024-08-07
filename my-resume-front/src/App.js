
import './style/App.css';
import Header from './comps/Header';
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
            <Header />

            {/* Conditional rendering for mobile and PC */}
            {window.innerWidth < 768 ? (
              <div className='main'>
                <ButtonComp title={'Projects'} />
                <ButtonComp title={'Skills'} />
                <ButtonComp title={'Experience'} />
                <ButtonComp title={'Education'} />
                <ButtonComp title={'About Me'} />
                <ButtonComp title={'Links'} />
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
                  <ButtonComp title={'Links'} />
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
