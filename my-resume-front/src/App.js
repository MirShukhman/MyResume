
import './style/App.css';
import ButtonComp from './comps/ButtonComp';
import Footer from './comps/Footer';

function App() {
  return (
    <div className="App">

      <div className='hero'>
        <p>Hi, I am Mir</p>
      </div>

      <div className='main'>
        {/* Conditional rendering for mobile and PC */}
        {window.innerWidth < 768 ? (
          <>
            <ButtonComp title={'Projects'} />
            <ButtonComp title={'Skills'} />
            <ButtonComp title={'Experience'} />
            <ButtonComp title={'Education'} />
            <ButtonComp title={'About Me'} />
            <ButtonComp title={'Socials'} />
            <ButtonComp title={'Get In Touch'} />
          </>
        ) : (
          <>
            <ButtonComp title={'Projects'} />
            <ButtonComp title={'About Me'} />

            <ButtonComp title={'Skills'} />
            <ButtonComp title={'Socials'} />

            <ButtonComp title={'Experience'} />
            <ButtonComp title={'Get In Touch'} />

            <ButtonComp title={'Education'} />
          </>
        )}
      </div>

      <Footer />

    </div >
  );
}

export default App;
