import React from "react";
import Header from "./header/header.component";
import Search from "./search/search.component";
import InitialList from "./initialContent/initial.component";

const App = () => {
	return (
		<>
			<Header />
			<Search />
			<InitialList />
		</>
	);
};

export default App;
