<template>
    <div class="dashboard__wrapper">
        <dashboard-sidebar></dashboard-sidebar>
        <div class="w-full mh-100vh p-24px">
            <div class="
                dashboard-title
            ">收藏夹</div>
            <div
                v-for="item in treeData"
                class="flex justify-between w-full h-44px hover:bg-gray-100 items-center cursor-pointer"
                @click="handleSave"
            >
                <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="larkui-icon larkui-icon-book-type-default icon-svg book-icon larkui-tooltip index-module_size_wVASz" group="[object Object]" data-name="BookTypeDefault" style="width: 24px; height: 24px; min-width: 24px;"><g fill="none" fill-rule="evenodd"><path d="M4.75 1.267h10.5a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4.75a2 2 0 0 1-2-2v-14a2 2 0 0 1 2-2Z" fill="#C4DCFF"></path><path d="M4.75 1.267h2.215v18H5.75a3 3 0 0 1-3-3v-13a2 2 0 0 1 2-2Z" fill="#679FF4"></path><path stroke="#397ABD" d="M7.25 1.1v17.667"></path><path stroke="#397ABD" stroke-linecap="round" stroke-linejoin="round" d="M10.85 5.394h3.4"></path><path d="M4.25 1.267h11.5a1.5 1.5 0 0 1 1.5 1.5v14.5a1.5 1.5 0 0 1-1.5 1.5H4.25a1.5 1.5 0 0 1-1.5-1.5v-14.5a1.5 1.5 0 0 1 1.5-1.5Z" stroke="#397ABD"></path></g></svg>
                <span class="flex-1 ml-12px">
                    {{ item.label }}
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
const treeData = ref([]);
onMounted(async () => {
    const { data: bookTreeList } = await useFetch('/api/bookTreeList')
    const { children } = bookTreeList.value[0]
    treeData.value = children;
})

const handleSave = () => {
    const router = useRouter()
    router.push({ path: `/book/${Math.random()*1000}`});
}

</script>

<style>
.dashboard__wrapper {
    min-height: 100vh;
    display: flex;
}

.dashboard-title {
    font-weight: 500;
    font-size: 18px;
    color: var(--grey-9);
    margin: 24px 0;
}
</style>