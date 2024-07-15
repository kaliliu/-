<route lang="json5">
  {
  style: {
  navigationStyle: 'custom',
  navigationBarTitleText: '',
  },
  }
</route>
<template>
  <div class="login">

    <div class="login-user">


      <wd-form ref="form" :model="model">

        <view class="user-name">
          <wd-input
            prop="username"
            key="username"
            clearable
            v-model="model.username"
            placeholder="请输入"
            :prefix-icon="'user'"
            :rules="[{ required: true, message: '请输入用户名' }]"
          />
        </view>




<!--        <wd-icon name="lock-on" size="22px"></wd-icon>-->
        <view class="user-psd">
          <wd-input
            prop="password"
            key="password"
            show-password
            v-model="model.password"
            placeholder="请输入"
            :prefix-icon="'lock-on'"
            :rules="[{ required: true, message: '请输入密码' }]"
          />
        </view>


      </wd-form>






    </div>


    <div class="login-btn">

      <div @click="borrowingreturnClick">
        <img src="" alt="">
        <p>登录</p>
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

    <div class="return-icon">
      <img src="/src/static/images/return.png" alt="">
    </div>

  </div>
</template>

<script lang="ts" setup>


  const model = ref<any>({
    username: "",
    password: "",
  })




  // 跳转指纹/人脸识别页面
  function fingerprintClick(tt1) {

    // 请求成功


    const item = {
      id:1,
      tt:tt1
    }



    setTimeout(()=>{

      uni.navigateTo({
        url: '/pages/distinguish/distinguish?item='+JSON.stringify(item)
      })


    },500)


  }






  // 跳转登录页面
  function borrowingreturnClick() {

    // 请求成功

    setTimeout(()=>{


      uni.navigateTo({
        url: '/pages/userInfor/userInfor'
      })



    },500)

  }



</script>

<style scoped lang="scss">

  .login{
    width: auto;
    height: calc(100% - 1.05rem);
    position: relative;

    .login-user{
      position: absolute;
      min-width: 4.85rem;
      width: 68%;
      height: 5rem;
      top: 15%;
      left: 0;
      right: 0;
      margin:auto;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #25b3ff;


      .wd-form{
        width: 80%;
        /*height: 100%;*/
        .user-name{
          height: .8rem;
          margin-bottom: .3rem;
        }
        .user-psd{
          height: .8rem;
        }



        :deep(.wd-input__body){
          height: 100%;

        }
        :deep(.wd-input__value){
          height: 100%;
          font-size: .32rem;

        }
        :deep(.wd-input){
          height: 100%;

        }
        :deep(.wd-input__inner){
          height: 100%;

        }
        :deep(.wd-input__prefix){

          height: 100%;
          display: flex;
          align-items: center;

        }
        :deep(.wd-input__icon){

          font-size: .48rem;

        }
        :deep(.wd-input__placeholder){

          height: 100%;
          font-size: .32rem;
          display: flex;
          align-items: center;

        }
        :deep(.uni-input-input){
          font-size: .32rem;
          color: #333;

        }
        :deep(.wd-input__suffix){
          height: 100%;
          display: flex;align-items: center;

        }
        :deep(.wd-input__clear){
          font-size: .48rem;

        }






      }












    }

    .login-btn{
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
      bottom: .5rem;
      img{
        width: 1.81rem;
        vertical-align: middle;
      }
    }
  }
</style>
