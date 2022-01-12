import express, { Request, Response } from 'express';
import next from 'next';
import compression from 'compression';
import helmet from 'helmet';
import { Health } from '../interfaces';

const host: string = process.env.PORT || 'http://localhost';
const port: number = parseInt(process.env.PORT || '3000', 10);
const environment: string = process.env.NODE_ENV || 'development';
const dev: boolean = environment !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

(async () => {
  try {
    //await db;
    await app.prepare();
    const server = express();
    server.use(helmet());
    server.use(compression());
    server.get('/health', (_req: Request, res: Response): void => {
      const health: Health = {
        message: 'OK',
        uptime: process.uptime(),
        timestamp: Date.now()
      };
      try {
        res.send(health);
      } catch (err) {
        health.message = String(err);
        res.status(503).send();
      }
    });
    server.all('*', (req: Request, res: Response): Promise<void> => {
      return handle(req, res);
    });
    server.listen(port, (err: (() => void) | void) => {
      if (err) throw err;
      console.log(`> Ready on ${host}:${port}`);
      console.log(`> Environment: ${environment}`);
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
