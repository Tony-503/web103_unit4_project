
import React from "react";
import Sidebar from "./Sidebar";
import "./PCBuilder.css";

const processors = [
  {
    name: "Ryzen 9 7950X",
    brand: "AMD",
    price: 599,
    cores: 16,
    clock: 5.7,
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/AMD_Ryzen_9_7950X.png",
  },
  {
    name: "Core i9-13900K",
    brand: "Intel",
    price: 569,
    cores: 24,
    clock: 5.8,
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Intel_Core_i9_13900K.png",
  },
  {
    name: "Ryzen 7 7800X3D",
    brand: "AMD",
    price: 449,
    cores: 8,
    clock: 5.0,
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/AMD_Ryzen_9_7950X.png",
  },
  {
    name: "Core i7-13700K",
    brand: "Intel",
    price: 409,
    cores: 16,
    clock: 5.4,
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Intel_Core_i9_13900K.png",
  },
  {
    name: "Ryzen 5 7600X",
    brand: "AMD",
    price: 299,
    cores: 6,
    clock: 5.3,
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/AMD_Ryzen_9_7950X.png",
  },
  {
    name: "Core i5-13600K",
    brand: "Intel",
    price: 319,
    cores: 14,
    clock: 5.1,
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Intel_Core_i9_13900K.png",
  },
];




function ProcessorCard({ processor }) {
  return (
    <div className="processor-card">
      <div className="processor-image-box">
        <img
          src={processor.image}
          alt={processor.name}
          style={{ width: 80, height: 80, objectFit: "contain" }}
        />
      </div>
      <div className="processor-title-row">
        <span className="processor-title">{processor.brand}</span>
        <span className="processor-price">${processor.price}</span>
      </div>
      <div className="processor-specs-row">
        <span>{processor.cores} CORES</span>
        <span>{processor.clock} GHz</span>
      </div>
      <button className="processor-select-btn">SELECT</button>
    </div>
  );
}

import BuildSummary from "./BuildSummary";

export default function PCBuilder() {
  return (
    <div className="app-container" style={{ minHeight: '100vh', height: 'auto' }}>
      <Sidebar />
      <div className="main-content">
        <nav className="pc-nav">
          <div className="pc-title">PROCESSORS</div>
        </nav>
        <div className="pc-subtext">
          Select the core heart of your build from the latest CPUs.
        </div>
        <div className="product-grid">
          {processors.map((p, i) => (
            <ProcessorCard key={i} processor={p} />
          ))}
        </div>
      </div>
      <BuildSummary />
    </div>
  );
}
