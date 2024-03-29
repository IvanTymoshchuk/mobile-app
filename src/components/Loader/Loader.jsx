import React from "react";
import { ThreeDots } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ThreeDots
        height={80}
        width={80}
        radius={9}
        color="rgba(183, 173, 238, 0.36)"
        ariaLabel="three-dots-loading"
      />
    </div>
  );
};

export default Loader;