import React from 'react';
import { PageHeader } from 'antd';

export interface ISettingGeneralProps {}

const SettingGeneral: React.FC<ISettingGeneralProps> = (props) => {
	return (
		<>
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<div style={{ flexShrink: 0 }}>
					<PageHeader
						className="site-page-header-responsive"
						title="General"
						style={{ padding: 0 }}
					/>
				</div>
				<div style={{ flexGrow: 1 }}>
					<br />

					{/* Content Here... */}
				</div>
			</div>
		</>
	);
};

export default SettingGeneral;
