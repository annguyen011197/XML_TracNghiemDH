import React from 'react';
import {render} from 'react-dom';

import './../scss/main.scss';
import RouterApp from  './components/App.jsx'

class App extends React.Component {
  render () {
    return (
      <div>
        {/* <Demo /> */}
        <RouterApp />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
