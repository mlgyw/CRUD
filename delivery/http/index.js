import Express from 'express'
import orders from './orders.js'

const app = Express();

app.use('/api/orders', orders)

export default app