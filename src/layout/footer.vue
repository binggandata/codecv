<script setup lang="ts">
import { wOpen } from '@/utils'
</script>

<template>
  <div id="footer">
    <span
      class="item mr-20 pointer"
      @click="wOpen('https://github.com/acmenlei/codecv')"
    >
      <i class="iconfont icon-github"></i>
      原作者Github
    </span>
    <span class="item mr-20 pointer">
      <i class="iconfont icon-wechat"></i>
      binggandata
    </span>
  </div>
</template>

<style lang="scss" scoped>
#footer {
  height: 60px;
  line-height: 60px;
  text-align: center;
  color: #999;
  .item {
    .iconfont {
      font-size: 18px;
      margin-right: 5px;
    }
  }
}
</style>
