import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CardSkeleton from "../LoadingSkeleton/card.skeleton.component";

const Loading = () => {
	return (
		<>
			<CardSkeleton />
		</>
	);
};

const NewsCard = (props) => {
	return (
		<div className='news-card-container'>
			<div className='news-card-image'>
				<img src={props.item.urlToImage} alt='' />
			</div>
			<div className='news-card-content'>
				<h3 style={{ fontWeight: 200 }}>{props.item.title}</h3>
				<p style={{ fontWeight: 100 }}>{props.item.description}</p>
			</div>
		</div>
	);
};

const ResultPage = () => {
	const param = useParams();
	const [loading, setLoading] = useState(false);
	const [news, setNews] = useState();

	useEffect(async () => {
		// whenever this component first mountend on the web save it into the local storage by getting it from the api
		console.log("fetching data .......");
		setLoading(true);
		try {
			const response = await axios.get(
				`https://newsapi.org/v2/everything?q=${param.searchValue}&language=en&apiKey=${process.env.REACT_APP_API_KEY}`
			);

			setNews(response);
			setLoading(false);
		} catch (error) {
			console.log("something went wrong");
			setLoading(false);
		}
	}, [param.searchValue]);

	return (
		<div className='initial-container'>
			<h1>Search Result for "{param.searchValue}"</h1>
			{loading ? (
				<Loading />
			) : (
				news?.data.articles.map((item, index) => {
					return <NewsCard key={index} item={item} />;
				})
			)}
		</div>
	);
};

export default ResultPage;
