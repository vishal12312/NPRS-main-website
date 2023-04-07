import car from './car.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={car} className="App-logo" alt="logo" />
        <p>
          <code>nonprofitrideshare.com</code> website coming soon!
        </p>

        Open source hosted on {" "}
        <a
          className="App-link"
          href="https://github.com/vishal12312/nprs-main-website"
          target="_blank"
          rel="noopener noreferrer"
        >
        GitHub
        </a>
        <p>
          <b>Contact: </b>nonprofitrideshare@protonmail.com
        </p>
      </header>
    </div>
  );
}

export default App;
