
var command = {
        "newLine":[],
        "brOnReturn":['insertBrOnReturn',false,true]
    }
;

function exec(cmd){
    return document.execCommand(...command[cmd]);
}

function init(){
    if(document.queryCommandSupported('insertBrOnReturn')){
        exec('brOnReturn');
    }
}

var CodeEditor = {
    init
}

module.exports = CodeEditor;