import React from "react";
import { baseImgUrl } from "../../utils/baseImgUrl";

const ScrollableListItem = ({ listType, item }) => {
  return (
    <li key={item.id}>
      <img
        src={
          listType === "movieCast"
            ? `${baseImgUrl}${item.profile_path}`
            : `${baseImgUrl}${item.poster_path}`
        }
        alt="movieImg"
        className="similar-movie__img"
        loading="lazy"
      />

      <p className="similar-movie-item-title">
        {listType === "movieCast" ? (
          <p>
            {" "}
            {item.name} <br /> as a <br /> <b>{item.character}</b>
          </p>
        ) : (
          <p>{item.title}</p>
        )}
      </p>
    </li>
  );
};

export default ScrollableListItem;
