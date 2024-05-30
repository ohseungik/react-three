import React from "react";
import { ARView } from './components/MyModal';

import "./App.css";

function App() {
  return (
    <div className="App">
      <ARView imageval="/image/test.png"/>
      {/* <ARView imageval="/image/test2.png"/>
      <ARView imageval="/image/test3.png"/> */}
    </div>
  );
}

export default App;
