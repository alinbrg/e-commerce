// import Footer from "../components/Footer";
// import Header from "../components/Header";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import apiRequest from "../apiRequest";
import Page from "../Page";

// archive post-type-archive post-type-archive-product woocommerce woocommerce-page

export default function Home() {
	const { data } = useQuery("products", () => apiRequest("GET", "products"));

	console.log(data);

	return (
		<div className="archive post-type-archive post-type-archive-product">
			<Page>
				{
					<div id="content" className="site-content">
						<div id="primary" className="content-area column full">
							<main id="main" className="site-main" role="main">
								<p className="woocommerce-result-count">
									Showing 1–8 of 12 results
								</p>
								<form className="woocommerce-ordering" method="get">
									<select name="orderby" className="orderby">
										<option value="menu_order" defaultValue>
											Default sorting
										</option>
										<option value="popularity">Sort by popularity</option>
										<option value="rating">Sort by average rating</option>
										<option value="date">Sort by newness</option>
										<option value="price">Sort by price: low to high</option>
										<option value="price-desc">
											Sort by price: high to low
										</option>
									</select>
								</form>
								<ul className="products">
									{(data || []).map((item) => (
										<li key={item.id} className="product">
											<Link to={`/product/${item.id}`}>
												<img src={item.image} alt="" />
												<h3>{item.title}</h3>
												<span className="price">
													<span className="amount">${item.price}</span>
												</span>
											</Link>
											<a href="#" className="button">
												Add to cart
											</a>
										</li>
									))}
								</ul>
								<nav className="woocommerce-pagination">
									<ul className="page-numbers">
										<li>
											<span className="page-numbers current">1</span>
										</li>
										<li>
											<a className="page-numbers" href="#">
												2
											</a>
										</li>
										<li>
											<a className="next page-numbers" href="#">
												→
											</a>
										</li>
									</ul>
								</nav>
							</main>
							{/* #main */}
						</div>
						{/* #primary */}
					</div>
				}
			</Page>
		</div>
	);
}
