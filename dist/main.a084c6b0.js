parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var n=document.querySelector("#html"),r=document.querySelector("#style"),a="\n /*大家好，我是一个前端程序猿\n 接下来，\n 我要开始画一个太极了\n 首先准备一个div\n */\n    #div1 {\n        border: 1px solid red;\n        width: 200px;\n        height: 200px;\n    }\n /* 把div变成一个圆 \n 背景渐变\n 左右阴阳\n */\n    #div1 {\n        border-radius: 50%;\n        box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);\n        border: none;\n        background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 49%,\n                rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 100%);\n    }\n /*开始制作阴阳眼\n */\n    #div1::before {\n        content: '';\n        display: block;\n        background-color: #fff;\n        width: 100px;\n        height: 100px;\n        position: relative;\n        top: 0;\n        left: 50%;\n        transform: translateX(-50%);\n        border-radius: 50%;\n        background: radial-gradient(circle, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 25%, rgba(255, 255, 255, 1) 25%, rgba(255, 255, 255, 1) 100%);\n    }\n\n    #div1::after {\n        display: block;\n        content: '';\n        background-color: #000;\n        width: 100px;\n        height: 100px;\n        position: relative;\n        top: 0;\n        left: 50%;\n        transform: translateX(-50%);\n        border-radius: 50%;\n        background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 25%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 100%);\n    }\n    /*让太极旋转起来*/\n    #div1{\n        animation: xuanzhuan 3s linear infinite;\n    }\n",e=0,i="",o=function o(){setTimeout(function(){"\n"===a[e]?i+="<br>":" "===a[e]?i+="&nbsp;":i+=a[e],n.innerHTML=i,r.innerHTML=a.substring(0,e),window.scrollTo(0,9999),n.scrollTo(0,99999),e+1<a.length&&(e+=1,o())},20)};o();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.a084c6b0.js.map