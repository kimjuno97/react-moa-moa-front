import React from 'react';
import styled from 'styled-components';
import Modal from './Modal';

export default function Page() {
	return (
		<Body>
			Page
			<Modal />
		</Body>
	);
}

const Body = styled.div`
	width: 100%;
	height: 100vh;
	background: skyblue;
`;
