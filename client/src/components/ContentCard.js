import React from "react";
import { useNavigate } from "react-router-dom";

import { getImgSrc } from "../utilities/helper";

const ContentCard = (props) => {
  const navigate = useNavigate();
  const {
    mediaContent = [],
    cardTitle = "",
    style = {},
    options = {},
  } = props || {};
  const { showMoreOption = false, displayLimit = null } = options || {};

  let displayList = mediaContent || []

  if (displayLimit && displayList?.length > displayLimit) {
    displayList = displayList.slice(0, Number(displayLimit));
  }

  if (showMoreOption && displayList.length > 0) displayList.push({ more: true });

  const onClickCard = (item) => {
    const { id=null, type=""} = item || {};
    if(id && type) navigate(`/${type}/${id}`)
  }

  return (
    <div className="content-card-section">
      {displayList.length > 0 && (
        <h3 className="content-header-title">{cardTitle}</h3>
      )}
      {displayList.length > 0 && <div style={style}>
        {displayList?.map((e, i) => {
          return (
            <div className="content-card" key={i} onClick={() => onClickCard(e)}>
              {e.more ? (
                <div className="more-option-card"></div>
              ) : (
                <img src={getImgSrc(e)} alt={e?.title || e?.name} />
              )}
            </div>
          );
        })}
      </div>}
    </div>
  );
};

export default ContentCard;
