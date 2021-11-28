import projectConfig from '/tool_docs/pagic.config.js';
export default {
    'prev': {
        "text": "巨量云图",
        "link": "test_pages/yuntu.html"
    },
    'next': {
        "text": "未来规划",
        "link": "test_pages/future.html"
    },
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "test_pages/installpro.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "test_pages/installpro.html",
    'title': "安装教程",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>安装教程</h1>\n<p>This page contains the features about markdown supported。</p>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement("link", { crossOrigin: "anonymous", href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css", integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X", rel: "stylesheet" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@17.0.2/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@17.0.2/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/tool_docs/index.js", type: "module" })),
    'footer': React.createElement("footer", { style: {
            textAlign: 'center'
        } }, "\u00A9 CHENGFU"),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u5B89\u88C5\u6559\u7A0B"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>This page contains the features about markdown supported。</p>'
        } }),
    'toc': null,
    'author': "CHENGFU DENG",
    'contributors': [
        "CHENGFU DENG"
    ],
    'date': "2021-11-28T04:11:10.000Z",
    'updated': "2021-11-28T07:50:35.000Z",
    'excerpt': "This page contains the features about markdown supported。",
    'cover': undefined,
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
