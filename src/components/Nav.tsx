import { Link, NavLink } from "react-router-dom"


const Nav = () => {
	return (
		<header className="header">
			<Link to="/" className="header__logo">Github Search</Link>
			<nav className="header__menu menu">
				<ul className="menu__list">
					<li className="menu__item">
						<NavLink 
							to="/" 
							className={({isActive}) => (isActive ? 'menu__link menu__link--active' : 'menu__link')}
						>Home</NavLink>
					</li>
					<li className="menu__item">
						<NavLink 
							to="/favorites"
							className={({isActive}) => (isActive ? 'menu__link menu__link--active' : 'menu__link')}
						>Favorites</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Nav