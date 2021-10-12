import React from 'react';
import styled from 'styled-components';
import JournadeLogo from '../assets/journade.svg';

const ContainerStyled = styled.div`
	display: flex;
	flex-grow: 1;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	height: 100vh;

	&:before {
		content: '';
		width: 100vw;
		height: 100vh;
		/* background-color: #4b69ff; */
		background: #56ccf2; /* fallback for old browsers */
		background: -webkit-linear-gradient(
			to bottom,
			#2f80ed,
			#56ccf2
		); /* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(
			to bottom,
			#2f80ed,
			#56ccf2
		); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

		clip-path: polygon(100% 0, 0% 100%, 100% 100%);
		position: absolute;
	}
`;

export interface IAccountLayoutProps {}

const AccountLayout: React.FC<IAccountLayoutProps> = ({
	children,
	...props
}) => {
	return (
		<ContainerStyled>
			<>
				<div
					className="app_logo"
					style={{
						position: 'absolute',
						top: 20,
						left: 20,
					}}>
					<img src={JournadeLogo} style={{ height: 80 }} />
				</div>
				{children}
			</>
		</ContainerStyled>
	);
};

export default AccountLayout;
