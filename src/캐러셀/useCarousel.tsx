import { useEffect, useRef, useState } from 'react';

const RAINBOWARRAY = ['red', 'orange', 'green', 'blue'];

export default function useCarousel() {
	// setSilder로 만든 배열 안쪽에서 저장
	const [caroselArray, setCaroselArray] = useState<string[]>([]);
	// 현재 인덱스 값 저장
	const [currentIdx, setCurrentIdx] = useState(0);
	/** 앞뒤로 추가할 데이터 */
	const fakeData = 1;
	/** 앞뒤로 속임수 데이터를 fakeData만큼 이어준다. */
	const setSilder = (arry: string[]) => {
		const addedFront = [];
		const addedLast = [];
		let index = 0;
		while (index < fakeData) {
			addedLast.push(arry[index % arry.length]);
			addedFront.unshift(arry[arry.length - 1 - (index % arry.length)]);
			index++;
		}
		setCaroselArray([...addedFront, ...arry, ...addedLast]);
	};
	/** 트랜지션 on,off */
	const [offTransition, setOffTransition] = useState(false);
	const direction = useRef('right');
	const transition = offTransition ? '0s' : '1s';
	const [disabled, setDisabled] = useState(false);

	/** 끝부분 transition off 하는 함수 */
	const handlerSlide = (calcIndex: number) => {
		// 앞에서 뒤로 가는 부분 계산 잘해야함.
		if (calcIndex < 0) {
			direction.current = 'left';
			calcIndex = caroselArray.length - 2;
			setOffTransition(true);
		}
		if (calcIndex === caroselArray.length - 1) {
			direction.current = 'right';
			calcIndex = caroselArray.length - 1;
		}
		setCurrentIdx(calcIndex);
	};
	/** 방향조절 */
	const handleSwipe = (direction: number) => {
		handlerSlide(currentIdx + direction);
	};
	/** 1초 버튼 막기 */
	const buttonControll = () => {
		setDisabled(true);
		setTimeout(() => setDisabled(false), 1000);
	};
	/** 캐러셀 동작 useEffect */
	useEffect(() => {
		if (
			direction.current === 'right' &&
			currentIdx === caroselArray.length - 2
		) {
			console.log('오른쪽으로 페이크');
			setTimeout(() => {
				setOffTransition(true);
				setCurrentIdx(0);
			}, 1000);
			setTimeout(() => {
				setOffTransition(false);
			}, 1100);
			return;
		}
		if (
			direction.current === 'left' &&
			currentIdx === caroselArray.length - 2
		) {
			console.log('왼쪽으로 페이크');
			// 이부분 계산 잘해야함
			setTimeout(() => {
				direction.current = 'right';
				setOffTransition(false);
				setCurrentIdx(caroselArray.length - 3);
			}, 10);
			return;
		}
		if (currentIdx === caroselArray.length - 2) {
			console.log('오른쪽으로 자동이동 페이크');
			const timeInterval = setInterval(() => {
				setOffTransition(true);
				setCurrentIdx(0);
				buttonControll();
				setTimeout(() => setOffTransition(false), 10);
			}, 3000);
			return () => clearInterval(timeInterval);
		}
		const timeInterval = setInterval(() => {
			console.log('오른쪽으로 자동이동 ');
			direction.current = 'right';
			setCurrentIdx(prev => prev + 1);
			buttonControll();
		}, 5000);
		return () => clearInterval(timeInterval);
	}, [currentIdx, caroselArray.length]);

	useEffect(() => {
		setSilder(RAINBOWARRAY);
	}, []);

	return {
		currentIdx,
		transition,
		caroselArray,
		handleSwipe,
		buttonControll,
		disabled,
		fakeData,
	};
}
