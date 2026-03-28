import React from "react";

export default function GpuSelector({ gpus, loading, error, onSelect }) {
  return (
    <>
      <h3 style={{ textAlign: 'center', margin: '1rem 0 0.5rem 0' }}>GPUs</h3>
      <div className="product-grid">
        {loading && <div>Loading GPUs...</div>}
        {error && <div style={{ color: 'red' }}>{error}</div>}
        {!loading && !error && gpus.map((g, i) => (
          <div key={i} className="processor-card">
            <div className="processor-image-box">
              <img src={g.image} alt={g.name} style={{ width: 80, height: 80, objectFit: "contain" }} />
            </div>
            <div className="processor-title-row">
              <span className="processor-title">{g.name}</span>
              <span className="processor-price">${g.price}</span>
            </div>
            <button className="processor-select-btn" onClick={() => onSelect(g)}>SELECT</button>
          </div>
        ))}
      </div>
    </>
  );
}
