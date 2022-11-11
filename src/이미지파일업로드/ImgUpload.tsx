import React, { useRef, useState } from 'react';

export default function ImgUpload() {
	const [imgFile, setImgFile] = useState<string[]>([]);
	const upload = useRef<HTMLInputElement>(null);

	const imgUpload = () => {
		if (!upload.current?.files) return;
		const blob = upload.current.files[0];
		setImgFile(prev => [...prev, URL.createObjectURL(blob)]);
	};

	return (
		<>
			<h1>image upload</h1>
			<input
				type='file'
				ref={upload}
				multiple
				onChange={imgUpload}
				accept='image/*'
				style={{
					zIndex: '2',
					marginBottom: '10px',
					cursor: 'pointer',
				}}
			/>
			<h2>이미지 저장소</h2>
			<div style={{ display: 'flex' }}>
				{imgFile?.map((img, idx) => (
					<div key={idx} style={{ margin: '20px', border: '1px solid black' }}>
						<img
							style={{ width: '200px', height: '200px ' }}
							src={img}
							alt='img'
						/>
					</div>
				))}
			</div>
		</>
	);
}
