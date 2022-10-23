import {createRouter,createWebHistory} from "vue-router";
import {useValidateLogin} from "@/hooks/validateLogin"
import { ElMessage, ElMessageBox } from 'element-plus'
import Axios from "axios"
import * as sysTool from "@/utils/getIp"
import {getCity} from "@/utils/getUserCity"

import {routes} from "./routes"
const router = createRouter({
    routes,
    history:createWebHistory()
})
const needLogin=["/select","/profile/userInfo",
    "/profile/article","/profile/collect","/profile/like","/profile/update/userInfo","/profile/suggestion"]
router.beforeEach( (to,from,next)=>{
    const userId  = JSON.parse(localStorage.getItem("userInfo") as string)?.userId
    const token = localStorage.getItem("token")
    if(to.meta.title) { // @ts-ignore
        document.title = to.meta.title
    }
    if(userId && token){
        //已登录
        if(to.path.includes("/login") || to.path.includes("/repsd") ){
            next("/")
        }
    }else{
        sessionStorage.setItem("navigateLoginPre",from.path)
        if(needLogin.includes(to.path)){
            next("/login")
            ElMessage.warning("请先登录")
        }
    }
    console.log(from.path,to.path)
    if(from.path.includes("/search")) {
      if(!to.path.includes("/tags") || to.path.includes("/tags")){

      }
    }
    

    next()
})


export default  router