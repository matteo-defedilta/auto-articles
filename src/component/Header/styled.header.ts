import styled from 'styled-components';
import palette from '../../assets/palette';

export const StyledHeader = styled.nav`
	display: flex;
	align-items: center;
	background-color: ${palette.colors.nav};
	border-radius: 10px;
	padding: 5px 0;

	.logo-container {
		display: flex;
	}

	.auto-logo {
		width: 60px;
	}

	svg {
		font-size: 2em;
	}
	a {
		font-weight: bold;
		margin: 0 1em;
		cursor: pointer;
		padding: 10px 20px;

		&:hover {
			background-color: #9c8dff;
			border-radius: 20px;
			transition: ease-in 100ms;
		}

		&:last-child {
			display: flex;
			margin-left: auto;
			align-items: center;
			svg {
				margin-right: 5px;
			}
		}

		@media (max-width: 768px) {
			margin: 0;
			padding: 5px 10px;
			font-size: 14px;
		}
	}
`;
