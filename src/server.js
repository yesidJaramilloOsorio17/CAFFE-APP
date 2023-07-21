const app = require("./app")

const { db } = require("./database/config")

db.authenticate()
/* `()=> console.log("Database connected...")` is an arrow function in JavaScript. It is a shorthand
syntax for defining a function. In this case, it is used as a callback function that will be
executed when the database connection is successfully established. */
.then(()=> console.log("Database connected...👌"))
.catch((err) => console.log(err));

db.sync()
.then(() => console.log("dataBase synchronized...🙌"))
.catch((err)=>console.log(err))

app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
  
  