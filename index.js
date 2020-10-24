const app = require("express")();
const MongoHelper = require('./mongo.helper');
const dotenv = require("dotenv");
var cors = require('cors')

require('dotenv').config();

dotenv.config();

const allowedOrigins = [
    "http://localhost:4200"

];

app.use(cors({
    origin: function (origin, callback) {
        // allow requests with no origin 
        // (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            var msg = "The CORS policy for this site does not " +
                "allow access from the specified Origin.";
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));
MongoHelper.connect(process.env.MONGO_URI);

app.use(require("body-parser").json());

const { userController } = require("./src/controller");

app.get("/users", userController.findAll);
app.post("/user/add", userController.save);
app.delete("/user/:id", userController.delete);
app.put("/user/:id", userController.update);


const port = process.env.PORT || 8000;

if (process.env.APP_ENV == 'local') {
    app.listen(port, () => {
        console.log(`Server listening at port: ${port}`);
    });
}
