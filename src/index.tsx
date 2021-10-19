import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import App from './App';
import { history, store } from './redux/store';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './theme';

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    </ThemeProvider>
  </Router>,
  document.getElementById('root')
);
