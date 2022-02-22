import './App.css';
import React, { useState } from 'react';

const App = () => {
  let color = 'white';

	const divStyle = {
    backgroundColor: color,
    height: '100vh',
    width: '100vw',
    margin: '50vh 45vw',
  };

	return (
    <div style={divStyle}>
      <div style={{margin: '5px 0'}}>
        <button>
                White
        </button>
      </div>
      <div style={{margin: '5px 0'}}>
        <button>
                BlueViolet
        </button>
      </div>
      <div  style={{margin: '5px 0'}}>
        <button>
                Black
        </button>
      </div>
    </div>
  );
};


export default App;
