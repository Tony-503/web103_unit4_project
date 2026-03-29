import React, { useEffect, useState } from 'react';
import '../App.css';
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
        const arr = components[type];
        const found = arr.find(c => c.id === id);
        return found ? found.name : id;
    }

    return (
        <div>
            <h2>All PC Builds</h2>
            {builds.length === 0 ? (
                <p>No builds found.</p>
            ) : (
                <ul>
                    {builds.map((build) => (
                        <li key={build.id || build._id}>
                            <strong>{build.name}</strong>
                            <div>Price: ${build.total_price?.toFixed(2) ?? 'N/A'}</div>
                            <div>Components:</div>
                            <ul>
                                <li>CPU: {getComponentName('cpus', build.cpu_id)}</li>
                                <li>GPU: {getComponentName('gpus', build.gpu_id)}</li>
                                <li>RAM: {getComponentName('rams', build.ram_id)}</li>
                                <li>Storage: {getComponentName('storages', build.storage_id)}</li>
                                <li>Case: {getComponentName('cases', build.case_id)}</li>
                            </ul>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ViewBuilds;