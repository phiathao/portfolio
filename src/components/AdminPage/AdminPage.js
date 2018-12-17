import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

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
        },
        tags: []
    }
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_TAGS' });
    }
    styles = {
        container: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
            width: 200,
        },
        dense: {
            marginTop: 19,
        },
        menu: {
            width: 200,
        },
    };
    handleChange = (event) => {
        console.log('inside handleChange', event.target.name)
        this.setState({
            project: {
                ...this.state.project,
                [event.target.name]: event.target.value
            }
        })
    }
    render() {
        return (
            <div className="App">
                <h1>Admin</h1>
                <form onSubmit={() => this.handleSubmit} styles={this.styles.container}>
                    {["name", "description", "thumbnail", "website", "github", "date_complete"].map((property, i) => {
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
                    <TextField
                        id="standard-select-currency"
                        select
                        label="Select"
                        styles={this.styles.textField}
                        onChange={this.handleTag}
                        SelectProps={{
                            MenuProps: {
                                className: classes.menu,
                            },
                        }}
                        {this.state.tags.map(tag => {
                            return (
                                <MenuItem key={tag} value={tag}>
                                </MenuItem>
                            )
                        })}
                    ></TextField>
                    
                </form>
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(AdminPage);