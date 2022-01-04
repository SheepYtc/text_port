<template>
  <div>
 <van-tabbar v-model="active" :route="true">
  <van-tabbar-item replace  to="/calendar_t" icon="calendar-o">日历</van-tabbar-item>
  <van-tabbar-item replace  to="/news" icon="hot-o">新闻</van-tabbar-item>
  <van-tabbar-item replace  to="/weather" icon="flower-o">天气</van-tabbar-item>
   <van-tabbar-item replace  to="/joke"  icon="smile-o">笑话</van-tabbar-item>

</van-tabbar>
  </div>
</template>

<script>
  export default {
    data() {
      return {
         active: 0,
      }
    },
  }
</script>

<style lang="less" scoped>

</style>