import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Page({ children }) {
	return (
		<div id="page">
			<div className="container">
				<Header />
				{children}
			</div>

			<Footer />
		</div>
	);
}
