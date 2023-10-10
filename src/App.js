
import './App.css';
//import Calculator from './Components/Calculator/Calculator';
import CountdownTimer from './Components/CountdownTimer/CountdownTimer';

function App() {
  return (
    <div className="App">
    {/* <Calculator /> */}
    <CountdownTimer duration={300 * 1000} />

    </div>
  );
}

export default App;
