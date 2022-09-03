// import Footer from "../components/Footer";
// import Header from "../components/Header";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link, useSearchParams } from "react-router-dom";
import apiRequest from "../apiRequest";
import Page from "../Page";

// archive post-type-archive post-type-archive-product woocommerce woocommerce-page

export default function Search() {
	let [searchParams, setSearchParams] = useSearchParams();

	const { data } = useQuery(["products", searchParams.get("search")], () =>
		apiRequest("GET", `products?q=${searchParams.get("search")}`)
	);
	const [searchValue, setSearchValue] = useState("");

	function onSearchSumbit(e) {
		e.preventDefault();

		// ლინკს დაემატება /?search=searchValue ასეთი რაღაც
		setSearchParams({
			search: searchValue,
		});
	}

	useEffect(() => {
		setSearchValue(searchParams.get("search"));
	}, []);

	return (
		<div className="archive post-type-archive post-type-archive-product">
			<Page>
				{
					<div id="content" className="site-content">
						<div className="search ">
							<form action="" onSubmit={onSearchSumbit}>
								<input
									type="text"
									value={searchValue}
									onChange={(e) => setSearchValue(e.target.value)}
								/>
								<button type="submit">Search</button>
							</form>
						</div>
						<div id="primary" className="content-area column full">
							<main id="main" className="site-main" role="main">
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
