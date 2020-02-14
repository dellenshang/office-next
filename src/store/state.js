export default {
  dept: {
    list: {
      deptId: 87,
      parentId: 2,
      code: '484414',
      level: '0.1.2',
      name: '管理本部',
      createUserId: 1,
      createTime: '2019-10-30 11:55:38',
      children: [
        {
          deptId: 159,
          parentId: 87,
          code: '360294',
          level: '0.1.2.87',
          name: '財務経理部',
          createUserId: 1,
          createTime: '2019-10-30 13:45:50',
          children: [
            {
              deptId: 161,
              parentId: 159,
              code: '671743',
              level: '0.1.2.87.159',
              name: '経理室',
              createUserId: 1,
              createTime: '2019-10-30 13:46:21',
              leaderList: []
            },
            {
              deptId: 162,
              parentId: 159,
              code: '768090',
              level: '0.1.2.87.159',
              name: '管理会計室',
              createUserId: 1,
              createTime: '2019-10-30 13:46:38',
              leaderList: []
            }
          ],
          leaderList: []
        },
        {
          deptId: 160,
          parentId: 87,
          code: '265746',
          level: '0.1.2.87',
          name: '人事総務部',
          createUserId: 1,
          createTime: '2019-10-30 13:46:08',
          children: [
            {
              deptId: 163,
              parentId: 160,
              code: '995834',
              level: '0.1.2.87.160',
              name: '人事総務室',
              createUserId: 1,
              createTime: '2019-10-30 13:46:55',
              leaderList: []
            },
            {
              deptId: 164,
              parentId: 160,
              code: '635397',
              level: '0.1.2.87.160',
              name: '人材開発室',
              createUserId: 1,
              createTime: '2019-10-30 13:47:13',
              leaderList: []
            },
            {
              deptId: 165,
              parentId: 160,
              code: '183091',
              level: '0.1.2.87.160',
              name: '人事採用室',
              createUserId: 1,
              createTime: '2019-10-30 13:47:37',
              children: [
                {
                  deptId: 166,
                  parentId: 165,
                  code: '347468',
                  level: '0.1.2.87.160.165',
                  name: 'HRM推進室',
                  createUserId: 1,
                  createTime: '2019-10-30 13:47:53',
                  leaderList: []
                }
              ],
              leaderList: []
            }
          ],
          leaderList: []
        }
      ],
      leaderList: []
    },
    searchList: [
      {
        value: 1,
        label: '日進サイエンティア',
        children: [
          {
            value: 2,
            label: '東京',
            children: [
              {
                value: 82,
                label: 'ソリューション事業本部',
                children: [
                  { value: 100, label: '業務管理室' },
                  { value: 101, label: '人材開発室' },
                  {
                    value: 102,
                    label: '営業本部',
                    children: [
                      { value: 103, label: '導入支援室' },
                      { value: 104, label: '営業第一部' },
                      {
                        value: 105,
                        label: '営業第二部',
                        children: [{ value: 172, label: '第一係' }]
                      }
                    ]
                  },
                  {
                    value: 106,
                    label: 'テクノロジー本部',
                    children: [
                      {
                        value: 107,
                        label: '製品企画部',
                        children: [
                          { value: 109, label: 'SC企画課' },
                          { value: 110, label: '就業開発課' },
                          { value: 111, label: 'UPDS開発課' }
                        ]
                      },
                      {
                        value: 108,
                        label: '製品開発部',
                        children: [
                          { value: 112, label: 'SC開発課' },
                          { value: 113, label: '就業開発課' },
                          { value: 114, label: 'UPDS開発課' }
                        ]
                      }
                    ]
                  },
                  {
                    value: 120,
                    label: 'カスタマーサービス本部',
                    children: [
                      {
                        value: 121,
                        label: '就業サービス部',
                        children: [
                          { value: 122, label: '京都サービス課' },
                          { value: 123, label: '札幌サービス課' },
                          {
                            value: 124,
                            label: '東京サービス課',
                            children: [{ value: 125, label: '第一係' }]
                          }
                        ]
                      },
                      {
                        value: 126,
                        label: 'U-PDSサービス部',
                        children: [
                          { value: 127, label: '京都サービス課' },
                          { value: 128, label: '札幌サービス課' },
                          { value: 129, label: '仙台サービス課' },
                          {
                            value: 130,
                            label: '東京サービス課',
                            children: [
                              { value: 131, label: '第一係' },
                              { value: 132, label: '第二係' }
                            ]
                          }
                        ]
                      },
                      {
                        value: 133,
                        label: 'SCサービス部',
                        children: [
                          { value: 134, label: '東京サービス課' },
                          { value: 135, label: '京都サービス課' }
                        ]
                      },
                      { value: 136, label: 'NHOサービス部' },
                      {
                        value: 137,
                        label: 'ソリューション開発部',
                        children: [
                          { value: 138, label: 'UPDS導入G' },
                          { value: 139, label: 'SC導入G' },
                          { value: 140, label: '就業導入G' },
                          { value: 141, label: 'Web製品導入G' },
                          { value: 142, label: 'UPDS製品G' },
                          { value: 143, label: 'WEB製品G' },
                          { value: 144, label: '新就業G' },
                          { value: 145, label: '構成員G' }
                        ]
                      },
                      {
                        value: 146,
                        label: 'マネージャー（ソリューション本部+仙台）'
                      },
                      {
                        value: 147,
                        label: '東北サービス部',
                        children: [{ value: 148, label: '仙台サービス課' }]
                      }
                    ]
                  },
                  { value: 149, label: 'マーケティング部' }
                ]
              },
              {
                value: 83,
                label: 'システムエンジニアリング事業本部',
                children: [
                  { value: 115, label: 'パートナー推進部' },
                  {
                    value: 116,
                    label: '営業推進部',
                    children: [
                      {
                        value: 150,
                        label: '営業部',
                        children: [
                          { value: 151, label: '第一グループ' },
                          { value: 152, label: '第二グループ' }
                        ]
                      },
                      { value: 153, label: '営業管理室' }
                    ]
                  },
                  {
                    value: 117,
                    label: 'システムエンジニアリング部',
                    children: [{ value: 154, label: '請負推進室' }]
                  }
                ]
              },
              {
                value: 84,
                label: '経営企画本部',
                children: [
                  { value: 155, label: '営業企画部' },
                  { value: 156, label: '製品企画部' }
                ]
              },
              { value: 85, label: '社長室' },
              {
                value: 86,
                label: '新規事業開拓部',
                children: [
                  { value: 157, label: '教育推進室' },
                  { value: 158, label: '新規開拓室' }
                ]
              },
              {
                value: 87,
                label: '管理本部',
                children: [
                  {
                    value: 159,
                    label: '財務経理部',
                    children: [
                      { value: 161, label: '経理室' },
                      { value: 162, label: '管理会計室' }
                    ]
                  },
                  {
                    value: 160,
                    label: '人事総務部',
                    children: [
                      { value: 163, label: '人事総務室' },
                      { value: 164, label: '人材開発室' },
                      {
                        value: 165,
                        label: '人事採用室',
                        children: [{ value: 166, label: 'HRM推進室' }]
                      }
                    ]
                  }
                ]
              },
              { value: 88, label: 'メデイア運営部' },
              { value: 89, label: 'ベトナム事業推進室' }
            ]
          },
          { value: 5, label: '仙台支社' },
          { value: 75, label: '京都支社' },
          { value: 76, label: '札幌支社' },
          { value: 77, label: '日進システムズ' },
          {
            value: 78,
            label: '大連',
            children: [
              { value: 90, label: '综合管理部' },
              { value: 91, label: 'U-job项目' },
              { value: 92, label: '开发部' },
              { value: 93, label: '猎头部' },
              { value: 94, label: '海外事业部' },
              { value: 95, label: '社内BPO' },
              { value: 96, label: '招聘本部' },
              { value: 97, label: '市场运营部' },
              { value: 98, label: '教育培训部' },
              { value: 99, label: '内训部' }
            ]
          },
          {
            value: 79,
            label: '海外組',
            children: [{ value: 173, label: 'テストtest' }]
          },
          {
            value: 80,
            label: '退職',
            children: [
              { value: 167, label: '東京' },
              { value: 168, label: '仙台' },
              { value: 169, label: '京都' },
              { value: 170, label: '日進システムズ' },
              { value: 171, label: '大連' }
            ]
          },
          { value: 81, label: 'システム管理グループ' }
        ]
      }
    ]
  }
}
