let codeEditor = require('./codeEditor.vue');

codeEditor = codeEditor.default || codeEditor;

module.exports = {
    codeEditor,
    install:function(Vue){
        Vue.component('codeEditor',codeEditor)
    }
}