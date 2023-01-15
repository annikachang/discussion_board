const sqlite3 = require('sqlite3').verbose();
const session = require("express-session");
const flash = require("connect-flash");

const express = require("express");
  
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(session({
    secret: 'secret',
    cookie: { length: 60000 },
    resave: false,
    saveUninitialized: false
}));
app.use(flash());

const db = new sqlite3.Database('./db/Forum.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        return console.log(err.message);
    }
});

app.post('/', async (req, res) => {
    const text = [req.body.post];
    const sql = "INSERT INTO Discussion(postBody) VALUES(?)";
    db.run(sql, text, err => {
        if (err) {
            req.flash('message', 'Sorry, unable to post due to post body size. Please try again!');
            res.redirect('/');
        } else {
            res.redirect('/');
        }
    });
});

app.get('/', async (req, res) => {
    const sql = "SELECT * FROM Discussion ORDER BY postID DESC";
    db.all(sql, (err, rows) => {
        if (err) {
            console.log(err.message);
        }
        res.render('home', {data: rows, message: req.flash('message')});
    });
});
  
app.listen(3000, () => {
  console.log(`server is running ...`);
});




