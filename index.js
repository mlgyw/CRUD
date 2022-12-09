//import * as dotenv from 'dotenv';
import Express  from 'express';
import { router } from './delivery/index.js';
import * as Sentry from "@sentry/node";
import * as Tracing from "@sentry/tracing";
//dotenv.config();
const port = 4000

const app = Express();


app.use(router)
 
Sentry.init({
  dsn: "https://fb84b2a3a1d9457a84be709d38a67039@o4504277450227712.ingest.sentry.io/4504299378573312",
  integrations: [
    new Sentry.Integrations.Http({ tracing: true }),
    new Tracing.Integrations.Express({ app }),
  ],

  tracesSampleRate: 1.0,
});

app.listen(port, ()=>{
  console.log(`Server running at http://localhost:${port}/`);
})