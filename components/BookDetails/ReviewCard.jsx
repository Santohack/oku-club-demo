import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReviewCard = (props) => {
  return (
    <div className="px-3 mx-2 ">
      <div className="p-2">
        <span className="text-green-500">
          <FontAwesomeIcon icon={faStar} /> Recommended
        </span>{" "}
        <span>by {props.review.userName}</span>
        <span>. {props.review.date}</span>
      </div>
      <div className="px-3 py-2 mx-2 rounded-lg border-gray-500 border-2">
        <p>{props.review.comment}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
