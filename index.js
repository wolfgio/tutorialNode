import express from 'express';
import bodyParser from 'body-parser';

import { userController, returnUserNameController } from './src/controller/user';

const app = express()
const port = 3000

app.use(bodyParser.json());

app.get('/', (req, res) => userController(req, res))
app.post('/user-name', (req, res) => {
  returnUserNameController(req, res);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
