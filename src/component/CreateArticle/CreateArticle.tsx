import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addArticle } from '../../stores/articleSlice';
import { useNavigate } from 'react-router-dom';
import * as S from './styled.createArticle';
// import firebase from 'firebase/compat/app';
import 'firebase/firestore';

export const CreateArticle = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [articleData, setArticleData] = useState({
		id: nanoid(),
		title: '',
		body: '',
		image: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setArticleData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		// Dispatch the action to add article to Redux store
		dispatch(addArticle(articleData));

		// Save the article data to Firestore
		// const db = firebase.firestore();
		// try {
		// 	await db.collection('articles').doc(articleData.id).set(articleData);
		// 	console.log('Article added to Firestore successfully');
		// } catch (error) {
		// 	console.error('Error adding article to Firestore:', error);
		// }

		//After submit go to homepage
		navigate('/');
	};

	return (
		<>
			<h2>Create Article</h2>
			<S.StyledForm onSubmit={handleSubmit}>
				<label>Title:</label>
				<input
					type='text'
					name='title'
					value={articleData.title}
					onChange={handleChange}
				/>
				<label>Body:</label>
				<textarea
					name='body'
					value={articleData.body}
					onChange={handleChange}
				/>
				<label>Image (optional):</label>
				<input
					type='text'
					name='image'
					value={articleData.image}
					onChange={handleChange}
				/>
				<button type='submit'>Create Article</button>
			</S.StyledForm>
		</>
	);
};
