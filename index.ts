import * as parse5 from 'parse5';

const document: any = parse5.
    parse('<!DOCTYPE html><html><head></head><body>Hi there!</body></html>') as parse5.AST.Default.Document;

console.log(document.childNodes[1].nodeName); //> 'html'