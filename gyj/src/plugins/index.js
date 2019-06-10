export default {
    install(Vue){
        Vue.component("myHeader",()=>import("@/components/myHeader.vue"))
    }
}