export type ArticleType = {
	title: string;
	body: string;
	image?: string;
};

export type ArticlesType = {
	articles: ArticleType[];
};
