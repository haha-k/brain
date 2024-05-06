<template>
    <div class="dashboard__wrapper">
        <book-sidebar></book-sidebar>
        <div class="w-full mh-100vh">
            <!-- <editor></editor> -->
            <notion-editor></notion-editor>
        </div>
    </div>
</template>

<style>
.dashboard__wrapper {
    min-height: 100vh;
    display: flex;
}
</style>