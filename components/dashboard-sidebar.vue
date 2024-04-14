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
        <USelectMenu
            v-slot="{ open }"
            v-model="selected"
            :options="options"
            :popper="{
                strategy: 'fixed'
            }"
        >
            <UButton color="gray" class="flex-1 justify-between">
                <UIcon name="i-heroicons-plus-20-solid" />
            </UButton>
        </USelectMenu>
    </div>
</div>
</template>

<script setup lang="ts">
const { metaSymbol } = useShortcuts()

const options = ref([
    { id: 1, name: 'Wade Cooper', colors: ['red', 'yellow'] },
    { id: 2, name: 'Arlene Mccoy', colors: ['blue', 'yellow'] },
    { id: 3, name: 'Devon Webb', colors: ['green', 'blue'] },
    { id: 4, name: 'Tom Cook', colors: ['blue', 'red'] },
    { id: 5, name: 'Tanya Fox', colors: ['green', 'red'] },
    { id: 5, name: 'Hellen Schmidt', colors: ['green', 'yellow'] }
])

const selected = ref(options.value[1]);
</script>

<style>
.dashboard-sidebar {

}

.sidebar-header {

}
</style>