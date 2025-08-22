import express from 'express'
const app = express()

import { PORT } from './config/env.js'

app.get('/', (req, res) => {
    res.send('Testing if port is working')
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})

export default app
