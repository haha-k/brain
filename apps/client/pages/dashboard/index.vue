<template>
    <div class="dashboard__wrapper">
        <dashboard-sidebar></dashboard-sidebar>

        <div class="
            dashboard__right_panel
            bg-white w-full mh-100vh
        ">
            <div class="
                dashboard-title
            ">开始</div>
            <div class="quickstart-module__wrapper">
                <div class="QuickStart-module">
                    <div class="QuickStart-module_icon">
                        <svg width="1em" height="1em" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" class="larkui-icon larkui-icon-newdoc-default"><g fill="none" fill-rule="evenodd"><path d="M165.333 14.933c21.208 0 38.4 17.193 38.4 38.4l.001 85.679a59.321 59.321 0 0 0-12.8 0V53.333c0-14.138-11.462-25.6-25.6-25.6h-96c-14.14 0-25.6 11.462-25.6 25.6v128c0 14.139 11.46 25.6 25.6 25.6h70.114a58.24 58.24 0 0 0 3.647 12.802l-73.762-.002c-21.207 0-38.4-17.192-38.4-38.4v-128c0-21.207 17.193-38.4 38.4-38.4h96ZM128 157.333A5.333 5.333 0 0 1 128 168H74.667a5.333 5.333 0 0 1 0-10.667H128Zm32-32A5.333 5.333 0 0 1 160 136H74.667a5.333 5.333 0 0 1 0-10.667H160Zm-5.333-66.666c5.89 0 10.666 4.775 10.666 10.666v16c0 5.891-4.775 10.667-10.666 10.667H80c-5.891 0-10.667-4.776-10.667-10.667v-16c0-5.89 4.776-10.666 10.667-10.666h74.667Z" fill="#585A5A" fill-rule="nonzero"></path><path d="M197.333 150.4c25.92 0 46.934 21.013 46.934 46.933 0 25.92-21.013 46.934-46.934 46.934-25.92 0-46.933-21.013-46.933-46.934 0-25.92 21.013-46.933 46.933-46.933Zm.88 18.773a5.632 5.632 0 0 0-5.632 5.632V191.7l-16.896.001a5.632 5.632 0 1 0 0 11.264h16.895l.001 16.896a5.632 5.632 0 1 0 11.264 0v-16.896h16.896a5.632 5.632 0 1 0 0-11.264h-16.897l.001-16.896a5.632 5.632 0 0 0-5.632-5.632Z" fill="#1672F3"></path></g></svg>
                    </div>
                    <div>
                        <p class="QuickStart-module_title">新建文档</p>
                        <p class="QuickStart-module_desc">文档、数据表</p>
                    </div>
                    <div class="QuickStart-module_iconArraow_qN1NO">
                    </div>
                </div>
                <div class="QuickStart-module">
                    <div class="QuickStart-module_icon">
                        <svg width="1em" height="1em" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" class="larkui-icon larkui-icon-newbook-default"><g fill="none" fill-rule="evenodd"><path d="M135.095 36.265a58.24 58.24 0 0 0-3.647 12.801H86.952v144.537h95.981v-76.615a59.321 59.321 0 0 0 12.801 0v79.006c0 .407-.02.812-.06 1.214l-.037.327.033.2c.031.221.051.447.06.676l.003.23v14.692c0 15.317-12.416 27.734-27.733 27.734H58.013c-13.483 0-24.413-10.93-24.413-24.414 0-.184.002-.369.006-.553l.008-.222-.01-.194-.004-.231V64c0-15.317 12.417-27.733 27.733-27.733l73.762-.002Zm47.838 167.41-124.92.002A12.976 12.976 0 0 0 46.4 210.86v3.8l.01.075c.03.29.04.588.03.892l-.032.626-.008.4c0 6.414 5.2 11.614 11.614 11.614H168c8.247 0 14.933-6.686 14.933-14.934v-9.657ZM76.878 49.066l-15.545.002C53.086 49.067 46.4 55.753 46.4 64v132.739a22.944 22.944 0 0 1 11.614-3.136h18.865V49.066Z" fill="#585A5A" fill-rule="nonzero"></path><path d="M189.333 11.733c25.92 0 46.934 21.013 46.934 46.934 0 25.92-21.013 46.933-46.934 46.933-25.92 0-46.933-21.013-46.933-46.933 0-25.92 21.013-46.934 46.933-46.934Zm.88 18.774a5.632 5.632 0 0 0-5.632 5.632v16.895h-16.896a5.632 5.632 0 0 0 0 11.265h16.895l.001 16.896a5.632 5.632 0 0 0 11.264 0V64.299h16.896a5.632 5.632 0 1 0 0-11.264l-16.897-.001.001-16.895a5.632 5.632 0 0 0-5.632-5.632Z" fill="#00B96B"></path></g></svg>
                    </div>
                    <div>
                        <p class="QuickStart-module_title">新建知识库</p>
                        <p class="QuickStart-module_desc">使用知识库整理知识</p>
                    </div>
                    <div class="QuickStart-module_iconArraow_qN1NO">
                    </div>
                </div>
            </div>

            <div class="
                dashboard-title
            ">文档</div>

            <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
                <el-radio-button v-for="item in items" :label="item.key">{{ item.label }}</el-radio-button>
            </el-radio-group>

            <el-table :data="tableData" style="width: 100%" :show-header="false">
                <el-table-column prop="title" label="Name">
                    <template #default="scope">
                    <div class="flex">
                        <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="larkui-icon larkui-icon-doc-type-default icon-svg index-module_icon_X+ssG index-module_size_wVASz" data-name="DocTypeDefault" style="width: 24px; min-width: 24px; height: 24px;"><g fill="none" fill-rule="evenodd"><path d="M4.75 1.267h10.5a2 2 0 0 1 2 2v13.5a2 2 0 0 1-2 2H4.75a2 2 0 0 1-2-2v-13.5a2 2 0 0 1 2-2Z" stroke="#3471AF" fill="#FFF"></path><path d="M6.3 4.5h7.4a.8.8 0 0 1 .8.8v1.9a.8.8 0 0 1-.8.8H6.3a.8.8 0 0 1-.8-.8V5.3a.8.8 0 0 1 .8-.8Z" fill="#3B8EE3"></path><path d="M14 10.75a.5.5 0 0 1 .09.992l-.09.008H6a.5.5 0 0 1-.09-.992L6 10.75h8Zm-3 3a.5.5 0 0 1 .09.992l-.09.008H6a.5.5 0 0 1-.09-.992L6 13.75h5Z" fill="#9DC6F1" fill-rule="nonzero"></path></g></svg>
                        <span style="margin-left: 10px">{{ scope.row.title }}</span>
                    </div>
                    </template>
                </el-table-column>
                <el-table-column prop="from" label="Address">
                    <template #default="scope">
                    <div class="flex">
                        <span style="margin-left: 10px">{{ scope.row.target.book.user.name }}</span>
                        <span class="ml-8px">/</span>
                        <span style="margin-left: 10px">{{ scope.row.target.book.name }}</span>
                    </div>
                    </template>
                </el-table-column>
                <el-table-column prop="date" label="Date" >
                    <template #default="scope">
                    <div class="flex">
                        <span style="margin-left: 10px">{{ dayjs(scope.row.created_at).format('MM-DD  hh:mm') }}</span>
                    </div>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script setup>
import dayjs from 'dayjs';
import { computed, onMounted } from "vue"

const items = [{
    key: 'edit',
    label: "编辑过",
    content: ''
}, {
    key: 'view',
    label: "浏览过",
    content: ''
}]

const tabPosition = ref('edit')

const editTable = ref([]);

const viewTable = [
    {
        date: '2024-05-03',
        title: '无标题文档',
        target: {

        },
    },
]

onMounted(async () => {
    const { data } = await useFetch('/api/recent')
    const { list } = data.value.data;
    editTable.value = list;
    console.log('%c HAHA-[ editTable.value ]-84', 'font-size:13px; background:pink; color:#bf2c9f;', editTable.value);
    viewTable.value = data.list;
})

const tableData = computed(() => {
    return tabPosition.value === 'edit' ? editTable.value : viewTable.value;
})
console.log('%c HAHA-[ tableData ]-86', 'font-size:13px; background:pink; color:#bf2c9f;', tableData.value);

</script>

<style lang="scss">
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

.dashboard__right_panel {
    padding: 0 36px 0 36px;
}

.quickstart-module__wrapper {
    display: flex;
}

.QuickStart-module {
    display: flex;
    margin-bottom: 28px;
    box-sizing: border-box;
    align-items: center;
    height: 55px;
    min-width: 259px;
    margin-right: 12px;
    border: 1px solid var(--grey-4);
    border-radius: 8px;
    cursor: pointer;
    position: relative;

    &:hover {
        background: var(--grey-1);
    }
}

.QuickStart-module_icon {
    margin: 16px;
    font-size: 22px;
}

.QuickStart-module_title {
    height: 20px;
    font-weight: 500;
    font-size: 14px;
    color: var(--grey-9);
}

.QuickStart-module_desc {
    height: 20px;
    font-weight: 400;
    font-size: 12px;
    color: var(--grey-7);
    line-height: 20px;
}
</style>