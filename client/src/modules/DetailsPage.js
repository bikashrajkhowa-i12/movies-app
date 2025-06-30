import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { isEmpty } from "lodash";

import callApi from "../api/callApi";
import { useApp } from "../contexts/useApp";
import { getImgSrc, normalCase } from "../utilities/helper";

const DetailsPage = (props) => {
  const { setLoading } = useApp();
  const { id = "", type = "" } = useParams();
  const [contentMeta, setContentMeta] = useState({});

  useEffect(() => {
    const fetchContentMeta = async () => {
      try {
        setLoading(true);
        const response = await callApi({
          url: `/${type}/${id}`,
          method: "GET",
        });
        setContentMeta(response?.data);
      } catch (error) {
        console.log("Failed to fetch movies!\n", error);
      } finally {
        setLoading(false);
      }
    };
    fetchContentMeta();
  }, [id, type]);
  console.log(contentMeta);
  const tabspace = "\u00A0\u00A0\u00A0";
  return (
    <div className="content-section">
      {!isEmpty(contentMeta) ? (
        <div className="details-container">
          <div className="details-poster">
            <img
              src={getImgSrc(contentMeta)}
              alt={contentMeta.title || contentMeta.name}
            />
          </div>
          <div className="details-info">
            <h1 className="details-title">
              {contentMeta.title || contentMeta.name}
            </h1>
            <p className="details-meta">
              {normalCase(contentMeta.type)}
              {tabspace}•{tabspace}
              {new Date(contentMeta.release_date).getFullYear() ||
                new Date(contentMeta.first_air_date).getFullYear()}
              {tabspace}•{tabspace}
              {contentMeta.genres?.map(e => e.name).join(`${tabspace}•${tabspace}`) ||
              contentMeta.genre_ids?.join(`${tabspace}•${tabspace}`)}
            </p>
            <p className="details-rating">
              Rating: &#11088; {parseFloat(contentMeta.vote_average.toFixed(2))}
              /10
            </p>
            <p className="details-description">{contentMeta.overview}</p>
            {/* <div className="details-more-info">
              <p>more</p>
            </div> */}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DetailsPage;
