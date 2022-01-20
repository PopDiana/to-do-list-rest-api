import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import listRoutes from './list/list.routes';
import itemRoutes from './item/item.routes';
import addErrorHandlers from './addErrorHandlers';

mongoose.connect(
    'mongodb://localhost/todolistDB',
    { useNewUrlParser: true }
  );


const app = express();

/* Enhance app to parse JSON request bodies */
app.use(bodyParser.json());

/* Enhance app to allow requests coming from other applications (React/Angular), not only direct callers like Postman */
app.use(cors());

listRoutes(app);
itemRoutes(app);

addErrorHandlers(app);

const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}!`));