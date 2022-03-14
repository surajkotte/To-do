const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: true });
app.use(express.json());
mongoose
  .connect(
    "mongodburl"
  )
  .then(console.log("database connectes"))
  .catch((err) => {
    console.log(err);
  });

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const todo = new mongoose.model("ToDo", todoSchema);

app.use(cors());
app.listen(3000, () => {
  console.log("Listening to server 3000");
});
app.get("/data", async (req, res) => {
  const todos = await todo.find();
  res.json(todos);
});

app.post("/todo/new",urlencodedParser, async (req, res) => {
  console.log(req.body);
  const todoitem = new todo({

      title:req.body.text.title,
      description:req.body.text.description
  })

  todoitem.save();

  res.json(todo);
});

app.get("/todo/delete/:id",async(req,res)=>{
  console.log(req.params.id)
  const result = await todo.findByIdAndDelete(req.params.id);
  console.log(result)
  res.json(result)
})
