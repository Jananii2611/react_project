import React from "react";
function LoadingHOC(WrappedComponent) {
  return function WithLoading({ loading, ...props }) {
    if (loading) return <div style={{ textAlign: "center", margin: "2rem" }}><div className="loader"></div>Loading...</div>;
    return <WrappedComponent {...props} />;
  };
}
export default LoadingHOC;
