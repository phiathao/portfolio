import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminProjectItem from './AdminProjectItem'

class AdminProjectList extends Component {
    render() {
        return (
            <div>
                {this.props.reduxState.projects.map(project => {
                    return <AdminProjectItem key={project.id} project={project} />
                })}
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(AdminProjectList);