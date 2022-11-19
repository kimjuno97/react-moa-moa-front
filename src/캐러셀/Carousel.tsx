import React from 'react';
import styled from 'styled-components';
import useCarousel from './useCarousel';

export default function Carousel() {
	const {
		currentIdx,
		transition,
		caroselArray,
		handleSwipe,
		buttonControll,
		disabled,
	} = useCarousel();

	return (
		<>
			<Container>
				<TransFormDiv translateX={currentIdx} transition={transition}>
					{caroselArray.map((el, idx) => {
						return (
							<CarouselDiv back={el} key={idx}>
								{idx}
							</CarouselDiv>
						);
					})}
				</TransFormDiv>
			</Container>
			<PreBtn
				disabled={disabled}
				onClick={() => {
					handleSwipe(-1);
					buttonControll();
				}}>
				Prev
			</PreBtn>
			<NextBtn
				disabled={disabled}
				onClick={() => {
					handleSwipe(+1);
					buttonControll();
				}}>
				Next
			</NextBtn>
		</>
	);
}

const Container = styled.section`
	position: absolute;
	top: 50%;
	left: 50%;
	display: flex;
	align-items: center;
	width: 500px;
	height: 500px;
	margin: auto;
	transform: translate(-50%, -50%);
	border: 1px solid gray;
	overflow: hidden;
`;

interface TypeTransFormDiv {
	translateX?: number;
	transition: string;
}

const TransFormDiv = styled.div<TypeTransFormDiv>`
	display: flex;
	transform: ${({ translateX }): string | undefined => {
		if (translateX) return `translateX(${-16 * translateX}%)`;
	}};
	transition: ${({ transition }) => transition};
`;

interface TypeCarouselDiv {
	back?: string;
}

const CarouselDiv = styled.div<TypeCarouselDiv>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 400px;
	height: 400px;
	border: 1px solid tomato;
	// key point
	flex: none;
	background: ${({ back }): string | undefined => back};
`;

const PreBtn = styled.button`
	position: absolute;
	top: 50%;
	left: 22%;
	font-size: 30px;
`;

const NextBtn = styled.button`
	position: absolute;
	top: 50%;
	left: 72%;
	font-size: 30px;
`;
