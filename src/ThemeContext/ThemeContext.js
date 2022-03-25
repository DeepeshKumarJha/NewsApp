import React, { useContext, useState } from "react";

const ThemeContext = React.createContext();

const dark = {
	backgroundColor: "#0f0e17",
	searchBoxBackgroundColor: "#1c1b22",
	cardBackgroundColor: "#2f3033",
	cardColor: "white",
	cardSkeletonColor: "#1a1b1b",
};

const light = {
	backgroundColor: "#f7f7f7",
	searchBoxBackgroundColor: "#dfdfdf",
	cardBackgroundColor: "#eeeeee",
	cardColor: "black",
	cardSkeletonColor: "#cecece",
};

const ThemeContextProvider = ({ children }) => {
	const [theme, setTheme] = useState("dark");

	const changeCssValues = (to) => {
		const root = document.querySelector(":root");
		if (to === "light") {
			root.style.setProperty("--background-color", light.backgroundColor);
			root.style.setProperty(
				"--search-box-background-color",
				light.searchBoxBackgroundColor
			);
			root.style.setProperty(
				"--card-background-color",
				light.cardBackgroundColor
			);
			root.style.setProperty("--card-color", light.cardColor);
			root.style.setProperty(
				"--card-skeleton-color",
				light.cardSkeletonColor
			);
		} else {
			root.style.setProperty("--background-color", dark.backgroundColor);
			root.style.setProperty(
				"--search-box-background-color",
				dark.searchBoxBackgroundColor
			);
			root.style.setProperty(
				"--card-background-color",
				dark.cardBackgroundColor
			);
			root.style.setProperty("--card-color", dark.cardColor);
			root.style.setProperty(
				"--card-skeleton-color",
				dark.cardSkeletonColor
			);
		}
	};

	const value = {
		theme: theme,
		setTheme: (changeTo) => {
			console.log("changing to ", changeTo);
			setTheme(changeTo);
			changeCssValues(changeTo);
		},
	};
	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
};

const AccessTheme = () => {
	return useContext(ThemeContext);
};

export { ThemeContext, ThemeContextProvider, AccessTheme };
