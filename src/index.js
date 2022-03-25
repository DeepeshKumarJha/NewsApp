import ReactDOM from "react-dom";
import React from "react";
import "./index.css";
import App from "./App";
import { ThemeContextProvider } from "./ThemeContext/ThemeContext";

const root = document.getElementById("root");

ReactDOM.render(
	<ThemeContextProvider>
		<App />
	</ThemeContextProvider>,
	root
);
