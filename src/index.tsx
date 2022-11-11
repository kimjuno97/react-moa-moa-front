import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ImgUpload from './이미지파일업로드/ImgUpload';

export const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(<ImgUpload />);
