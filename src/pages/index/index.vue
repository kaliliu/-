<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<route lang="json5">
{
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '首页',
  },
}
</route>
<template>
  <div class="home">

    <div class="home-mid">

      <div class="h-m-img">

        <wd-swiper :list="list" indicator indicatorMode="line" circular  height="8.6rem"></wd-swiper>

<!--        <img src="/src/static/images/index-bg.png" alt="">-->
      </div>
      <div class="h-m-btn">
        <div @click="borrowingreturnClick">载体借还</div>
        <div>管 理 员</div>
        <div>使用帮助</div>
        <div>机柜信息</div>
      </div>
    </div>


    <div class="home-btm">
      <div class="h-btm-tit">
        <div>
          <img src="" alt="">
        </div>
        <div>涉密柜使用注意事项</div>
      </div>

      <div class="btm-txt">
        1、本柜每个存储单元格内共设置3层存放空间，如有较大、较重的物品(比如笔记本电脑)请尽量放置在最下面一
        层，其他如(硬盘、u盘)等小型物品可放置在上面两层。
      </div>
      <div class="btm-txt">
        2、在存放物品关闭柜门后，如系统显示的物品不准确，存在错漏的情况，请在主柜的操作屏上登录系统，开柜后把
        物品随机拨乱一下，然后再关闭柜门，等待系统的确认即可。
      </div>

      <div class="btm-txt">
        3、本柜为涉密载体柜，严禁放置各类非管控物品，特别是各类水、饮品、酒等液体物品。
      </div>
    </div>



  </div>
</template>

<script lang="ts" setup>
import PLATFORM from '@/utils/platform'

defineOptions({
  name: 'Home',
})


const list = ref([
  '/src/static/images/index-bg.png',
  '/src/static/images/index-bg2.png',
  '/src/static/images/index-bg3.png',
  '/src/static/images/index-bg4.png',
  '/src/static/images/index-bg5.png',
  ])




// 1


function borrowingreturnClick() {

  // 请求成功

  setTimeout(()=>{

    // 跳转登录页面
    uni.navigateTo({
      url: '/pages/login/login'
    })


  },500)

}





// 跳转载体借还页面
// uni.navigateTo({
//   url: '/pages/borrowinReturn/borrowinReturn'
// })


onMounted(() => {})
</script>

<style lang="scss" scoped>
.home {
  /*border: 1px solid red;*/
  box-sizing: border-box;
  padding: .15rem;
  .home-mid{
    background:#243157 ;

    .h-m-img{
      width: 100%;
      height: 8.7rem;
      background: #2c395d;
      img{
        width: 10.4rem;
        margin: 0 auto;
      }
    }
    .h-m-btn{
      width: 100%;
      height: 4.56rem;
      box-sizing: border-box;
      border-radius: .3rem;
      background: #354164;
      margin: .2rem 0;

      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      justify-items: center;

      align-items: center;
      flex-wrap: wrap;

      div{

        width: 4.33rem;
        height: 1.78rem;
        line-height: 1.78rem;
        border: 1px solid #285a94;
        box-sizing: border-box;
        border-radius: .18rem;
        background: #2a578e;
        text-align: center;
        font-size: .38rem;

      }

    }


  }
  .home-btm{
    border-top: .02rem solid #1d72be ;
    border-bottom: .02rem solid #1d72be ;
    border-left: .04rem solid #1d72be;
    border-right: .04rem solid #1d72be;
    box-sizing: border-box;
    padding: .28rem .6rem;
    margin-bottom: .46rem;
    .h-btm-tit{
      font-size: .3rem;
      display: flex;
      align-items: center;
      margin-bottom: .2rem;
      div:nth-child(1){
        width: .5rem;
        height: .4rem;
        border: 1px solid #ccc;
        margin-right: .3rem;
      }

    }

    .btm-txt{
      font-size: .32rem;
      line-height: .52rem;
    }

  }

}
</style>
