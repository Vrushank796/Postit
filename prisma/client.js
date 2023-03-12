import { PrismaClient } from '@prisma/client';

//get prisma client,if does not exist create new one.
const client = globalThis.prisma || new PrismaClient();

//if not in production environment, set the prisma client in global environment
if (process.env.NODE_ENV !== 'production') globalThis.prisma = client;

export default client;
