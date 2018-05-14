import React from 'react';
import {render} from 'react-dom';

import './../scss/main.scss';
import RouterApp from  './components/App.jsx'

class App extends React.Component {
  render () {
    return (
      <div className="home">
        {/* <Demo /> */}
        <RouterApp />
        <h1>Demo</h1>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
