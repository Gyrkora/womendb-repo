import styled from 'styled-components';

export const LoaderMainContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin-top: 100px;
`;

export const LoaderContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: auto 0;
	border: 5px solid black; /* Light grey */
	border-top: 5px solid #e63946; /* Blue */
	border-radius: 50%;
	width: 40px;
	height: 40px;
	animation: spin 2s linear infinite;

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;
