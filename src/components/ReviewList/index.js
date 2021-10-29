import React, { useContext } from "react";
import RootContext from "../../context";
import "./style.css";
import ReviewListItem from "../ReviewListItem";

const ReviewList = () => {
  const { reviews } = useContext(RootContext);

  return (
    <div>
      <h3 className="reviews-title">Movie reviews</h3>
      {reviews.length === 0 ? (
        <p className="no-reviews">Pretty empty here. Add first review!</p>
      ) : (
        reviews.map((review) => <ReviewListItem review={review} />)
      )}
    </div>
  );
};

export default ReviewList;
