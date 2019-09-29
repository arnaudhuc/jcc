import './styles.scss';
import getDataService from "./service/getDataService";
import * as React from "react";
import * as ReactDOM from 'react-dom';

import {Hello} from './components/components/Hello';



class App extends React.Component {
  constructor(props: Object) {
    super(props);
    this.state = {
      data: {}
    }
    this.getPlayersData();
  }

  async getPlayersData() {
    return await getDataService('players').then((data) => {
      this.setState({data});
    });
  }

  render() {
    return (
      <div>
        <p>Salut</p>
        <Hello compiler="Typescript" framework="React JS"></Hello>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
