import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AdminProjectList from './AdminProjectList';
import './Admin.css';
import { Link } from 'react-router-dom';

class AdminPage extends Component {
    state = {
        project: {
            name: '',
            description: '',
            thumbnail: '',
            website: '',
            github: '',
            date_completed: '',
            tag_id: ''
        }
    }
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_TAGS' });
        this.props.dispatch({ type: 'FETCH_PROJECTS' });
    }
    handleChange = (event) => {
        this.setState({
            project: {
                ...this.state.project,
                [event.target.name]: event.target.value
            }
        })
    }
    handleTag = (event) => {
        this.setState({
            project: {
                ...this.state.project,
                tag_id: event.target.value
            }
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_PROJECT', payload: this.state.project })
        this.setState({
            project: {
                name: '',
                description: '',
                thumbnail: '',
                website: '',
                github: '',
                date_completed: '',
                tag_id: ''
            }
        })
    }
    handleHistory(){
    }
    render() {
        return (
            <div className="App">
                <h1>Admin</h1>
                <Link to="/"><Button>View Project</Button></Link>
                <form onSubmit={this.handleSubmit}>
                    {["name", "description", "thumbnail", "website", "github", "date_completed"].map((property, i) => { //input field
                        if (property === "date_completed") {
                            return (
                                <TextField
                                    key={i}
                                    label={property}
                                    name={property}
                                    className="textField"
                                    InputLabelProps={{ shrink: true, }}
                                    type="date"
                                    value={this.state.project[property]}
                                    onChange={this.handleChange}
                                    margin="normal"
                                />
                            )
                        } else {
                            return (
                                <TextField
                                    key={i}
                                    label={property}
                                    name={property}
                                    type="text"
                                    className="textField"
                                    value={this.state.project[property]}
                                    onChange={this.handleChange}
                                    margin="normal"
                                />
                            )
                        }
                    })}
                    <br />
                    <TextField // selection field
                        id="tag"
                        select
                        label="Tag"
                        className="textField"
                        value={this.state.project.tag_id}
                        onChange={this.handleTag}
                        margin="normal"
                    >
                        {this.props.reduxState.tags.map(tag => { // map to show selection
                            return (
                                <MenuItem key={tag.id} value={tag.id} className="textField">
                                    {tag.name}
                                </MenuItem>
                            )
                        })}
                    </TextField>
                    <br />
                    <Button type="submit" value="Submit">Submit</Button>
                </form>
                <AdminProjectList />
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(AdminPage);