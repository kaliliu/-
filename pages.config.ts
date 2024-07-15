import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  globalStyle: {
    navigationStyle: 'default',
    navigationBarTitleText: 'unibest',
    navigationBarBackgroundColor: '#f8f8f8',
    navigationBarTextStyle: 'black',
    backgroundColor: '#FFFFFF',
  },
  easycom: {
    autoscan: true,
    custom: {
      '^wd-(.*)': 'wot-design-uni/components/wd-$1/wd-$1.vue',
      '^(?!z-paging-refresh|z-paging-load-more)z-paging(.*)':
        'z-paging/components/z-paging$1/z-paging$1.vue',
    },
  },
  tabBar: {
    custom: true,
    color: '#999999',
    selectedColor: '#018d71',
    backgroundColor: '#F8F8F8',
    borderStyle: 'black',
    height: '0px',
    fontSize: '0px',
    iconWidth: '0px',
    spacing: '0px',
    list: [
      {
        iconPath: 'static/tabbar/home.png',
        selectedIconPath: 'static/tabbar/homeHL.png',
        pagePath: 'pages/index/index',
        text: '首页',
      },
      {
        iconPath: 'static/tabbar/example.png',
        selectedIconPath: 'static/tabbar/exampleHL.png',
        pagePath: 'pages/about/about',
        text: '关于',
      }

    ],
  },
  pages: [
    {
      path: 'pages/confidentialnfo/confidentialnfo',
      layout: 'default',

      style: {
        navigationBarTitleText: '',
        navigationStyle: 'custom',
      },
    },
    {
      path: 'pages/borrowinReturn/borrowinReturn',
      layout: 'default',
      style: {
        navigationBarTitleText: '',
        navigationStyle: 'custom',
      },
    },

    {
      path: 'pages/distinguish/distinguish',
      layout: 'default',

      style: {
        navigationBarTitleText: '',
        navigationStyle: 'custom',
      },
    },

    {
      path: 'pages/userInfor/userInfor',
      layout: 'default',
      style: {
        navigationBarTitleText: '',
        navigationStyle: 'custom',
      },
    },

    {
      path: 'pages/login/login',
      layout: 'default',

      style: {
        navigationBarTitleText: '登录',
        navigationStyle: 'custom',
      },
    },
    {
      path: 'pages/administratorPsd/administratorPsd',
      layout: 'default',
      style: {
        navigationBarTitleText: '',
        navigationStyle: 'custom',
      },
    },



    {
      path: 'pages/index/index',
      type: 'home',

      layout: 'default',
      style: {
        navigationStyle: 'custom',
        navigationBarTitleText: '首页',
      },
    },
    {
      path: "pages/about/about",
      style: {
        navigationStyle: "custom",
        navigationBarTitleText: "关于"
      }
    },

  ]

})
