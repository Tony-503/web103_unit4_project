import React from 'react'
import '../App.css'
import './BuildDetails.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { fetchBuildById, fetchCPUs, fetchGPUs, fetchRAMs, fetchStorages, fetchCases } from '../services/PcsAPI';

const BuildDetails = () => {

    const { id } = useParams();

    const [buildByID , setBuildByID] = useState({});
    const [components, setComponents] = useState({ cpu: null, gpu: null, ram: null, storage: null, case: null });
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        async function fetchBuildAndComponents() {
            setLoading(true);
            try {
                const buildData = await fetchBuildById(id);
                setBuildByID(buildData);
                // Fetch all components in parallel
                const [cpus, gpus, rams, storages, cases] = await Promise.all([
                    fetchCPUs(), fetchGPUs(), fetchRAMs(), fetchStorages(), fetchCases()
                ]);
                setComponents({
                    cpu: cpus.find(c => c.id === buildData.cpu_id),
                    gpu: gpus.find(c => c.id === buildData.gpu_id),
                    ram: rams.find(c => c.id === buildData.ram_id),
                    storage: storages.find(c => c.id === buildData.storage_id),
                    case: cases.find(c => c.id === buildData.case_id)
                });
            } catch (err) {
                console.error('Error fetching build or components:', err);
            }
            setLoading(false);
        }
        fetchBuildAndComponents();
    }, [id]);



    if (loading) return <div>Loading...</div>;

        return (
                <div className="build-details-root">
                        <h2 className="build-details-title">Build Details</h2>
                        <div className="build-details-name">{buildByID.name}</div>
                        <div className="build-details-price">Total Price: ${buildByID.total_price?.toFixed(2) ?? 'N/A'}</div>

                        {/* Diagram-style PC builder UI */}
                        <div className="pc-diagram">
                            {/* CENTER CASE */}
                            <div className="case-center">
                                {components.case && (
                                    <img src={components.case.image} alt={components.case.name} />
                                )}
                            </div>

                            {/* CPU (TOP) */}
                            {components.cpu && (
                                <div className="part cpu">
                                    <div className="line vertical"></div>
                                    <img src={components.cpu.image} alt={components.cpu.name} />
                                    <strong>CPU</strong>
                                </div>
                            )}

                            {/* GPU (LEFT) */}
                            {components.gpu && (
                                <div className="part gpu">
                                    <div className="line horizontal"></div>
                                    <img src={components.gpu.image} alt={components.gpu.name} />
                                    <strong>GPU</strong>
                                </div>
                            )}

                            {/* RAM (RIGHT) */}
                            {components.ram && (
                                <div className="part ram">
                                    <div className="line horizontal"></div>
                                    <img src={components.ram.image} alt={components.ram.name} />
                                    <strong>RAM</strong>
                                </div>
                            )}

                            {/* STORAGE (BOTTOM) */}
                            {components.storage && (
                                <div className="part storage">
                                    <div className="line vertical"></div>
                                    <img src={components.storage.image} alt={components.storage.name} />
                                    <strong>STORAGE</strong>
                                </div>
                            )}
                        </div>

                        <Link to="/builds" className="build-details-back">Back to Builds</Link>
                </div>
        );
}

export default BuildDetails