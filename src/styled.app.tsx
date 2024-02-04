import styled from 'styled-components';
import palette from './assets/palette';

export const SkeletonLayout = styled.div`
	> * {
		border-radius: 10px;
	}

	display: flex;
	width: 100%;
	min-height: 100vh;
	//background-color: ${palette.colors.background};
	@media (max-width: 768px) {
		flex-wrap: wrap;
	}
`;

export const LeftPage = styled.div`
	width: 70%;
	background-color: ${palette.colors.sx};
	padding: 20px;

	@media (max-width: 768px) {
		width: 100%;
	}
`;

export const RightPage = styled.div`
	width: 30%;
	background-color: ${palette.colors.dx};
	padding: 20px;

	@media (max-width: 768px) {
		width: 100%;
	}
`;
