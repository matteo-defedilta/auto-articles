import { ArticleType, ArticlesType } from '../../type/ArticleTypes';
import { Article } from '../Article';
import { useSelector } from 'react-redux';

export const ArticlesContainer = () => {
	const articles = useSelector((state: ArticlesType) => state.articles);
	//console.log(articles);

	return (
		<>
			{articles.length ? (
				articles.map((article: ArticleType) => {
					return (
						<Article
							key={article.id}
							title={article.title}
							body={article.body}
							image={article.image}
						/>
					);
				})
			) : (
				<p>no articles yet</p>
			)}
		</>
	);
};
