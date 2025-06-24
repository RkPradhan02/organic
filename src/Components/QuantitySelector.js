import React, { useState, useEffect } from "react";
import "./QuantitySelector.css"; // for styling

const QuantitySelector = ({ quantity, setQuantity, min = 0.5, max = 20 }) => {
  const handleDecrease = () => {
    const newQty = Math.max(quantity - 0.5, min);
    setQuantity(newQty);
  };

  const handleIncrease = () => {
    const newQty = Math.min(quantity + 0.5, max);
    setQuantity(newQty);
  };

  const handleInputChange = (e) => {
    let value = parseInt(e.target.value);
    if (isNaN(value)) value = min;
    if (value > max) value = max;
    if (value < min) value = min;
    setQuantity(value);
  };

  return (
    <div className="quantity">
      <button
        className="minus"
        aria-label="Decrease"
        onClick={handleDecrease}
        disabled={quantity <= min}
      >
        -
      </button>
      <input
        type="number"
        className="input-box"
        value={quantity}
        min={min}
        max={max}
        onChange={handleInputChange}
      />
      <button
        className="plus"
        aria-label="Increase"
        onClick={handleIncrease}
        disabled={quantity >= max}
      >
       +
      </button>
    </div>
  );
};

export default QuantitySelector;
