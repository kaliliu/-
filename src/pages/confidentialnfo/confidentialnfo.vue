<route lang="json5">
  {
  style: {
  navigationStyle: 'custom',
  navigationBarTitleText: '',
  },
  }
</route>
<template>
  <div class="confident">



    <div class="confident-box">

      <div class="conf-bg">

        <div class="conf-con">

          <div></div>
          <div></div>
        </div>



        <div class="conf-bg-btn">
          <div>启用摄像头</div>
          <div>拍照</div>
          <div>启动指纹</div>
        </div>
      </div>

    </div>



    <div class="conf-info">

      <div class="conf-info-t">

        <div><img src="/src/static/images/person.png" alt=""></div>

        <div>
          <wd-input type="text" label="用户名称：" v-model="value1" />
          <wd-input type="text" label="角色类型：" v-model="value2" />
          <wd-input type="text" label="所属部门：" v-model="value3" />
        </div>

        <div>
          <wd-button>选择</wd-button>
        </div>
      </div>




      <div class="conf-info-b">

        <div>
          <wd-input type="text" label="涉密柜编号：" v-model="value4" />
          <wd-input type="text" label="涉密柜格号：" v-model="value5" />
          <wd-input type="text" label="指纹特征值：" v-model="value6" />
          <wd-input type="text" label="人脸特征值：" v-model="value7" />
        </div>



        <div>
          <wd-button>涉密柜分配</wd-button>
        </div>


      </div>


    </div>



    <div class="conf-footer">
      <wd-button>取消/Cancel</wd-button>
      <wd-button>确定/Ok</wd-button>
    </div>











  </div>
</template>

<script lang="ts" setup>





</script>

<style scoped lang="scss">

  .confident{
    width: auto;
    height: calc(100% - 1.05rem);
    position: relative;
    /*border: 1px solid red ;*/

    .confident-box{
      width: 100%;
      height: 6.95rem;
      border-radius: .2rem;
      background: #2e3d62;
      margin: .6rem 0 .2rem;
      display: flex;
      .conf-bg{
        width: 7.8rem;
        height: 5.8rem;
        background: #586481;
        margin: auto;

        position: relative;

        .conf-con{
          /*border: 1px solid red ;*/
          width: auto;
          height: calc(100% - 1rem);
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
          align-items: center;
          div{
            width: 3.05rem;
            height: 4.35rem;
            background: #606e8c;
            border: 1px solid #ccc;

          }
        }

        .conf-bg-btn{
          display: flex;
          justify-content: space-evenly;
          position: absolute;
          bottom: .2rem;
          left: 0;
          right: 0;
          div{
            width: 2.25rem;
            height: .55rem;
            background: #13398b;
            color: #fff;
            font-size: .33rem;
            text-align: center;
            line-height: .55rem;
          }

        }
      }
    }


    .conf-info{
      width: auto;
      height: 7.8rem;
      border-radius: .2rem;
      background: #2e3d62;


      .conf-info-t{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        /*border: 1px solid red ;*/

        box-sizing: border-box;
        padding: .4rem 0;
        div img{
          width: 2.14rem;
        }
        :deep(.wd-input__label){
          min-width: 41% !important;
          max-width: 41% !important;
        }


      }


      .conf-info-b{
        /*border: 1px solid red ;*/
        height: calc(100% - 3.5rem);
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        box-sizing: border-box;

        div:nth-child(1){
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
        }

        div:nth-child(2){
          margin-top: .2rem;
        }

        :deep(.wd-button.is-medium.is-round){
          width: 2.45rem;
          height: .8rem;
        }


        :deep(.wd-input__label){
          min-width: 41% !important;
          max-width: 41% !important;
        }
        :deep(.wd-input.is-cell){

        }


      }



    }



    .conf-footer{
      /*border: 1px solid red ;*/
      width: auto;
      height: 2rem;
      border-radius: .2rem;
      background: #2e3d62;
      margin: .2rem 0;
      display: flex;
      flex-direction:row;
      justify-content: space-evenly;

      :deep(.wd-button.is-medium.is-round){
        width: 2.9rem;
        height: 1.25rem;
        margin: auto;
      }

    }


    :deep(.wd-input.is-cell){
      background: transparent;
      align-items: center;
      padding: .1rem;
    }
    :deep(.wd-input__label-inner){
      color: #fff;
      font-size: .35rem;

    }
    :deep(.uni-input-input){
      height: .6rem;
      background: #485371;
      box-sizing: border-box;
      padding-left: .2rem;
    }
    :deep(.wd-input.is-cell .wd-input__inner){
      height: .6rem;
      color: #fff;
      font-size: .32rem;
      box-sizing: border-box;
    }



    :deep(.wd-button.is-medium.is-round){
      width: 1.5rem;
      height: .6rem;
      border-radius: 0;
      background: #fff;
      font-size: .38rem;
      color: #13398b;
      font-weight: bold;
    }

  }

</style>
