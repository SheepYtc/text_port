<template>
  <div class="box">
  <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="搜索多少条笑话"
        autofocus='true'
        shape="round"
        @search="setjoke"
      />
</form> 
    <van-collapse v-model="activeName" accordion v-for="(item,index) in itemlist.newslist" :key="index">
    <van-collapse-item  :title="item.title" name="1">
      {{item.content}}
    </van-collapse-item>
  </van-collapse>
    <van-pagination
    v-model="currentPage"
    :total-items="1000"
    :show-page-size="5"
    force-ellipses
    @change="next"
  />
  </div>  
</template>

<script>
  export default {
      data() {
        return {
          value: "",
           activeName: '1',
          // musicquery:''
          itemlist:[],
           currentPage: 1,
           num:4
        }
      },
      created(){
        // this.num = 
        this.setjoke(this.num)
      },
      methods:{
        setjoke(val){
          console.log(val);
          // http://api.tianapi.com/joke/index?key=APIKEY&num=10
        this.num = val
        // 919846bbec334e6e79a885168dd8626b
          // this.num = this.value 7016191965d046cecc9b7dd50a423cdd
          this.axios.get("http://api.tianapi.com/joke/index?key=919846bbec334e6e79a885168dd8626b&num="+this.num ).then(({data:res})=>{
              // console.log(res);
            this.itemlist = res
            console.log(this.itemlist,"this.itemlist");
          })
          this.value = ''
        },
        next(){
          this.setjoke(this.num)
        }
      }
  }
</script>

<style lang="less" scoped>
  .van-pagination{
    margin-bottom: 80px;
  }
</style>