import React from "react";
import { FaSpinner } from "react-icons/fa";

const Spinner = () => {
  return (
    <div style={{ marginTop: "2rem" }} className="spinner-box">
      <FaSpinner className="spinner" />
    </div>
  );
};

export default Spinner;
