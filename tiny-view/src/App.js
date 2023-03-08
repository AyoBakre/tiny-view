import React from 'react'
import LeftPanel from './components/left-panel/LeftPanel';
import MiddlePanel from './components/middle-panel/MiddlePanel';
import RightPanel from './components/right-panel/RightPanel';
import './App.css';

function App() {
  return (
    <div class='App'>
      <div class='container'>     
        <div class='row'>
          <LeftPanel />
          <MiddlePanel />
          <RightPanel />
        </div>
      </div>
    </div>
  );
}

export default App;
