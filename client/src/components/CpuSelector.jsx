import React from "react";

export default function CpuSelector({ processors, loading, error, onSelect }) {
  return (
    <>
      <h3 style={{ textAlign: 'center', margin: '1rem 0 0.5rem 0' }}>CPUs</h3>
      <div className="product-grid">
        {loading && <div>Loading CPUs...</div>}
        {error && <div style={{ color: 'red' }}>{error}</div>}
        {!loading && !error && processors.map((p, i) => (
          <div key={i} className="processor-card">
            <div className="processor-image-box">
              <img src={p.image} alt={p.name} style={{ width: 80, height: 80, objectFit: "contain" }} />
            </div>
            <div className="processor-title-row">
              <span className="processor-title">{p.name}</span>
              <span className="processor-price">${p.price}</span>
            </div>
            {p.cores && (
              <div className="processor-specs-row">
                <span>{p.cores} CORES</span>
                <span>{p.clock} GHz</span>
              </div>
            )}
            <button className="processor-select-btn" onClick={() => onSelect(p)}>SELECT</button>
          </div>
        ))}
      </div>
    </>
  );
}
