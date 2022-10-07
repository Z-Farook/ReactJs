import './App.css';
import ScreenDoor from './EventHandlers/ScreenDoor';
import WarningButton from './EventHandlers/WarningButton';
import EventProps from './Events/EventProps';

function App() {
  return (
    <div className="App">
        <p> Test</p>
        {/* <EventProps/> */}
        {/* <WarningButton/> */}
        <ScreenDoor/>
    </div>
  );
}

export default App;
