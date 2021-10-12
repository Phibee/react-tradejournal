import gql from 'graphql-tag';

const CREATE_USER = gql`
	mutation ($input: UsersPermissionsRegisterInput!) {
		register(input: $input) {
			jwt
			user {
				username
				email
			}
		}
	}
`;

const GET_ACCOUNT_USERS = gql`
	{
		users {
			username
			email
		}
	}
`;

const SIGN_IN_USER = gql`
	mutation ($input: UsersPermissionsLoginInput!) {
		login(input: $input) {
			jwt
		}
	}
`;

export { GET_ACCOUNT_USERS, CREATE_USER, SIGN_IN_USER };
