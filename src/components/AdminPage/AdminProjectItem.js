import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';


class AdminProjectItem extends Component {
    handleDelete = (id)=>{
        this.props.dispatch({type: 'DELETE_PROJECT', payload: id})
    }
    render() {
        return (
            <Card className="CardItem">
                <CardActionArea>
                <CardContent>
                    <ul>
                        <li>Name: {this.props.project.name}</li>
                        <li>Github: {this.props.project.github}</li>
                        <li>Tag: {this.props.project.tag}</li>
                        <li>Date Completed: {this.props.project.date_completed}</li>
                        <li>Thumbnail: {this.props.project.thumbnail}</li>
                        <li>Description: {this.props.project.description}</li>
                    </ul>
                </CardContent>
                </CardActionArea>
                <Button className="classButton" onClick={()=>this.handleDelete(this.props.project.id)}>Delete</Button>
            </Card>
        )
    }
}

export default connect()(AdminProjectItem);