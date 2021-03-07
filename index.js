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

function generateId(min, max) {
 min = Math.ceil(min);
 max = Math.floor(max);
 return Math.floor(Math.random() * (max - min) + min);
}

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
 persons = persons.filter((person) => person.id !== id);
 response.status(204).send();
});

app.post("/api/persons", (request, response) => {
 const body = request.body;

 let person = {
  id: generateId(3, 250),
  name: body.name,
  number: body.number,
 };

 const personName = persons.find((person) => person.name === body.name);
 if (personName) {
  return response.status(400).json({
   error: "name must be unique",
  });
 }
 if (!body.name || !body.number) {
  return response.status(400).json({
   error: "missing contact detalis",
  });
 }
 persons = persons.concat(person);
 response.send(person);
});

const PORT = 3002;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
