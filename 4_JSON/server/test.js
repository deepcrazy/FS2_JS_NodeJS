try {
    const http = require("http");
    const hostname = 'localhost';
    const port = 1080;
    const url = require('url');
    const fs = require('fs');

    dataArrayObj = { firstName: 'Deepanshu', lastName: 'Gupta', email: 'dg1.031292@gmail.com', address: 'MacDougall Drive, Brampton, ON', phone: '6476157865', verified: 'yes' };

    const server = http.createServer((req, res) => {
        var queryData = url.parse(req.url, true).query;   //  parse the URL data

        res.writeHead(200, {'Content-Type': 'application/json'});

        var returnValue = {};
        
        // Chcking whether the query data has valid key or not
        Object.keys(queryData).forEach(element => {
            returnValue[element] =  dataArrayObj[element];

            if (returnValue[element] === undefined){             
                wrongKeyMsg = element + " is not a valid key. Please enter a valid key in query data..!!";
                res.write(wrongKeyMsg);
            }
        });

        //  Check for if no value is passed in the url for query data.
        if (Object.keys(returnValue).length === 0) {
            returnValue = "";
            returnValue = "Please enter a valid key in the url";
        }    
        //  Text to be displayed
        res.write(JSON.stringify(returnValue));
        res.end();
    }).listen(port, () => {
        console.log('http://'+ hostname + ':' + port + '    ok');
    });

} catch (error) {
    console.log("Error occured: " + error);
}