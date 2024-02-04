import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Article {}

const initialState: Article[] = [];

export const articleSlice = createSlice({
	name: 'articles',
	initialState,
	reducers: {
		addArticle: (state, action: PayloadAction<Article>) => {
			state.push(action.payload);
		},
	},
});

export const { addArticle } = articleSlice.actions;

export default articleSlice.reducer;
