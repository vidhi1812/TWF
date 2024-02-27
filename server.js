const express = require('express');
const app = express();
const port = 3000;
const conversionRoute = require('./Routes/conversion-route'); // Fix the file path casing
app.use(express.json());
app.use('/api', conversionRoute);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});