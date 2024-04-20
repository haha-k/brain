<template>
<div
    class="
        dashboard-sidebar
        w-298px
        h-100vh
        p-16px
        bg-#fafafa
    "
>
    <div class="
        sidebar-header
        flex
        flex-justify-between
        flex-items-center
    ">
        <div class="header-title flex content-center flex-items-center">
            <img
                class="w-28px h-28px"
                src="https://commonresource-1252524126.cdn.xiaoeknow.com/image/luzo8lg4083p.png"
                alt=""
            >
            <h2
                class="
                    fs-12px
                    c-#fb7185
                    slide-enter-50
                "
            >Brain</h2>
        </div>
        <UAvatar
            size="sm"
            src="https://avatars.githubusercontent.com/u/739984?v=4"
            alt="Avatar"
        />
    </div>
    <div class="search-bar box-border mt-16px mb-16px flex">
        <UInput
            class="mr-12px"
            icon="i-heroicons-magnifying-glass-20-solid"
            size="sm"
            color="rose"
            :trailing="false"
            placeholder="Search..."
        >
            <template #trailing>
                <UKbd
                    class="mr-4px"
                >{{ metaSymbol }}</UKbd>
                <UKbd>K</UKbd>
            </template>
        </UInput>

        <el-dropdown>
            <UButton color="gray" class="flex-1 justify-between">
                <UIcon name="i-heroicons-plus-20-solid" />
            </UButton>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>文档</el-dropdown-item>
                    <el-dropdown-item divided>知识库</el-dropdown-item>
                    <el-dropdown-item divided>导入</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
    <div class="menu__wrapper">
        <NuxtLink
            v-for="(item) in menuList"
            :key="item.key"
            :to="item.to"
        >
            <div
                class="
                    p-8px rd-6px
                    flex items-center h-32px
                    hover:bg-gray-200
                "
                @click="handleClickMenu(item)"
            >
                <UIcon :name="item.icon" />
                    <span class="ml-8px c-#262626">{{ item.label }}</span>
            </div>
        </NuxtLink>
    </div>
    <div class=""></div>
</div>
</template>

<script setup lang="ts">
const { metaSymbol } = useShortcuts()

const current = ref<string[]>(['start']);

const menuList = [
    {
        label: '开始',
        key: 'start',
        icon: 'i-heroicons-clock',
        to: '/dashboard'
    },
    {
        label: '收藏',
        key: 'collect',
        icon: 'i-heroicons-star',
        to: '/dashboard/collections'
    }
]

const handleClickMenu = (item: any) => {
    if(item.key === 'start') {

    } else if(item.key === 'collect') {

    }
}
</script>

<style>
.dashboard-sidebar {

}

.sidebar-header {

}
</style>