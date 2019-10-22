try {
    const port = 5003;
    const express = require('express');
    const app = express();

    app.get('/', (req, res) => {
        res.send('express.js dependency has been installed successfully..!!')
    });

    app.listen(port, () => {
        console.log('ok on ' + port);
    });
} catch (error) {
    console.log("Error occured: " + error);
}