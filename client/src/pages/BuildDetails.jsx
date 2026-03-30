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
            <div className="build-details-components">
                <h3 className="build-details-components-title">Components</h3>
                <ul className="build-details-components-list">
                    {components.cpu && <div className="build-details-component-item">
                        <strong>CPU</strong>
                        <br />{components.cpu.name}<br />
                        <img src={components.cpu.image} alt={components.cpu.name} /></div>}


                    {components.gpu && <div className="build-details-component-item">
                        <strong>GPU</strong>
                        <br />{components.gpu.name}<br />
                        <img src={components.gpu.image} alt={components.gpu.name} /></div>}


                    {components.ram && <div className="build-details-component-item">
                        <strong>RAM</strong>
                        <br />{components.ram.name}<br />
                        <img src={components.ram.image} alt={components.ram.name} /></div>}


                    {components.storage && <div className="build-details-component-item">
                        <strong>Storage</strong>
                        <br />{components.storage.name}<br />
                        <img src={components.storage.image} alt={components.storage.name} /></div>}

                        
                    {components.case && <div className="build-details-component-item">
                        <strong>Case</strong>
                        <br />{components.case.name}<br />
                        <img src={components.case.image} alt={components.case.name} /></div>}
                </ul>
            </div>
            <Link to="/builds" className="build-details-back">Back to Builds</Link>
        </div>
    );
}

export default BuildDetails