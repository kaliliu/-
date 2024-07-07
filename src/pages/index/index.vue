<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<route lang="json5" type="home">
{
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '首页',
  },
}
</route>
<template>


  <div
    class="bg-white overflow-hidden pt-2 px-4 home"
    :style="{ marginTop: safeAreaInsets?.top + 'px' }"
  >








  </div>
</template>

<script lang="ts" setup>
import PLATFORM from '@/utils/platform'

defineOptions({
  name: 'Home',
})

// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()



onMounted(() => {



})
</script>

<style lang="scss" scoped>

  .home{
    border: 1px solid red ;
    
  }
</style>
