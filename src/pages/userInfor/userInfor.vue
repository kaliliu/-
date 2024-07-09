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






      <div style="border: 1px solid red ;width: 90%;margin: 1.5rem auto">

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

        <div>修改密码/<br>Change</div>
        <div>借还/<br>Borrow and return</div>
        <div>退出/Exit</div>

      </div>


    </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

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

    .user-int{
      border: 1px solid red ;
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
      border: 1px solid red ;

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

</style>
