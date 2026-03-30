import React, { useEffect, useState } from 'react';
import '../App.css';
import './BuildsCard.css';
import { Link } from 'react-router-dom';
import { fetchBuilds, fetchCPUs, fetchGPUs, fetchRAMs, fetchStorages, fetchCases } from '../services/PcsAPI';

const ViewBuilds = () => {

    const [builds, setBuilds] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [components, setComponents] = useState({ cpus: [], gpus: [], rams: [], storages: [], cases: [] });


    useEffect(() => {
        async function fetchAll() {
            try {
                const [buildsData, cpus, gpus, rams, storages, cases] = await Promise.all([
                    fetchBuilds(),
                    fetchCPUs(),
                    fetchGPUs(),
                    fetchRAMs(),
                    fetchStorages(),
                    fetchCases()
                ]);
                setBuilds(buildsData);
                setComponents({ cpus, gpus, rams, storages, cases });
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        }
        fetchAll();
    }, []);

    if (loading) return <div>Loading builds...</div>;
    if (error) return <div>Error: {error}</div>;

    // Helper to get component name by id
    function getComponentName(type, id) {
        const arr = components && components[type];
        if (!Array.isArray(arr)) return id;
        const found = arr.find(c => c.id === id);
        return found ? found.name : id;
    }

    return (
        <> 
        <div className="builds-card-root">
            <h2 className="builds-card-title">All PC Builds</h2>
            {builds.length === 0 ? (
                <p style={{color:'#fff'}}>No builds found.</p>
            ) : (
                <ul className="builds-card-list">
                    {builds.map((build) => (
                        <li key={build.id || build._id} className="builds-card-item">
                            <strong>{build.name}</strong>
                            
                            <div className="builds-card-price">Price: ${build.total_price?.toFixed(2) ?? 'N/A'}</div>
                            <div className="builds-card-components-label">Components:</div>
                            
                            <ul className="builds-card-components-list">
                                <li>CPU: <span>{getComponentName('cpus', build.cpu_id)}</span></li>
                                <li>GPU: <span>{getComponentName('gpus', build.gpu_id)}</span></li>
                                <li>RAM: <span>{getComponentName('rams', build.ram_id)}</span></li>
                                <li>Storage: <span>{getComponentName('storages', build.storage_id)}</span></li>
                                <li>Case: <span>{getComponentName('cases', build.case_id)}</span></li>
                               <div>
                                 <Link to={`/builds/${build.id || build._id}`}>View Details</Link>
                                    <br />
                                <Link to={`/customBuilds/${build.id || build._id}`}>Edit Build</Link>
                               </div>
                                
                            </ul>
                            
                        </li>
                      
                    ))}
                </ul>
                
            )}
            
        </div>
       
        </>
    );
};

export default ViewBuilds;