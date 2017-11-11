import * as parse5 from 'parse5';
import * as https from 'https';

let data: string = '';

https.get('https://tw.stock.yahoo.com/q/q?s=6180', (resp) => {

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        const documentFragment: any = parse5.
            parseFragment('<td></td>') as parse5.AST.Default.Document;
        // console.log(documentFragment);


        // const document: any = parse5.
        //     parse(data) as parse5.AST.Default.Document;
        // console.log(document.childNodes[1].nodeName); //> 'html'
    });

}).on("error", (err) => {
    console.log("Error: " + err.message);
});