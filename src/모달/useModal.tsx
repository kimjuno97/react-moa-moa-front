import React, { useRef, useState } from 'react';

export default function useModal() {
	const [toggle, setToggle] = useState(false);
	const target = useRef(null);

	const outLineTouch = (e: React.MouseEvent) => {
		console.log(e.target);
		if (target.current === e.target && toggle) {
			setToggle(false);
		}
	};

	const openModal = () => setToggle(true);

	return { toggle, target, openModal, outLineTouch };
}
