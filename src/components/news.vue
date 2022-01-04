<template>
  <div class="box">
    <div class="container">
         <Daoh></Daoh>
    </div>
    <van-notice-bar mode="closeable" color="#1989fa" background="#ecf9ff" left-icon="info-o">
  可上拉刷新和下拉加载~
</van-notice-bar>
    <van-pull-refresh v-model="isLoading" :disabled="finished" @refresh="onRefresh"  success-text="刷新成功~~~">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="我也是有底线的~~~"
        @load="onLoad"
      >
   <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>

     <van-cell  v-for="(item,index) in artice" :key="index">
       <!-- <h2 v-show=" artice.length !=0 ">000</h2> -->
      <!-- 标题区域的插槽 -->
      <template #title>
        <!-- <daoh></daoh> -->
        <div class="title-box">
          <!-- 标题 -->
        <div>
         <a :href="item.url"> <div><span>{{item.title}}</span></div></a>
          <div class="textbox">{{item.description}}</div>
        </div>
          <!-- 单张图片 -->
          <img :src="item.picUrl" alt="" class="thumb">
        </div>
      </template>
      <!-- label 区域的插槽 -->
      <template #label>
        <div class="label-box">
          <span>{{item.source}} &nbsp;&nbsp; {{index}}评论 &nbsp;&nbsp; {{item.ctime}}</span>
          <!-- 关闭按钮 -->
          <van-icon name="cross" @click="iconsub(index)"/>
        </div>
      </template>
     </van-cell>
     <!-- //返回top -->
       <el-backtop :bottom="100">
        <div class="top">Top</div>
      </el-backtop>
     </van-list>
     </van-pull-refresh>
  </div>
</template>

<script>
import Daoh from '../views/daoh.vue'
  export default {
      data() {
        return {
         // 页码
          page: 1,
          // 获取的多少条数据
          limit: 10,
          // axios获取来的数据
          artice: [],

          rand:1,
              // 获取数据之前不需要加载
          loading: true,
          // 加载到头  //没有数据要改true
          finished: false,
          // 下拉刷新
          isLoading: false
        }
      },
      components:{
        Daoh
      },
      created(){
        this.initAxioa()
      },
      methods:{
     async initAxioa(inRefresh){
       const {data:res} = await this.axios.get("http://api.tianapi.com/internet/index?key=919846bbec334e6e79a885168dd8626b&num="+this.limit+"&page="+this.page+"&rand="+this.rand)
        // const {data:res} = await this.axios.get("http://api.tianapi.com/lunar/index?key="+this.key+"&data=2021-12-12")
         setTimeout(()=>{

           if(inRefresh){
             //下拉
             //旧数据拼接新数据
            this.artice = [...res.newslist,...this.artice]
              this.isLoading = false
           }else{
            //  上拉
            //新数据拼接新数据
             this.artice = [...this.artice,...res.newslist]
        // console.log(res);
             console.log( this.artice ," this.artice ");
             this.loading = false
           }
            if(this.page === 15){
              this.finished = true
            }
         },500)
       },
       //下拉加载
       onLoad () {
      this.page++
      this.initAxioa()
        console.log('下拉了')
      },
       iconsub(index){
         this.artice.splice(index,1)
       },
      //  上拉加载
       onRefresh(){
         //页码+1
          this.page++
          // // 调用axios
          this.initAxioa(true)
          console.log('上拉了')
       }
      }
  }
</script>

<style lang="less" scoped>
.top{
  height: 100%;
  width: 100%;
  background-color: #1989fa;
  font-size: 17px;
  box-shadow: 0 0 6px rgba(0,0,0, .12);
  text-align: center;
  line-height: 40px;
  border-radius: 30px;
  color: #f2f5f6;        
}
a{
  color: black;
}
.textbox{
  height: 25px;
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.container{
    padding: 40px 0 0px 0;
}
.nevxw{
  width: 100%;
  background: #3498db;
  height: 35px;
  line-height: 35px;
  font-size: 30px;
  text-align: center;
}
.label-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.thumb {
  // 矩形黄金比例：0.618
  width: 113px;
  height: 70px;
  background-color: #f8f8f8;
  object-fit: cover;
}

.title-box {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.thumb-box {
  display: flex;
  justify-content: space-between;
}
.box{
  min-width: 414px;
}
</style>