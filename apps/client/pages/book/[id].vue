<template>
    <div class="dashboard__wrapper">
        <book-sidebar
            @change-tree="handleChangeTree"
        ></book-sidebar>
        <div class="w-full mh-100vh overflow-auto">
            <notion-editor
                @update="handleUpdate"
            ></notion-editor>
        </div>
    </div>
</template>

<script>
const handleUpdate = (e) => {
    console.log('%c HAHA-[ e ]-15', 'font-size:13px; background:pink; color:#bf2c9f;', e);
}

const handleChangeTree = () => {

}
</script>

<style>
.dashboard__wrapper {
    min-height: 100vh;
    display: flex;
}
</style>