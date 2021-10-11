import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { PageHeader, Table } from 'antd';
import Button from '../../components/Button';
import DeleteOutlined from '@ant-design/icons/lib/icons/DeleteOutlined';

export interface ISpotProps {}

const columns = [
	{
		title: 'Status',
	},
	{
		title: 'Symbol',
	},
	{
		title: 'Open Price (Buy)',
	},
	{
		title: 'Units',
	},
	{
		title: 'Fees',
	},
	{
		title: 'Closed Price (Sell)',
	},
	{
		title: 'Profit ($)',
	},
	{
		title: 'Account',
	},
	{
		title: 'Trading System',
	},
	{
		title: 'Time Frame',
	},
];

const Spot: React.FC<ISpotProps> = (props) => {
	const [hasCheckSelected, setHasCheckSelected] =
		React.useState<boolean>(false);

	const rowSelection = {
		onChange: (selectedRowKeys: any, selectedRows: any) => {
			console.log(
				`selectedRowKeys: ${selectedRowKeys}`,
				'selectedRows: ',
				selectedRows
			);
		},
		onSelect: (record: any, selected: any, selectedRows: any) => {
			console.log(record, selected, selectedRows);
		},
		onSelectAll: (selected: any, selectedRows: any, changeRows: any) => {
			console.log(selected, selectedRows, changeRows);
		},
	};

	return (
		<>
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<div style={{ flexShrink: 0 }}>
					<PageHeader
						className="site-page-header-responsive"
						title="Spot"
						style={{ padding: 0 }}
						extra={[
							<Button
								roundedCorner
								icon={<DeleteOutlined />}
								style={{
									backgroundColor: 'red',
									color: 'white',
									display: !hasCheckSelected ? 'none' : 'initial',
								}}
							/>,
							<Button roundedCorner icon={<PlusOutlined />} type="primary">
								Add New Trade
							</Button>,
						]}
					/>
				</div>
				<div style={{ flexGrow: 1 }}>
					<br />
					<Table
						columns={columns}
						rowSelection={{ ...rowSelection }}
						dataSource={[]}
						size="small"
						pagination={false}
					/>
				</div>
			</div>
		</>
	);
};

export default Spot;
