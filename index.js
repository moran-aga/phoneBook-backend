const express = require("express");
const app = express();
app.use(express.json());

let persons = [
 {
  id: 1,
  name: "Moran",
  number: "0508947769",
 },
 {
  id: 2,
  name: "Dan",
  number: "050123456",
 },
 {
  id: 3,
  name: "mom",
  number: "050987654",
 },
];

app.get("/", (request, response) => {
 response.send("<h1>Hello World!</h1>");
});

app.get("/api/persons", (request, response) => {
 response.send(persons);
});

const PORT = 3002;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
