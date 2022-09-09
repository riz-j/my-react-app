import logo from './logo.svg';
import './App.css';
import Testing from './Testing'
import Capitalize from './capitalize';

function App() {
  const textie = "Learn React"
  var textieUp = Capitalize(textie)
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {textieUp}
        </a>
      </header>
    </div>
  );
}

export default App;
