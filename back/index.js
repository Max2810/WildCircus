const connection = require('./config/conf');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.post('/api/contact', (req, res) => {
  const formData = req.body
  connection.query('INSERT INTO contact (email, message) VALUES (?,?)', [formData.email, formData.message], (err, results) => {

    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de l'envoi du message");
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
