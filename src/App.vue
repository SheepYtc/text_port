<template>
  <div>
    <!-- <Calendar_t></Calendar_t> -->
   <div > <router-view></router-view></div>

    <!-- <Headtop></Headtop> -->
    <br><br><br>
    <tabbar></tabbar>
    <!-- <button @click="fasong">发送</button> -->
  </div>
</template>

<script>
import Calendar_t from './components/calendar_t.vue'
// import Headtop from "@/views/Headtop.vue"
import tabbar from './views/tabbar.vue'
  export default {
  components: { tabbar, Calendar_t },
    
    data() {
      return {
        key:'919846bbec334e6e79a885168dd8626b',
        itemList:[]
      }
    },
  // methods:{
  //  async fasong(){
  //    const {data:res} = await this.axios.get("http://api.tianapi.com/lunar/index?key="+this.key+"&data=2021-12-12")
  //     console.log(res);
  //  }
  // }
  }
</script>

<style lang="less">
*{
  margin: 0;
  padding: 0;
}

</style>  