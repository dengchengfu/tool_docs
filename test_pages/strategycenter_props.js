import projectConfig from '/pagic.config.js';
export default {
    'prev': {
        "text": "数据银行",
        "link": "test_pages/databank.html"
    },
    'next': {
        "text": "达摩盘",
        "link": "test_pages/dmp.html"
    },
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "test_pages/strategycenter.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "test_pages/strategycenter.html",
    'title': "策略中心",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>策略中心</h1>\n<h2 id="%E5%8F%96%E6%95%B0%E6%A8%A1%E5%9D%97%E5%A6%82%E4%B8%8B">取数模块如下<a class="anchor" href="#%E5%8F%96%E6%95%B0%E6%A8%A1%E5%9D%97%E5%A6%82%E4%B8%8B">§</a></h2>\n<ul>\n<li>\n<p>品牌增长概览: 品牌表现(销售金额，购买人数，客单价，新品销售金额等)。\n<img src="../assets/stra1.png" alt="品牌表现"></p>\n</li>\n<li>\n<p>消费者细分: 自定义人群画像（全部画像标签）。\n<img src="../assets/stra2.png" alt="消费者细分"></p>\n</li>\n<li>\n<p>相关性分析: 一级/叶子/品牌类目购买偏好。\n<img src="../assets/stra3.png" alt="相关性分析1"></p>\n</li>\n</ul>\n<p><img src="../assets/stra4.png" alt="相关性分析2"></p>\n<ul>\n<li>品牌得失追踪: 得失来源，品牌转换。\n<img src="../assets/stra5.png" alt="品牌得失追踪1"></li>\n</ul>\n<p><img src="../assets/stra6.png" alt="品牌得失追踪2"></p>\n<p><img src="../assets/stra7.png" alt="品牌得失追踪3"></p>\n<ul>\n<li>\n<p>市场概览-趋势：市场概况下各指标的过往趋势数据。\n<img src="../assets/stra8.png" alt="市场概览趋势1"></p>\n</li>\n<li>\n<p>市场概览-详情：市场格局下品牌详情，变化趋势（任选品牌）；单品详情，变化趋势（任选单品）。\n<img src="../assets/stra9.png" alt="市场概览详情1"></p>\n</li>\n</ul>\n<p><img src="../assets/stra10.png" alt="市场概览详情2"></p>\n<p><img src="../assets/stra11.png" alt="市场概览详情3"></p>\n<p><img src="../assets/stra12.png" alt="市场概览详情4"></p>\n<ul>\n<li>市场细分：各分析报告的品牌详情，变化趋势（任选品牌）；单品详情，变化趋势（任选单品）。\n<img src="../assets/stra13.png" alt="市场细分1"></li>\n</ul>\n<p><img src="../assets/stra14.png" alt="市场细分2"></p>\n<p><img src="../assets/stra15.png" alt="市场细分3"></p>'
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
    'contentTitle': React.createElement("h1", { key: "0" }, "\u7B56\u7565\u4E2D\u5FC3"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="%E5%8F%96%E6%95%B0%E6%A8%A1%E5%9D%97%E5%A6%82%E4%B8%8B">取数模块如下<a class="anchor" href="#%E5%8F%96%E6%95%B0%E6%A8%A1%E5%9D%97%E5%A6%82%E4%B8%8B">§</a></h2>\n<ul>\n<li>\n<p>品牌增长概览: 品牌表现(销售金额，购买人数，客单价，新品销售金额等)。\n<img src="../assets/stra1.png" alt="品牌表现"></p>\n</li>\n<li>\n<p>消费者细分: 自定义人群画像（全部画像标签）。\n<img src="../assets/stra2.png" alt="消费者细分"></p>\n</li>\n<li>\n<p>相关性分析: 一级/叶子/品牌类目购买偏好。\n<img src="../assets/stra3.png" alt="相关性分析1"></p>\n</li>\n</ul>\n<p><img src="../assets/stra4.png" alt="相关性分析2"></p>\n<ul>\n<li>品牌得失追踪: 得失来源，品牌转换。\n<img src="../assets/stra5.png" alt="品牌得失追踪1"></li>\n</ul>\n<p><img src="../assets/stra6.png" alt="品牌得失追踪2"></p>\n<p><img src="../assets/stra7.png" alt="品牌得失追踪3"></p>\n<ul>\n<li>\n<p>市场概览-趋势：市场概况下各指标的过往趋势数据。\n<img src="../assets/stra8.png" alt="市场概览趋势1"></p>\n</li>\n<li>\n<p>市场概览-详情：市场格局下品牌详情，变化趋势（任选品牌）；单品详情，变化趋势（任选单品）。\n<img src="../assets/stra9.png" alt="市场概览详情1"></p>\n</li>\n</ul>\n<p><img src="../assets/stra10.png" alt="市场概览详情2"></p>\n<p><img src="../assets/stra11.png" alt="市场概览详情3"></p>\n<p><img src="../assets/stra12.png" alt="市场概览详情4"></p>\n<ul>\n<li>市场细分：各分析报告的品牌详情，变化趋势（任选品牌）；单品详情，变化趋势（任选单品）。\n<img src="../assets/stra13.png" alt="市场细分1"></li>\n</ul>\n<p><img src="../assets/stra14.png" alt="市场细分2"></p>\n<p><img src="../assets/stra15.png" alt="市场细分3"></p>'
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
    'updated': "2021-11-28T09:40:01.000Z",
    'excerpt': "取数模块如下 - 品牌增长概览: 品牌表现(销售金额，购买人数，客单价，新品销售金额等)。 - 消费者细分: 自定义人群画像（全部画像标签）。 - 相关性分析: 一级/叶子/品牌类目购买偏好。 - 品牌得失追踪: 得失来源，品牌转换。...",
    'cover': "../assets/stra1.png",
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
