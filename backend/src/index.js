const express = require('express');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
app.use(express.json());
app.use('/task', taskRoutes);

app.listen(3000, () => console.log('Online na porta 3000'));
