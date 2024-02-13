import styled from 'styled-components';

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;

	label {
		font-size: 14px;
		font-weight: 600;
	}

	input,
	textarea {
		margin-bottom: 1em;
		padding: 1em;
		width: 100%;
		border-radius: 10px;
		border: none;
	}
	textarea {
		resize: vertical;
		min-height: 10em;
	}

	button {
		padding: 1em;
		border-radius: 10px;
		border: none;
		font-weight: 600;
	}
`;
