import { configureStore } from '@reduxjs/toolkit';
import articleReducer from './articleSlice'; // Replace with the actual path

export const store = configureStore({
	reducer: {
		articles: articleReducer,
		// Add other reducers as needed
	},
});
