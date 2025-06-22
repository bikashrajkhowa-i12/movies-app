import React from "react";

import { useApp } from "../contexts/useApp";

const LoadingWrapper = (props) => {
  const { loading = false } = useApp();
  
  return (
    <div className={loading ? "loading-wrapper" : ""}>
      {loading ? <div className="spinner-border spinner-div" /> : ""}
    </div>
  );
};

export default LoadingWrapper;
