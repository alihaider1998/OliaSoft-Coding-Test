import React from 'react';
import ReactDOM from 'react-dom';
// import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { Routes } from './navigation/routes/routes';
import configureStore from '~store/configureStore';

import rigsList from './store/entities/oil-rigs/oil-rigs';
import siteList from './store/entities/sites/sites';

const store = configureStore({
  reducer: {
    sites: rigsList,
    oilRigs: siteList,
  },
})

const Root = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('content'));
