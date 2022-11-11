import React, { useEffect, useRef, useState } from 'react';
import data from './data.json';
import styled from 'styled-components';

interface TypeFeed {
	img: string;
}

export default function InfiniteScroll() {
	const [feed, setFeed] = useState<TypeFeed[]>([]);
	const target = useRef<HTMLDivElement | null>(null);
	console.log('feed 증가 확인', feed);
	useEffect((): (() => void) => {
		let io: IntersectionObserver | null = null;
		if (target.current) {
			io = new IntersectionObserver(entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						setTimeout(() => {
							setFeed((prev: TypeFeed[]) => [...prev, ...data]);
						}, 500);
					}
				});
			});
			io.observe(target.current);
		}
		return () => io && io.disconnect();
	}, [feed]);

	if (feed.length === 0) {
		return (
			<Container>
				<Loading>Loading...</Loading>
				<div ref={target} />
			</Container>
		);
	}
	return (
		<Container>
			{feed.map(({ img }, idx) => {
				return <ImgBox key={idx} img={img} />;
			})}
			<div ref={target} />
		</Container>
	);
}

const Container = styled.section`
	position: relative;
	width: 500px;
	height: 600px;
	border: 1px solid black;
	overflow: scroll;
`;

const Loading = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	margin: auto;
	transform: translate(-50%, -50%);
`;

const ImgBox = styled.div<TypeFeed>`
	width: 100px;
	height: 100px;
	border: 1px solid black;
	margin: 20px auto;
	background-image: ${({ img }) => `url(${img})`};
	background-size: 100% 100%;
`;
