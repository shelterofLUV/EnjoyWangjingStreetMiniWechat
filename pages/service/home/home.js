// pages/service/home/home.js
const app = getApp();
Component({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    categories: [{
        "title": "功能类别1",
        "iconColor": "orange",
        elements: [{
            title: '电费',
            name: 'layout',
            color: 'cyan',
            icon: 'newsfill',
            url: 'https://www.baidu.com'
          },
          {
            title: '水费',
            name: 'background',
            color: 'blue',
            icon: 'servicefill',
            url: 'https://www.baidu.com'
          },

          {
            title: '其他费 ',
            name: 'icon',
            color: 'mauve',
            icon: 'post',
            url: 'https://www.baidu.com'
          },
        ],
      },
      {
        "title": "功能类别2",
        "iconColor": "blue",
        elements: [{
            title: '邻里空间',
            name: 'background',
            color: 'blue',
            icon: 'servicefill',
            url: '/pages/community/appointment/playroom/playroom'
          },
          {
            title: '在线咨询 ',
            name: 'icon',
            color: 'pink',
            icon: 'post',
            url: '/pages/community/consult/form'
          },
          {
            title: '意见反馈 ',
            name: 'icon',
            color: 'brown',
            icon: 'post',
            url: '/pages/community/feedback/feedback'
          },
        ],
      },
      {
        "title": "功能类别3",
        "iconColor": "green",
        elements: [{
            title: '便民电话',
            name: 'layout',
            color: 'red',
            icon: 'newsfill',
            url: '/pages/community/phone/phone'
          },
          {
            title: '信息填报',
            name: 'background',
            color: 'orange',
            icon: 'servicefill',
            url: '/pages/community/report/report'
          },
          {
            title: '咨询服务',
            name: 'text',
            color: 'yellow',
            icon: 'group',
            url: '/pages/community/consult/consult'
          },
          {
            title: '预约服务',
            name: 'icon',
            color: 'olive',
            icon: 'post',
            url: '/pages/community/appointment/appointment'
          },
          {
            title: '居民服务',
            name: 'icon',
            color: 'green',
            icon: 'post',
            url: '/pages/community/repair/repair'
          },
          {
            title: '社区活动',
            name: 'icon',
            color: 'cyan',
            icon: 'post',
            url: '/pages/community/activity/activity'
          },
          {
            title: '社区通知',
            name: 'icon',
            color: 'blue',
            icon: 'post',
            url: '/pages/community/notice/notice'
          },
          {
            title: '我的收藏',
            name: 'icon',
            color: 'purple',
            icon: 'post',
            url: '/pages/user/myfaver/myfaver'
          },
          {
            title: '我的消息',
            name: 'icon',
            color: 'mauve',
            icon: 'post',
            url: '/pages/user/mymessage/mymessage'
          }, {
            title: '我的工单',
            name: 'icon',
            color: 'pink',
            icon: 'post',
            url: '/pages/user/myorder/myorder'
          }, {
            title: '我的反馈',
            name: 'icon',
            color: 'brown',
            icon: 'post',
            url: '/pages/user/myfeedback/myfeedback'
          }, {
            title: '我的预约',
            name: 'icon',
            color: 'grey',
            icon: 'post',
            url: '/pages/user/myappointment/myappointment'
          },
        ]
      }
    ]
  },
  methods: {
    searchIcon(e) {
      console.log("搜索....")
    },
  }
})