import Fastify, { FastifyInstance } from 'fastify';
import cors from '@fastify/cors';


const server: FastifyInstance = Fastify({
  logger: true
});

server.register(cors, { 
    origin: "*", 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  });

server.post<{ Body: { message: string } }>('/encrypt', async (request, reply) => {
    return reply.code(200).send({ link: request.body.message });
});

const start = async () => {
  try {
    await server.listen({ port: 3000, host: '0.0.0.0' });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();