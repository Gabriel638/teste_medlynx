const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(`/`, require(`./controller/pagina2Controller`));
app.use(`/`, require(`./controller/pagina1Controller`));

app.listen(5000, () => {
    console.log('Server is running at http://localhost:5000');
});

