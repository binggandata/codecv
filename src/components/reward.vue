<script setup lang="ts">
import { ref } from 'vue'
import ToastModal from '@/components/toast-modal/toastModal.vue'

const reward = ref(false)
function toggle() {
  reward.value = !reward.value
}
</script>

<template>
  <button class="reward btn" @click="toggle"><i class="iconfont icon-moneybagfill"></i>打赏</button>
  <ToastModal v-if="reward" :flag="reward" @close="toggle">
    <h5>简历生成项目。</h5>
    <h5>
      欢迎加入交流社区。
      <i class="iconfont icon-emoji"></i>
    </h5>
    <div class="reward-item wechat">
      <img src="/docs/wechatmp.jpg" alt="微信公众号" />
      <h4>微信公众号</h4>
    </div>
    <div class="reward-item alipay">
      <img src="/docs/wechat.jpg" alt="个人微信交流" />
      <h4>个人微信交流</h4>
    </div>
  </ToastModal>
</template>

<style lang="scss" scoped>
.reward {
  display: inline-flex;
  align-items: center;
  padding: 8px 10px;
  justify-content: center;
  background: var(--strong-color);
  color: #fffff8;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  margin-right: 10px;
  /* animation: bounce 2s infinite; */
  /* transition: transform 0.3s; */
  i {
    margin-right: 5px;
  }
  &:hover {
    opacity: 0.8;
  }
}
/* @keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0) scale(0.8);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px) scale(1.1);
  }
} */
h5 {
  color: orangered;
}
.reward-item {
  display: inline-block;
  &.alipay {
    img {
      transform: scale(0.9) translateY(10px);
    }
  }
  img {
    width: 200px;
  }
}
</style>
