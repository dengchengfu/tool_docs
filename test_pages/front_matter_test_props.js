import projectConfig from '/pagic.config.js';
export default {
    'prev': null,
    'next': null,
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "test_pages/front_matter.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "test_pages/front_matter_test.html",
    'title': "Front matter test",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>This is a front matter test page.</p>\n<h2 id="the-front-matter-content">The front matter content<a class="anchor" href="#the-front-matter-content">§</a></h2>\n<pre class="language-yml"><code class="language-yml"><span class="token key atrule">outputPath</span><span class="token punctuation">:</span> test_pages/front_matter_test.html\n<span class="token key atrule">title</span><span class="token punctuation">:</span> Front matter test\n<span class="token key atrule">toc</span><span class="token punctuation">:</span> <span class="token null important">null</span>\n<span class="token key atrule">prev</span><span class="token punctuation">:</span> <span class="token null important">null</span>\n<span class="token key atrule">next</span><span class="token punctuation">:</span> <span class="token null important">null</span>\n</code></pre>'
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
    'contentTitle': undefined,
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>This is a front matter test page.</p>\n<h2 id="the-front-matter-content">The front matter content<a class="anchor" href="#the-front-matter-content">§</a></h2>\n<pre class="language-yml"><code class="language-yml"><span class="token key atrule">outputPath</span><span class="token punctuation">:</span> test_pages/front_matter_test.html\n<span class="token key atrule">title</span><span class="token punctuation">:</span> Front matter test\n<span class="token key atrule">toc</span><span class="token punctuation">:</span> <span class="token null important">null</span>\n<span class="token key atrule">prev</span><span class="token punctuation">:</span> <span class="token null important">null</span>\n<span class="token key atrule">next</span><span class="token punctuation">:</span> <span class="token null important">null</span>\n</code></pre>'
        } }),
    'toc': null,
    'author': "CHENGFU DENG",
    'contributors': [
        "CHENGFU DENG"
    ],
    'date': "2021-11-28T04:11:10.000Z",
    'updated': null,
    'excerpt': "This is a front matter test page. The front matter content outputPath: test_pages/front_matter_test.html title: Front matter test toc: null prev: null next: null ",
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
