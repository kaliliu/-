<template>
    <div class="distinguish">

      <div class="dis-img">
        <img src="/src/static/images/zhiwen.png" alt="" v-if="tt=='zhiwen'" @click="IdentificationSuccessfulClick">
        <img src="/src/static/images/renmianshibie.png" alt="" v-else @click="IdentificationSuccessfulClick">
      </div>


      <div class="dis-btn">

        <div @click="borrowingreturnClick">
          <img src="" alt="">
          <p>账号</p>
        </div>
        <div @click="fingerprintClick('zhiwen')">
          <img src="" alt="">
          <p>指纹</p>
        </div>
        <div @click="fingerprintClick('shibie')">
          <img src="" alt="">
          <p>人脸识别</p>
        </div>

      </div>

      <div class="return-icon" @click="returnUpPage">
        <img src="/src/static/images/return.png" alt="">
      </div>

    </div>
</template>

<script lang="ts" setup>



  const tt = ref('')



  //options 为传回来的参数

  onLoad((options) => {

    const item = JSON.parse(options.item)
    tt.value = item.tt


  })



//返回首页
function returnUpPage(){
   // uni.navigateBack();
  
   uni.switchTab({
          url: '/pages/index/index'
        })
     

  }


  // 跳转指纹/人脸识别页面
  function fingerprintClick(tt1) {
    console.log(tt.value);
    console.log(tt1);
    console.log(tt1);

    if(tt.value!==tt1){

      setTimeout(()=>{

        const item = {
          id:1,
          tt:tt1
        }


        uni.navigateTo({
          url: '/pages/distinguish/distinguish?item='+JSON.stringify(item)
        })

      },500)

    }


  }





  function IdentificationSuccessfulClick() {

    setTimeout(()=>{


      uni.navigateTo({
        url: '/pages/userInfor/userInfor'
      })



    },800)

  }






  // 跳转登录页面
  function borrowingreturnClick() {
    console.log(99);

    // 请求成功

    setTimeout(()=>{


      uni.navigateTo({
        url: '/pages/login/login'
      })


    },500)

  }




</script>

<style scoped lang="scss">

  .distinguish{
    width: auto;
    height: calc(90% - 2rem);
    position: relative;

    .dis-img{
      position: absolute;
      width: 4.85rem;
      height: auto;
      top: 20%;
      left: 0;
      right: 0;
      margin:auto;

      img{
        vertical-align: middle;
        width: 4.85rem;
      }
    }

    .dis-btn{
      /*border: 1px solid red ;*/
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 25%;
      font-size: .32rem;
      div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        p{margin-top: .2rem}
      }
      img{
        width: .45rem;
        height: .56rem;
        border: 1px solid #ccc;
        vertical-align: bottom;
      }

    }

    .return-icon{
      position: absolute;
      right: .7rem;
      bottom: .6rem;
      img{
        width: 1.81rem;
        vertical-align: middle;
      }
    }
  }
</style>
