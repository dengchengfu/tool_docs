import projectConfig from '/pagic.config.js';
export default {
    'prev': undefined,
    'next': undefined,
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "about/README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "about/index.html",
    'title': "更新日志",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>更新日志</h1>\n<ul>\n<li>\n<p>2022-03-27: 调整策略中心-人群画像导出格式。</p>\n</li>\n<li>\n<p>2022-03-20: 新增京东数坊人群管理-人群列表导出。</p>\n</li>\n<li>\n<p>2022-03-01: 取消巨量云图-5A关系流转导出（修复中）。</p>\n</li>\n<li>\n<p>2022-02-09: 新增巨量云图-粉丝数据概览-人群画像导出。</p>\n</li>\n<li>\n<p>2021-11-24: 新增策略中心-市场模块数据导出。</p>\n</li>\n<li>\n<p>2021-11-22: 终于想起来要写个产品更新文档。</p>\n</li>\n</ul>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement("link", { crossOrigin: "anonymous", href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css", integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X", rel: "stylesheet" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@17.0.2/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@17.0.2/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'footer': React.createElement("footer", { style: {
            textAlign: 'center'
        } }, "\u00A9 2022 CHENGFU"),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u66F4\u65B0\u65E5\u5FD7"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<ul>\n<li>\n<p>2022-03-27: 调整策略中心-人群画像导出格式。</p>\n</li>\n<li>\n<p>2022-03-20: 新增京东数坊人群管理-人群列表导出。</p>\n</li>\n<li>\n<p>2022-03-01: 取消巨量云图-5A关系流转导出（修复中）。</p>\n</li>\n<li>\n<p>2022-02-09: 新增巨量云图-粉丝数据概览-人群画像导出。</p>\n</li>\n<li>\n<p>2021-11-24: 新增策略中心-市场模块数据导出。</p>\n</li>\n<li>\n<p>2021-11-22: 终于想起来要写个产品更新文档。</p>\n</li>\n</ul>'
        } }),
    'toc': null,
    'author': "CHENGFU DENG",
    'contributors': [
        "CHENGFU DENG"
    ],
    'date': "2021-11-28T04:11:10.000Z",
    'updated': "2022-03-27T06:50:38.000Z",
    'excerpt': " - 2022-03-27: 调整策略中心-人群画像导出格式。 - 2022-03-20: 新增京东数坊人群管理-人群列表导出。 - 2022-03-01: 取消巨量云图-5A关系流转导出（修复中）。 - 2022-02-09: 新增巨量云图-粉丝数据概览-人群画像导出。 - 20...",
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
