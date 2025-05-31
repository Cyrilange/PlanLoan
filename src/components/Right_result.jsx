import React from "react";

const Right_result = ({ result }) => {
  return (
    <div className="right_side_used">
      <h2>Your results</h2>
      <p id="head-text">
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click “calculate repayments again.
      </p>
      <div className="container-price">
        <h3>Your monthly repayments</h3>
        <p id="sign-month">
          £<span id="month">{result.monthly}</span>
        </p>
        <div className="spacer" />
        <h3>Total you'll repay over the term</h3>
        <p>
          £<span id="total">{result.total}</span>
        </p>
      </div>
    </div>
  );
};

export default Right_result;
