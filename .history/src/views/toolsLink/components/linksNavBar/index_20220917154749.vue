<template>
  <div class="box">
    <div class="select-box">
      <!-- 顶部菜单栏 -->
      <div class="select-content">
        <div
            @click="getPidId(index)"
            :class="{ active: currentIndex == index }"
            class="select-content-list"
            v-for="(item, index) in firstCate"
            :key="index"
        >
          {{ item }}
        </div>
        <el-tooltip content="点击快速查询链接内容" placement="top" effect="light">
          <div @click="clickSearch" class="search_btn">
            <el-icon><Search /></el-icon>
          </div>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
const router = useRouter();
const emit = defineEmits(["getSecondCate"]);
const props = defineProps(["firstCate"]);
const currentIndex = ref(0);

const getPidId = (index:any) => {
  currentIndex.value = index;
  emit("getSecondCate", index);
};

const clickSearch = () => {
  router.push("/search/link");
};


</script>

<style lang="scss" scoped>
.select-box {
  user-select: none;
  padding: 10px;
  .select-content {
    height: 130px;
    width: 100%;
    border-radius: 5px;
    display: flex;
    padding: 0 10px 0 60px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    z-index: 888;
    .select-content-list {
      width: 10%;
      height: 40px;
      color: #999;
      margin-right: 40px;
      margin-top: 10px;
      font-size: 16px;
      line-height: 40px;
      border: 1px solid transparent;
      cursor: pointer;
      transition: .3s ease-in;
      border-radius: 4px;
      text-align: center;
      background: var(--el-bg-color);
      &:hover {
        cursor: pointer;
      }
    }
    .active {
      transition: all 0.3s;
      background: rgb(221, 178, 178);
      color: #2c3e50;
      font-size: 17px;
      border-radius: 4px;
      background-image: linear-gradient(to right bottom,#9cdae8, rgb(237, 191, 191));
      font-weight: bold;

    }
    .select-content-last {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: center;
      .el-input {
        width: 27%;
        margin-right: 4%;
        margin-top: 13px;
        position: relative;
        overflow: hidden;
        &:hover {
          &::after {
            transform: translateX(0);
          }
        }
        &::after {
          content: "";
          position: absolute;
          bottom: 0px;
          left: 0;
          width: 100%;
          height: 2.2px;
          background-image: linear-gradient(
              to right,
              white,
              red,
              rgb(92, 229, 241),
              rgb(92, 92, 241),
              rgb(244, 120, 113),
              white
          );
          transform: translateX(-100%);
          transition: all 0.8s;
        }
      }
    }
  }
}

.search_btn {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: red;
  position: fixed;
  right: 100px;
  top:140px;
  --el-backtop-bg-color: var(--el-bg-color-overlay);
  --el-backtop-text-color: var(--el-color-primary);
  --el-backtop-hover-bg-color: var(--el-border-color-extra-light);
  background-color: var(--el-backtop-bg-color);
  color: var(--el-backtop-text-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  box-shadow: var(--el-box-shadow-lighter);
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: var(--el-backtop-hover-bg-color);
  }
}
</style>
