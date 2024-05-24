import React from "react";
import { Link } from "react-router-dom";

const NavLinks = () => {
	return (
		<div>
			<nav className="nav-bar">
				<Link to="/" className="nav-item">
					Homepage
				</Link>
				<Link to="/about" className="nav-item">
					About Little Lemon
				</Link>
				<Link to="/contact" className="nav-item">
					Contact
				</Link>
			</nav>
		</div>
	);
};

export default NavLinks;
