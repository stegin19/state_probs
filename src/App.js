// import logo from './logo.svg';
import './App.css';
import React from 'react';
import StateCounter from './component/StateCountwe';
import Joke from './component/Jokes';
import JokesData from './component/JokesData';

function App() {
  const jokeElements =JokesData.map(joke =>{
    return <Joke setup={joke.setup} punchline={joke.punchline}></Joke>
})
return(
  <div className='App'>
    <StateCounter></StateCounter>
    {jokeElements}
  </div>
)
}

export default App;
