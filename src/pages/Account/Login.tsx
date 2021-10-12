import React from 'react';
import { Card, Form, Input as AntInput, PageHeader } from 'antd';
import Button from '../../components/Button';
import Input from '../../components/Input';
import styled from 'styled-components';
import { useMutation } from '@apollo/client';
import { SIGN_IN_USER } from '../../infrastructure/queries/account.queries';
import { Link } from 'react-router-dom';

const PageHeaderStyled = styled(PageHeader)`
	.ant-page-header-heading-title {
		color: #273e61;
	}
`;

export interface IAccountLoginProps {}

const Swal = require('sweetalert2');
const AccountLogin: React.FC<IAccountLoginProps> = (props) => {
	const [form] = Form.useForm();

	const [signInUser, { loading, error }] = useMutation(SIGN_IN_USER);

	const onFinish = (values: any) => {
		signInUser({
			variables: { input: values },
		});

		Swal.fire({
			title: 'Registration Successful!',
			text: "You're account has been created.",
			type: 'success',
		}).then((result: any) => {
			window.location.reload();
		});
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<>
			<PageHeaderStyled
				className="site-page-header-responsive"
				title="Sign-in an account"
			/>
			<Card
				style={{
					width: 400,
					minHeight: 300,
					borderRadius: 8,
					boxShadow: 'rgb(163 175 239) 0px 10px 19px -13px',
				}}>
				<Form
					layout="vertical"
					form={form}
					initialValues={{
						remember: true,
					}}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}>
					<Form.Item
						label="Email Address"
						name="email"
						hasFeedback
						rules={[
							{
								required: true,
								message: 'Enter your email address',
							},
							{
								type: 'email',
								message: 'Enter a valid email address',
							},
						]}>
						<Input roundedCorner placeholder="Email Address" />
					</Form.Item>
					<Form.Item
						label="Password"
						name="password"
						hasFeedback
						rules={[
							{
								required: true,
								message: 'Enter your password',
							},
						]}>
						<AntInput.Password placeholder="Password" />
					</Form.Item>
					<Form.Item>
						<Button
							loading={loading}
							roundedCorner
							block
							type="primary"
							htmlType="submit">
							Submit
						</Button>
					</Form.Item>
				</Form>
				<div>
					Don't have an account? <Link to="/account/register">Sign up</Link>
				</div>
			</Card>
		</>
	);
};

export default AccountLogin;
