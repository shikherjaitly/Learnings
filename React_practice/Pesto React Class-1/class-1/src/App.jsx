import React from 'react';
import {Greet} from './components/Greet'
function App() {
  // let name = 'Shikher';
  return (
    <div className="App">
      <Greet name="shikher"/>
      <Greet name="vaibhav" age={23}/>
    </div>
  );
}

export default App;
