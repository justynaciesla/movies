import React from "react";
import InfoTooltip from "../InfoTooltip";
import ScrollableListItem from "../ScrollableListItem";
import "./style.css";

const ScrollableList = ({ listType, scrollableArray }) => {
  return (
    <div>
      <div className="title-info-button__wrapper">
        <h3 className="similar-movies__title">
          {listType === "movieCast" ? "Movie cast" : "Movies you can also like"}
        </h3>
        <InfoTooltip tooltipText={`Scroll right to see more`} />
      </div>

      <ul className="similar-movies-list__wrapper">
        {scrollableArray.map((item) => (
          <ScrollableListItem item={item} listType={listType} />
        ))}
      </ul>
    </div>
  );
};

export default ScrollableList;
