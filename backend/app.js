import express from 'express';
const app = express ();
app.use(express.json());
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
 console.log(`Server Listening on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send({ status: `running on port ${PORT}` });
});