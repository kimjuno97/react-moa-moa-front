import React, { useState } from 'react';

export default function Debounce() {
	const [timer, setTimer] = useState<NodeJS.Timeout>();

	const debouncing = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (timer) {
			clearInterval(timer);
		}
		const delay = setTimeout(async () => {
			console.log('데이터 통신 로직 넣기 디바운스 부분');
		}, 500);
		setTimer(delay);
	};
	return (
		<div>
			<h1>Debounce</h1>
			<input onChange={debouncing} />
		</div>
	);
}
