import React from "react";

import { getImgSrc, getDisplayList, getCssStyling } from "../utilities/helper";

const ContentCard = (props) => {
  const {
    contentType = "all",
    contentCategory = "",
    mediaContent = [],
    cardTitle = "",
    style = {},
    options = {},
  } = props || {};
  const { showMoreOption = false, displayLimit = null } = options || {};

  let displayList = mediaContent.length
    ? getDisplayList(contentType, contentCategory, mediaContent)
    : [];

  if (displayLimit && displayList?.length > displayLimit) {
    displayList = displayList.slice(0, Number(displayLimit));
  }

  if (showMoreOption) displayList.push({ more: true });

  return (
    <div className="content-card-section">
      {displayList.length && (
        <h3 className="content-card-header">{cardTitle}</h3>
      )}
      <div style={getCssStyling(style)}>
        {displayList?.map((e, i) => {
          return (
            <div className="content-card" key={i}>
              {e.more ? (
                <div className="more-option-card"></div>
              ) : (
                <img src={getImgSrc(e)} alt={e?.title || e?.name} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContentCard;
