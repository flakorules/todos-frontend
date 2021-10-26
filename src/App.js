import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';


function  App() {

  useEffect(() => {
    loadData();
  }, [])

  const  loadData = async () => {
    const resp = await fetch("http://flakorules-001-site1.itempurl.com/todos-backend/api/User/anita");
    const data = await resp.json();
    console.log(data);  
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
