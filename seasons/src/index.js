import React from 'react';
import ReactDOM from 'react-dom';
import "semantic-ui-css/semantic.min.css";

import SeasonDisplay from './SeasonDisplay';
import LoadingSpinner from './LoadingSpinner';

class App extends React.Component {

  state = { latitude: null, errorMessage: '', loading: true }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      pos => this.setState({ latitude: pos.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate(...args) {
    console.log('component did update');
    console.log(this.state);
  }

  renderContent() {
    if (this.state.latitude) {
      return <SeasonDisplay latitude={this.state.latitude} />
    } else if (this.state.errorMessage) {
      return <div>Error: { this.state.errorMessage } </div>;
    } else {
      return <LoadingSpinner message="Please accept location request!"/>
    }
  }

  render() {
    return (
      <div className="app-container">
        {this.renderContent()};
      </div>
    );
  }

};

ReactDOM.render(<App />, document.querySelector('#root'));
