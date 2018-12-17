import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectItem from './ProjectItem';

const mapStateToProps = reduxState => ({
    reduxState,
});

class Projects extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_PROJECTS' });
      }
    render() {
        return (
            <div className="App">
                <h1>Phia Thao</h1>
                {
                    this.props.reduxState.projects.map(project => {
                        return <ProjectItem key={project.id} project={project} />
                    })
                }
            </div>
        )
    }
}

export default connect(mapStateToProps)(Projects);