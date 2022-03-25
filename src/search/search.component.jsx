import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./search.css";
import SearchResult from "./searchresult.component";

const Search = () => {
	const navigate = useNavigate();
	const [phrase, setPhrase] = useState("");
	const [showSearchList, setShowSearchList] = useState(false);
	const [searchList, setSearchList] = useState();

	const searchForIt = () => {
		console.log("searching for ", phrase);
		navigate(`/search/${phrase}`);
		setShowSearchList(false);
	};

	const checkForEnter = (event) => {
		if (event.key === "Enter") {
			console.log("enter is pressed");
			searchForIt();
		}
	};

	const searchPhrase = async () => {
		if (phrase === undefined || phrase.length >= 1) {
			// don't do anything
		} else {
			try {
				const response = await axios.get(
					`https://newsapi.org/v2/everything?q=${phrase}&language=en&apiKey=${process.env.REACT_APP_API_KEY}`
				);
				console.log(phrase);
				console.log(response.data.articles);
				setSearchList(response.data.articles);
				setShowSearchList(true);
			} catch (error) {
				console.log(error);
			}
		}
	};

	useEffect(() => {
		console.log("i am in the effect function");
		const delayTheSearch = setTimeout(() => {
			console.log("phrase is : ", phrase);
			searchPhrase();
		}, 2000);

		return () => {
			clearTimeout(delayTheSearch);
		};
	}, [phrase]);

	return (
		<div
			className='search'
			onBlur={() => {
				searchPhrase();
			}}
		>
			<div className='search-box' id='searchbox'>
				<input
					type='text'
					placeholder='search what you want'
					onKeyDown={checkForEnter}
					onChange={(e) => {
						setPhrase(e.target.value);
					}}
					onFocus={searchPhrase}
					onBlur={() => {}}
					value={phrase}
				/>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 30 30'
					onClick={searchForIt}
					className='search-svg'
				>
					<path d='M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z'></path>
				</svg>
			</div>
			{showSearchList ? (
				<ul className='search-result-list'>
					{searchList.map((item, index) => {
						return <SearchResult item={item} key={index} />;
					})}
				</ul>
			) : (
				<></>
			)}
		</div>
	);
};

export default Search;
