import photo from './pawito.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={photo} className="App-logo" alt="logo" />
        <p>
          Welcome to my personal website
        </p>
        <a
          className="App-link"
          href="https://youtube.com/@prawitohudoro"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Programming With Me
        </a>
      </header>
    </div>
  );
}

export default App;
