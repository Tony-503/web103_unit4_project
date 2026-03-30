import { useEffect, useState } from "react";
import "./BuildSummary.css";
import { createBuild } from "../services/PcsAPI";

export default function BuildSummary({ selectedParts }) {
  // Build a summary array from selectedParts object
  const summary = [];
  if (selectedParts.cpu) summary.push({ category: "CPU", ...selectedParts.cpu });
  if (selectedParts.gpu) summary.push({ category: "GPU", ...selectedParts.gpu });
  if (selectedParts.ram) summary.push({ category: "RAM", ...selectedParts.ram });
  if (selectedParts.storage) summary.push({ category: "STORAGE", ...selectedParts.storage });
  if (selectedParts.case) summary.push({ category: "CASE", ...selectedParts.case });

  const total = summary.reduce((sum, part) => sum + (part.price || 0), 0);
  const [buildName, setBuildName] = useState("My Build");


  
   
  


  // Submission state
  const [submitStatus, setSubmitStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitStatus("");
    try {
      // Prepare build data with only IDs and name
      const buildData = {
        name: buildName,
        cpu_id: selectedParts.cpu?.id || null,
        gpu_id: selectedParts.gpu?.id || null,
        ram_id: selectedParts.ram?.id || null,
        storage_id: selectedParts.storage?.id || null,
        case_id: selectedParts.case?.id || null
      };
      await createBuild(buildData);
      setSubmitStatus("Build submitted successfully!");
    } catch (err) {
      setSubmitStatus("Error submitting build. Please try again.");
    }
  }

  return (
    <aside className="right-summary">
      <form onSubmit={handleSubmit}>
        <div>
          <div className="summary-title">BUILD SUMMARY</div>
          <div className="summary-name-input">
            <label htmlFor="buildName">Build Name:</label>
            <input
              type="text"
              id="buildName"
              value={buildName}
              onChange={(e) => setBuildName(e.target.value)}
            />
          </div>
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
          <button className="summary-checkout" type="submit" disabled={summary.length === 0}>CHECKOUT</button>
          {submitStatus && <div className="submit-status">{submitStatus}</div>}
        </div>
      </form>
    </aside>
  );
}
