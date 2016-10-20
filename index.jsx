import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ExMain from './ExMain';

import { Provider } from "react-redux"
import store from "./store"

import { Router, Route, BrowserHistory } from 'react-router'

const rootElement = document.getElementById('app');
ReactDOM.render(<Provider store={store}>
			<Router history={BrowserHistory}>
			    <Route path='/' component={ExMain}>
			     <Route path='app' component={App} />
			    </Route>
			  </Router>
		    </Provider>, rootElement);