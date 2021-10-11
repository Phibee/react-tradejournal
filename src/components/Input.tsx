import React from 'react';
import { Input as AntInput, InputProps } from 'antd';
import styled from 'styled-components';

const InputStyled = styled(AntInput)<{ roundedCorner?: boolean }>`
	border-radius: ${(props) => (props.roundedCorner ? '5px' : '0')};
`;

export interface IInputProps extends InputProps {
	roundedCorner?: boolean;
}

const Input: React.FC<IInputProps> = ({
	children,
	roundedCorner,
	...props
}) => {
	return (
		<InputStyled roundedCorner={roundedCorner} {...props}>
			{children}
		</InputStyled>
	);
};

export default Input;
