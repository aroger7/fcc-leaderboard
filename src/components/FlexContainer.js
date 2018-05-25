import styled from 'styled-components';

const FlexContainer = styled.div`
	flex-grow: ${props => (props.grow && props.grow >= 0 ? props.grow : 0)}
	width: 0;
`;

export default FlexContainer;