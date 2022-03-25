import React from "react";
import "./cardSkeleton.css";

const CardSkeleton = () => {
	return (
		<>
			<div className='card-skeleton-container'>
				<div className='card-skeleton-container-image'>
					{/* loading image */}
				</div>
				<div className='card-skeleton-data'>
					<div className='card-skeleton-container-heading'>
						{/* loading heading */}
					</div>
					<div className='card-skeleton-container-para'>
						{/* loading paragraph */}
					</div>
				</div>
			</div>
			<div className='card-skeleton-container'>
				<div className='card-skeleton-container-image'>
					{/* loading image */}
				</div>
				<div className='card-skeleton-data'>
					<div className='card-skeleton-container-heading'>
						{/* loading heading */}
					</div>
					<div className='card-skeleton-container-para'>
						{/* loading paragraph */}
					</div>
				</div>
			</div>
		</>
	);
};

export default CardSkeleton;
