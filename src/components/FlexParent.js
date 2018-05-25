import styled from 'styled-components';

const FlexParent = styled.div`
	display: flex;
	flex-direction: ${props => props.direction};
	justify-content: ${props => props.justify};
	align-items: ${props => props.alignItems};
`;

export default FlexParent;