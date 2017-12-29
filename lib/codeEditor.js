var JS_KEYWORDS = {
    keyword: `in of for while finally var new do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as await static import from as`,
    literal: "true false null undefined NaN Infinity",
    built_in: `eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InterNalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DateView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise`
};

var command = {
    "formatBlock": ['formatBlock',false],
    "insertHTML" : ['insertHTML',true],
},
el = null,
focusOffset = 0,
code = ''
;

function exec(cmd,...arg){
    return document.execCommand(...command[cmd],...arg);
}

function init(container){
    el = container;
    if(!container.innerHTML) {
        container.focus();
        exec("insertHTML",'<pre><br></pre>');
    }
    bindEvent();
}

function bindEvent(){
    el.addEventListener('keyup',function(e){
        highlight(e);
    })
}

function highlight(){
    var text = el.innerText;
    // console.log(text);
    focusOffset = window.getSelection().focusOffset;
    // var range = 
    console.log(window.getSelection());
    for( var name in JS_KEYWORDS){
        JS_KEYWORDS[name].split(' ').forEach(function(item){
            var reg = new RegExp(` ?(${item}) `, "g");
            var i = text.search(reg);
            console.log(i);
        })
    }
    // console.log(text)
    // el.innerHTML = html;
}

var CodeEditor = {
    code,
    init,
}



module.exports = CodeEditor;
