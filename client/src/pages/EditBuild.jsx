import React from 'react'
import '../App.css'

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { fetchBuildById, fetchCPUs, fetchGPUs, fetchRAMs, fetchStorages, fetchCases, updateBuild } from '../services/PcsAPI';


const EditBuild = () => {
    const { id } = useParams();

    const [buildByID, setBuildByID] = useState({});
    const [form, setForm] = useState({ name: '', cpu_id: '', gpu_id: '', ram_id: '', storage_id: '', case_id: '' });
    const [cpus, setCpus] = useState([]);
    const [gpus, setGpus] = useState([]);
    const [rams, setRams] = useState([]);
    const [storages, setStorages] = useState([]);
    const [cases, setCases] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [submitMsg, setSubmitMsg] = useState('');

    useEffect(() => {
        async function fetchAll() {
            setLoading(true);
            try {
                const [build, cpus, gpus, rams, storages, cases] = await Promise.all([
                    fetchBuildById(id), fetchCPUs(), fetchGPUs(), fetchRAMs(), fetchStorages(), fetchCases()
                ]);
                setBuildByID(build);
                setForm({
                    name: build.name || '',
                    cpu_id: build.cpu_id || '',
                    gpu_id: build.gpu_id || '',
                    ram_id: build.ram_id || '',
                    storage_id: build.storage_id || '',
                    case_id: build.case_id || ''
                });
                setCpus(cpus);
                setGpus(gpus);
                setRams(rams);
                setStorages(storages);
                setCases(cases);
            } catch (err) {
                setError('Failed to load build or components');
            }
            setLoading(false);
        }
        fetchAll();
    }, [id]);

    function handleChange(e) {
        const { name, value } = e.target;
        setForm(f => ({ ...f, [name]: value }));
    }

    function sanitizeFormData(form) {
        // Convert empty strings to null, and IDs to integers or null
        return {
            name: form.name,
            cpu_id: form.cpu_id === '' ? null : parseInt(form.cpu_id),
            gpu_id: form.gpu_id === '' ? null : parseInt(form.gpu_id),
            ram_id: form.ram_id === '' ? null : parseInt(form.ram_id),
            storage_id: form.storage_id === '' ? null : parseInt(form.storage_id),
            case_id: form.case_id === '' ? null : parseInt(form.case_id)
        };
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setSubmitMsg('');
        try {
            const sanitized = sanitizeFormData(form);
            await updateBuild(id, sanitized);
            setSubmitMsg('Build updated successfully!');
        } catch (err) {
            setSubmitMsg('Failed to update build.');
        }
    }

    if (loading) return <div>Loading...</div>;
    if (error) return <div style={{color:'red'}}>{error}</div>;

    return (
        <div style={{maxWidth:600, margin:'40px auto', background:'#161B22', borderRadius:12, padding:32, color:'#fff'}}>
            <h2 style={{color:'#00FFC2', marginBottom:24}}>Edit Build</h2>
            <form onSubmit={handleSubmit}>
                <div style={{marginBottom:16}}>
                    <label>Name:<br/>
                        <input name="name" value={form.name} onChange={handleChange} style={{width:'100%', padding:8, borderRadius:6, border:'1px solid #007BFF'}} />
                    </label>
                </div>
                <div style={{marginBottom:16}}>
                    <label>CPU:<br/>
                        <select name="cpu_id" value={form.cpu_id} onChange={handleChange} style={{width:'100%', padding:8, borderRadius:6}}>
                            <option value="">Select CPU</option>
                            {cpus.map(cpu => <option key={cpu.id} value={cpu.id}>{cpu.name}</option>)}
                        </select>
                    </label>
                </div>
                <div style={{marginBottom:16}}>
                    <label>GPU:<br/>
                        <select name="gpu_id" value={form.gpu_id} onChange={handleChange} style={{width:'100%', padding:8, borderRadius:6}}>
                            <option value="">Select GPU</option>
                            {gpus.map(gpu => <option key={gpu.id} value={gpu.id}>{gpu.name}</option>)}
                        </select>
                    </label>
                </div>
                <div style={{marginBottom:16}}>
                    <label>RAM:<br/>
                        <select name="ram_id" value={form.ram_id} onChange={handleChange} style={{width:'100%', padding:8, borderRadius:6}}>
                            <option value="">Select RAM</option>
                            {rams.map(ram => <option key={ram.id} value={ram.id}>{ram.name}</option>)}
                        </select>
                    </label>
                </div>
                <div style={{marginBottom:16}}>
                    <label>Storage:<br/>
                        <select name="storage_id" value={form.storage_id} onChange={handleChange} style={{width:'100%', padding:8, borderRadius:6}}>
                            <option value="">Select Storage</option>
                            {storages.map(storage => <option key={storage.id} value={storage.id}>{storage.name}</option>)}
                        </select>
                    </label>
                </div>
                <div style={{marginBottom:16}}>
                    <label>Case:<br/>
                        <select name="case_id" value={form.case_id} onChange={handleChange} style={{width:'100%', padding:8, borderRadius:6}}>
                            <option value="">Select Case</option>
                            {cases.map(ca => <option key={ca.id} value={ca.id}>{ca.name}</option>)}
                        </select>
                    </label>
                </div>
                <button type="submit" style={{background:'#00FFC2', color:'#0D1117', fontWeight:700, border:'none', borderRadius:8, padding:'10px 32px', fontSize:'1.1rem', cursor:'pointer'}}>Update Build</button>
            </form>
            {submitMsg && <div style={{marginTop:16, color:'#00FFC2'}}>{submitMsg}</div>}
            <Link to="/builds" style={{display:'inline-block', marginTop:24, color:'#007BFF'}}>Back to Builds</Link>
        </div>
    );
}


export default EditBuild