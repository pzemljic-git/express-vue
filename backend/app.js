import express from 'express';
import cors from 'cors';

const app = express ();
app.use(express.json());
const PORT = process.env.PORT || 4000;

app.use(cors());

app.listen(PORT, () => {
 console.log(`Server Listening on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send({ status: `running on port ${PORT}` });
});