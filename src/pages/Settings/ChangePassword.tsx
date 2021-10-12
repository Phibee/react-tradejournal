import React from 'react';
import { Card, Form, PageHeader } from 'antd';
import Button from '../../components/Button';
import Input from '../../components/Input';

export interface ISettingChangePasswordProps {}

const SettingChangePassword: React.FC<ISettingChangePasswordProps> = (
	props
) => {
	const [form] = Form.useForm();

	const defaultPasswordRules = [
		{
			required: true,
			message: 'Enter your password',
		},
		{
			pattern: /^[a-zA-Z0-9_@!$]*$/,
			message: 'Enter only alphaNumeric characters including (_,@,!)',
		},
		{
			min: 8,
			message: 'Password must be minimum 5 characters',
		},
	];

	return (
		<>
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<div style={{ flexShrink: 0 }}>
					<PageHeader
						className="site-page-header-responsive"
						title="Change Password"
						style={{ padding: 0 }}
					/>
				</div>
				<div
					style={{
						display: 'flex',
						flexGrow: 1,
						justifyContent: 'center',
						paddingTop: 50,
					}}>
					{/* Content Here... */}

					<Card style={{ width: 400, boxShadow: '#dedede 0px 5px 19px -3px' }}>
						<Form layout="vertical" form={form}>
							<Form.Item
								label="Current Password"
								name="currentPassword"
								hasFeedback
								rules={[...defaultPasswordRules]}>
								<Input roundedCorner placeholder="Current Password" />
							</Form.Item>
							<Form.Item
								label="New Password"
								name="password"
								hasFeedback
								rules={[...defaultPasswordRules]}>
								<Input roundedCorner placeholder="New Password" />
							</Form.Item>
							<Form.Item
								label="Confirm Password"
								name="confirmPassword"
								hasFeedback
								rules={[
									...defaultPasswordRules,
									({ getFieldValue }) => ({
										validator(_, value) {
											if (!value || getFieldValue('password') === value) {
												return Promise.resolve();
											}

											return Promise.reject(
												new Error(
													'The two passwords that you entered do not match!'
												)
											);
										},
									}),
								]}>
								<Input roundedCorner placeholder="Confirm Password" />
							</Form.Item>
							<Form.Item>
								<Button roundedCorner block type="primary">
									Submit
								</Button>
							</Form.Item>
						</Form>
					</Card>
				</div>
			</div>
		</>
	);
};

export default SettingChangePassword;
