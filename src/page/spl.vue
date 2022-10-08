<template>
    <div id="app">
      <div class="sql-box">
        <SqlEditor
          ref="sqleditor"
          :value="basicInfoForm.sqlMain"
          @changeTextarea="changeTextarea($event)"
        />
      </div>
     <div class="btnBuootm"> <button
          class="sql-btn"
          @click="formaterSql(basicInfoForm.sqlMain)"
          >格式化</button></div>
    </div>
  </template>
  
  <script>
  import sqlFormatter from "sql-formatter";
  import SqlEditor from "../components/SqlEditor";
  
  export default {
    name: "app",
    components: {
      SqlEditor,
    },
    data() {
      return {
        basicInfoForm: {
          sqlMain: "",
        },
      };
    },
    methods: {
      changeTextarea(val) {
        this.$set(this.basicInfoForm, "sqlMain", val);
      },
      formaterSql(val) {
        let dom = this.$refs.sqleditor;
        dom.editor.setValue(sqlFormatter.format(dom.editor.getValue()));
      },
    },
  };
  </script>
  
  <style>
  #app {
    color: #2c3e50;
    padding-top: 75px;
    display: flex;
    align-items: flex-start;
    justify-items: center;
    flex-direction: column;
    background:url('https://dss2.bdstatic.com/lfoZeXSm1A5BphGlnYG/skin/173.jpg?2') no-repeat 120% 100%;
    background-size:cover;
  }
  .sql-box{
    width:80%;
    margin:0 auto;
    border: 1px solid #ddd;
  }
  .sql-btn{
    width: 202px;
    color: #fff;
   height: 48px;
   background: linear-gradient(90deg, #27A4FB 0%, #47D5FF 100%);
   border-radius: 44px;
   cursor: pointer;
  }
  .btnBuootm {
    margin:0 auto;
    margin-top: 40px;
    text-align: center;
    margin-bottom: 40px;
  }
  </style>
  