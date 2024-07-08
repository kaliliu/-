<template>
  <wd-config-provider :themeVars="themeVars">


    <div class=" overflow-hidden w-100vw h-100vh default"
             :style="{ marginTop: safeAreaInsets?.top + 'px' }">
      <div class="header">
        <img src="" alt="" >
<!--        <img src="/src/static/images/biaotou.png" alt="" >-->
        <div class="h-r">
          <div>设备编号：</div>
          <div>版 本：</div>
        </div>
      </div>

      <slot />

    </div>


    <wd-toast />
    <wd-message-box />
  </wd-config-provider>
</template>

<script lang="ts" setup>
import type { ConfigProviderThemeVars } from 'wot-design-uni'

const themeVars: ConfigProviderThemeVars = {
  // colorTheme: 'red',
  // buttonPrimaryBgColor: '#07c160',
  // buttonPrimaryColor: '#07c160',
}

// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()

</script>
<style lang="scss" scoped>
  .default{
    font-family: Microsoft YaHei;
    background: #16244c;
    color: #e1e1e1;
    box-sizing: border-box;
    overflow: auto;
    .header{

      display: flex;
      justify-content: flex-start;
      justify-items: center;
      img{
        width: 3.16rem;
        height: 1rem;

        margin: 0 .3rem;

      }
      .h-r{
        display: flex;
        flex-direction: column;
        justify-content:space-evenly;
        font-size: .22rem;
      }
    }
  }



</style>
