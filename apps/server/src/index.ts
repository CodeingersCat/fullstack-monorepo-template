import Fastify, { FastifyInstance, FastifyServerOptions } from 'fastify';
import { add } from "./utils"

function routesInit(server: FastifyInstance) {
    server.get('/', (_req, res) => {
        res.send("Hello World!");
    });
    
    server.post('/echo', (req, res) => {
        const data = req.body as { message: string} ;
        const message = data.message ?? "The silence is deafening!";
        res.send(message);
    });

    server.post('/sum', (req, res) => {
        const {a, b} = req.body as { a: number, b: number};
        const ans = add(a, b);
        res.send(ans);
    })
}

export function getServer() : FastifyInstance {
    const serverOptions: FastifyServerOptions = {
        logger: true
    };
    const server = Fastify(serverOptions);
    routesInit(server);
    return server;
}

const start = async () => {
    const server = getServer();
    try {
        await server.listen({ port: 5000 });
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};

start();
