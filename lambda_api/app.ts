import { createServer, proxy } from 'aws-serverless-express';
import boot from './src/boot';
const server = createServer(boot);

export const handler = (event: any, context: any) => {
  proxy(server, event, context);
}