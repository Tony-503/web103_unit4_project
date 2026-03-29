import React from "react";

export default function CaseSelector({ cases, loading, error, onSelect }) {
  return (
    <>
      <h3 style={{ textAlign: 'center', margin: '1rem 0 0.5rem 0' }}>Cases</h3>
      <div className="product-grid">
        {loading && <div>Loading Cases...</div>}
        {error && <div style={{ color: 'red' }}>{error}</div>}
        {!loading && !error && cases.map((c, i) => (
          <div key={i} className="processor-card">
            <div className="processor-image-box">
              <img src={c.image} alt={c.name} style={{ width: 80, height: 80, objectFit: "contain" }} />
            </div>
            <div className="processor-title-row">
              <span className="processor-title">{c.name}</span>
              <span className="processor-price">${c.price}</span>
            </div>
            <button className="processor-select-btn" onClick={() => onSelect(c)}>SELECT</button>
          </div>
        ))}
      </div>
    </>
  );
}