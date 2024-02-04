import './App.css';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { Header } from './component';
// import AppRouter from './AppRouter';

import * as S from './styled.app';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, NewArticle, YourArticles } from './pages';

function App() {
	return (
		<>
			<Router>
				<Header />
				<S.SkeletonLayout>
					<S.LeftPage>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/newArticle' element={<NewArticle />} />
							<Route path='/yourArticles' element={<YourArticles />} />
						</Routes>
					</S.LeftPage>
					<S.RightPage></S.RightPage>
				</S.SkeletonLayout>
			</Router>
		</>
	);
}

export default App;
