// 基本
const main = name => () => import(`@/components/Contents/Main/${name}`)

// 随時処理
const anytime = name => () =>
  import(`@/components/Contents/AnytimeManegement/${name}`)

// マスタ登録
const master = name => () =>
  import(`@/components/Contents/MasterRegister/${name}`)

// system
const system = name => () =>
  import(`@/components/Contents/SystemManegement/${name}`)

// 有休管理
const happy = name => () =>
  import(`@/components/Contents/HappyTimeManegement/${name}`)

// 申請・承認
const apply = name => () =>
  import(`@/components/Contents/ApplyComfirmation/${name}`)

export const routeMap = {
  '/': main('Lab'),
  'sys/master/emp': master('UserRegister'),

  // 個人申請
  'sys/anytime/apply': anytime('PersonalApply'),
  // バッチ処理
  'sys/anytime/batch': anytime('BatchResolvation'),
  // 個人情報変更
  'sys/anytime/profile': main('profile'),

  // アカウント管理
  'sys/master/user': master('AccountRegister'),
  'sys/master/dept': master('DepartmentRegister'),
  'sys/vacation/mode': happy('HappyTimeConfig'),
  'sys/vacation/view': happy('HappyTimeStatus'),
  'sys/vacation/config': happy('RestTimeConfig'),
  'sys/vacation/output': happy('HappyTimeOutput'),
  'sys/vacation/specialRest': happy('SpecialRest'),

  // ロール管理
  'sys/master/role': master('PermissionRegister'),
  // 所属長設定
  'sys/master/leader': master('MinisterRegister'),
  'sys/master/machine': master('MachineRegister'),
  'sys/master/usertype': master('EmployeeTypeRegister'),
  'sys/master/happyday': master('HolidayRegister'),

  // system
  'sys/settings/menu': master('MenuRegister'),
  'sys/settings/config': system('systemConfiger'),
  'sys/settings/login': system('LoginLog'),
  'sys/settings/access': system('AccessLog'),
  'sys/settings/operation': system('AcitonLog'),
  'sys/settings/error': system('ErrorLog'),

  // 申请承认
  'sys/apply/confirm': apply('ApplyConfirm'),
  'sys/apply/state': apply('ApplyStateCheck')
}
