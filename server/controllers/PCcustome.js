import { pool } from '../config/database.js';



  
const createBuild = async (req, res) => {

    try {
        const { name, cpu_id, gpu_id, ram_id, storage_id, case_id } = req.body;

        // Get prices from DB
        const prices = await pool.query(
            `SELECT SUM(price) AS total FROM components 
             WHERE id = ANY($1::int[])`,
            [[cpu_id, gpu_id, ram_id, storage_id, case_id]]
        );

        const total_price = prices.rows[0].total;

        const result = await pool.query(
            `INSERT INTO pc_cust 
            (name, cpu_id, gpu_id, ram_id, storage_id, case_id, total_price) 
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING *`,
            [name, cpu_id, gpu_id, ram_id, storage_id, case_id, total_price]
        );

        res.json(result.rows[0]);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create build' });
    }
};

const getcpu = async (req, res) => {
    try {
        const result = await pool.query(
            "SELECT * FROM components WHERE LOWER(type) = 'cpu'"
        );

        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching CPU data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getgpu = async (req, res) => {
    try {
        const result = await pool.query(
            "SELECT * FROM components WHERE LOWER(type) = 'gpu'"
        );

        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching GPU data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


const getram = async (req, res) => {
    try {
        const result = await pool.query(
            "SELECT * FROM components WHERE LOWER(type) = 'ram'"
        );
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching RAM data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};



const getstorage = async (req, res) => {
    try {
        const result = await pool.query(
            "SELECT * FROM components WHERE LOWER(type) = 'storage'"
        );
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching STORAGE data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getcase = async (req, res) => {
    try {
        const result = await pool.query(
            "SELECT * FROM components WHERE LOWER(type) = 'case'"
        );
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching CASE data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }   
};


const getbuilds = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM pc_cust");
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching builds:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getbuildById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query("SELECT * FROM pc_cust WHERE id = $1", [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Build not found' });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error fetching build by ID:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const updateBuild = async (req, res) => {
    const { id } = req.params;
    const { name, cpu_id, gpu_id, ram_id, storage_id, case_id } = req.body;

    try {
        // Get prices from DB
        const prices = await pool.query(    
            `SELECT SUM(price) AS total FROM components 
             WHERE id = ANY($1::int[])`,
            [[cpu_id, gpu_id, ram_id, storage_id, case_id]]
        );
        const total_price = prices.rows[0].total;
        const result = await pool.query(
            `UPDATE pc_cust SET
            name = $1, cpu_id = $2, gpu_id = $3, ram_id = $4, storage_id = $5, case_id = $6, total_price = $7
            WHERE id = $8 RETURNING *`,
            [name, cpu_id, gpu_id, ram_id, storage_id, case_id, total_price, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Build not found' });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error updating build:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};  


const deleteBuild = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query("DELETE FROM pc_cust WHERE id = $1 RETURNING *", [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Build not found' });
        }   

        res.json({ message: 'Build deleted successfully' });
    } catch (error) {
        console.error('Error deleting build:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};






export { getcpu, getgpu, getram, getstorage, getcase, createBuild, getbuilds, getbuildById, updateBuild, deleteBuild };