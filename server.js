const http     = require('http'),
    https      = require('https'),
    express    = require('express'),
    app        = express(),
    mongoose   = require('mongoose'),
    passport   = require('passport'),
    morgan     = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    session    = require('express-session'),
    path       = require('path'),
    fs         = require('fs'),
    MongoStore = require('connect-mongo')(session);

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

app.use(session({ 
  secret: process.env.SECRET || 'secret', 
  resave: true,
  saveUninitialized: false,
  rolling: true,    // Reset the maxAge on every request
  cookie: {
    path: '/',
    httpOnly: true,
    secure: true,
    maxAge: 1000 * 10
  },
  store: new MongoStore({ mongooseConnection: mongoose.connection }) 
}));
app.use(passport.initialize());
app.use(passport.session());
require('./app/config/passport-init')(passport, app);

// Routers
app.use('/', require('./app/routes/home.js')(app));
app.use('/repertoire', require('./app/routes/repertoire.js')(app));
app.use('/auth', require('./app/routes/auth.js')(passport, app));
app.use('/security', require('./app/routes/security.js')(app));

let secureServer = https.createServer({
    key: fs.readFileSync('./app/config/privatekey.key', 'utf8'),
    cert: fs.readFileSync('./app/config/certificate.crt', 'utf8')
  },app).listen(process.env.SECURE_PORT || 8443, () => {

  let addr = secureServer.address();
  console.log(`Server listening at http://0.0.0.0:${addr.port}`);
});

// Redirect plain old boring http to https
let server = http.createServer(function(req, res){
  console.log(secureServer.address());
  let host = req.headers['host'].replace(/:\d+$/, ":"+secureServer.address().port);
  res.writeHead(301, { "Location": ['https://', host, req.url].join('') });
  res.end();
}).listen(process.env.PORT || 8080, () => {
  let addr = server.address();
  console.log(`Server listening at http://0.0.0.0:${addr.port}`);
});
