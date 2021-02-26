import React from 'react';
import {Link} from 'react-router-dom'

export const Home = () => {
	return (
		<div>
			<nav>
				<Link to = '/table'>Table</Link>
			</nav>
		</div>
	);
};
