import express from "express";
const app = express();

app.get("/", (request, response) => {
  response.send("Hello Kazhuthas!!");
});

app.listen(3000, () => {
  console.log("Listen on the port 3000...");
});
