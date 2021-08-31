import './App.css';
import Input from './components/input';
import React, { useState, useImperativeHandle, useEffect } from 'react';

// import getItem from "@/use-effect-usage";


const App=()=> {
  const [inputText, setInputText] = useState("hello");

  return (
    <div className="App">
      {/* <header className="App-header">
        {'React Basics'}
      </header> */}
      <Input value={inputText } onChange={(e)=>setInputText(e.target.value)}/>
      {/* Relative pathi henüz görmüyor */}
      {/* {getItem()} */}
    </div>
  );
}

export default App;
