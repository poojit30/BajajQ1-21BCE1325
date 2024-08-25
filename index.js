const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// POST endpoint
app.post('/bfhl', (req, res) => {
    const data = req.body.data;
    const user_id = 'your_name_ddmmyyyy';
    const email = 'your_email@college.com';
    const roll_number = 'your_roll_number';

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const highestLowercase = alphabets.filter(item => item === item.toLowerCase())
                                      .sort().reverse()[0] || '';

    res.json({
        is_success: true,
        user_id: user_id,
        email: email,
        roll_number: roll_number,
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : []
    });
});

// GET endpoint
app.get('/bfhl', (req, res) => {
    res.json({ operation_code: 1 });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
