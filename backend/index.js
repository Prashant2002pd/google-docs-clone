const { Socket } = require("socket.io");
const mongoose = require("mongoose");
const Document = require("./models/index");
const dotenv = require("dotenv");
dotenv.config();

mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database connected");
  });

const io = require("socket.io")(3000, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("get-document", async (documentID) => {
    const document = await get_data(documentID);
    socket.join(documentID);
    socket.emit("load-document", document.data);
    socket.on("send-changes", (delta) => {
      socket.broadcast.to(documentID).emit("receive-changes", delta);
    });

    socket.on("save-document", async (data) => {
      await Document.findOneAndUpdate({ id: documentID }, { data });
    });
  });
});

async function get_data(id) {
  if (id == null) return;
  const document = await Document.findOne({ id });
  if (document) return document;
  return await Document.create({ id, data: "" });
}
