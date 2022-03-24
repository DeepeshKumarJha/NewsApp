import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../header/header.component";

const AllRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Header />}>
					<Route index />
					<Route path='search:searchValue' />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default AllRoutes;
