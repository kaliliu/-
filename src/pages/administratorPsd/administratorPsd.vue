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

    <div class="login-con">
      <div class="login-tit">
        <div>请输入管理员密码</div>
        <div>Please enter your administrator Password</div>
      </div>

      <view class="user-psd">
        <wd-form ref="form" :model="model">
          <wd-input
            prop="password"
            key="password"
            show-password
            v-model="model.password"
            placeholder="请输入密码"
            :rules="[{ required: true, message: '请输入密码' }]"
          />
        </wd-form>

      </view>

    </div>


    <div class="login-btn">

      <div @click="signOutClick">退出/Exit</div>
      <div @click="correctionsClick">更正/Correct</div>
      <div @click="handleClick">确定/Enter</div>

    </div>

  </div>
</template>

<script lang="ts" setup>

  const model = reactive({
    password: ""
  })





  //确定
  function handleClick() {


    setTimeout(()=>{
      // 跳转主页面
      uni.navigateTo({
        url: '/pages/confidentialnfo/confidentialnfo'
      })
    },1000)



  }

  //
  function correctionsClick() {

    model.password = ''

  }


  //退出
  function signOutClick() {

    setTimeout(()=>{

      uni.navigateTo({
        url: '/pages/userInfor/userInfor'
      })


    },800)
  }
</script>

<style scoped lang="scss">

  .login{
    width: auto;
    height: calc(100% - 1.05rem);
    border: 1px solid red ;
    position: relative;
    .login-con{
      width: auto;
      height: 2.8rem;
      position: absolute;
      left: 0;
      right: 0;
      top: 18%;
      bottom: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;


      .login-tit{
        text-align: center;
        div:nth-child(1){
          font-size: .46rem;
          font-weight: 600;
        }
        div:nth-child(2){
          font-size: .18rem;
        }

      }
      .user-psd{
        border: 1px solid red ;
        width: 45%;
        margin: 0 auto;
      }
    }


    .login-btn{
      border: 1px solid red ;

      display: flex;
      flex-direction: row;
      justify-content: space-evenly;

      position: fixed;
      left: 0;
      right: 0;
      bottom: 18%;
      div{
        width: 32%;
        aspect-ratio: 343 / 150; /* 设置宽高比为16:9 */
        border-radius: .33rem;
        background: #fff;
        color: #0f2e6e;
        font-weight: bold;
        font-size: .36rem;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
      }

    }


    :deep(.wd-input__value){
      height: .7rem;
    }
    :deep(.wd-input__suffix){
      height: .7rem;
      position: relative;
    }
    :deep(.wd-icon){
      position: absolute;
      left: -.6rem;
      top: .16rem;
      font-size: .38rem;
    }
    :deep(.uni-input-input){
      font-size: .32rem;
    }


  }
</style>
