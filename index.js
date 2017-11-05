"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var parse5 = require("parse5");
var document = parse5.
    parse('<!DOCTYPE html><html><head></head><body>Hi there!</body></html>');
console.log(document.childNodes[1].nodeName); //> 'html'
