import React from 'react';
import styled from 'styled-components';
import useModal from './useModal';

export default function Modal() {
	const { toggle, target, openModal, outLineTouch } = useModal();

	return toggle ? (
		<>
			<OutLineDiv ref={target} onClick={outLineTouch}>
				<ModalBox>모달</ModalBox>
			</OutLineDiv>
		</>
	) : (
		<ModalBtn onClick={openModal}>모달열기</ModalBtn>
	);
}

const ModalBtn = styled.button`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 200px;
	padding: 30px;
	border-radius: 20px;
	font-size: 50px;
	border: none;
`;

const OutLineDiv = styled.div`
	width: 100vw;
	height: 100vh;
	/* background: skyblue; */
`;

const ModalBox = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 500px;
	height: 500px;
	background: orange;
	filter: none;
`;
