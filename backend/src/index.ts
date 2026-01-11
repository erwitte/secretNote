import Fastify, { FastifyInstance } from 'fastify';
import cors from '@fastify/cors';
import { storeMessage } from './services/db';
import { decryptMessage } from './services/decrypt';


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
  Body: {
    data: {
      secretKey: string;
    }
  }
}>("/decrypt", async(request, reply) => {
  const { secretKey } = request.body.data;
  const { id } = request.params;
  const decryptedMessage = decryptMessage(secretKey, id);

  return reply.code(200).send ({ message: decryptMessage});
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