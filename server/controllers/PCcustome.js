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



export { getcpu, getgpu, getram, getstorage, getcase, createBuild };