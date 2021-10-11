import React from 'react';
import { Button as AntButton, ButtonProps } from 'antd';
import styled from 'styled-components';

const ButtonStyled = styled(AntButton)<{ roundedCorner?: boolean }>`
	outline: none;
	border: none;
	border-radius: ${(props) => (props.roundedCorner ? '5px' : '0')};
`;

export interface IButtonProps extends ButtonProps {
	roundedCorner?: boolean;
}

const Button: React.FC<IButtonProps> = ({
	children,
	roundedCorner,
	...props
}) => {
	return (
		<ButtonStyled roundedCorner={roundedCorner} {...props}>
			{children}
		</ButtonStyled>
	);
};

export default Button;
