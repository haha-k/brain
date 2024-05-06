<template>
  <div class="doc-head-inner h-44px flex items-center justify-between ml-24px mr-24px">
    <div>
        <span
            class=" c-gray-500"
            title="无标题文档"
            >无标题文档</span
        >
    </div>
    <div>
        <UButton color="gray" class="flex-1 justify-between mr-12px">
            分享
        </UButton>
        <UButton color="gray" class="flex-1 justify-between">
            更新
        </UButton>
    </div>
  </div>
  <Editor
    class-name="h-100vh p-48px"
    :on-update="handleUpdate"
    :default-value="content"
    :debounce-duration="2000"
    @debounced-update="update"
    :storage-key="`novel-vue-${docsId}`"
  />
</template>

<script setup lang="ts">
// import { Editor } from "novel-vue";
import { Editor } from "@brain/editor";
import "novel-vue/dist/style.css";
import { useStorage } from "@vueuse/core";

const props = defineProps({
  docsId: {
    type: String,
    default: "",
  },
});

const documentId = computed(() => props.docsId);

const { data } = await useFetch(`/api/docs/${documentId.value}`);

const content = computed(() => {
  return JSON.parse(data.value?.document?.content ?? "{}");
});

watch(
  () => content.value,
  () => {
    const data = useStorage(`novel-vue-${documentId.value}`, "{}");
    data.value = JSON.stringify(content.value);
  },
  { deep: true, immediate: true }
);

async function update(e?: EditorType) {
  if (!e) return;
  const json = e.getJSON();
  await useFetch(`/api/documents/${documentId.value}`, {
    method: "PUT",
    body: JSON.stringify({ content: JSON.stringify(json) }),
  });
}

const emit = defineEmits(["update"]);

const handleUpdate = (e) => {
  emit("update", e);
};
</script>

<style lang="scss" scoped>
.doc-head-inner {

}
</style>