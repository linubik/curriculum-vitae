import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Profil from './profil/Profil';
import Experience from './experience/Experience';
import './style.css';
import './vars.css';

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
