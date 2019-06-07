const http = require('http');
const usduahJSON = '{"ccy":"USD","base_ccy":"UAH","buy":"26.35000","sale":"26.75000"}';
const usduah = JSON.parse(usduahJSON);

console.log(usduah);

const port = 30000;
const address = '127.0.0.1';

let counter = 0;
setInterval(() => {
    counter++;
}, 100);

const server = http.createServer((req, res) => {
    if (req.method == 'GET') {
    // res.write(`<html><body><p>Hola hombre. <br> Counter = ${counter}<p></body></html>`)

    //     res.end();
        if (req.url === '/') {
            res.write(`<html><body><p>Hola hombre. <br> Counter = ${counter}<p></body></html>`)
            res.end();
        } else if (req.url === '/currency/usd-uah') {
            res.write(`<html><body><p>${usduah.buy}<p></body></html>`)
            res.end();
        } else if (req.url === '/admin') {
         res.write(`<html><body><p>Hola, Boss<p></body></html>`)
        res.end();
        } else {
            res.write(`<html><body><p>Don\`t panik. Page just can not be found<p></body></html>`)
            res.end();
        }
    }

    if (req.method === 'POST') {
        console.log("Posted");
        let body = '';
        req.on('data', chunk =>{
            body += chunk.toString();
        });
        req.on('end', () => {
//            console.log(typeof body);
            JSON.parse(body).students.forEach( student => {
                console.log(student);
                
            });

 //           console.log(body);
            res.end('ok');
        });
        
        //res.end();
    }
});

server.listen(port, address, () => {
    console.log(`Server started on ${address}:${port}`);
    
});

