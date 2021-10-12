import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import TradesFuture from '../pages/Trades/Futures';
import TradesSpot from '../pages/Trades/Spot';
import Accounts from '../pages/Accounts';
import SettingGeneral from '../pages/Settings/General';
import SettingChangePassword from '../pages/Settings/ChangePassword';

import AccountRegister from '../pages/Account/Register';
import AccountLogin from '../pages/Account/Login';

export const AdminRoutes: React.VFC<{}> = () => {
	return (
		<>
			<Route path="/" exact>
				<Dashboard />
			</Route>

			<Route path="/trades/future">
				<TradesFuture />
			</Route>

			<Route path="/trades/spot">
				<TradesSpot />
			</Route>

			<Route path="/accounts">
				<Accounts />
			</Route>

			<Route path="/settings/general">
				<SettingGeneral />
			</Route>

			<Route path="/settings/change-password">
				<SettingChangePassword />
			</Route>
		</>
	);
};

export const DefaultRoutes: React.VFC<{}> = () => {
	return (
		<>
			<Route path="/account/login" exact>
				<AccountLogin />
			</Route>
			<Route path="/account/register" exact>
				<AccountRegister />
			</Route>
		</>
	);
};