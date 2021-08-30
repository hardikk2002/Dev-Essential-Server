const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const Msg = require("./models/messages");

const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

const mongoDB = process.env.MONGO_URL;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", require("./routes/api"));
app.get("/", (req, res) => {
  res.send("Dev Essential's official @ server");
});

mongoose
  .connect(mongoDB, {
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongodb connected");
  })
  .catch((err) => console.log(err));

io.on("connection", (socket) => {
  Msg.find().then((response) => {
    socket.emit("DB-messages", response);
  });
  socket.on("message", (payload) => {
    const message = new Msg({
      name: payload.userName,
      message: payload.message,
    });
    message.save().then(() => {
      io.emit("message", payload);
    });
  });
});

server.listen(process.env.PORT || 4000, () =>
  console.log(`Server has started on 4000.`)
);
