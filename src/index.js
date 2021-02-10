import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const DATA = [
  {id: 'todo-0', name: 'Eat', completed: false},
  {id: 'todo-1', name: 'Code', completed: false},
  {id: 'todo-2', name: 'Run', completed: false}
];


ReactDOM.render(
  <App tasks={DATA} />, document.getElementById('root'));



