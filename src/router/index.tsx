import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import TradesFuture from '../pages/Trades/Futures';
import TradesSpot from '../pages/Trades/Spot';
import Accounts from '../pages/Accounts';
import SettingGeneral from '../pages/Settings/General';
import SettingChangePassword from '../pages/Settings/ChangePassword';

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
