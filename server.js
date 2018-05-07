const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');


const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'))

//  Express HBS
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {
    //res.send('Hola Fer')

    res.render('home', {
        nombre: 'fer'

    });

})


app.get('/about', (req, res) => {
    //res.send('Hola Fer')

    res.render('about', {
        nombre: 'Fer'

    });

})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
})