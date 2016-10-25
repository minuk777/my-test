import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ExMain from './ExMain';

import { Provider } from "react-redux"
import store from "./store"

import { Router, Route, BrowserHistory } from 'react-router'

import DropzoneDemo from "./dropTest"

const rootElement = document.getElementById('app');
ReactDOM.render(<Provider store={store}>
			<Router history={BrowserHistory}>
			    <Route path='/' component={DropzoneDemo}>
			    </Route>
			  </Router>
		    </Provider>, rootElement);