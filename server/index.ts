import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { supabase } from './db/supabase.js'

dotenv.config()

const app = express()
const port = process.env.PORT
app.use(cors())


app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
})