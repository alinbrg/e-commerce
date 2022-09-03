import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Product from "./pages/Product";

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					{/* 
					ასეთი ვარიანტი არის როცა გვაქვს პროდუქტების გვერდი და პროდუქტის შედა გვერდი , და ამ შიდა გვერდის როუტი მშობლისას იყენებს და იმაზე აგრძელებს როცა მშობელი და შვილი ერთ ლეიაუთს იზიარებს, და შვილზე მხოლოდ ცოტა რაღაც ემატება, outlet-ის დაიმპორტება გვჭირდება შემდეგ მშობელ  ელემენტში <Outlet/> და ამას სადაც ჩავსვამთ მშობელში ამის ნაცვლად ჩაჯდება შემდეგ შვილი ელემენტი */}
					{/* <Route path="/product" element={<Home />}>
						<Route path=":productID" element={<Product />} />
					</Route> */}
					<Route path="/product/:productID" element={<Product />} />
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	);
}

export default App;
