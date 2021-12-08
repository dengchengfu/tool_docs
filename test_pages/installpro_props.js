import projectConfig from '/pagic.config.js';
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
            __html: '<h1>安装教程</h1>\n<ul>\n<li><a href="https://d97gi4px3j.feishu.cn/sheets/shtcnprcQkGea8LdPwZnCdP5rNc?table=tbl4Qq6fbWDifSih&amp;view=vewAQskBlK">插件下载地址</a></li>\n</ul>\n<h2 id="1-%E6%89%93%E5%BC%80%E6%B5%8F%E8%A7%88%E5%99%A8%E6%89%A9%E5%B1%95%E7%A8%8B%E5%BA%8F%E9%A1%B5%E9%9D%A2">1. 打开浏览器扩展程序页面<a class="anchor" href="#1-%E6%89%93%E5%BC%80%E6%B5%8F%E8%A7%88%E5%99%A8%E6%89%A9%E5%B1%95%E7%A8%8B%E5%BA%8F%E9%A1%B5%E9%9D%A2">§</a></h2>\n<p><img src="../assets/install1.png" alt="Step 1"></p>\n<h2 id="2-%E5%BC%80%E5%90%AF%E5%BC%80%E5%8F%91%E8%80%85%E6%A8%A1%E5%BC%8F">2. 开启开发者模式<a class="anchor" href="#2-%E5%BC%80%E5%90%AF%E5%BC%80%E5%8F%91%E8%80%85%E6%A8%A1%E5%BC%8F">§</a></h2>\n<p><img src="../assets/install2.png" alt="Step 2"></p>\n<h2 id="3-%E5%8A%A0%E8%BD%BD%E5%B7%B2%E8%A7%A3%E5%8E%8B%E7%9A%84%E6%89%A9%E5%B1%95%E7%A8%8B%E5%BA%8F-or-%E7%9B%B4%E6%8E%A5%E5%B0%86%E6%8F%92%E4%BB%B6%E6%89%94%E8%BF%9B%E6%B5%8F%E8%A7%88%E5%99%A8">3. 加载已解压的扩展程序 or 直接将插件扔进浏览器<a class="anchor" href="#3-%E5%8A%A0%E8%BD%BD%E5%B7%B2%E8%A7%A3%E5%8E%8B%E7%9A%84%E6%89%A9%E5%B1%95%E7%A8%8B%E5%BA%8F-or-%E7%9B%B4%E6%8E%A5%E5%B0%86%E6%8F%92%E4%BB%B6%E6%89%94%E8%BF%9B%E6%B5%8F%E8%A7%88%E5%99%A8">§</a></h2>\n<p><img src="../assets/install3.png" alt="Step 3"></p>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement("link", { crossOrigin: "anonymous", href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css", integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X", rel: "stylesheet" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@17.0.2/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@17.0.2/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'footer': React.createElement("footer", { style: {
            textAlign: 'center'
        } }, "\u00A9 2021 CHENGFU"),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u5B89\u88C5\u6559\u7A0B"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<ul>\n<li><a href="https://d97gi4px3j.feishu.cn/sheets/shtcnprcQkGea8LdPwZnCdP5rNc?table=tbl4Qq6fbWDifSih&amp;view=vewAQskBlK">插件下载地址</a></li>\n</ul>\n<h2 id="1-%E6%89%93%E5%BC%80%E6%B5%8F%E8%A7%88%E5%99%A8%E6%89%A9%E5%B1%95%E7%A8%8B%E5%BA%8F%E9%A1%B5%E9%9D%A2">1. 打开浏览器扩展程序页面<a class="anchor" href="#1-%E6%89%93%E5%BC%80%E6%B5%8F%E8%A7%88%E5%99%A8%E6%89%A9%E5%B1%95%E7%A8%8B%E5%BA%8F%E9%A1%B5%E9%9D%A2">§</a></h2>\n<p><img src="../assets/install1.png" alt="Step 1"></p>\n<h2 id="2-%E5%BC%80%E5%90%AF%E5%BC%80%E5%8F%91%E8%80%85%E6%A8%A1%E5%BC%8F">2. 开启开发者模式<a class="anchor" href="#2-%E5%BC%80%E5%90%AF%E5%BC%80%E5%8F%91%E8%80%85%E6%A8%A1%E5%BC%8F">§</a></h2>\n<p><img src="../assets/install2.png" alt="Step 2"></p>\n<h2 id="3-%E5%8A%A0%E8%BD%BD%E5%B7%B2%E8%A7%A3%E5%8E%8B%E7%9A%84%E6%89%A9%E5%B1%95%E7%A8%8B%E5%BA%8F-or-%E7%9B%B4%E6%8E%A5%E5%B0%86%E6%8F%92%E4%BB%B6%E6%89%94%E8%BF%9B%E6%B5%8F%E8%A7%88%E5%99%A8">3. 加载已解压的扩展程序 or 直接将插件扔进浏览器<a class="anchor" href="#3-%E5%8A%A0%E8%BD%BD%E5%B7%B2%E8%A7%A3%E5%8E%8B%E7%9A%84%E6%89%A9%E5%B1%95%E7%A8%8B%E5%BA%8F-or-%E7%9B%B4%E6%8E%A5%E5%B0%86%E6%8F%92%E4%BB%B6%E6%89%94%E8%BF%9B%E6%B5%8F%E8%A7%88%E5%99%A8">§</a></h2>\n<p><img src="../assets/install3.png" alt="Step 3"></p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#1-%E6%89%93%E5%BC%80%E6%B5%8F%E8%A7%88%E5%99%A8%E6%89%A9%E5%B1%95%E7%A8%8B%E5%BA%8F%E9%A1%B5%E9%9D%A2" }, "1. \u6253\u5F00\u6D4F\u89C8\u5668\u6269\u5C55\u7A0B\u5E8F\u9875\u9762")),
            React.createElement("li", null,
                React.createElement("a", { href: "#2-%E5%BC%80%E5%90%AF%E5%BC%80%E5%8F%91%E8%80%85%E6%A8%A1%E5%BC%8F" }, "2. \u5F00\u542F\u5F00\u53D1\u8005\u6A21\u5F0F")),
            React.createElement("li", null,
                React.createElement("a", { href: "#3-%E5%8A%A0%E8%BD%BD%E5%B7%B2%E8%A7%A3%E5%8E%8B%E7%9A%84%E6%89%A9%E5%B1%95%E7%A8%8B%E5%BA%8F-or-%E7%9B%B4%E6%8E%A5%E5%B0%86%E6%8F%92%E4%BB%B6%E6%89%94%E8%BF%9B%E6%B5%8F%E8%A7%88%E5%99%A8" }, "3. \u52A0\u8F7D\u5DF2\u89E3\u538B\u7684\u6269\u5C55\u7A0B\u5E8F or \u76F4\u63A5\u5C06\u63D2\u4EF6\u6254\u8FDB\u6D4F\u89C8\u5668")))),
    'author': "CHENGFU DENG",
    'contributors': [
        "CHENGFU DENG"
    ],
    'date': "2021-11-28T04:11:10.000Z",
    'updated': "2021-12-08T02:31:49.000Z",
    'excerpt': " - 插件下载地址 1. 打开浏览器扩展程序页面 2. 开启开发者模式 3. 加载已解压的扩展程序 or 直接将插件扔进浏览器 ",
    'cover': "../assets/install1.png",
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
