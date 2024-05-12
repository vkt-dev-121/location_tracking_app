const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')

const LocationModel = require('./models/locationModel')
const LocationPresenter = require('./presentor/locationPresentor')

const app = express();
const port = 3000;

// Define a simple view object with a render function
const view = {
    render: (location) => {
        // Implement rendering logic here (e.g., updating the UI)
        console.log('Location updated:', location);
    }
};

const model = new LocationModel();
const presenter = new LocationPresenter(model, view);

// set view engine
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended :  true }))

app.get('/', (req,res) => {
    res.render('index', { location : model.getLocation() });
})

app.post('/location', (req,res) => {
    const { lat,lng } = req.body;
    presenter.setLocation(lat,lng);
    res.redirect('/')
})

app.listen(port, () => {
    console.log('server is running');
})