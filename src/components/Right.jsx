import React from "react";
import brand from "../assets/images/illustration-empty.svg";

const Right = () => {
  return (
    <div className="right_side">
      <img src={brand} alt="Empty illustration" width="300" height="200" />
      <h2>Results shown here</h2>
      <p>
        Complete the form and click “calculate repayments” to see what your
        monthly repayments would be.
      </p>
    </div>
  );
};

export default Right;
