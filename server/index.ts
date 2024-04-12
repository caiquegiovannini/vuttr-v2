import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { supabase } from './db/supabase.js'

dotenv.config()

const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/api/tools', async (_, res) => {
    const { data, error, status } = await supabase
        .from('Tools')
        .select('*')

    if (error) {
        res.status(status)
        res.send({
            code: status,
            message: error.message,
        })
        throw new Error('Failed to fetch data')
    }

    res.json(data)
})

app.post('/api/tools', async (req, res) => {
    const { body } = req
    const { data, error, status } = await supabase
        .from('Tools')
        .insert(body)
        .select()
        .single()

    if (error) {
        res.status(status)
        res.send({
            code: status,
            message: error.message,
        })
        throw new Error('Failed to create tool')
    }

    res.status(201)
    res.json(data)
})

app.delete('/api/tools/:id', async (req, res) => {
    const { id } = req.params

    const { error, status } = await supabase
        .from('Tools')
        .delete()
        .eq('id', id)

    if (error) {
        res.status(status)
        res.send({
            code: status,
            message: error.message,
        })
        throw new Error(`Tool with id "${id}" not found`)
    }

    res
        .status(204)
        .send()
})

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
})