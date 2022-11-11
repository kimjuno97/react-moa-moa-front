import { useRef, useState } from 'react';

export default function useMoveBox() {
	const dragItem = useRef<number | null>(null);
	const dragOverItem = useRef<number | null>(null);

	// 배열을 밖에서 만들어 줘야함.
	const [list, setList] = useState([
		'Item1',
		'Item2',
		'Item3',
		'Item4',
		'Item5',
		'Item6',
	]);

	const dragStart = (idx: number) => {
		dragItem.current = idx;
	};
	const dragEnter = (idx: number) => {
		dragOverItem.current = idx;
	};

	const drop = () => {
		if (
			typeof dragItem.current === 'number' &&
			typeof dragOverItem.current === 'number'
		) {
			const copyListItems = [...list];
			const dragItemContent = copyListItems[dragItem.current];
			copyListItems.splice(dragItem.current, 1);
			copyListItems.splice(dragOverItem.current, 0, dragItemContent);
			dragItem.current = null;
			dragOverItem.current = null;
			setList(copyListItems);
		}
	};

	return { list, setList, dragStart, dragEnter, drop };
}
