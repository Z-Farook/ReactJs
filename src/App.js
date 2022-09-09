import './App.css';
import CounterClassAsyncTest from './Asynchronous/CounterClassAsyncTest';
import UpdaterFunctionForSetState from './Asynchronous/UpdaterFunctionForSetState';
import CounterClass from './StateInClassComp/CounterClass';
import CounterClass2 from './StateInClassComp/CounterClass2';
import NewsFeed from './StateInFuncComp/NewsFeed';

function App() {
  return (
    <div className="App">
      <p>Hello Zahid</p>
      {/* <NewsFeed ></NewsFeed> */}
      {/* <CounterClass></CounterClass> */}
      {/* <CounterClass2></CounterClass2> */}
      <CounterClassAsyncTest></CounterClassAsyncTest> {/*this one is surprising because of Async setSate */}
      <UpdaterFunctionForSetState></UpdaterFunctionForSetState>
    </div>
  );
}

export default App;
