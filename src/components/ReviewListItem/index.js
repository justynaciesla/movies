import React from "react";
import { baseImgUrl } from "./../../utils/baseImgUrl";
import Star from "../../assets/icons/star.png";
import EmptyStar from "../../assets/icons/outlinedStar.png";
import "./style.css";

const renderStars = (rate) => {
  let starArray = [];
  for (let i = 0; i < rate; i++) {
    starArray.push(Star);
  }

  let emptyStarCount = 10 - rate;
  for (let i = 0; i < emptyStarCount; i++) {
    starArray.push(EmptyStar);
  }

  return starArray.map((imgSource) => (
    <img src={imgSource} alt="starImg" className="star_img" />
  ));
};

const ReviewListItem = ({ review }) => {
  return (
    <div>
      <div className="review-wrapper">
        <img
          src={`${baseImgUrl}${review.author_details.avatar_path}`}
          alt="avatar"
          className="avatar_img"
        />
        <div className="review-details-wrapper">
          <div className="review-author-rating-wrapper">
            <h3 className="review-author">{review.author}</h3>
            <div>{renderStars(review.author_details.rating)}</div>
          </div>

          <p className="review-content-show-all">{review.content}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewListItem;
