import { ArticleType, ArticlesType } from '../../type/ArticleTypes';
import { Article } from '../Article';
import { useSelector } from 'react-redux';

export const ArticlesContainer = () => {
	const articles = useSelector((state: ArticlesType) => state.articles);
	console.log(articles);

	return (
		<>
			{articles.map((article: ArticleType) => {
				return (
					<Article
						key={article.title}
						title={article.title}
						body={article.body}
						image={article.image}
					/>
				);
			})}
		</>
	);
};
