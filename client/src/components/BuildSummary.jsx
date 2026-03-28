import React from "react";
import "./BuildSummary.css";

const selectedParts = [
  { category: "PROCESSOR", name: "Intel Core i5-13600K", price: 319 },
  { category: "GPU", name: "NVIDIA RTX 4070", price: 599 },
  { category: "RAM", name: "32GB DDR5", price: 150 },
  { category: "STORAGE", name: "1TB NVMe SSD", price: 100 },
  { category: "CASE", name: "NZXT H510", price: 80 },
];

export default function BuildSummary() {
  const total = selectedParts.reduce((sum, part) => sum + part.price, 0);
  return (
    <aside className="right-summary">
      <div>
        <div className="summary-title">BUILD SUMMARY</div>
        <div className="summary-list">
          {selectedParts.map((part, idx) => (
            <div className="summary-item" key={idx}>
              <div className="summary-category">{part.category}</div>
              <div className="summary-row">
                <span className="summary-name">{part.name}</span>
                <span className="summary-price">${part.price}</span>
              </div>
              <button className="summary-remove">REMOVE</button>
            </div>
          ))}
        </div>
      </div>
      <div className="summary-footer">
        <div className="summary-total-label">ESTIMATED TOTAL</div>
        <div className="summary-total-price">${total}</div>
        <button className="summary-checkout">CHECKOUT CONFIGURATION</button>
      </div>
    </aside>
  );
}
