export default {
  msg: 'リクエスト成功',
  code: 0,
  data: [
    {
      menuId: 1,
      parentId: 0,
      name: 'システム',
      url: null,
      perms: null,
      type: 0,
      level: '0',
      icon: 'system',
      componentName: null,
      toChildUrl: '/',
      orderNum: 0,
      actions: null,
      children: [
        {
          menuId: 2,
          parentId: 1,
          name: '有休管理',
          url: 'sys/vacation',
          perms: null,
          type: 1,
          level: '0.1',
          icon: 'vacation',
          componentName: null,
          toChildUrl: '/',
          orderNum: 0,
          actions: 'list'
        },
        {
          menuId: 3,
          parentId: 1,
          name: 'マスタ登録',
          url: 'sys/master',
          perms: null,
          type: 1,
          level: '0.1',
          icon: 'master',
          componentName: null,
          toChildUrl: '/',
          orderNum: 0,
          actions: 'list',
          children: [
            {
              menuId: 5,
              parentId: 3,
              name: 'メニュー管理',
              url: 'sys/master/menu',
              perms: null,
              type: 1,
              level: '0.1.3',
              icon: 'menu',
              componentName: null,
              toChildUrl: '/',
              orderNum: 0,
              actions: 'list'
            },
            {
              menuId: 6,
              parentId: 3,
              name: 'アカウント管理',
              url: 'sys/master/user',
              perms: null,
              type: 1,
              level: '0.1.3',
              icon: 'user',
              componentName: null,
              toChildUrl: '/',
              orderNum: 0,
              actions: 'list'
            },
            {
              menuId: 7,
              parentId: 3,
              name: '所属管理',
              url: 'sys/master/dept',
              perms: null,
              type: 1,
              level: '0.1.3',
              icon: 'dept',
              componentName: null,
              toChildUrl: '/',
              orderNum: 0,
              actions: 'list'
            },
            {
              menuId: 8,
              parentId: 3,
              name: 'セッティング',
              url: 'sys/master/config',
              perms: null,
              type: 1,
              level: '0.1.3',
              icon: 'config',
              componentName: null,
              toChildUrl: '/',
              orderNum: 0,
              actions: 'list'
            },
            {
              menuId: 26,
              parentId: 3,
              name: '社員管理',
              url: 'sys/master/emp',
              perms: null,
              type: 1,
              level: '0.1.3',
              icon: 'employ',
              componentName: null,
              toChildUrl: '/',
              orderNum: 0,
              actions: 'list'
            }
          ]
        },
        {
          menuId: 4,
          parentId: 1,
          name: 'セッティング',
          url: 'sys/settings',
          perms: null,
          type: 1,
          level: '0.1',
          icon: 'settings',
          componentName: null,
          toChildUrl: '/',
          orderNum: 0,
          actions: 'list',
          children: [
            {
              menuId: 9,
              parentId: 4,
              name: 'ログ管理',
              url: 'sys/settings/log',
              perms: null,
              type: 1,
              level: '0.1.4',
              icon: 'log',
              componentName: null,
              toChildUrl: '/',
              orderNum: 0,
              actions: 'list',
              children: [
                {
                  menuId: 10,
                  parentId: 9,
                  name: 'ログインログ',
                  url: 'sys/settings/log/login',
                  perms: null,
                  type: 1,
                  level: '0.1.4.9',
                  icon: 'login-log',
                  componentName: null,
                  toChildUrl: '/',
                  orderNum: 0,
                  actions: 'list'
                },
                {
                  menuId: 11,
                  parentId: 9,
                  name: 'アクセスログ',
                  url: 'sys/settings/log/access',
                  perms: null,
                  type: 1,
                  level: '0.1.4.9',
                  icon: 'access-log',
                  componentName: null,
                  toChildUrl: '/',
                  orderNum: 0,
                  actions: 'list'
                },
                {
                  menuId: 12,
                  parentId: 9,
                  name: '操作ログ',
                  url: 'sys/settings/log/operation',
                  perms: null,
                  type: 1,
                  level: '0.1.4.9',
                  icon: 'operation-log',
                  componentName: null,
                  toChildUrl: '/',
                  orderNum: 0,
                  actions: 'list'
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
