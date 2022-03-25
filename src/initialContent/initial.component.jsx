import axios from "axios";
import React, { useEffect, useState } from "react";
import CardSkeleton from "../LoadingSkeleton/card.skeleton.component";
import "./initialContent.css";

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

const InitialContent = () => {
	const [loading, setLoading] = useState(false);
	const [news, setNews] = useState();

	useEffect(() => {
		const func = async () => {
			// whenever this component first mountend on the web save it into the local storage by getting it from the api
			console.log("fetching data .......");
			setLoading(true);
			try {
				const response = await axios.get(
					`https://newsapi.org/v2/top-headlines?country=IN&apiKey=${process.env.REACT_APP_API_KEY}`
				);
				console.log("value of response ", response.data.articles);
				setNews(response);
				setLoading(false);
			} catch (error) {
				console.log("something went wrong");
				setLoading(false);
			}
		};
		func();
	}, []);

	return (
		<div className='initial-container'>
			<h1>Top Headlines</h1>
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

export default InitialContent;
