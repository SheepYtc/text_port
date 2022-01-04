<template>
<div class="box">
    <div class="search_form">
      <div class="form_group"> 
       <el-select v-model="value"  @change="inselect" filterable placeholder="请选择">
            <el-option
            v-for="item in cities"
            :key="item.value"
            :label="item.label"
            :value="item.label"
            >
            <span style="float: left">{{ item.label }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
            </el-option>
        </el-select>
      <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="搜索城市查询天气"
        autofocus='true'
        shape="round"
        @search="onSearch"
      />
        </form>  
      </div>
      <van-notice-bar
    left-icon="volume-o"
    speed=80
     :text="ganmao"/>
    </div>
    <ul class="weather_list" >
      <li class="libox" v-for="(item,index) in weatherList.future" :key="index" >
       <el-card class="box-card" shadow="hover">
        <div class="info_type">
          <span class="iconfont">{{ item.weather }}</span>
          <img class="img" v-if="item.weather == '阴转多云' || item.weather == '多云' || item.weather == '多云转晴' " src="../img/w1.png" alt="">
          <img class="img" v-else-if="item.weather == '晴'" src="../img/w0.png" alt="">
          <img class="img" v-else src="../img/w2.png" alt="">
          </div>
        
          <div class="info_date"><span>{{ item.date }}</span></div>
          <div class="city">{{weatherList.city}}</div>
          <div class="info_temp">
            <div class="testbox">
             <div class="test">当前温度：{{weatherList.realtime.temperature}}℃</div>
             <div class="test">当前湿度：{{weatherList.realtime.humidity}}</div>
            </div>
          <div class="testbox">
              <div class="test">风力：{{weatherList.realtime.power}}</div>
            <div class="test test1">最低温/最高温：{{ item.temperature }}</div>
          </div>
            <div class="testbox">
            <div class="test">天气情况：{{item.weather}}</div>
            <div class="test">风向：{{ item.direct }}</div>
            </div>
            <div class="test">空气质量指数：{{weatherList.realtime.aqi}}
              <van-tag round type="success" v-if="weatherList.realtime.aqi <= 50">优</van-tag>
              <van-tag round type="warning " v-else-if="weatherList.realtime.aqi <= 100">良</van-tag>
              <van-tag round type="danger " v-else>差</van-tag>

            </div>
        </div>
     
       </el-card>
      </li>
      
    </ul>
   
  </div>


</template>

<script>
  export default {
      data() {
          return {
         value:'北海',
         chengshi:"",
         ganmao:"",
         weatherList:{},
         itmelist:[],
          cities: [{
          value: 'Beihai',
          label: '北海'
        }, 
        {
          value: 'Shenzhen',
          label: '深圳'
        }, {
          value: 'Guangzhou',
          label: '广州'
        },{
          value: 'Shanghai',
          label: '上海'
        }, {
          value: 'Beijing',
          label: '北京'
        }, {
          value: 'Guilin',
          label: '桂林'
        }, 
        ],
          }
      },
      created(){
          this.onSearch()
          
      },
    methods:{
        inselect(){
           this.onSearch()     
        
        },
         onSearch(val){
        this.axios.get("/api?city="+this.value+"&key=918bb601823ffbdc9d999a9f0482717b").then(({data:{result:res}}) => {
          this.weatherList = res
          // this.chengshi = res.city
         console.log(this.weatherList ,"this.weatherList ");
         console.log(res);
              
        })
         this.axios.get('http://wthrcdn.etouch.cn/weather_mini?city='+this.value).then(({data:{data:response}})=>{
             console.log(response);
              // this.itmelist = res
              this.ganmao = response.ganmao
              // this.weatherList = [...this.weatherList,...res.forecast]
              // console.log(this.weatherList,"this.itmelist");
          })
        
            // this.axios.get('http://wthrcdn.etouch.cn/weather_mini?city='+this.value)
          
           
         }
    }
  }
</script>

<style lang="less" scoped>
.city,.info_date{
  font-weight: 600;
}

.el-select {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    box-sizing: border-box;
    padding: 0px 5px;
    background-color: #fff;
}
.form_group{
    display: flex;
}
.van-search{
    width: 310px;
}

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }




.el-card{
 border: 1px solid #3498db;
 height: 100%;
  // width: 400px;
}
.weather_list{
    display: flex;
    flex-wrap: wrap;
    // justify-content: center;
    // align-items: center;
    width: 100%;
    // height:230px;
    // text-align:center;
    // margin-top:20px;
    // font-size:0px;
    .libox{
      width: 400px;
      // margin: 5px 0;
    }
}
.iconfont{
  font-size: 30px;
}
.van-tag{
  margin-left: 10px;
  text-align: center;
   width: 15px;

}
.weather_list li{
     
    //  flex: 1;
    // display: flex;
    // display:inline-block;
    width:240px;
    height:270px;
    padding:5px 10px;
    // margin: 0 5px;
    // overflow: hidden;
    // position: relative;
    // background:url('../img/line.png') right center no-repeat;
    // background-size: 1px 130px;

     div{
    // display: -webkit-box;
    // display: -webkit-flex;
    display: flex;
    // -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    // -webkit-box-pack: start;
    // -webkit-justify-content: flex-start;
    justify-content: center;
    font-size: 0.38554rem;
    }
    .test{
      // width: 100px;
       margin: 5px 10px;

    }
    .test1{
      font-size: 15px;
    }
}

 
.weather_list li:last-child{
    background:none;
}


.info_date{
  
    width:100%;
    height:35px;
    line-height:40px;
    color:#333;
    font-size:17px;
    // left:0px;    
    // bottom:0px;    
     margin-top: -15px;
}
.info_date b{
    float: left;
    margin-left:15px;
}

.info_type{
      // width: 350px;
      display: flex;
      color:#3498db;
      // font-size:20px;
      // line-height:20px;
    // justify-content: space-around;
    // align-items: center;
    .img{
      width: 0px;
      height: 90px;
        flex: 2;
        margin-top: -20px;
    }

    span{
      flex: 2;
      //  width: 50px;
       margin-right: 50px;
      // height: 70px;
      // flex: 1;

    }

}
.info_temp{
    font-size:14px;  
    color:#fda252;

}
.info_temp b{
    font-size:13px;
}
.tem .iconfont {
    font-size: 30px;
  }

  
</style>