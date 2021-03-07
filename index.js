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

app.get("/api/persons/:id", (request, response) => {
 const id = Number(request.params.id);
 const person = persons.find((person) => person.id === id);
 if (person) {
  response.send(person);
 } else {
  response.status(404).send();
 }
});

app.get("/info", (request, response) => {
 response.send(info);
});

app.delete("/api/persons/:id", (request, response) => {
 const id = Number(request.params.id);
 //  notes = notes.filter((note) => note.id !== id);
 persons = persons.filter((person) => person.id !== id);
 response.status(204).send();
});

const PORT = 3002;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
