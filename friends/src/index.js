import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";

// withRouter gives us access to the history object...
import { withRouter} from 'react-router-dom';

const AppWithRouter = withRouter(App) // Higher Order Function

ReactDOM.render(
	<Router>
		<AppWithRouter /> 
	</Router>,
		document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
