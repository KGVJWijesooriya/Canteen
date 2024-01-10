// const app = require('./app');
// const db = require('./config/db');
// const UserModel = require('./model/user_model');

// const port = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//   res.send("Hello Pemini")
// });

// db.connect()
//   .then(() => {
//     app.listen(port, () => {
//       console.log(`Server listening on port ${port}`);
//     });
//   })
//   .catch((err) => {
//     console.error('Error connecting to the database:', err);
//   });

const app = require('./app');
const db = require('./config/db');

const port = process.env.PORT || 3000;

// db.connect()
//   .then(() => {
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
//   })
//   .catch((err) => {
//     console.error('Error connecting to the database:', err);
//   });
