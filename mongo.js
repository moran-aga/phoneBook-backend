const mongoose = require("mongoose");

if (process.argv.length < 3) {
 console.log(
  "Please provide the password as an argument: node mongo.js <password>"
 );
 process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://fullstack:${password}@cluster0.idu9j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(url, {
 useNewUrlParser: true,
 useUnifiedTopology: true,
 useFindAndModify: false,
 useCreateIndex: true,
});

const contactSchema = new mongoose.Schema({
 name: String,
 number: String,
});

const Contact = mongoose.model("contact", contactSchema);

const contact = new Contact({
 name: "moran",
 number: "123546 ",
});

// contact.save().then((result) => {
//  console.log("contact saved!");
//  mongoose.connection.close();

Contact.find({}).then((result) => {
 result.forEach((contact) => {
  console.log(contact);
 });
 mongoose.connection.close();
});
