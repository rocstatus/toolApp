<template>
    <div class="indexouter">
        <div class="indexHome" @click="pushSql">
          sql格式化
       </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{

            }
        },
        methods:{
            pushSql(){
                this.$router.push('/sql')
            }
        }


    }
    
</script>
<style>
.indexouter {
    position: relative;
}
.indexHome {
    margin: 250px auto;
    width: 150px;
    height: 200px;
    background-color: #3dee72;
    color: #fff;
    font-size: 25px;
    text-align: center;
    line-height: 200px;
    cursor: pointer;
    border-radius:10px ;
}
</style>