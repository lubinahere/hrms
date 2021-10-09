var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var app = express();
const {v4} = require('uuid');

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var mysql = require('mysql2');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Lubina@123!@#',
  database: 'hrmsdb'
});
app.use('/', indexRouter);
app.use('/api/login', function (request, response) {
  var username = request.body.username;
  var password = request.body.password;
  if (username && password) {
    connection.query("SELECT * FROM accounts WHERE username = ? AND password = ?",
      [username, password], function (error, results, fields) {
        if (error) {
          console.log(error)
        } else if (results.length > 0) {
          // request.session.loggedin = true;
          // request.session.username = username;
          console.log("login success")
          // response.redirect('/home');
          response.send("Login success");
        } else {
          response.send('Incorrect Username and/or Password!');
        }
        response.end();
      });
  } else {
    response.send('Please enter Username and Password!');
    response.end();
  }
});
//connection.end;
app.use('/api/punch', function (request, response) {
  var punchTime = new Date();
  var type = request.body.type;
  var workUpdates = request.body.workUpdates;
  var uniqueId = v4();

  if (type == 'in') {
    connection.query
      ("INSERT INTO employee_activities (id,punchintime) VALUES (?,?)", [uniqueId,punchTime]);
      response.json({punchTime});
  }
  else {
    connection.query
      ("INSERT INTO employee_activities (id,punchouttime,workupdates) VALUES(?,?,?)", [uniqueId,punchTime, workUpdates]);
      response.json({punchTime});
      response.end();

  }
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  //res.render('error');
  next(err);
});

const port = 3001;

app.listen(port, function () {
  console.log(`Express app started on http://localhost:${port}`);
});

module.exports = app;
