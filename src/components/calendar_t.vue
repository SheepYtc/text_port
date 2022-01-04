<template>
  <div>
     <van-calendar
     color="#4E6EF2"
      title="日历"
      :poppable="false"
      :show-confirm="false"
      :style="{ height: '450px' }"
      safe-area-inset-bottom
      @select="selectdate"
    /> 
    <!-- <van-divider /> -->
    <el-card 
    class="box-card" 
    shadow="hover" 
    v-for="(item,index) in dateList" :key="index"
    >
    <div class="text item">
      <div class="xndate">
         <div class="year">新历：{{item.gregoriandate}}</div>
         <div class="year">农历：{{item.lunardate}}</div>
      </div>
    <div class="ymdbox">
      <div class="daybox">{{selecday}}</div>
    <div class="lunarbox">
      <div>
          <el-tooltip class="item" effect="dark" content="农历月和农历日" placement="top">
            <div>{{item.lubarmonth}} {{item.lunarday}}</div>
          </el-tooltip>
            <el-tooltip class="item" effect="dark" content="天干地支年和生肖" placement="top">
              <div>{{item.tiangandizhiyear}}年 {{item.shengxiao}}</div>
            </el-tooltip>
              <el-tooltip class="item" effect="dark" content="冲煞" placement="top">
          <div>{{item.chongsha}}</div>
              </el-tooltip>
      </div>
        <div class="seconddiv">
           <el-tooltip class="item" effect="dark" content="星宿" placement="top">
              <div>{{item.xingsu}}</div>
           </el-tooltip>
             <div>五行：{{item.wuxingjiazi}}</div>
             <el-tooltip class="item" effect="dark" content="五行" placement="top">
              <div>{{item.wuxingnayear}} {{item.wuxingnamonth}}</div>
             </el-tooltip>

       </div>
    </div>
    </div>
      <div class="yibox">
        <span class="yi">宜</span>
        <span class="span1">
          {{item.fitness}}
          </span>
      </div>
      <div class="jibox">
        <span class="ji">忌</span>
        <span class="span1"> {{item.taboo}}</span>
      </div>
    </div>
</el-card>
  </div>
</template>


<script>
import moment from "moment"
  export default {
       data() {
        return {
         key:'919846bbec334e6e79a885168dd8626b',
         dateList:{},
         currentdate:'',
         selecday:''
        };
     },
     created(){
       this.selectdate()
     },
     methods:{
    async selectdate(date){
      this.currentdate = moment(date).format("YYYY-MM-DD")
      this.selecday = moment(date).format("DD")
      console.log(this.selecday,"this.selecday");
      console.log(this.currentdate);
      const  {data:res} = await this.axios.get("http://api.tianapi.com/lunar/index?key="+this.key+"&date="+this.currentdate)
        console.log(res,"RSE");
        if(res.code === 200){
          // console.log(res.newslist,"666");
          this.dateList = res.newslist
          console.log(this.dateList,"666");

         }
     
     }
  }
  }
</script>

<style lang="less" scoped>
.ymdbox{
    display: flex;
    // flex: 2;
    .lunarbox{
      display: flex;
      justify-content: flex-end;
      width: 250px;
      // flex: 1;
      // flex-direction: column-reverse;
      margin: 8px 0 0 25px;
      font-size: 17px;
      .seconddiv{
        margin-left: 25px;
      }
    }

}
.span1{
  font-size: 17px;
  // margin-left: 10px;
  // margin: 0 10px;
  // margin-left: 10px;
}
.yi,.ji{
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    // margin: 0 auto;
    font-style: normal;
    font-size: 24px;
    color: #fff;
    margin: 10px 20px 10px 28px;
   
}
.jibox,.yibox{
  margin-top: 10px;
  
}
.daybox{
    width: 80px;
    height: 80px;
    text-align: center;
    // margin: 0 auto;
    line-height: 80px;
    font-size: 50px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 12px;
} 
.xndate{
   display: flex;
     .year{
      margin-bottom: 10px;
      line-height: 30px;
      font-size: 18px;
      width: 200px;
      // border: 1px solid rebeccapurple;
      // margin-top: -30px;
      text-align: center;
      // margin: 0 auto;
  

  }
}

   .text {
    font-size: 14px;
    color: aliceblue;
  }
  .el-card__body{
    padding: 10px;
  }
  .box-card {
    width: 100%;
    // overflow-y: hidden;
    // height: 310px;
    // margin-bottom: 10px;
    background-color: #4E6EF2;
    // background: rgba(0, 0, 0, .5);
  

  } 
    @media screen and (max-width: 500px){
          .box-card {
            width: 413px;
          }
    }
</style>