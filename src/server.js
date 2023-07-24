const app = require('./app');

const { db } = require('./database/config');

db.authenticate()

  .then(() => console.log('Database connected...👌'))
  .catch((err) => console.log(err));

db.sync()
  .then(() => console.log('dataBase synchronized...🙌'))
  .catch((err) => console.log(err));

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
