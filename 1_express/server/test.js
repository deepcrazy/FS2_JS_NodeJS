try {
    const port = 5003;                      // Set the port
    const express = require('express');     
    const app = express();                  // Use of express dependency

    app.get('/', (req, res) => {
        res.send('express.js dependency has been installed successfully..!!');  //  Human readable message to be sent to the browser
    });

    app.listen(port, () => {
        console.log('ok on ' + port);
    });
} catch (error) {
    console.log("Error occured: " + error);     //  Error handling
}