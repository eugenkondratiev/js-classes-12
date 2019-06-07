const fs = require('fs');

exports.doubleLog = (data, LR= false) => {
    const newRow = LR ? "\n" : "";
    const message = data + newRow;
    console.log( message);
    
    fs.appendFile('conversation-log.txt', message, err => {
        if (err) throw "File writing error";


    });
}

