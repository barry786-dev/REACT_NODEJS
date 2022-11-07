let express = require('express');
let app = express();

let cors = require('cors');
app.use(cors());

let router = express.Router();

router.get('/', (req, res) => {
  const data = [
    {
      id: 1,
      name: 'John',
      age: 24,
    },
    {
      id: 2,
      name: 'Peter',
      age: 34,
    },
    {
      id: 3,
      name: 'Mathew',
      age: 44,
    },
  ];
  res.send(data);
});

app.use('/api', router);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
