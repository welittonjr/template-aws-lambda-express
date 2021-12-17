import { createServer, proxy } from 'aws-serverless-express';
import { Context, APIGatewayProxyEvent } from 'aws-lambda';
import boot from './src/boot';
const server = createServer(boot);

export const handler = (event: APIGatewayProxyEvent, context: Context) => {
  proxy(server, event, context);
}