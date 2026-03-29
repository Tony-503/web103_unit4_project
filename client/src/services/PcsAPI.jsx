// Fetch all builds
export async function fetchBuilds() {
  const res = await fetch(`${API_BASE}/builds`);
  if (!res.ok) throw new Error('Failed to fetch builds');
  return res.json();
}
// API service for PC components

const API_BASE = '/api';


export async function fetchCPUs() {
  const res = await fetch(`${API_BASE}/cpu`);
  if (!res.ok) throw new Error('Failed to fetch CPUs');
  return res.json();
}

export async function fetchGPUs() {
  const res = await fetch(`${API_BASE}/gpu`);
  if (!res.ok) throw new Error('Failed to fetch GPUs');
  return res.json();
}


export async function fetchRAMs() {
  const res = await fetch(`${API_BASE}/ram`);
  if (!res.ok) throw new Error('Failed to fetch RAMs');
  return res.json();
}


export async function fetchStorages() {
  const res = await fetch(`${API_BASE}/storage`);
  if (!res.ok) throw new Error('Failed to fetch STORAGE');
  return res.json();
}

export async function fetchCases() {
    const res = await fetch(`${API_BASE}/case`);
    if (!res.ok) throw new Error('Failed to fetch CASES');
    return res.json();
}


export async function createBuild(buildData) {
    const res = await fetch(`${API_BASE}/builds`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(buildData)
    });
    if (!res.ok) throw new Error('Failed to create build');
    return res.json();
}



export async function fetchBuildById(id) {
    const res = await fetch(`${API_BASE}/builds/${id}`);
    if (!res.ok) throw new Error('Failed to fetch build');
    return res.json();
}

