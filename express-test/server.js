const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.post('/api/courses', (req, res) => {

});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening to port ${port}`));