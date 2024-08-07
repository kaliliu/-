<route lang="json5">
  {
  style: {
  navigationStyle: 'custom',
  navigationBarTitleText: '',
  },
  }
</route>
<template>
    <div class="userInfor">

      <div class="user-img">
        <img src="/src/static/images/person.png" alt="">
      </div>


      <div>

        <wd-row gutter="20" style="margin-bottom: .2rem">

          <wd-col :span="11" :offset="1">
            <wd-input type="text" label="用户名称：" v-model="value" placeholder="" />
          </wd-col>
          <wd-col :span="11">
            <wd-input type="text" label="所属部门：" v-model="value" placeholder="" />
          </wd-col>

        </wd-row>



        <wd-row gutter="20" style="margin-bottom: .2rem">

          <wd-col :span="11" :offset="1">
            <wd-input type="text" label="角色类型：" v-model="value" placeholder="" />
          </wd-col>
        </wd-row>




        <wd-row gutter="20" style="margin-bottom: .2rem">

          <wd-col :span="11" :offset="1">
            <wd-input type="text" label="借用个数：" v-model="value" placeholder="" />
          </wd-col>
          <wd-col :span="11">
            <wd-input type="text" label="超时个数：" v-model="value" placeholder="" />
          </wd-col>


        </wd-row>

      </div>






      <div style="width: 90%;margin: 1.5rem auto">

        <wd-table :data="dataList" :border="false" height="6rem">
          <wd-table-col prop="mingcheng" label="载体名称" ></wd-table-col>
          <wd-table-col prop="bianma" label="载体编码"></wd-table-col>
          <wd-table-col prop="degnji" label="涉密等级"></wd-table-col>
          <wd-table-col prop="weizhi" label="存放位置"></wd-table-col>

          <wd-table-col prop="zhuangtai" label="当前状态">

            <template #value="{row}">
              <view class="zhuangtai">
                <text>{{ row.zhuangtai }}</text>
              </view>
            </template>


          </wd-table-col>
        </wd-table>


        <div class="pagination">
          <div>上一页</div>
          <div>下一页</div>
        </div>

      </div>


      <div class="user-btn">

        <div @click="handleClick1">修改密码/<br>Change</div>
        <div @click="borrowingreturnClick">借还/<br>Borrow and return</div>
        <div @click="signOutClick">退出/Exit</div>

      </div>


    </div>





  <!--  密码修改-->
  <wd-popup v-model="show1" @close="handleClose1">

    <div class="smg-box">


      <view class="user-psd">


        <wd-form ref="form" :model="model">


          <wd-input
            label="原密码"
            prop="password"
            key="password"
            show-password
            v-model="model.originalPassword"
            placeholder=" "
            :rules="[{ required: true, message: '请输入原密码' }]"
          />

          <wd-input
            label="新密码"
            prop="password"
            key="password"
            show-password
            v-model="model.newPassword"
            placeholder=" "
            :rules="[{ required: true, message: '请输入新密码' }]"
          />

          <wd-input
            label="确认密码"
            prop="password"
            key="password"
            show-password
            v-model="model.confirmPassword"
            placeholder=" "
            :rules="[{ required: true, message: '请输入确认密码' }]"
          />


        </wd-form>


      </view>






      <div class="smg-box-footer">
        <wd-button @click="handleClose1">取消/Cancel</wd-button>
        <wd-button style="width: 2.1rem">确定/Ok</wd-button>
      </div>



    </div>



  </wd-popup>



<!--  <wd-toast />-->



</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { useToast } from 'wot-design-uni'
  const show1 = ref<boolean>(false)

  const toast = useToast()

  const model = ref<any>({
    originalPassword: "",
    newPassword: "",
    confirmPassword: "",
  })


  const dataList = ref<Record<string, any>[]>([
    {
      mingcheng: '张飞',
      bianma: '545665645',
      degnji: '1',
      weizhi: '35',
      zhuangtai: '在库'
    },
    {
      mingcheng: '张飞',
      bianma: '545645645',
      degnji: '1',
      weizhi: '35',
      zhuangtai: '在库'
    },
    {
      mingcheng: '张飞',
      bianma: '545645645',
      degnji: '1',
      weizhi: '35',
      zhuangtai: '在库'
    },
    {
      mingcheng: '张飞',
      bianma: '545645645',
      degnji: '1',
      weizhi: '35',
      zhuangtai: '在库'
    },
    {
      mingcheng: '张飞',
      bianma: '545665645',
      degnji: '1',
      weizhi: '35',
      zhuangtai: '在库'
    },
    {
      mingcheng: '张飞',
      bianma: '545645645',
      degnji: '1',
      weizhi: '35',
      zhuangtai: '在库'
    },

  ])

  /**
   * 排序
   * @param e
   */
  function handleSort(e) {
    dataList.value = dataList.value.reverse()
  }

  function handleClose1() {
    show1.value = false
  }
  function handleClick1() {
    show1.value = true
  }

  function borrowingreturnClick() {
    toast.loading({
      loadingType: 'ring',
      msg: '正在借还中，请稍后...',

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




  function signOutClick() {
    // 请求成功退出到登录页面

    setTimeout(()=>{

      uni.navigateTo({
        url: '/pages/login/login'
      })


    },800)
  }


</script>

<style scoped lang="scss">

  .userInfor{
    width: auto;
    height: calc(90% - 1.55rem);
    position: relative;

    .user-img{
      /*border: 1px solid red ;*/
      text-align: center;
      padding: 1.25rem;
      img{
        vertical-align: bottom;
      }
    }

    .user-int{
      /*border: 1px solid red ;*/
      width: 50%;
    }

    :deep(.wd-input.is-cell){
      background: transparent;
    }
    :deep(.wd-input__label-inner){
      color: #fff;
      font-size: .35rem;

    }
    :deep(.uni-input-input){
      height: .6rem;
      background: #344263;
      box-sizing: border-box;
      padding-left: .2rem;
    }
    :deep(.wd-input.is-cell .wd-input__inner){
      height: .6rem;
      color: #fff;
      font-size: .32rem;
      box-sizing: border-box;
    }
    :deep(.wd-input.is-cell){
      align-items: center;
    }
    :deep(.wd-input__label){
      min-width: 41% !important;
      max-width: 41% !important;
      width: 1rem;
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
      bottom: 1rem;
      div{
        width: 32%;
        aspect-ratio: 343 / 150; /* 设置宽高比为16:9 */
        border-radius: .33rem;
        background: #fff;
        color: #0f2e6e;
        font-weight: bold;
        font-size: .36rem;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
      }

    }

}





  .smg-box{
    width:8rem ;
    height: 6rem;
    background: rgba(32,69,134,.9);
    font-size: .32rem;
    /*border: 1px solid red ;*/

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;



  }




  .smg-box-footer{
    /*border: 1px solid red ;*/
    display: flex;
    flex-direction:row;
    justify-content: space-evenly;
    margin-bottom:.5rem;

    :deep(.wd-button.is-medium.is-round){
      width: 2.5rem;
      height: .6rem;
      border-radius: 0;
      background: #fff;
      font-size: .32rem;
      color: #13398b;
      font-weight: bold;
    }

  }








  .user-psd{
    width: 85%;
    margin: auto;


    .wd-form{



      :deep(.wd-input__label){
        height: 100%;
        display: flex;
        align-items: center;
        font-size: .32rem;
        box-sizing: border-box;
        padding-left: .3rem;
        color: #eef4f5;
        margin-right: 0;
      }


      :deep(.wd-input__label.is-required::after){
        top: .25rem;
        font-size:.28rem;
        left: .1rem;

      }



      :deep(.wd-input__label-inner){
        font-size: .32rem;
      }

      :deep(.wd-input__label-inner){
        font-size: .32rem;
      }



      :deep(.wd-input.is-cell){
        height: .8rem;
        /*border: 1px solid red ;*/
        background: transparent;
        margin-right: 0;
        margin-bottom: .2rem;
      }



      :deep(.wd-input__body){
        height: 100%;
        background: #fff;

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

        font-size: .42rem;

      }
      :deep(.wd-input__placeholder){

        height: 100%;
        font-size: .28rem;
        display: flex;
        align-items: center;

      }
      :deep(.uni-input-input){
        font-size: .32rem;
        color: #333;
        box-sizing: border-box;
        padding-left: .2rem;

      }
      :deep(.wd-input__suffix){
        height: 100%;
        display: flex;align-items: center;

        margin-right: .1rem;
      }
      :deep(.wd-input__clear){
        font-size: .40rem;

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
