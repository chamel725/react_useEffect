import logo from './logo.svg';
import './App.css';
import React, { useState,useEffect } from 'react';
import Timer from './component/Timer';

function App(){
  const [showTimer, setShowTimer] = useState(false);

  return(
    <div>
      {/* showTimer가 true일때만 Timer컴포넌트를 보여주겠다
      button을 누르면 Timer component가 mount된다 */}
      {showTimer && <Timer/>}
      {/* showTimer가 true라면 false로 false라면 true로 만듦
      !showTime:현재 showTimer의 반대되는것 */}
      <button onClick ={()=> setShowTimer(!showTimer)}>Toggle Timer</button>
    </div>
  );
}

export default App;
