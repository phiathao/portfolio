import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import ProjectItem from './ProjectItem';

const mapStateToProps = reduxState => ({
  reduxState,
});

class App extends Component {
  // Renders the entire app on the DOM
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_PROJECTS' });
  }
  render() {
    return (
      <div className="App">
        <header>
          <h2>Phia Thao</h2>
        </header>
        {this.props.reduxState.projects.map(project => {
          return <ProjectItem key={project.id} project={project} />
        })}
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
