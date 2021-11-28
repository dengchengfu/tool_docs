import projectConfig from '/tool_docs/pagic.config.js';
import ReactHooksTest from './react_hooks_test_content.js';
export default {
    'prev': {
        "text": "Front matter test",
        "link": "test_pages/front_matter_test.html"
    },
    'next': {
        "text": "Foo",
        "link": "folder/foo.html"
    },
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
            footer: React.createElement("footer", null,
                "Powered by\u00A0",
                React.createElement("a", { href: "https://github.com/xcatliu/pagic", target: "_blank" }, "Pagic testing")),
            github: 'https://github.com/dengchengfu/tool_docs',
            head: React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
            include: undefined,
            nav: [
                {
                    link: '/tool_docs/introduction/index.html',
                    popover: React.createElement(React.Fragment, null,
                        React.createElement("img", { src: "/assets/wechatpay.jpeg", style: { marginRight: '1rem', verticalAlign: 'top' }, width: "256" })),
                    target: '_blank',
                    text: '赞助作者'
                },
                {
                    link: 'https://pagic.org/',
                    text: '加入微信群'
                },
                {
                    align: 'right',
                    link: '/tool_docs/about/index.html',
                    text: 'About'
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
            port: 8000,
            root: '/tool_docs/',
            serve: false,
            sidebar: {
                '/': [
                    'introduction/README.md',
                    {
                        children: [
                            'test_pages/markdown_test.md',
                            'test_pages/front_matter.md',
                            'test_pages/react_hooks_test.tsx'
                        ],
                        link: 'test_pages/README.md'
                    },
                    {
                        children: [
                            'folder/foo.md',
                            {
                                link: 'folder/bar.md',
                                text: 'Custom sidebar text'
                            }
                        ],
                        text: 'Folder'
                    }
                ]
            },
            srcDir: '.',
            theme: 'docs',
            title: '阿甫工具-说明手册',
            tools: {
                backToTop: true,
                editOnGitHub: true
            },
            watch: false
        }, content: null, footer: React.createElement("footer", null,
            "Powered by\u00A0",
            React.createElement("a", { href: "https://github.com/xcatliu/pagic", target: "_blank" }, "Pagic testing")), head: React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }), layoutPath: "_layout.tsx", outputPath: "test_pages/react_hooks_test.html", pagePath: "test_pages/react_hooks_test.tsx", script: null, title: "React hooks test" }),
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@17.0.2/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@17.0.2/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/tool_docs/index.js", type: "module" })),
    'footer': React.createElement("footer", null,
        "Powered by",
        React.createElement("a", { href: "https://github.com/xcatliu/pagic", target: "_blank" }, "Pagic testing")),
    'sidebar': [
        {
            "text": "Introduction",
            "link": "introduction/index.html",
            "pagePath": "introduction/README.md"
        },
        {
            "link": "test_pages/index.html",
            "children": [
                {
                    "text": "Markdown test",
                    "link": "test_pages/markdown_test.html",
                    "pagePath": "test_pages/markdown_test.md"
                },
                {
                    "text": "Front matter test",
                    "link": "test_pages/front_matter_test.html",
                    "pagePath": "test_pages/front_matter.md"
                },
                {
                    "text": "React hooks test",
                    "link": "test_pages/react_hooks_test.html",
                    "pagePath": "test_pages/react_hooks_test.tsx"
                }
            ],
            "pagePath": "test_pages/README.md",
            "text": "Test pages"
        },
        {
            "text": "Folder",
            "children": [
                {
                    "text": "Foo",
                    "link": "folder/foo.html",
                    "pagePath": "folder/foo.md"
                },
                {
                    "text": "Custom sidebar text",
                    "link": "folder/bar.html",
                    "pagePath": "folder/bar.md"
                }
            ]
        }
    ]
};
