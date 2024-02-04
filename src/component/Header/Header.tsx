import * as S from './styled.header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import { Logo } from '../../assets/Svg/Logo';

import { Link } from 'react-router-dom';

export const Header = () => {
	return (
		<S.StyledHeader>
			<a className='logo-container'>
				<Logo />
			</a>
			<Link to='/'>Home</Link>
			<Link to='/yourArticles'>Your Articles</Link>
			<Link to='/newArticle'>New Article</Link>
			<Link to='/'>
				<FontAwesomeIcon icon={faIdCard} />
				Login
			</Link>
		</S.StyledHeader>
	);
};
