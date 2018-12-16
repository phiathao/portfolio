import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

const mapStateToProps = reduxState => ({
  reduxState,
});

class App extends Component {
  // Renders the entire app on the DOM
  componentDidMount(){
    this.props.dispatch({type: 'FETCH_PROJECTS'});
  }
  render() {
    return (
      <div className="App">
        <p>Empty Page</p>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
