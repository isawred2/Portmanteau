!function(a,b){function d(b){return e(a.querySelectorAll(b))}function e(a){return Array.prototype.slice.call(a)}function f(a,b,c){if(typeof Array.prototype.forEach=="function")return a.forEach(b);for(var d=0,e=a.length;d<e;d++)b.call(c||this,a[d],d,a)}function g(a,b){for(var c in b)b.hasOwnProperty(c)&&(a.style[c]=b[c])}function h(a){if(!a||!a.style)return;return a.style.position="relative",b.getComputedStyle(a).getPropertyValue("z-index")!=="auto"&&(a.style.zIndex=c),h(a.parentNode)}function i(){var b=a.createElement("div");return g(b,{position:"absolute",background:"#111",opacity:.95,zIndex:1e5,top:0,bottom:0,left:0,right:0}),a.body.appendChild(b)}function j(){var b=a.createElement("a");return b.href="#",b.innerHTML="close",g(b,{textDecoration:"none",color:"#FFF",position:"fixed",top:"10px",right:"10px",zIndex:100001}),a.body.appendChild(b)}function k(a){f(a,function(a){h(a),g(a,{zIndex:c,position:"absolute"})})}function l(a,b,c){a.parentNode.removeChild(a),b.parentNode.removeChild(b),f(c,function(a){a.style.position="static"})}"use strict";var c=2147483648,m=e(d("video"));if(m.length){k(m);var n=i(),o=j();o.addEventListener("click",function(a){a.preventDefault(),l(n,o,m)})}}(document,window);