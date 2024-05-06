<template>
<UModal v-model="isOpenCreate">
    <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
    <template #header>
        <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                新建文档
            </h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="handleClose" />
        </div>
    </template>
    <div class="mb-12px c-gray-300">选择一个知识库</div>

    <template #footer>
        <UButton
            class="w-full flex items-center justify-center"
            @click="handleSave"
        >
            保存
        </UButton>
    </template>
    </UCard>

</UModal>
</template>

<script setup lang="ts">
import { watchEffect } from "vue";

const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false
    }
})

const handleClose = () => {
    emit('close')
}
defineShortcuts({
    escape: {
        usingInput: true,
        handler: () => {
            handleClose()
        }
    }
})

const isOpenCreate = ref(false);

const bookDesc = ref('')
const bookName = ref('')

const handleSave = () => {
    isOpenCreate.value = false;
    handleClose();
}


const emit = defineEmits(['close']);

watchEffect(() => {
    isOpenCreate.value = props.isOpen;
})
</script>

<style>
</style>