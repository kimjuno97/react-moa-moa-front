import React from 'react';
import './Spiner.css';

export default function Spiner() {
	return (
		<div className='spiner'>
			<svg className='svg'>
				<circle className='circle' cx='50%' cy='50%' r='25%' />
			</svg>
		</div>
	);
}
