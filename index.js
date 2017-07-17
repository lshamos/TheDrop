const
  dotenv = require('dotenv').load(),
  express = require('express'),
  app = express(),
  morgan = require('morgan'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  cookieParser = require('cookie-parser'),
  passport = require('passport'),
<<<<<<< HEAD
  session = require('express-session'),
=======
  session= require ('express-session'),
>>>>>>> ecc1d054579c5248ed0eec90e4113a61e0323e73
  flash = require('flash'),
  port = 3000,
  User = require('./models/User.js'),
  Comment = require('./models/Comment.js'),
  SurfLocation = require('./models/SurfLocation.js'),
  weatherController = require('./controllers/weather.js')

mongoose.connect('mongodb://localhost/the-drop', (err) => {
  console.log(err || "Connected to MongoDB.")
})

<<<<<<< HEAD

app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());

=======
app.set('view engine', "ejs")
>>>>>>> ecc1d054579c5248ed0eec90e4113a61e0323e73



app.use(session({ secret: 'THE-DROP-PROJECT-3' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

require('./config/passport')(passport);
<<<<<<< HEAD

///
=======
>>>>>>> ecc1d054579c5248ed0eec90e4113a61e0323e73

app.get('/', weatherController.index)
app.get('/search/:searchTerm', weatherController.search)

app.listen(port, (err) => {
  console.log(err || `Server is running on ${port}`)
})
