import React from 'react';
import { Layout, Menu } from 'antd';
import {
	UserOutlined,
	LaptopOutlined,
	NotificationOutlined,
	DashboardOutlined,
	SettingOutlined,
	CarryOutOutlined,
} from '@ant-design/icons';

import { BsBriefcase } from 'react-icons/bs';
import { ImCoinDollar } from 'react-icons/im';
import { MdOutlineDvr } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

export interface ILayoutProps {}

const { SubMenu } = Menu;
const { Sider } = Layout;

export interface ISidebarNavigationProps {
	collapsed: boolean;
}

const SidebarNavigation: React.FC<ISidebarNavigationProps> = ({
	collapsed,
	...props
}) => {
	return (
		<Sider trigger={null} theme="dark" collapsible collapsed={collapsed}>
			<div className="logo" />
			<Menu
				theme="dark"
				mode="inline"
				defaultSelectedKeys={[window.location.pathname.toString()]}
				defaultOpenKeys={[]}
				style={{ borderRight: 0 }}>
				<Menu.Item key="/" icon={<DashboardOutlined />}>
					<NavLink to="/">
						<span>Dashboard</span>
					</NavLink>
				</Menu.Item>

				<SubMenu key="/trades" icon={<ImCoinDollar size={15} />} title="Trades">
					<Menu.Item key="/trades/future">
						<NavLink to="/trades/future">
							<span>Futures</span>
						</NavLink>
					</Menu.Item>
					<Menu.Item key="/trades/spot">
						<NavLink to="/trades/spot">
							<span>Spot</span>
						</NavLink>
					</Menu.Item>
				</SubMenu>

				<Menu.Item key="/accounts" icon={<BsBriefcase size={15} />}>
					<NavLink to="/accounts">
						<span>Accounts</span>
					</NavLink>
				</Menu.Item>

				<Menu.Item icon={<MdOutlineDvr size={15} />}>Trading System</Menu.Item>

				<SubMenu icon={<CarryOutOutlined />} title="Reports">
					<Menu.Item>Daily</Menu.Item>
					<Menu.Item>Weekly</Menu.Item>
					<Menu.Item>Monthly</Menu.Item>
				</SubMenu>

				<SubMenu key="/settings" icon={<SettingOutlined />} title="Settings">
					<Menu.Item key="/settings/general">
						<NavLink to="/settings/general">
							<span>General</span>
						</NavLink>
					</Menu.Item>
					<Menu.Item key="/settings/change-password">
						<NavLink to="/settings/change-password">
							<span>Change Password</span>
						</NavLink>
					</Menu.Item>
				</SubMenu>
			</Menu>
		</Sider>
	);
};

export default SidebarNavigation;
