var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bcrypt = require('bcrypt');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


var app = express();

var mongoose = require('mongoose');

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }))
//app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect("mongodb://localhost:27017/GyrAccDB" ,{ useNewUrlParser: true , useUnifiedTopology: true },(error) =>{
    if (!error){
        console.log("Success");
    }
    else{
        console.log("Error connecting to the database.")
    }
})

const TemperatureModel = mongoose.model("temperature",{
    DateTime: Date,
    Temperature: String
})

const UserModel = mongoose.model("user",{
    Firstname: String,
    Lastname: String,
    Email: String,
    Height: Number,
    Weight: Number,
    Age: Number,
    Dominant_Hand: String,
    Username: String,
    Password: String
});


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) =>{
    res.sendFile('/index.html' , { root: __dirname })
});

app.get('/session', (req,res) =>{
    res.sendFile('public/session.html' , { root: __dirname })
})

app.get('/register', (req,res) => {
    res.sendFile('public/register.html' , { root: __dirname })
})

app.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.pswd;
    console.log(password);
    UserModel.findOne({Username: username}, function (err,user) {
        if(user) {
            if (err) {
                res.json('Wrong Username');
            }
            bcrypt.compare(password, user.Password, function (err, result) {
                if (result && user) {
                    res.redirect('/session.html')
                } else {
                    res.json('Wrong Password');
                }
                if (err) {
                    res.redirect('/');
                }
            })
        }else{
            res.json('Wrong Username');
        }
    });
})

app.post('/register', async (req,res) => {
    try {
        let first = req.body.firstname;
        let last = req.body.lastname;
        let email = req.body.email;
        let height = req.body.height;
        let weight = req.body.weight;
        let age = req.body.age;
        let d_hand = req.body.dominant_hand;
        let username = req.body.username;
        const hashedpwd = await bcrypt.hash(req.body.pswd, 8);
        const data = {
            "Firstname": first,
            "Lastname": last,
            "Email": email,
            "Height": height,
            "Weight": weight,
            "Age": age,
            "Dominant_Hand": d_hand,
            "Username": username,
            "Password": hashedpwd
        }
        var user = new UserModel(data);
        UserModel.findOne({Username : username}, async function (err,obj){
            if(err){
                res.send('error');
            }
            if(obj){
                console.log('username taken');
                res.redirect('/register.html');
            }else{
                await user.save();
                res.redirect('/');
            }
        });

    }catch (e) {
        res.redirect('/register')
    }
})


app.post('/api', (req, res) => {
    var Temp = new TemperatureModel(req.body);
    Temp.save()
        .then(item => {
            res.json({message: "item saved to database"})
        }).catch(error => {
        res.status(400).send("error");
    })
})

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

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
