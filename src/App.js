import './App.css';
import CounterClass from './StateInClassComp/CounterClass';
import CounterClass2 from './StateInClassComp/CounterClass2';
import NewsFeed from './StateInFuncComp/NewsFeed';

function App() {
  return (
    <div className="App">
      <p>Hello Zahid</p>
      {/* <NewsFeed ></NewsFeed> */}
      {/* <CounterClass></CounterClass> */}
      <CounterClass2></CounterClass2>
    </div>
  );
}

export default App;
