import dotenv from 'dotenv'

dotenv.config()

console.log('test')

export const nodePort = process.env.NODE_PORT
export const database = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    databaseName: process.env.DATABASE_NAME,
}