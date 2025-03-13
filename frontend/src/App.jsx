import { useState } from 'react';
import './App.css';
import AboutUs from './Components/AboutUs.jsx';
import Conference from './Components/ConferenceEvent.jsx';

function App() {
  const [showEvent, setShowEvent] = useState(false);

  const handleEvent = () => {
    setShowEvent(true);
    // Scroll to the Conference component
    setTimeout(() => {
      const conferenceSection = document.getElementById('conference-section');
      if (conferenceSection) {
        conferenceSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500); // Slight delay to allow for the component to render
  };

  return (
    <>
      <header className='first_page'>
        <div className='main_event'>
          <div className='first_page_name_btn'>
            <h1 className='budget_heading'>
              Conference Event Planner
            </h1>
            <p className='budget_sentence'>
              Plan your next major events with us!
            </p>
            <div className='get_started_btn'>
              <button className='get_started_btn' onClick={handleEvent}>Get Started</button>
            </div>
          </div>
          <div className='aboutus_main'>
            <AboutUs />
          </div>
        </div>
      </header>
      <div className={`event_list_container${showEvent ? ' visible' : ''}`} id="conference-section">
        <Conference />
      </div>
    </>
  );
}

export default App;
