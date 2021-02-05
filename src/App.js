import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Bye from './components/Bye';
import Clock from './components/Clock';
import Welcome from './components/Welcome'

const anomino = <Welcome className='App' />

function App() {
  return (
    <div>
      <Welcome name='Alunos' className='App' />
      {anomino}
      <Bye />
      <Clock />
      <Clock name='Minora' />
    </div>
  );
}

export default App;
