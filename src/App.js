import { useState } from 'react';
import axios from 'axios';
import './App.css';
import SimpsonsQuotes from './components/SimpsonsQuotes';
import logo from './logo.svg';

const sampleEmployee = {
 quote:
        "These are my only friends...grown-up nerds like Gore Vidal. And even he's kissed more boys than I ever will.",
      character: 'Lisa Simpson',
      image:
        'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083',
      characterDirection: 'Right',
};

function App() {
  const [employee, setEmployee] = useState(sampleEmployee);

  const getEmployee = () => {
  axios
    .get("https://simpsons-quotes-api.herokuapp.com/quotes")
    .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        setEmployee(data[0]);
      });
  };
  
  return (
  <div className='App'>
    <SimpsonsQuotes employee={employee} />
    <button type="button" onClick={getEmployee}>Click here</button>
  </div>
  );
}

export default App;
