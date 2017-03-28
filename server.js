const http 	 = require('http'), // Http for the moment use let's encrypt certificate later
	  express  	 = require('express'),
	  app      	 = express(),
	  mongoose 	 = require('mongoose'),
	  passport 	 = require('passport'),
	  morgan     = require('morgan'),
	  cookieParser = require('cookie-parser'),
	  bodyParser = require('body-parser'),
	  session    = require('express-session'),
	  path			 = require('path');

// MongoDB setup
mongoose.connect("mongodb://heroku_gfvkrw47:8o4868opmpueu9i8b2r9joj5qk@ds021182.mlab.com:21182/heroku_gfvkrw47");
mongoose.connection
 .on('error', (error) => { console.warn('Warning', error); });
mongoose.Promise = global.Promise;
require('./app/models/models.js');


// Middlewares
app.use(morgan('common'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.use(express.static(path.resolve(__dirname, 'static')));

app.use(session({ secret: process.env.SECRET || 'secret', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Routers
app.use('/', require('./app/routes/home.js'));
app.use('/repertoire', require('./app/routes/repertoire.js'));
app.use('/auth', require('./app/routes/auth.js'));

let secureServer = http.createServer(app).listen(process.env.PORT || 8080, () => {
	let addr = secureServer.address();
	console.log(`Server listening at http://0.0.0.0:${addr.port}`);
});
