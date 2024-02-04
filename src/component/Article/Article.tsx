import { ArticleType } from '../../type/ArticleTypes';

export const Article = ({ title, body, image }: ArticleType) => {
	return (
		<div>
			<p>{title}</p>
			<p>{body}</p>
			<p>{image}</p>
		</div>
	);
};
