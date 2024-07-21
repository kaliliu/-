<route lang="json5">
  {
  style: {
  navigationStyle: 'custom',
  navigationBarTitleText: '',
  },
  }
</route>
<template>
  <div class="borrowin">

    <div class="bor-txt">

      <span style="margin-left: 2em">您本次借还结果为:借用</span>
      <span class="bor-int">
        <wd-input
          v-model="model.value1"
          placeholder=" "
        />
      </span>
      <span>件，归 还</span>

      <span class="bor-int">
        <wd-input
          v-model="model.value2"
          placeholder=" "
        />
      </span>
      <span>件。</span>

    </div>


    <div style="border: 1px solid red ;width: 90%;margin: 0 auto">

      <wd-table :data="dataList" :border="false" height="6rem">
        <wd-table-col prop="mingcheng" label="载体名称" ></wd-table-col>
        <wd-table-col prop="bianma" label="载体编码"></wd-table-col>

        <wd-table-col prop="zhuangtai" label="当前状态">

          <template #value="{row}">
            <view class="zhuangtai">
              <text>{{ row.zhuangtai }}</text>
            </view>
          </template>


        </wd-table-col>
        <wd-table-col prop="degnji" label="涉密等级"></wd-table-col>
        <wd-table-col prop="weizhi" label="存放位置"></wd-table-col>
        <wd-table-col prop="shiyongren" label="使用人"></wd-table-col>
      </wd-table>


      <div class="pagination">
        <div>上一页</div>
        <div>下一页</div>
      </div>

    </div>


    <div class="user-btn">

      <div>异常上报/<br>Anomaly reported</div>
      <div @click="reIdentifyClick">重新识别/<br>Recalibrate</div>
      <div @click="borrowingreturnClick">确定/ok</div>

    </div>


  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { useToast } from 'wot-design-uni'

  const toast = useToast()


  const model = ref({
    value1: "",
    value2: ""
  })


  const dataList = ref<Record<string, any>[]>([
    {
      mingcheng: '电脑',
      bianma: '5456645',
      zhuangtai: '归还',
      degnji: '机密',
      weizhi: '1-1',
      shiyongren: '测试甲'
    },

  ])




  /**
   * 排序
   * @param e
   */
  function handleSort(e) {
    dataList.value = dataList.value.reverse()
  }








  function reIdentifyClick() {
    // 跳转借还页面
    uni.navigateTo({
      url: '/pages/administratorPsd/administratorPsd'
    })

  }

  function borrowingreturnClick() {
    toast.loading({
      loadingType: 'ring',
      msg: '正在刷卡扫描中，请稍后...',

    })

    // 请求成功关闭

    setTimeout(()=>{
      toast.close()



      // 跳转借还页面
      uni.navigateTo({
        url: '/pages/borrowinReturn/borrowinReturn'
      })



    },3000)

  }




</script>

<style scoped lang="scss">

  .borrowin{
    width: auto;
    height: calc(100% - 1.05rem);
    position: relative;
    /*border: 1px solid red ;*/

    .bor-txt{
      /*border: 1px solid red ;*/
      width: 8.2rem;
      line-height: .9rem;
      display: flex;
      flex-wrap: wrap;
      font-size: .38rem;
      margin: 0 auto;
      box-sizing: border-box;
      padding: 2.6rem 0 2.2rem;

      .bor-int{
        position: relative;
        top: .13rem;
        margin: 0 .06rem
      }

      :deep(.wd-input){
        width: 1.7rem;
        height: .6rem;
        font-size: .32rem;
      }
      :deep(.wd-input__inner){
        height: 100%;
        font-size: .32rem;
      }
      :deep(.wd-input__value){
        height: 100%;
      }
      :deep(.wd-input__body){
        height: 100%;
      }
      :deep(.uni-input-input){
        box-sizing: border-box;
        color: red;
        text-align: center;
      }

    }



    /*表格*/

    :deep(.wd-table__content){
      width: 100% !important;
    }
    :deep(.wd-table__cell.is-left){
      flex: 1;
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
    :deep(.wd-table-col){
      flex: 1;
    }

    :deep(.wd-table__cell){
      font-size:.28rem ;
    }

    .zhuangtai{
      color: #317b45;
    }


    .pagination{
      display: flex;
      float: right;
      margin-top: .3rem;
      margin-right: .2rem;
      div{
        background: #fff;
        color: #566c95;
        font-size: .28rem;
        width: 1.3rem;
        height: .5rem;
        line-height: .5rem;
        text-align: center;
        margin-right: .25rem;
      }
    }


    .user-btn{
      /*border: 1px solid red ;*/

      display: flex;
      flex-direction: row;
      justify-content: space-evenly;

      position: fixed;
      left: 0;
      right: 0;
      bottom: 1.4rem;
      div{
        width: 32%;
        aspect-ratio: 338 / 125; /* 设置宽高比为16:9 */
        border-radius: .4rem;
        background: #455273;
        color: #fff;
        font-size: .36rem;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
      }

    }

  }








  /*借还loading弹框*/

  :deep(.wd-toast--with-icon){

    width: 50%;
    height: 1.5rem;
    line-height: 1.5rem;
  }

  :deep(.wd-toast__msg){

    font-size: .32rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: .42rem;

  }


  :deep(.wd-toast__icon){

    width: .6rem !important;
    height: .6rem !important;

  }
  :deep(.wd-loading__svg){
    width: .6rem !important;
  }

  :deep(.wd-toast){
    padding: .3rem ;
    max-width: 50%;

  }






</style>
