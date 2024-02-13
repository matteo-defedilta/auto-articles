import { Key } from 'react';

export type ArticleType = {
	id?: Key | null | undefined;
	title: string;
	body: string;
	image?: string;
};

export type ArticlesType = {
	articles: ArticleType[];
};
