const express = require('express');
const routes = require('./routes');
const cors = require('cors'); //5.2k (gzipped:2.1k)
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * Rota /Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar/Listar uma informação do backend
  * POST: Criar uma informaçã do backend
  * PUT: Alterar uma informação do backend
  * DELETE: Deletar uma informação do backend
  * 
  */

  /**
   * Tipos de Parâmetros:
   * 
   * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
   * Route Params: Parâmetros utilizados para identificar recursos
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   */



app.listen(3333);
