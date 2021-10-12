import React from 'react';

export interface IDefaultLayoutProps {}

const DefaultLayout: React.FC<IDefaultLayoutProps> = ({
	children,
	...props
}) => {
	return <>{children}</>;
};

export default DefaultLayout;
