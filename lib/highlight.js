var JS_KEYWORDS = {
    keyword: `in of for while finally var new do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as await static import from as`,
    literal: "true false null undefined NaN Infinity",
    built_in: `eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InterNalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DateView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise`
};

var highlight = function(code, language) {
    return highlight.init(code, language);
};
highlight.init = function(code, language){
    return highlight.jsTemp(code)
}
highlight.use = function() {};

highlight.htmlTemp = function() {};

highlight.cssTemp = function() {};

highlight.jsTemp = function(value) {
    var source = value;
    for (var name in JS_KEYWORDS) {
        JS_KEYWORDS[name].split(" ").forEach(function(item) {
            var reg = new RegExp(` ?(${item}) `, "g");
            // console.log(reg)
            source = source.replace(
                reg,
                `<span class="highlight-${name}">$1</span>`
            );
        });
    }
    return source;
};

module.exports = highlight;
