import projectConfig from '/tool_docs/pagic.config.js';
export default {
    'prev': {
        "text": "达摩盘",
        "link": "test_pages/dmp.html"
    },
    'next': {
        "text": "安装教程",
        "link": "test_pages/installpro.html"
    },
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "test_pages/yuntu.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "test_pages/yuntu.html",
    'title': "巨量云图",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>巨量云图</h1>\n<h2 id="%E5%8F%96%E6%95%B0%E6%A8%A1%E5%9D%97%E5%A6%82%E4%B8%8B">取数模块如下<a class="anchor" href="#%E5%8F%96%E6%95%B0%E6%A8%A1%E5%9D%97%E5%A6%82%E4%B8%8B">§</a></h2>\n<ul>\n<li>5A关系资产: 用户趋势, 触点分布, 人群画像。</li>\n<li>5A关系流转: 概览, 流转分析。</li>\n<li>自定义人群: 基础画像, 内容偏好, 行业偏好。</li>\n<li>自定义内容洞察: 整体趋势, 热门内容, 热门评论。</li>\n<li>投后结案: 流量/创意分析, 人群分析, 品牌情感。</li>\n</ul>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement("link", { crossOrigin: "anonymous", href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css", integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X", rel: "stylesheet" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@17.0.2/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@17.0.2/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/tool_docs/index.js", type: "module" })),
    'footer': React.createElement("footer", { style: {
            textAlign: 'center'
        } }, "\u00A9 2021 CHENGFU"),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u5DE8\u91CF\u4E91\u56FE"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="%E5%8F%96%E6%95%B0%E6%A8%A1%E5%9D%97%E5%A6%82%E4%B8%8B">取数模块如下<a class="anchor" href="#%E5%8F%96%E6%95%B0%E6%A8%A1%E5%9D%97%E5%A6%82%E4%B8%8B">§</a></h2>\n<ul>\n<li>5A关系资产: 用户趋势, 触点分布, 人群画像。</li>\n<li>5A关系流转: 概览, 流转分析。</li>\n<li>自定义人群: 基础画像, 内容偏好, 行业偏好。</li>\n<li>自定义内容洞察: 整体趋势, 热门内容, 热门评论。</li>\n<li>投后结案: 流量/创意分析, 人群分析, 品牌情感。</li>\n</ul>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%8F%96%E6%95%B0%E6%A8%A1%E5%9D%97%E5%A6%82%E4%B8%8B" }, "\u53D6\u6570\u6A21\u5757\u5982\u4E0B")))),
    'author': "CHENGFU DENG",
    'contributors': [
        "CHENGFU DENG"
    ],
    'date': "2021-11-28T04:11:10.000Z",
    'updated': "2021-11-28T09:23:06.000Z",
    'excerpt': "取数模块如下 - 5A关系资产: 用户趋势, 触点分布, 人群画像。 - 5A关系流转: 概览, 流转分析。 - 自定义人群: 基础画像, 内容偏好, 行业偏好。 - 自定义内容洞察: 整体趋势, 热门内容, 热门评论。 - 投后结案: 流量/创意分析, ...",
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
