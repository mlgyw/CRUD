import Express from 'express'
import {router} from './orders.js'

const app = Express();

app.use(router)

export default app