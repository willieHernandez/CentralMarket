import React from 'react';
import {Link} from 'react-router-dom';

function Header(){
	
	return(
		<div className="header">
			<Link to="/">
				<img src="https://scontent.fbna1-1.fna.fbcdn.net/v/t1.0-9/552770_637204262972116_1495274207_n.jpg?_nc_cat=108&_nc_ht=scontent.fbna1-1.fna&oh=83170b112e03c560383dedfa39940981&oe=5CD0F3E4" alt="Central Market" />
			</Link>
			<div id="header-right-area">
				<div id="central-market-title">
					<h1 className="title-top">  Welcome to Central Market </h1>
					<h2 className="title-bottom">Hosted by Griffith, IN</h2>
				</div>
				<div id="nav-bar">	
					<ul id="nav-bar-list">
						{/* Old code using a href to navigate.  */}
						{/* <li className="nav-bar-item"><a href="#beer-garden">Beer Garden</a></li>
						<li className="nav-bar-item"><a href="#live-music">Live Music</a></li>
						<li className="nav-bar-item"><a href="#vendors">Vendors</a></li>
						<li className="nav-bar-item"><a href="#food-trucks">Food Trucks</a></li> */}

						<li className="nav-bar-item"><Link to="/beer-garden">Beer Garden</Link></li>
						<li className="nav-bar-item"><Link to="live-music">Live Music</Link></li>
						<li className="nav-bar-item"><Link to="/vendors">Vendors</Link></li>
						<li className="nav-bar-item"><Link to="/food-trucks">Food Trucks</Link></li>
					</ul>
				</div>
				<button id="login-button">Staff Login</button>
			</div>
			
		</div>
)}

export default Header;