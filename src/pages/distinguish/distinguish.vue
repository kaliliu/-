<template>
    <div class="distinguish">

      <div class="dis-img">
        <img src="/src/static/images/renmianshibie.png" alt="">
      </div>


      <div class="dis-btn">

        <div>
          <img src="" alt="">
          <p>账号</p>
        </div>
        <div>
          <img src="" alt="">
          <p>指纹</p>
        </div>
        <div>
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

</script>

<style scoped lang="scss">

  .distinguish{
    width: auto;
    height: calc(100% - 1.05rem);
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
      bottom: .5rem;
      img{
        width: 1.81rem;
        vertical-align: middle;
      }
    }
  }
</style>
