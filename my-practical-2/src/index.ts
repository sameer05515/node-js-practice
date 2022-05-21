import express, { Express, Request, Response, Router } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

const router:Router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server with router');
});

app.use(router);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});