import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue, teal } from '@material-ui/core/colors';
import './App.css';
import 'typeface-roboto';
import Projects from '../Project/Projects';
import { HashRouter as Router, Route } from 'react-router-dom';
import AdminPage from '../AdminPage/AdminPage';

//theme
const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: teal,
  }
});

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <Route path='/' exact component={Projects} />
          <Route path='/adminControl' component={AdminPage} />
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
