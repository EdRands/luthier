"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rot13 = function (str) { return (str.replace(/[a-z]/gi, function (c) { return (String.fromCharCode(c.charCodeAt(0) + (c.toUpperCase() <= 'M' ? 13 : -13))); })); };
exports.rot13 = rot13;
