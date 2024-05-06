export default defineNuxtRouteMiddleware((to, from) => {
    console.log('我是全局自动导入的', to, from)
    // 访问未定义路由跳转首页
    if(to.fullPath === '/') {
        return navigateTo('/dashboard')
    }
    if (!to.matched.length) {
        return navigateTo('/dashboard')
    }
})