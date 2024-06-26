import { React } from 'https://deno.land/x/pagic@v1.5.1/mod.ts';

export default {
  srcDir: '.',
  exclude: ['LICENSE'],
  theme: 'docs',
  plugins: ['sidebar', 'prev_next'],
  title: '阿甫工具-说明手册',
  description: 'The introduction document of the Data Tool which aims for accelerating digital marketing operation.',
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
      popover: (
        <>
          <img src="../assets/wechatpay.jpeg" width="256" style={{ marginRight: '1rem', verticalAlign: 'top'}} />
        </>
      ),
    },
    {
      text: '联系我',
      popover: (
        <>
          <img src="../assets/wegroup.jpeg" width="256" style={{ marginRight: '1rem', verticalAlign: 'top'}} />
        </>
      ),
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

  footer: (
    <footer style={{textAlign: 'center'}}>
    © 2024 CHENGFU
    </footer>
  ),

  port: 8080,
};
