import React from "react";
import { useState, useEffect } from "react";

const LoadingWrapper = (data) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // const intervalId = setInterval(() => {
    //   setLoading((e) => !e);
    // }, 2000);
    // return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={loading ? "loading-wrapper" : ""}>
      {loading ? <div className="spinner-border spinner-div" /> : ""}
    </div>
  );
};

export default LoadingWrapper;
