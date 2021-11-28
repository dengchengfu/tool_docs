import projectConfig from '/tool_docs/pagic.config.js';
import ReactHooksTest from './react_hooks_test_content.js';
export default {
    'prev': undefined,
    'next': undefined,
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "test_pages/react_hooks_test.tsx",
    'layoutPath': "_layout.tsx",
    'outputPath': "test_pages/react_hooks_test.html",
    'title': "React hooks test",
    'content': React.createElement(ReactHooksTest, { config: {
            branch: 'main',
            description: 'Use this template to create a Pagic site with the docs theme',
            exclude: [
                '**/.*',
                '**/package.json',
                '**/package-lock.json',
                '**/node_modules',
                'pagic.config.ts',
                'pagic.config.tsx',
                '**/config.gypi',
                '**/CVS',
                '**/npm-debug.log',
                'LICENSE',
                'dist'
            ],
            footer: React.createElement("footer", { style: { textAlign: 'center' } }, "\u00A9 2021 CHENGFU"),
            github: 'https://github.com/dengchengfu/tool_docs',
            include: undefined,
            nav: [
                {
                    link: '/tool_docs/introduction/index.html',
                    popover: React.createElement(React.Fragment, null,
                        React.createElement("img", { src: "../assets/wechatpay.jpeg", style: { marginRight: '1rem', verticalAlign: 'top' }, width: "256" })),
                    target: '_blank',
                    text: '打赏'
                },
                {
                    link: '/tool_docs/introduction/index.html',
                    popover: React.createElement(React.Fragment, null,
                        React.createElement("img", { src: "../assets/wegroup.jpeg", style: { marginRight: '1rem', verticalAlign: 'top' }, width: "256" })),
                    text: '提需求'
                },
                {
                    align: 'right',
                    link: '/tool_docs/about/index.html',
                    text: '关于'
                }
            ],
            outDir: 'dist',
            plugins: [
                'clean',
                'init',
                'md',
                'tsx',
                'script',
                'layout',
                'out',
                'sidebar',
                'prev_next'
            ],
            port: 8001,
            root: '/tool_docs/',
            serve: false,
            sidebar: {
                '/': [
                    'introduction/introdetail.md',
                    {
                        children: [
                            'test_pages/databank.md',
                            'test_pages/strategycenter.md',
                            'test_pages/dmp.md',
                            'test_pages/yuntu.md'
                        ],
                        text: '功能说明'
                    },
                    {
                        link: 'test_pages/installpro.md',
                        text: '安装教程'
                    },
                    {
                        link: 'test_pages/future.md',
                        text: '未来规划'
                    }
                ]
            },
            srcDir: '.',
            theme: 'docs',
            title: '阿甫工具-说明手册',
            tools: {
                backToTop: true
            },
            watch: false
        }, content: null, footer: React.createElement("footer", { style: { textAlign: 'center' } }, "\u00A9 2021 CHENGFU"), head: null, layoutPath: "_layout.tsx", outputPath: "test_pages/react_hooks_test.html", pagePath: "test_pages/react_hooks_test.tsx", script: null, title: "React hooks test" }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@17.0.2/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@17.0.2/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/tool_docs/index.js", type: "module" })),
    'footer': React.createElement("footer", { style: {
            textAlign: 'center'
        } }, "\u00A9 2021 CHENGFU"),
    'sidebar': [
        {
            "text": "介绍",
            "link": "introduction/introdetail.html",
            "pagePath": "introduction/introdetail.md"
        },
        {
            "text": "功能说明",
            "children": [
                {
                    "text": "数据银行",
                    "link": "test_pages/databank.html",
                    "pagePath": "test_pages/databank.md"
                },
                {
                    "text": "策略中心",
                    "link": "test_pages/strategycenter.html",
                    "pagePath": "test_pages/strategycenter.md"
                },
                {
                    "text": "达摩盘",
                    "link": "test_pages/dmp.html",
                    "pagePath": "test_pages/dmp.md"
                },
                {
                    "text": "巨量云图",
                    "link": "test_pages/yuntu.html",
                    "pagePath": "test_pages/yuntu.md"
                }
            ]
        },
        {
            "text": "安装教程",
            "link": "test_pages/installpro.html",
            "pagePath": "test_pages/installpro.md"
        },
        {
            "text": "未来规划",
            "link": "test_pages/future.html",
            "pagePath": "test_pages/future.md"
        }
    ]
};
