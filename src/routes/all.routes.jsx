import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Header from "../header/header.component";
import InitialContent from "../initialContent/initial.component";
import ResultPage from "../result/result.page.component";
import Search from "../search/search.component";

const AllRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={
						<>
							<Header />
							<Search />
							<Outlet />
						</>
					}
				>
					<Route index element={<InitialContent />} />
					<Route
						path='search/:searchValue'
						element={<ResultPage />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default AllRoutes;
