<template>
    <div class="code-editor-container">
        <div class="code-editor-line"></div>
        <div contenteditable="true" ref="container" class="code-editor-content" @keyup="editorCode"></div>
    </div>
</template>

<script>
import codeEditor from './lib/codeEditor';
// import highlight from './lib/highlight';
export default {
    props:[],
    mounted(){
        codeEditor.init(this.$refs.container);        
    },
    data(){
        return {
            codeHtml:''
        }
    },
    methods:{
        editorCode(e){
            // this.codeHtml = codeEditor(e.target.innerHTML);
            // console.log(this.codeHtml)
        }
    }, 
    watch:{
        codeHtml(value){
            // this.$refs.container.innerHTML = value;
        }
    },
    computed:{
        code(){
            return this.codeHtml;
        }
    },
};
</script>

<style>
.code-editor-container{
    width: 100%;
    background: #1e1e1e;
    color: #fff;
    box-sizing: border-box;
    position: relative;
    padding-left: 30px;
    font-size: 14px;
}
.code-editor-line{
    position: absolute;
    left: 0;
    top: 0;
    float: left;
    width: 30px;
    height: 100px;
    padding: 10px 0;
    box-sizing: border-box;
    text-align: right;
}
.code-editor-content{
    display: block;
    border: none;
    outline: none;
    background-color: transparent;
    padding: 0;
    color: #fff;
    height: 100px;
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    border-left: 1px solid #666;
}

.code-editor-content pre{
    margin: 0;
}
</style>


