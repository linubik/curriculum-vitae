import React, { Component } from 'react';
import { render } from 'react-dom';

import Profil from './profil/Profil';
import SimpleAccordion from './accordion/SimpleAccordion';

import './style.css';
import './linkedin-vars.css';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }



  render() {
    return (
      <div>
        <Profil />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
