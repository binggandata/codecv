<script setup lang="ts">
import NavBar from '@/components/navBar.vue'
import resumeCard from './components/resumeCard.vue'
import Empty from '@/components/empty.vue'

import { templateCategory } from './constant'
import { useCategory } from './hook'

const { queryCategory, data } = useCategory()
</script>

<template>
  <div class="resume-container flex">
    <div class="resume-left-container content-card" data-aos="fade-right">
      <NavBar button="创作模板" :tabs="templateCategory" @tab-click="queryCategory" />
      <div class="resume-card-container" v-if="data.length">
        <resume-card v-for="theme in data" :key="theme.id" :theme="theme" />
      </div>
      <Empty v-else title="暂时没有这类模板 你可以点击右上角创作模板或联系作者添加～" />
    </div>
    <div class="resume-right-container" data-aos="fade-left">
      <div class="resume-hot-rank content-card">
        公告
        <p>可关注下方公众号</p>
        <p>获取更多求职面试技巧。</p>
      </div>
      <div class="advertising content-card mt-20">
        <p>1V1简历修改</p>
        <img src="@/assets/img/wechat.jpg" alt="relative" />
        <br />
        <br />
        <p>微信公众号</p>
        <img src="@/assets/img/wechatmp.jpg" alt="微信公众号" class="qqgroup qr" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.resume-container {
  max-width: var(--max-width);
  margin: 20px auto;

  .resume-left-container {
    margin-right: 20px;
    .resume-card-container {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
    }
  }

  .advertising {
    position: sticky;
    top: 80px;
    img {
      margin-top: 10px;
      width: 170px;
    }
  }
}
@media screen and (max-width: 800px) {
  .resume-right-container {
    display: none;
  }
  .resume-left-container {
    margin-left: 20px;
  }
}
</style>
