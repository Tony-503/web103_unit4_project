import { pool } from '../config/database.js';



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


export { getcpu, getgpu, getram };