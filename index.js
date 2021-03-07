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

let numberOfContacts = persons.length;
let info = [`phonebook has info for ${numberOfContacts} pepole`, new Date()];

app.get("/", (request, response) => {
 response.send("<h1>Hello World!</h1>");
});

app.get("/api/persons", (request, response) => {
 response.send(persons);
});

app.get("/info", (request, response) => {
 response.send(info);
});

const PORT = 3002;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
