export default defineEventHandler((event) => {
    return [{
        label: '目录1',
        children: [
        {
            label: '目录 1-1',
            children: [
            {
                label: '目录 1-1-1',
                id: '111'
            },
            ],
        },
        ],
    },
    {
        label: '目录2',
        children: [
        {
            label: '目录 2-1',
            children: [
            {
                label: '目录 2-1-1',
                id: '222'
            },
            ],
        },
        {
            label: '目录 2-2',
            children: [
            {
                label: '目录 2-2-1',
                id: '3333'
            },
            ],
        },
        ],
    },
    {
        label: '目录3',
        children: [
        {
            label: '目录 3-1',
            children: [
            {
                label: '目录 3-1-1',
                id: '444'
            },
            ],
        },
        {
            label: '目录 3-2',
            children: [
            {
                label: '目录 3-2-1',
                id: '555'
            },
            ],
        },
        ],
    }]
})