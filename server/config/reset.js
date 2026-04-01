import { pool } from './database.js';

const createBuildsTable = async () => {
    const dropTableQuery = `DROP TABLE IF EXISTS pc_cust;`;

    const createPcTable = `
        CREATE TABLE IF NOT EXISTS pc_cust (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100),
            cpu_id INTEGER,
            gpu_id INTEGER,
            ram_id INTEGER,
            storage_id INTEGER,
            case_id INTEGER,
            total_price INTEGER,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `;

    const createComponentsTable = `
        CREATE TABLE IF NOT EXISTS components (
            id SERIAL PRIMARY KEY,
            type VARCHAR(50),
            name VARCHAR(100),
            price INTEGER,
            image TEXT
        );
    `;

    try {
        await pool.query(dropTableQuery);
        await pool.query(createPcTable);
        await pool.query(createComponentsTable);


        // 👇 ADD THIS HERE (clears old data)
    //   await pool.query(`DELETE FROM components;`);

        // 👇 INSERT DATA HERE
        await pool.query(`
            INSERT INTO components (type, name, price, image)
            VALUES
            ('cpu', 'Intel i5', 200, 'https://m.media-amazon.com/images/I/61IgclF1FEL.jpg'),
            ('cpu', 'Intel i7', 300, 'https://tse1.mm.bing.net/th/id/OIP.5u-ov-quHGVtCYc90MLwYgHaHa?pid=Api&h=220&P=0'),
            ('cpu', 'Ryzen 5', 180, 'https://sp.yimg.com/ib/th?id=OPHS.9KHSq%2bO4y6VBCg474C474&o=5&pid=21.1&w=174&h=174'),
            ('cpu', 'Ryzen 7', 280, 'https://sp.yimg.com/ib/th?id=OPHS.8Px%2bQysfXqaHag474C474&o=5&pid=21.1&w=174&h=174'),

            ('gpu', 'RTX 4060', 400, 'https://sp.yimg.com/ib/th?id=OPHS.5oM18jpYUOfuyg474C474&o=5&pid=21.1&w=174&h=174'),
            ('gpu', 'RTX 4070', 600, 'https://sp.yimg.com/ib/th?id=OPHS.9%2ffgGjZCCcGHLg474C474&o=5&pid=21.1&w=174&h=174'),
            ('gpu', 'RX 7600', 350, 'https://sp.yimg.com/ib/th?id=OPHS.fbNGFsruGukB5Q474C474&o=5&pid=21.1&w=174&h=174'),

            ('ram', '8GB', 40, 'https://sp.yimg.com/ib/th?id=OPHS.EelpWHlDIWtvUQ474C474&o=5&pid=21.1&w=174&h=174'),
            ('ram', '16GB', 80, 'https://sp.yimg.com/ib/th?id=OPHS.YEi1nTAy8lA%2bxA474C474&o=5&pid=21.1&w=174&h=174'),
            ('ram', '32GB', 150, 'https://sp.yimg.com/ib/th?id=OPHS.RdLoAtHPOc5DRA474C474&o=5&pid=21.1&w=174&h=174'),

            ('storage', '512GB SSD', 50, 'https://tse3.mm.bing.net/th/id/OIP.nhdVF_XCpTBZqOEIc_Ze5AHaGq?pid=Api&h=220&P=0'),
            ('storage', '1TB SSD', 100, 'https://tse2.mm.bing.net/th/id/OIP.7XgqmuW-tu6GZQ099WuAdAHaFj?pid=Api&h=220&P=0'),

            ('case', 'Black Case', 70, 'https://tse3.mm.bing.net/th/id/OIP.Z9ki7fyjndwzcExMpaTEpwHaIN?pid=Api&h=220&P=0'),
            ('case', 'White RGB Case', 120, 'https://sp.yimg.com/ib/th?id=OPHS.3Ly1vAdLCz9ZEA474C474&o=5&pid=21.1&w=174&h=174');
        `);

        console.log('🎉 Tables + data inserted successfully');

    } catch (err) {
        console.error('⚠️ error creating tables', err);
    } finally {
    console.log("Database reset complete, connection closed.");
    process.exit(); // safer exit
}
};

createBuildsTable();