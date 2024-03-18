const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());


app.get('/',(req,res)=>{
    res.write("Hello World");
    res.end();
})

let response={

};

app.get('/bfhl',(req,res)=>{
    let list=JSON.stringify(response);
    res.write(list);
    res.end();
})
// POST endpoint to handle the request
app.post('/bfhl', (req, res) => {
        // Extract data from the request
        const data = req.body.data;

        // Generate user_id
        const user_id = "john_doe_17091999"; // Change this with your actual user_id generation logic

        // Process the data
        const email = "john@xyz.com"; // Change this with the actual email
        const roll_number = "ABCD123"; // Change this with the actual roll number
        const odd_numbers = [];
        const even_numbers = [];
        const alphabets = [];

        // Loop through each element in the data array
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            if (typeof element === "string" && isNaN(element)) {
                alphabets.push(element.toUpperCase());
            } else if (!isNaN(element)) {
                if (parseInt(element) % 2 === 0) {
                    even_numbers.push(element);
                } else {
                    odd_numbers.push(element);
                }
            }
        }
        

        // Prepare and send the response
        response = {
            is_success: true,
            user_id: user_id,
            email: email,
            roll_number: roll_number,
            odd_numbers: odd_numbers,
            even_numbers: even_numbers,
            alphabets: alphabets
        };
        res.json(response);
});

// Start the server
app.listen(3000);