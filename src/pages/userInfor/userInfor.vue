<template>
    <div class="userInfor">


      <div class="user-img">
        <img src="/src/static/images/person.png" alt="">
      </div>





      <div>
        <wd-input type="text" label="基本用法" size="large" v-model="value" placeholder="请输入..." />
      </div>




    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">

  .userInfor{
    width: auto;
    height: calc(100% - 1.05rem);
    position: relative;
    border: 1px solid red ;

    .user-img{
      border: 1px solid red ;
      text-align: center;
      padding: 1.25rem;
      img{
        vertical-align: bottom;
      }
    }
  }
</style>
