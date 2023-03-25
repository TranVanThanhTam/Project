var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');
var barButtonsRouter = require('./routes/barButtons');
var logoCommonsRouter = require('./routes/logoCommons');
var logoWCommonsRouter = require('./routes/logoWCommons');
var featureCommonsRouter = require('./routes/featureCommons');
var featureWCommonsRouter = require('./routes/featureWCommons');
var infoFootersRouter = require('./routes/infoFooters');
var logoFooterCommonsRouter = require('./routes/logoFooterCommons');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Add CORS here
app.use(
  cors({
    origin: '*',
  }),
);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/barbuttons', barButtonsRouter);
app.use('/logocommons', logoCommonsRouter);
app.use('/logowcommons', logoWCommonsRouter);
app.use('/featurecommons', featureCommonsRouter);
app.use('/featureWcommons', featureWCommonsRouter);
app.use('/infofooters', infoFootersRouter);
app.use('/logofootercommons', logoFooterCommonsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
