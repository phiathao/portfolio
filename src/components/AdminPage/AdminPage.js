import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class AdminPage extends Component {
    state = {
        project: {
            name: '',
            description: '',
            thumbnail: '',
            website: '',
            github: '',
            date_complete: '',
            tag_id: ''
        }
    }
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_TAGS' });
    }
    styles = theme => ({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
            marginLeft: theme.spacing.unit,
            marginRight: theme.spacing.unit,
            width: 200,
        },
        dense: {
            marginTop: 19,
        },
        menu: {
            width: 200,
        },
    });
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
        this.setState({
            project: {
                name: '',
                description: '',
                thumbnail: '',
                website: '',
                github: '',
                date_complete: '',
                tag_id: ''
            }
        })
    }
    render() {
        return (
            <div className="App">
                <h1>Admin</h1>
                <form onSubmit={this.handleSubmit} styles={this.styles.container}>
                    {["name", "description", "thumbnail", "website", "github", "date_complete"].map((property, i) => { //input field
                        return (
                            <TextField
                                key={i}
                                label={property}
                                name={property}
                                type="text"
                                styles={this.styles.textField}
                                value={this.state.project[property]}
                                onChange={this.handleChange}
                                margin="normal"
                            />
                        )
                    })}
                    <br />
                    <TextField // selection field
                        id="tag"
                        select
                        label="Tag"
                        styles={this.styles.textField}
                        value={this.state.project.tag_id}
                        onChange={this.handleTag}
                        margin="normal"
                    >
                        {this.props.reduxState.tags.map(tag => { // map to show selection
                            return (
                                <MenuItem key={tag.id} value={tag.id} styles={this.styles.menu}>
                                    {tag.name}
                                </MenuItem>
                            )
                        })}
                    </TextField>
                    <br />
                    <Button type="submit" value="Submit">Submit</Button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(AdminPage);