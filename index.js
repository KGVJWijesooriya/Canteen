const app = require('./app');
const db = require('./config/db');
const UserModel = require('./model/user_model');

const port = process.env.PORT || 10000; // Use the provided PORT or default to 3000

app.get('/', (req, res) => {
    res.send("Hello Pemini")
});

db.connect() // Assuming this is how you connect to your database, adjust as needed
    .then(() => {
        app.listen(port, () => {
            console.log(`Server listening on port ${port}`);
        });
    })
    .catch((err) => {
        console.error('Error connecting to the database:', err);
    });
