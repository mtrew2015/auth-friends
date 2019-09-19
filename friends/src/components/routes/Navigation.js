import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css'

function Navigation() {
	const handleLogout = () => {
		localStorage.removeItem('token');
		window.location.reload();
	};
	return (
		<div className="navigation">
			<nav>
				<Link to='/login'>Login</Link>
				<Link to='/friends'>See Your Friends</Link>
				<Link to='/addfriend'>Add A Friend</Link>
				<button onClick={handleLogout}>Logout</button>
			</nav>
		</div>
	);
}

export default Navigation;
