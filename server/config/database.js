import pg from 'pg'

const config = {
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
    ssl:
        process.env.PGHOST && process.env.PGHOST.includes("render.com")
            ? { rejectUnauthorized: false }
            : undefined
}

export const pool = new pg.Pool(config)