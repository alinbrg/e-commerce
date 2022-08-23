// import Footer from "../components/Footer";
// import Header from "../components/Header";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import apiRequest from "../apiRequest";
import Page from "../Page";

// single single-product woocommerce woocommerce-page

export default function Product() {
	const { productID } = useParams();

	const { data, isLoading } = useQuery(["product", productID], () =>
		apiRequest("GET", `products/${productID}`)
	);

	console.log(data);
	if (isLoading) {
		return <h1>Loading...</h1>;
	}
	return (
		<div className="single single-product woocommerce woocommerce-page">
			<Page>
				{/* product content */}
				<div id="content" className="site-content">
					<div id="primary" className="content-area column full">
						<main id="main" className="site-main" role="main">
							<div id="container">
								<div id="content" role="main">
									<nav className="woocommerce-breadcrumb" itemProp="breadcrumb">
										<Link to="/">Home</Link>/ Beige Jacket
									</nav>
									<div
										itemScope=""
										itemType="http://schema.org/Product"
										className="product"
									>
										<div className="images">
											<div
												// href="#"
												itemProp="image"
												className="woocommerce-main-image zoom"
												title=""
												data-rel="prettyPhoto"
											>
												<img src={data?.image} alt="" />
											</div>
										</div>
										<div className="summary entry-summary">
											<h1 itemProp="name" className="product_title entry-title">
												{data?.title}
											</h1>
											<div
												className="woocommerce-product-rating"
												itemProp="aggregateRating"
												itemScope=""
												itemType="http://schema.org/AggregateRating"
											>
												<i className="fa fa-star" />{" "}
												<i className="fa fa-star" />{" "}
												<i className="fa fa-star" />{" "}
												<i className="fa fa-star" />{" "}
												<i className="fa fa-star" />
												<a
													href="#reviews"
													className="woocommerce-review-link"
													rel="nofollow"
												>
													(
													<span itemProp="reviewCount" className="count">
														2
													</span>{" "}
													customer reviews)
												</a>
											</div>
											<div
												itemProp="offers"
												itemScope=""
												itemType="http://schema.org/Offer"
											>
												<p className="price">
													<span className="amount">${data?.price}</span>
												</p>
												<meta itemProp="price" content={35} />
												<meta itemProp="priceCurrency" content="USD" />
												<link
													itemProp="availability"
													href="http://schema.org/InStock"
												/>
											</div>
											<div itemProp="description">
												<p>{data?.description}</p>
											</div>
											<form
												className="cart"
												method="post"
												encType="multipart/form-data"
											>
												<div className="quantity">
													<input
														type="number"
														step={1}
														min={1}
														max=""
														name="quantity"
														defaultValue={1}
														title="Qty"
														className="input-text qty text"
														size={4}
													/>
												</div>
												<button
													type="submit"
													className="single_add_to_cart_button button alt"
												>
													Add to cart
												</button>
											</form>
											<div className="product_meta">
												<span className="posted_in">
													Categories:
													<a href="#" rel="tag">
														Clothing
													</a>
													,
													<a href="#" rel="tag">
														Hoodies
													</a>
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</main>
					</div>
				</div>
			</Page>
		</div>
	);
}
