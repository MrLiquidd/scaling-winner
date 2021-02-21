const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const enterRouter = require("./routers/enterRouter.js");
const homeRouter = require("./routers/homeRouter.js");
const rusletsRouter = require("./routers/rusletsRouter");
const fonletsRouter = require("./routers/fonletsRouter");
const cors = require("cors");
testAPIRouter = require("./routers/testAPI");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use()
app.use("/enter", enterRouter);
app.use("/ruslets", rusletsRouter);
app.use("/fonlets", fonletsRouter);
app.use("/testAPI", testAPIRouter);
app.use("/", homeRouter);

app.use(cors());

app.use(function (req, res) {
    res.status(404).send("Not Found")});

//запуск node app.js (http://localhost:9000)
const { port } = require('./config');
app.listen(port, () => console.log(`App listening on http://localhost:${port}!`));
