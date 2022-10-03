<template>
  <div class="articleInfo">
    <div class="title">
      <p class="title_tip">文章标题:</p>
      <p class="content">{{artTitle}}</p>
    </div>
    <div class="articleCategory">
      <p class="tip">文章分类:
        <el-button @click="navigateTags(item)"  text v-for="(item,index) in tag?.split(',')" :key="index">
          {{item}}
        </el-button>
      </p>
    </div>
    <div class="navigate" v-if="catalogData.length">
      <p class="tip" >目录导航:</p>
      <li v-for="(item,index) in catalogData" :key="index">
        <span>NO{{index+1}}</span>
        <a :href="'#' + item?.text">{{ item?.text }}</a>
      </li>

    </div>
  </div>
</template>

<script setup lang="ts">
import {emitter} from "@/emitter";
import { ITagsData } from "@/types/article";
const catalogData = ref<{
  id:string,
  text:string
}[]>([])
emitter.on("getArticleCatalog",(value)=>{
  catalogData.value=toRaw(value) as any
})
type Props = {
  tag:string,
  artTitle:string
}

defineProps<Props>()


const router = useRouter()
//跳转文章分类
const navigateTags = (value:string)=>{
  router.push(`/tags?key=${value}`)
}
</script>

<style lang="scss" scoped>
.articleInfo{
  width: 100%;
  min-height: 80px;
  background: var(--el-bg-color);
  padding: 15px;
  box-sizing: border-box;
  margin-bottom: 6px;
  border-radius: 4px;
  user-select: none;
  p{
    margin: 0;
  }
  .title{
    min-height: 50px;
    .title_tip{
      margin-bottom: 7px;
      font-weight: 700;
    }
    .content{
      width: 100%;
      font-size: 15px;
      color: var(--el-text-color-regular);
      transition: all .3s;
      cursor: pointer;
      &:hover{
        color: teal;
      }
    }
  }
  .articleCategory{
    margin: 14px 0;
    min-height: 30px;
    .tip{
      font-weight: 700;
    }
  }
  .navigate{
    .tip{
      font-weight: bold;
      margin-bottom: 7px;
    }
    li{
      width: 100%;
      height: 25px;
      cursor: pointer;
      transition: all .3s;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 15px;
      color: var(--el-text-color-regular);
      &:hover{
        a{
          color:teal;
        }
        color:teal;
      }
      a{
        scroll-behavior: smooth;
        transition: all .3s;
        text-decoration: none;
        color: var(--el-text-color-regular);
      }
      span{
        font-weight: bold;
        margin-right: 6px;
      }

    }
  }
}
</style>