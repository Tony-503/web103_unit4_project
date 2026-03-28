import React from "react";
import "./BuildSummary.css";

export default function BuildSummary({ selectedParts }) {
  // Build a summary array from selectedParts object
  const summary = [];
  if (selectedParts.cpu) summary.push({ category: "CPU", ...selectedParts.cpu });
  if (selectedParts.gpu) summary.push({ category: "GPU", ...selectedParts.gpu });
  if (selectedParts.ram) summary.push({ category: "RAM", ...selectedParts.ram });
  if (selectedParts.storage) summary.push({ category: "STORAGE", ...selectedParts.storage });
  if (selectedParts.case) summary.push({ category: "CASE", ...selectedParts.case });

  const total = summary.reduce((sum, part) => sum + (part.price || 0), 0);
  return (
    <aside className="right-summary">
      <div>
        <div className="summary-title">BUILD SUMMARY</div>
        <div className="summary-list">
          {summary.length === 0 && <div className="summary-item">No parts selected yet.</div>}
          {summary.map((part, idx) => (
            <div className="summary-item" key={idx}>
              <div className="summary-category">{part.category}</div>
              <div className="summary-row">
                <span className="summary-name">{part.name}</span>
                <span className="summary-price">${part.price}</span>
              </div>
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
