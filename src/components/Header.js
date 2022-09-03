import { Link, NavLink } from "react-router-dom";
export default function Header() {
	return (
		<header id="masthead" className="site-header">
			<div className="site-branding">
				<h1 className="site-title">
					<Link to="/">E-Commerce</Link>
				</h1>
				<h2 className="site-description">Shop Site</h2>
			</div>
			<nav id="site-navigation" className="main-navigation">
				<button className="menu-toggle">Menu</button>
				<a className="skip-link screen-reader-text" href="#content">
					Skip to content
				</a>
				<div className="menu-menu-1-container">
					<ul id="menu-menu-1" className="menu">
						<li>
							<NavLink
								to="/"
								className={({ isActive }) => (isActive ? "active" : "")}
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/about"
								className={({ isActive }) => (isActive ? "active" : "")}
							>
								About
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/search"
								className={({ isActive }) => (isActive ? "active" : "")}
							>
								Search
							</NavLink>
						</li>
						{/* <li>
							<a href="shop.html">Shop</a>
						</li>
						<li>
							<a href="blog.html">Blog</a>
						</li>
						<li>
							<a href="elements.html">Elements</a>
						</li>
						<li>
							<a href="#">Pages</a>
							<ul className="sub-menu">
								<li>
									<a href="portfolio-item.html">Portfolio Item</a>
								</li>
								<li>
									<a href="blog-single.html">Blog Article</a>
								</li>
								<li>
									<a href="shop-single.html">Shop Item</a>
								</li>
								<li>
									<a href="portfolio-category.html">Portfolio Category</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="contact.html">Contact</a>
						</li> */}
					</ul>
				</div>
			</nav>
		</header>
	);
}
