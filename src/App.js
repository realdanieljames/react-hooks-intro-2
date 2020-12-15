import React,  {useState, useEffect} from 'react';
import FetchUsers from './FetchUser';
import FetchUserById from './FetchUserById';
import FetchCommentById from "./FetchCommentById"
import FetchTodosById from "./FetchTodosById"

import "./App.css";


function App() {
  return (
    <div className="App">
      <FetchUsers/>
      <hr/>
      <FetchUserById/>
      <hr/>
      <FetchCommentById/>
      <hr/>
      <FetchTodosById/>
    </div>
  );
}

export default App;
