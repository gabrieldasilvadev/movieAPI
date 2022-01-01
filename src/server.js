import express from 'express';
import mongoose from 'mongoose';

import routes from './routes.js';
import connectToDatabase from './database.js';

connectToDatabase();

const app = express();
const PORT = 3000;

// GET: Buscar uma informação
// POST: Criar uma informação
// PUT: Editar uma informação por completo
// PATCH: Modificar apenas uma parte da informação
// DELETE: Deletar uma informação

app.use(routes);

app.listen(PORT,
  console.log(`⚡ Servidor iniciado: http://localhost:${PORT}`))
