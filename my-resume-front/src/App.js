
import './style/App.css';
import SendMessage from './comps/SendMessage';
import ButtonComp from './comps/ButtonComp';
import Footer from './comps/Footer';

function App() {
  return (
    <div className="App">

      <div className='hero'>
        <p>Hi, I am Mir</p>
      </div>

      <div className='main'>
        <div className='left'>
          <ButtonComp title={'Projects'} />
          <ButtonComp title={'Skills'} />
          <ButtonComp title={'Experience'} />
          <ButtonComp title={'Education'} />
        </div>

        <div className='right'>
          <ButtonComp title={'About Me'} />
          <ButtonComp title={'Socials'} />
          <SendMessage />
        </div>
      </div>

      <Footer />

    </div>
  );
}

export default App;
