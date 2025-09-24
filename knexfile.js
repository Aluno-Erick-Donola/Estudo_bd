import path from 'path'
import {  fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('fileName', __filename);
console.log('dirName', __dirname);

export default {
    development: {
        client: 'mysql2',
        connection: {
            host:process.env.DATABASE_HOST,
            port: process.env.DATABASE_PORT,
            user:process.env.DATABASE_USER,
            passassword: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_NAME
        },
        migrations: {
            directory: path.join(__dirname, 'src', 'database', 'migrations')
        },
        seeds: {
            directory: path.join(__dirname, 'src', 'database', 'seeds')
        },
    }
}