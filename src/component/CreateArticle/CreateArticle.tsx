import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addArticle } from '../../stores/articleSlice';

export const CreateArticle = () => {
	const dispatch = useDispatch();

	const [articleData, setArticleData] = useState({
		title: '',
		body: '',
		image: '',
	});

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setArticleData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		dispatch(addArticle(articleData));

		// Reset form or perform any additional actions
		setArticleData({
			title: '',
			body: '',
			image: '',
		});
	};

	return (
		<div>
			<h2>Create Article</h2>
			<form onSubmit={handleSubmit}>
				<label>
					Title:
					<input
						type='text'
						name='title'
						value={articleData.title}
						onChange={handleChange}
					/>
				</label>
				<br />
				<label>
					Body:
					<textarea
						name='body'
						value={articleData.body}
						onChange={handleChange}
					/>
				</label>
				<br />
				<label>
					Image (optional):
					<input
						type='text'
						name='image'
						value={articleData.image}
						onChange={handleChange}
					/>
				</label>
				<br />
				<button type='submit'>Create Article</button>
			</form>
		</div>
	);
};
