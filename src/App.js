import React from 'react';
import Rotas from './Routes/Routes';

import './CSS/App.css';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Rotas />
    </Provider>
  );
}

export default App;
