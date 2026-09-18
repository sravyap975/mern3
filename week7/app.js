const express = require('express');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Register',
        error: null,
        user: null
    });
});

app.post('/register', (req, res) => {
    const { username, age } = req.body;

    let errorMessage = null;

    if (!username || username.length < 3) {
        errorMessage = 'Username must be 3+ characters';
    } else if (!age || isNaN(age) || age < 18) {
        errorMessage = 'Age must be 18+';
    }

    if (errorMessage) {
        res.render('index', {
            title: 'Registration Failed',
            error: errorMessage,
            user: null
        });
    } else {
        res.render('index', {
            title: 'Registration Successful',
            error: null,
            user: username
        });
    }
});

app.listen(port, () => {
    console.log(`Server: http://localhost:${port}`);
});