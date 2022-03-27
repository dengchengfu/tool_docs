import projectConfig from '/pagic.config.js';
export default {
    'prev': {
        "text": "安装教程",
        "link": "test_pages/installpro.html"
    },
    'next': undefined,
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "test_pages/future.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "test_pages/future.html",
    'title': "未来规划",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>未来规划</h1>\n<p>到了取数的高级层次，GTA目标拆解是数字营销分析中很重要的阶段。但由于各家的拆解方案，指标侧重点各有不同、各有偏好，且遇到大于5000w的人群数量还得切分取数，所以打算最终以一种参数配置的界面呈现出来（初步设想）。</p>\n<p>初期会上线各家都通用的、简单、基础、浅层的取数及目标监控功能，之后逐渐加入各类自定义条件，终极目标是实现GTA的全程自动运算出数。</p>'
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
    'contentTitle': React.createElement("h1", { key: "0" }, "\u672A\u6765\u89C4\u5212"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>到了取数的高级层次，GTA目标拆解是数字营销分析中很重要的阶段。但由于各家的拆解方案，指标侧重点各有不同、各有偏好，且遇到大于5000w的人群数量还得切分取数，所以打算最终以一种参数配置的界面呈现出来（初步设想）。</p>\n<p>初期会上线各家都通用的、简单、基础、浅层的取数及目标监控功能，之后逐渐加入各类自定义条件，终极目标是实现GTA的全程自动运算出数。</p>'
        } }),
    'toc': null,
    'author': "CHENGFU DENG",
    'contributors': [
        "CHENGFU DENG"
    ],
    'date': "2021-11-28T04:11:10.000Z",
    'updated': "2021-11-28T08:38:30.000Z",
    'excerpt': "到了取数的高级层次，GTA目标拆解是数字营销分析中很重要的阶段。但由于各家的拆解方案，指标侧重点各有不同、各有偏好，且遇到大于5000w的人群数量还得切分取数，所以打算最终以一种参数配置的界面呈现出来（初步设想）。 初期...",
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
