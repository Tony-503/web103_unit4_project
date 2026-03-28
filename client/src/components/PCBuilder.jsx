// GPUCard component for displaying GPUs
function GPUCard(props) {
  return (
    <div className="processor-card">
      <div className="processor-image-box">
        <img
          src={props.image}
          alt={props.name}
          style={{ width: 80, height: 80, objectFit: "contain" }}
        />
      </div>
      <div className="processor-title-row">
        <span className="processor-title">{props.name}</span>
        <span className="processor-price">${props.price}</span>
      </div>
      <button className="processor-select-btn" onClick={props.onSelect}>SELECT</button>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import CpuSelector from "./CpuSelector";
import GpuSelector from "./GpuSelector";
import RamSelector from "./RamSelector";
import "./PCBuilder.css";

import { fetchCPUs, fetchGPUs, fetchRAMs } from "../services/PcsAPI";





function ProcessorCard( props) {
  return (
    <div className="processor-card">
      <div className="processor-image-box">
        <img
          src={props.image}
          alt={props.name}
          style={{ width: 80, height: 80, objectFit: "contain" }}
        />
      </div>
      <div className="processor-title-row">
        <span className="processor-title">{props.name}</span>
        <span className="processor-price">${props.price}</span>
      </div>
      <div className="processor-specs-row">
        <span>{props.cores} CORES</span>
        <span>{props.clock} GHz</span>
      </div>
     <button className="processor-select-btn" onClick={props.onSelect}>SELECT</button>
    </div>
  );
}



import BuildSummary from "./BuildSummary";
import { use } from "react";

export default function PCBuilder() {
  const [processors, setProcessors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentSection, setCurrentSection] = useState('cpu');

  const [gpus, setGpus] = useState([]);
  const [loadingGpu, setLoadingGpu] = useState(true);
  const [errorGpu, setErrorGpu] = useState(null);

  const [rams, setRams] = useState([]);
  const [loadingRam, setLoadingRam] = useState(true);
  const [errorRam, setErrorRam] = useState(null);



  const [selectedParts, setSelectedParts] = useState({
    cpu: null,
    gpu: null,
    ram: null,
    storage: null,
    case: null,
  });


  const handleSelectCpu = (cpu) => {
    setSelectedParts(prev => ({ ...prev, cpu }));
  };

  const handleSelectGpu = (gpu) => {
  setSelectedParts(prev => ({ ...prev, gpu }));
};

  const handleSelectRam = (ram) => {
  setSelectedParts(prev => ({ ...prev, ram }));
};

  useEffect(() => {
    fetchCPUs()
      .then(data => {
        setProcessors(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load CPUs');
        setLoading(false);
      });
  }, []);

  useEffect(() => {
  fetchGPUs()
    .then(data => {
      setGpus(data);
      setLoadingGpu(false);
    })
    .catch(err => {
      setErrorGpu('Failed to load GPUs');
      setLoadingGpu(false);
    });
}, []);

  useEffect(() => {
  fetchRAMs()
    .then(data => {
      setRams(data);
      setLoadingRam(false);
    })
    .catch(err => {
      setErrorRam('Failed to load RAMs');
      setLoadingRam(false);
    });
}, []);

  return (
    <div className="app-container" style={{ minHeight: '100vh', height: 'auto' }}>
      <Sidebar currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <div className="main-content">
        {/* Navigation is now handled by Sidebar */}
        {currentSection === 'cpu' && (
          <CpuSelector
            processors={processors}
            loading={loading}
            error={error}
            onSelect={handleSelectCpu}
          />
        )}

        {currentSection === 'gpu' && (
          
          <GpuSelector
            gpus={gpus}
            loading={loadingGpu}
            error={errorGpu}
            onSelect={handleSelectGpu}
          />
        )}

        {currentSection === 'ram' && (
          
          <RamSelector
            rams={rams}
            loading={loadingRam}
            error={errorRam}
            onSelect={handleSelectRam}
          />
        )}
      </div>
      <BuildSummary selectedParts={selectedParts} />
    </div>
  );
}

