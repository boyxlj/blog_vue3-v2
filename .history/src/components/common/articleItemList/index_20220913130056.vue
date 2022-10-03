<template>
  <div class="item" v-for="item in list" :key="item.artId" >
    <div class="item_left">
      <div class="authOrTime">
        <span>{{item.name}}</span>
        <span>10天前</span>
        <span>java</span>
      </div>
      <div class="title">
        {{item.artTitle}}
      </div>
      <div class="desc">
        2381236213912369136190361903238123621391236913619036190323812362139123691361903619032381236213912369136190361903
      </div>
      <div class="preview">
        <span>浏览：1147</span>
        <span>点赞：47</span>
        <span>评论：11</span>
      </div>
    </div>
    <div class="item_right">
      <img src="" alt="">
    </div>

  </div>
</template>

<script lang="ts" setup>
import {IArticleData} from "@/types/article"
type Props = {
  list :IArticleData[]
}
 withDefaults(defineProps<Props>(),{
  list:()=>[]
})


</script>

<style lang="scss" scoped>
.item {
  width: 100%;
  height: 155px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  border-radius: 4px;
  &:nth-child(n+2) {
    border-top: 1px solid var(--el-border-color);
  }

  .item_left {
    width: 78%;
    height: 100%;
    background: var(--el-bg-color);
    box-sizing: border-box;

    .title, .desc {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .authOrTime {
      margin: 10px 0;

      span {
        margin-right: 24px;
      }
    }

    .title {
      font-size: 20px;
      letter-spacing: 0.05em;
      font-weight: bold;
    }

    .desc {
      font-size: 15px;
      margin: 10px 0;
    }

    .preview {
      font-size: 15px;

      span {
        margin-right: 15px;
      }
    }
  }

  .item_right {
    width: 21%;
    height: 100%;
    background: var(--el-bg-color);
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 66%;
      height: 56%;
      object-fit: cover;
      border: 2px solid red;
      border-radius: 4px;
    }

  }
}
</style>