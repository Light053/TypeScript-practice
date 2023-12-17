import { FC } from "react";
import { Link } from "react-router-dom";
import './header.css'

const Header: FC = () => {
	return (
		<div className='link'>
			<Link to={'/todos'}>Todos</Link>
			<Link to={'/users'}>Users</Link>
			<Link to={'/drag'}>drag</Link>
		</div>
	)
}

export default Header