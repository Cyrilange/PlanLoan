import { useState } from "react";

const Left = ({ setIsCalculated, setResult }) => {
  const [amount, setAmount] = useState("");
  const [years, setYears] = useState("");
  const [rate, setRate] = useState("");
  const [mortgageType, setMortgageType] = useState("Repayment");

  const handleClear = () => {
    window.location.reload();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const loan = parseFloat(amount);
    const duration = parseInt(years);
    const interestRate = parseFloat(rate);

    if (isNaN(loan) || isNaN(duration) || isNaN(interestRate)) return;

    const months = duration * 12;
    const monthlyRate = interestRate / 100 / 12;

    let monthlyPayment;
    let totalPayment;
    let totalInterest;

    if (mortgageType === "Repayment") {
      monthlyPayment =
        (loan * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
      totalPayment = monthlyPayment * months;
      totalInterest = totalPayment;
    } else if (mortgageType === "Interest Only") {
      monthlyPayment = loan * monthlyRate;
      totalPayment = monthlyPayment * months;
      totalInterest = 12 * duration * monthlyPayment - loan;
    }

    console.log("loan:", loan);
    console.log("duration (years):", duration);
    console.log("interestRate (%):", interestRate);
    console.log("months:", months);
    console.log("monthlyRate:", monthlyRate);
    console.log("mortgageType:", mortgageType);
    console.log("monthlyPayment:", monthlyPayment);
    console.log("totalPayment:", totalPayment);
    console.log("totalInterest:", totalInterest);

    setResult({
      monthly: monthlyPayment.toFixed(2),
      total: totalPayment.toFixed(2),
      interest: totalInterest.toFixed(2),
      type: mortgageType,
    });

    setIsCalculated(true);
  };

  return (
    <form className="left_side" onSubmit={handleSubmit}>
      <div className="title">
        <h1>Mortgage Calculator</h1>
        <p id="clear" onClick={handleClear} style={{ cursor: "pointer" }}>
          Clear All
        </p>
      </div>
      <div className="morgtag-container">
        <div className="amount-container">
          <label>Mortgage Amount</label>
          <div className="input-group">
            <span className="currency-symbol">£</span>
            <input
              id="amount-id"
              type="number"
              placeholder="300"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="calcul-container">
          <label>Mortgage Amount</label>
          <div className="row">
            <div className="input-group">
              <input
                className="amount-calc"
                type="number"
                placeholder="25"
                value={years}
                onChange={(e) => setYears(e.target.value)}
                required
              />
              <span className="symbol">years</span>
            </div>
            <div className="input-group">
              <input
                className="amount-calc"
                type="number"
                placeholder="5.25"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                required
              />
              <span className="symbol">%</span>
            </div>
          </div>
        </div>

        <div className="type-container">
          <label id="lab">Mortgage Type</label>

          <label className="lradio">
            <input
              type="radio"
              name="mortgageType"
              value="Repayment"
              checked={mortgageType === "Repayment"}
              onChange={(e) => setMortgageType(e.target.value)}
            />
            <span>Repayment</span>
          </label>

          <label className="lradio">
            <input
              type="radio"
              name="mortgageType"
              value="Interest Only"
              checked={mortgageType === "Interest Only"}
              onChange={(e) => setMortgageType(e.target.value)}
            />
            <span>Interest Only</span>
          </label>
        </div>
        <button type="submit">🧮 Calculate Repayments</button>
      </div>
    </form>
  );
};

export default Left;
