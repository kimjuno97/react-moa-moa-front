import React from 'react';
import useMoveBox from './useMoveBox';

export default function MoveBox() {
	const { list, dragStart, dragEnter, drop } = useMoveBox();

	return (
		<>
			{list.map((item: string, idx: number) => (
				<div
					style={{
						background: 'lightblue',
						margin: '20px 25%',
						textAlign: 'center',
						fontSize: '40px',
					}}
					onDragStart={() => dragStart(idx)}
					onDragEnter={() => dragEnter(idx)}
					onDragOver={e => e.preventDefault()}
					onDragEnd={drop}
					key={idx}
					draggable>
					{item}
				</div>
			))}
		</>
	);
}
