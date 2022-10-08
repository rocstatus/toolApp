<template>
    <div id="apps">
      <p class="sqltitle">sql格式化工具</p>
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
  #apps {
    color: #2c3e50;
    display: flex;
    align-items: flex-start;
    justify-items: center;
    flex-direction: column;
    background-size:cover;
  }
  .sqltitle {
    font-size: 25px;
    text-align: center;
    width: 100%;
    color: #fff;
    margin: 20px 0;
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
  