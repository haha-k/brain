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
                    background="bg-gray-100 dark:bg-gray-80"
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
</div>
</template>

<script setup lang="ts">
const { metaSymbol } = useShortcuts()

</script>

<style>
.dashboard-sidebar {

}

.sidebar-header {

}
</style>