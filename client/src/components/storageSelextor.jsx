import React from "react";

export default function StorageSelector({ storages, loading, error, onSelect }) {
  return (
    <>
      <h3 style={{ textAlign: 'center', margin: '1rem 0 0.5rem 0' }}>Storages</h3>
      <div className="product-grid">
        {loading && <div>Loading Storages...</div>}
        {error && <div style={{ color: 'red' }}>{error}</div>}
        {!loading && !error && storages.map((s, i) => (
          <div key={i} className="processor-card">
            <div className="processor-image-box">
              <img src={s.image} alt={s.name} style={{ width: 80, height: 80, objectFit: "contain" }} />
            </div>
            <div className="processor-title-row">
              <span className="processor-title">{s.name}</span>
              <span className="processor-price">${s.price}</span>
            </div>
            <button className="processor-select-btn" onClick={() => onSelect(s)}>SELECT</button>
          </div>
        ))}
      </div>
    </>
  );
}