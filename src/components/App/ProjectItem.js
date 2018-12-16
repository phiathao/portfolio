import React, { Component } from 'react';
// import { connect } from 'react-redux';


class ProjectItem extends Component {
    itemImage = {
        backgroundImage: `url(${this.props.project.thumbnail})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '300px',
        maxHeight: '500px'
    }
    render(){
        let divItem;
        if(this.props.project.thumbnail !== null){
            divItem = <div style={this.itemImage}/>
        } else {
            //do nothing
        }
        return (
            <div>
                {divItem}
                <h3>{this.props.project.name} App</h3>
                    <h4>Description</h4>
                    <p>{this.props.project.description}</p>
                    <p><a href={this.props.project.github} target="_blank" rel="noopener noreferrer">Github</a></p>
                    <p>{this.props.project.tag}</p>
            </div>
        )
    }
}

export default ProjectItem;