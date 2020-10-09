const express = require("express");
const helmet = require("helmet");
const dbFun = require("./dbAccessFunctions.js");

const server = express();
server.use(helmet());
server.use(express.json());

server.get("/api/recipes/", (req, res) => {
  dbFun
    .getRecipes()
    .then((dbRes) => {
      res.status(200).json(dbRes);
    })
    .catch((dbErr) => {
      res.status(500).json(dbErr);
    });
});

server.get("/api/recipes/:id/shoppingList", (req, res) => {
    dbFun.getShoppingList(req.params.id)
    .then((dbRes) => {
        res.status(200).json(dbRes);
      })
      .catch((dbErr) => {
        res.status(500).json(dbErr);
      });
});

server.get("/api/recipes/:id/instructions", (req, res) => {
    dbFun.getInstructions(req.params.id)
    .then((dbRes) => {
        res.status(200).json(dbRes);
      })
      .catch((dbErr) => {
        res.status(500).json(dbErr);
      });
})

server.get("/", (req, res) => {
  res.status(200).json({ hello: "Hello World" });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`API running on port ${PORT}`));
