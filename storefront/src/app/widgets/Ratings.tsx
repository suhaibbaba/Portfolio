import { Icon } from "@iconify/react";
import React from "react";

interface Props {
  ratings: number;
}

export default function Ratings({ ratings }: Props) {
  return (
    <div
      className="ratings"
      role="img"
      aria-label={`Rating: ${ratings} out of 5 stars`}
    >
      <div className="rating">
        {Array(5)
          .fill(null)
          .map((_, i) => (
            <i key={i}>
              <Icon icon="bi:star" />
            </i>
          ))}
      </div>
      <div className="rating" style={{ width: `${ratings * 20}%` }}>
        {Array(5)
          .fill(null)
          .map((_, i) => (
            <i key={i}>
              <Icon icon="bi:star-fill" />
            </i>
          ))}
      </div>
    </div>
  );
}
