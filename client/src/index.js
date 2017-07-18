import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyAnNPMb6SVXVB3NkJ7B5vxE3NrrBeXeqbo';


// React's onClick attribute falls prey to iOS's dreaded 300ms tap delay.
// This dependency is temporary and will eventually go away.
// var injectTapEventPlugin = require("react-tap-event-plugin");
// injectTapEventPlugin();

const App = () => {
  return (
    <MuiThemeProvider>
      <div>
        <h1>Search</h1>
        <SearchBar />
      </div>
    </MuiThemeProvider>
  )
}

ReactDOM.render(
  <App />
  , document.getElementById('app')
);
