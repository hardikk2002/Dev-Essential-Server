const bodyParser = require("body-parser");
const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

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
  res.send("Sahi ha biddu");
});

io.on("connection", (socket) => {
  // console.log("connection made successfully");
  socket.on("message", (payload) => {
    // console.log("Message received on server: ", payload);
    io.emit("message", payload);
  });
});

server.listen(process.env.PORT || 4000, () =>
  console.log(`Server has started on 4000.`)
);
