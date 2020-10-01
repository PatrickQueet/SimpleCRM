import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles'
import './App.css';
import Routes from './routes'


const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#00599e'
    },
    primary: {
      main: '#94b91c'
    }
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '"Lato"',
      'sans-serif'
    ].join(',')
  }
});


class App extends Component {
  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
