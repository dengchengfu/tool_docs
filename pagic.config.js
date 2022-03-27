export default {
    srcDir: '.',
    exclude: ['LICENSE'],
    theme: 'docs',
    plugins: ['sidebar', 'prev_next'],
    title: '阿甫工具-说明手册',
    description: 'Use this template to create a Pagic site with the docs theme',
    github: 'https://github.com/dengchengfu/tool_docs',
    // To use jsx syntax, please rename this file to pagic.config.tsx
    //head: <>
    //   <link rel="icon" type="image/png" href="/favicon.png" />
    //   <script src="/assets/custom.js" />
    // </>,
    //head: <link rel="icon" type="image/png" href="/favicon.png" />,
    nav: [
        {
            text: '打赏',
            //link: 'introduction/index.html',
            target: '_blank',
            popover: (React.createElement(React.Fragment, null,
                React.createElement("img", { src: "../assets/wechatpay.jpeg", width: "256", style: { marginRight: '1rem', verticalAlign: 'top' } }))),
        },
        {
            text: '提需求',
            popover: (React.createElement(React.Fragment, null,
                React.createElement("img", { src: "../assets/wegroup.jpeg", width: "256", style: { marginRight: '1rem', verticalAlign: 'top' } }))),
        },
        {
            text: '关于',
            link: '/about/index.html',
            align: 'right',
        },
    ],
    sidebar: {
        '/': [
            'introduction/introdetail.md',
            {
                text: '功能说明',
                children: [
                    'test_pages/databank.md',
                    'test_pages/strategycenter.md',
                    'test_pages/dmp.md',
                    'test_pages/yuntu.md'
                    //{
                    // text: 'Custom sidebar text',
                    //  link: 'folder/bar.md'
                    //},
                ]
            },
            {
                text: '安装教程',
                link: 'test_pages/installpro.md'
            },
            {
                text: '未来规划',
                link: 'test_pages/future.md'
            },
        ],
    },
    tools: {
        //editOnGitHub: true,
        backToTop: true,
    },
    footer: (React.createElement("footer", { style: { textAlign: 'center' } }, "\u00A9 2022 CHENGFU")),
    port: 8080,
};
