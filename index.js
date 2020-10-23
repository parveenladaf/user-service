const app = require("express")();
const MongoHelper = require('./mongo.helper');

require('dotenv').config();

dotenv.config();

MongoHelper.connect(process.env.MONGO_URI);


const { userController } = require("./src/controller");

app.get("/user/id", userController.findOne);
app.get("/users", userController.findAll);
app.post("/user/add", userController.save);
app.delete("/user/delete", userController.delete);
app.put("/user/update", userController.update);



const port = process.env.PORT || 8000;

if (process.env.APP_ENV == 'local') {
    app.listen(port, () => {
        console.log(`Server listening at port: ${port}`);
    });
}
