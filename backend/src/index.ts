import Fastify, { FastifyInstance } from 'fastify';
import cors from '@fastify/cors';
import { storeMessage, getEncyptedMessage } from './services/db';


const server: FastifyInstance = Fastify({
  logger: true
});

server.register(cors, { 
    origin: "*", 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  });

server.post<{
  Body: {
    storeInDb: {
      iv: string;
      blob: string;
    };
  };
}>('/encrypt', async (request, reply) => {
  const { iv, blob } = request.body.storeInDb;
  const id: string = await storeMessage(iv, blob);
  return reply.code(200).send({ id: id });
});

server.get<{
  Params: { id: string };
}>("/decrypt/:id", async (request, reply) => {
  const { id } = request.params;
  return reply.code(200).send ({ message: await getEncyptedMessage(id)});
})

const start = async () => {
  try {
    await server.listen({ port: 3000, host: '0.0.0.0' });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();