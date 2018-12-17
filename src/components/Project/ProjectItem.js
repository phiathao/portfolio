import React, { Component } from 'react';
// import { connect } from 'react-redux';
import './ProjectItem.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';



class ProjectItem extends Component {
    itemImage = {
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '200px',
        maxHeight: '300px'
    }
    render() {
        let projectImage;
        let projectWebsite;
        if (this.props.project.thumbnail !== null) { // check if there is image
            projectImage = <CardMedia style={this.itemImage} image={this.props.project.thumbnail}/>
        }
        if (this.props.project.website !== null) { // check if there a website
            projectWebsite = <li><Button color="primary" onClick={() => window.open(this.props.project.website, "_blank")} rel="noopener noreferrer">Website</Button></li>
        }
        return (
            <Card className='cardItem'>
                <CardContent className="name">{this.props.project.name}</CardContent>
                {projectImage}
                <div className="detail">
                    <li><Button color="primary" onClick={() => window.open(this.props.project.github, "_blank")} rel="noopener noreferrer">Github</Button></li>
                    {projectWebsite}
                    <li>{this.props.project.tag}</li>
                </div>
                <CardActionArea>
                <CardContent>
                    <h4>Description</h4>
                    <p>{this.props.project.description}</p>
                </CardContent>
                </CardActionArea>
            </Card>
        )
    }
}

export default ProjectItem;