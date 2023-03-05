
import './App.css';
import Counter from './components/Counter';
import Counter2 from './components/Counter2';
import Debounce from './components/Debounce';
import Throttle from './components/Throttle';
import Timer1 from './components/Timer1';
import Timer2 from './components/Timer2';

function App() {
  return (
    <div className="App">
      <h1>Custom Hooks</h1>
      <Counter/>
      <Counter2/>
      <Timer1/>
      {/* <Timer2/> */}
      {/* <Debounce/>
      <Throttle/> */}
    </div>
  );
}

export default App;
