const express = require("express");
const rootRouter = require('./routes/index');
const app = express();
const cors = require('cors');

app.use(express.json()); // express.json()-> body-parser is part of this in new express
app.use(cors());

app.use('/api/v1', rootRouter);

const PORT = 3000;

app.use((err, req, res, next) => {  // error handling middleware 
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
