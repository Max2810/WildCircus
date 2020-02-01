const connection = require('./config/conf');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 8000;

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.post('/api/contact', (req, res) => {
  const formData = req.body
  console.log(formData)
  connection.query('INSERT INTO contact (email, message) VALUES (?,?)', [formData.email, formData.message], (err, results) => {

    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de l'envoi du message");
    } else {
      res.sendStatus(200);
    }
  });
});


app.post('/api/reservation', (req, res) => {
  const formData = req.body
  console.log(formData)
  connection.query('INSERT INTO reservation (email, nbticket, date) VALUES (?,?,?)', [formData.email, formData.nbticket, formData.date], (err, results) => {

    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la reservation");
    } else {
      res.sendStatus(200);
    }
  });
});




app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
	}
	console.log(`Server is listening on ${port}`);
});
