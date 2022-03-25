import React from "react";
import AllRoutes from "./routes/all.routes";

const App = () => {
	console.log(process.env.REACT_APP_API_KEY);
	return (
		<>
			<AllRoutes />
		</>
	);
};

export default App;
