!function(a){function b(a){return Array.prototype.slice.call(a)}function c(c){return b(a.querySelectorAll(c))}function d(a,b,c){if(typeof Array.prototype.forEach=="function")return a.forEach(b);for(var d=0,e=a.length;d<e;d++)b.call(c||this,a[d],d,a)}function e(a){return a.parentNode.removeChild(a)}"use strict",d(c("style").concat(c('link[rel="stylesheet"]')),e)}(document);