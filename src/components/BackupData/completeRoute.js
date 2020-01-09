export default [
  {
    menuId: 1,
    parentId: 0,
    name: 'システム',
    url: null,
    perms: null,
    type: 0,
    level: '0',
    icon: 'i-system',
    componentName: null,
    toChildUrl: null,
    orderNum: 99,
    children: [
      {
        menuId: 39,
        parentId: 1,
        name: '随時処理',
        url: 'sys/anytime',
        perms: null,
        type: 0,
        level: '0.1',
        icon: null,
        componentName: null,
        toChildUrl: '/sys/anytime/apply',
        orderNum: 0,
        children: [
          {
            menuId: 65,
            parentId: 39,
            name: '個人申請',
            url: 'sys/anytime/apply',
            perms: 'sys:anytime:apply:list',
            type: 1,
            level: '0.1.39',
            icon: 'i-apply',
            componentName: null,
            toChildUrl: null,
            orderNum: 96,
            actions: 'list'
          },
          {
            menuId: 48,
            parentId: 39,
            name: 'バッチ処理',
            url: 'sys/anytime/batch',
            perms: 'sys:anytime:batch:list',
            type: 1,
            level: '0.1.39',
            icon: 'i-batch',
            componentName: null,
            toChildUrl: null,
            orderNum: 98,
            actions: 'happybatch:list:applybatch:deptbatch'
          },
          {
            menuId: 40,
            parentId: 39,
            name: '個人情報変更',
            url: 'sys/anytime/profile',
            perms: 'sys:anytime:profile:list',
            type: 1,
            level: '0.1.39',
            icon: 'i-profile',
            componentName: null,
            toChildUrl: null,
            orderNum: 99,
            actions: 'list:infoUpdate:customize:passwordUpdate'
          }
        ]
      },
      {
        menuId: 2,
        parentId: 1,
        name: '有休管理',
        url: null,
        perms: null,
        type: 0,
        level: '0.1',
        icon: 'i-vacation',
        componentName: null,
        toChildUrl: '/sys/vacation/view',
        orderNum: 99,
        children: [
          {
            menuId: 16,
            parentId: 2,
            name: '有休設定管理',
            url: 'sys/vacation/mode',
            perms: 'sys:vacation:mode:list',
            type: 1,
            level: '0.1.2',
            icon: 'i-vacation-mode',
            componentName: null,
            toChildUrl: null,
            orderNum: 81,
            actions: 'save:list'
          },
          {
            menuId: 17,
            parentId: 2,
            name: '有休取得一覧',
            url: 'sys/vacation/view',
            perms: 'sys:vacation:view:list',
            type: 1,
            level: '0.1.2',
            icon: 'i-vacation-view',
            componentName: null,
            toChildUrl: null,
            orderNum: 88,
            actions: 'list'
          },
          {
            menuId: 53,
            parentId: 2,
            name: '休暇申請設定',
            url: 'sys/vacation/config',
            perms: 'sys:vacation:config:list',
            type: 1,
            level: '0.1.2',
            icon: 'i-rest-config',
            componentName: null,
            toChildUrl: null,
            orderNum: 91,
            actions: 'update:list:delete:add'
          },
          {
            menuId: 67,
            parentId: 2,
            name: '年次有休出力',
            url: 'sys/vacation/output',
            perms: 'sys:vacation:output:list',
            type: 1,
            level: '0.1.2',
            icon: 'i-happy-output',
            componentName: null,
            toChildUrl: null,
            orderNum: 99,
            actions: 'list'
          }
        ]
      },
      {
        menuId: 3,
        parentId: 1,
        name: 'マスタ登録',
        url: null,
        perms: null,
        type: 0,
        level: '0.1',
        icon: 'i-master',
        componentName: null,
        toChildUrl: '/sys/master/user',
        orderNum: 99,
        children: [
          {
            menuId: 7,
            parentId: 3,
            name: 'アカウント管理',
            url: 'sys/master/user',
            perms: 'sys:master:user:list',
            type: 1,
            level: '0.1.3',
            icon: 'i-user',
            componentName: null,
            toChildUrl: null,
            orderNum: 99,
            actions: 'save:list:delete:update'
          },
          {
            menuId: 8,
            parentId: 3,
            name: '所属管理',
            url: 'sys/master/dept',
            perms: 'sys:master:dept:list',
            type: 1,
            level: '0.1.3',
            icon: 'i-dept',
            componentName: null,
            toChildUrl: null,
            orderNum: 99,
            actions: 'list'
          },
          {
            menuId: 10,
            parentId: 3,
            name: '権限管理',
            url: 'sys/master/role',
            perms: 'sys:master:role:list',
            type: 1,
            level: '0.1.3',
            icon: 'i-role',
            componentName: null,
            toChildUrl: null,
            orderNum: 99,
            actions: 'update:delete:list:save'
          },
          {
            menuId: 11,
            parentId: 3,
            name: '社員管理',
            url: 'sys/master/emp',
            perms: 'sys:master:emp:list',
            type: 1,
            level: '0.1.3',
            icon: 'i-employ',
            componentName: null,
            toChildUrl: null,
            orderNum: 99,
            actions: 'list:delete:save:update'
          },
          {
            menuId: 19,
            parentId: 3,
            name: '所属長設定',
            url: 'sys/master/leader',
            perms: 'sys:master:leader:list',
            type: 1,
            level: '0.1.3',
            icon: 'i-leader',
            componentName: null,
            toChildUrl: null,
            orderNum: 99,
            actions: 'list:update'
          }
        ]
      },
      {
        menuId: 4,
        parentId: 1,
        name: 'セッティング',
        url: null,
        perms: null,
        type: 0,
        level: '0.1',
        icon: 'i-settings',
        componentName: null,
        toChildUrl: '/sys/settings/menu',
        orderNum: 99,
        children: [
          {
            menuId: 14,
            parentId: 4,
            name: '操作ログ',
            url: 'sys/settings/operation',
            perms: 'sys:settings:operation:list',
            type: 1,
            level: '0.1.4',
            icon: 'i-operation-log',
            componentName: null,
            toChildUrl: null,
            orderNum: 92,
            actions: 'list'
          },
          {
            menuId: 15,
            parentId: 4,
            name: 'エラーログ',
            url: 'sys/settings/error',
            perms: 'sys:settings:error:list',
            type: 1,
            level: '0.1.4',
            icon: 'i-error-log',
            componentName: null,
            toChildUrl: null,
            orderNum: 93,
            actions: 'list'
          },
          {
            menuId: 6,
            parentId: 4,
            name: 'メニュー管理',
            url: 'sys/settings/menu',
            perms: 'sys:settings:menu:list',
            type: 1,
            level: '0.1.4',
            icon: 'i-menu',
            componentName: null,
            toChildUrl: null,
            orderNum: 99,
            actions: 'list'
          },
          {
            menuId: 9,
            parentId: 4,
            name: 'セッティング',
            url: 'sys/settings/config',
            perms: 'sys:settings:config:list',
            type: 1,
            level: '0.1.4',
            icon: 'i-config',
            componentName: null,
            toChildUrl: null,
            orderNum: 99,
            actions: 'list:update:add:delete'
          },
          {
            menuId: 12,
            parentId: 4,
            name: 'ログインログ',
            url: 'sys/settings/login',
            perms: 'sys:settings:login:list',
            type: 1,
            level: '0.1.4',
            icon: 'i-login-log',
            componentName: null,
            toChildUrl: null,
            orderNum: 99,
            actions: 'list'
          },
          {
            menuId: 13,
            parentId: 4,
            name: 'アクセスログ',
            url: 'sys/settings/access',
            perms: 'sys:settings:access:list',
            type: 1,
            level: '0.1.4',
            icon: 'i-access-log',
            componentName: null,
            toChildUrl: null,
            orderNum: 99,
            actions: 'list'
          }
        ]
      },
      {
        menuId: 5,
        parentId: 1,
        name: '申請・承認',
        url: null,
        perms: null,
        type: 0,
        level: '0.1',
        icon: 'i-apply',
        componentName: null,
        toChildUrl: '/sys/apply/confirm',
        orderNum: 99,
        children: [
          {
            menuId: 64,
            parentId: 5,
            name: '申請承認',
            url: 'sys/apply/confirm',
            perms: 'sys:apply:confirm:list',
            type: 1,
            level: '0.1.5',
            icon: 'i-apply-confirm',
            componentName: null,
            toChildUrl: null,
            orderNum: 98,
            actions: 'list'
          },
          {
            menuId: 18,
            parentId: 5,
            name: '申請状況一覧',
            url: 'sys/apply/state',
            perms: 'sys:apply:state:list',
            type: 1,
            level: '0.1.5',
            icon: 'i-apply-record',
            componentName: null,
            toChildUrl: null,
            orderNum: 99,
            actions: 'list'
          }
        ]
      }
    ]
  }
]
