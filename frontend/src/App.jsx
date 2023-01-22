import React from "react";
import { BrowserRouter, Link, Routes as Switch, Route } from "react-router-dom";
import { HomePage, CreatePostPage } from "./pages";
import { logo } from "./assets";
export default function App() {
	return (
		<BrowserRouter>
			<header className="w-full flex items-center justify-between bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
				<Link to={"/"}>
					<img src={logo} alt="logo" className="w-28 object-contain" />
				</Link>
				<Link
					to={"/create-post"}
					className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md hover:opacity-80"
				>
					Create Post
				</Link>
			</header>
			<main className="sm:p-8 px-4 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
				<Switch>
					<Route index element={<HomePage />} />
					<Route path="create-post" element={<CreatePostPage />} />
				</Switch>
			</main>
		</BrowserRouter>
	);
}
