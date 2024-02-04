import * as S from './styled.home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faFontAwesome } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { ArticlesContainer } from '../../component';

export const Home = () => {
	return (
		<S.StyledHome>
			HOME
			<FontAwesomeIcon icon={faCoffee} />
			<FontAwesomeIcon icon={faFontAwesome} />
			<FontAwesomeIcon icon={faFacebook} />
			<ArticlesContainer />
		</S.StyledHome>
	);
};
