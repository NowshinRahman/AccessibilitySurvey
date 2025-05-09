import React from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ rating = 0, onChange }) => {
  const handleClick = (value) => {
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          size={30}
          onClick={() => handleClick(star)}
          color={star <= rating ? "#FFD700" : "#D3D3D3"}
          aria-label={`Rate ${star} stars`}
          style={{ cursor: "pointer" }}
        />
      ))}
    </div>
  );
};

export default StarRating;

