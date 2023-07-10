import { httpServer } from './src/http_server/index.js';
import 'dotenv/config.js';
const HTTP_PORT = process.env.HTTP_PORT;
const WS_PORT = process.env.WS_PORT;
console.log(`Start static http server on the ${HTTP_PORT} port!`);
console.log(`Start websocket server on the ${WS_PORT} port!`);
httpServer.listen(HTTP_PORT);
