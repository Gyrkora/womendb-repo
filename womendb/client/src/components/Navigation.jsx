import { Link } from 'react-router-dom';
import { NavigationContainer } from '../styles/Navegation.styles';
import logo from '../assets/logo.svg';

export function Navigation() {
	return (
		<NavigationContainer>
			<Link to="/">
				<img src={logo} alt="logo" />
				<p>Women DB - soy el server</p>
			</Link>
			{/* <Link to="/tasks-create">Link a task-create</Link> */}
		</NavigationContainer>
	);
}
