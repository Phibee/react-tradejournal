import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import LayoutPage from './components/Layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AdminRoutes } from './router';

import {
	ApolloClient,
	InMemoryCache,
	HttpLink,
	ApolloProvider,
} from '@apollo/client';

function App() {
	return (
		<div className="App">
			<Router>
				<LayoutPage>
					<Switch>
						<AdminRoutes />
					</Switch>
				</LayoutPage>
			</Router>
		</div>
	);
}

export default App;
