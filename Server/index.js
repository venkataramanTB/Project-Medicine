const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    
};

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});