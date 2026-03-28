import React from "react";

export default function RamSelector({ rams, loading, error, onSelect }) {
  return (
    <>
      <h3 style={{ textAlign: 'center', margin: '1rem 0 0.5rem 0' }}>RAMs</h3>
      <div className="product-grid">
        {loading && <div>Loading RAMs...</div>}
        {error && <div style={{ color: 'red' }}>{error}</div>}
        {!loading && !error && rams.map((r, i) => (
          <div key={i} className="processor-card">
            <div className="processor-image-box">
              <img src={r.image} alt={r.name} style={{ width: 80, height: 80, objectFit: "contain" }} />
            </div>
            <div className="processor-title-row">
              <span className="processor-title">{r.name}</span>
              <span className="processor-price">${r.price}</span>
            </div>
            <button className="processor-select-btn" onClick={() => onSelect(r)}>SELECT</button>
          </div>
        ))}
      </div>
    </>
  );
}
