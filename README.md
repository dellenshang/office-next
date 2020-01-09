# 启动

[TOC]

##  **项目启动 **

```js
如果你还没有安装Node.js,请先安装Node.js
https://nodejs.org/download/release/v8.14.0/
文件为：node-v8.14.0-x64.msi
版本为：Node.js 8.14.0

将项目git clone下来，在当前路径下

npm i

npm start

```

### 构建

```

npm run build

```

### 代码风格配置

```js

请先安装好 ESLint 和 Prettier 这两款插件

然后再你的settings.json的{}中加入以下配置

"editor.formatOnSave": true,

"vetur.validation.template": false,

"eslint.validate": [

"javascript",{

    "language": "vue",

    "autoFix": true

},"html",

"vue"

]

settings.json 在vscode的File > preferences > settings

然后点右上角的{}符号就可以出现settings.json的文件

配置好的情况下，每次保存就会自动代码format了

// 如果你不喜欢每次保存就自动format的话

// 就是用：alt+shift+F 快捷键来手动Format

// 并去掉这一条

"editor.formatOnSave": true,

```

##  **代码导览 **

### **代码结构**



```scss
项目基于Vue-cli3.0全家桶
技术栈：Vue2.x, Vue-router, Vue-i18n, Vuex, axios, iView, async-validator, SCSS，Svg Sprites

首先请参考项目根目录下的layout.png
从sofront\src\router\routes.js文件能看到目前有两个主要页，主页和登陆页
主页内，sider和header是共用的一个组件，只是sider内容动态显示
页面中路由切换只是content组件的切换

|-public // 构建相关，以及webpack不兼容的第三方库
|-src
| |-api    // 封装好的通信和工具函数
| |-assets  // 静态资源，图片字体等
| |-components  // 页面组件
| | |- BackupData // 项目起初的模拟数据，以后可能根据业务有别的用途，如祝日日期本地生成
| | |- Buttons // 通用的按钮
| | |  |- CreateBottonModals // 追加按钮的动态内容
| | |- Contents    // 内容区域组件
| | |- Header   // 顶部菜单，包含打刻按钮
| | |- sider   // 侧边菜单
| |-config  //环境配置
| |-i18n    // 多语言
| |-router  //
| | |- index // 可以在此设置页面鉴权以及进入和退出每个页面的操作
| | |- routes    // 设置页面的数量
| | |- content // content的切换
| |-store      // Vuex 项目状态管理
| |-styles     // SCSS工程
| |-views      // 页面，目前只有两个
|-test // 测试相关
|-...  //配置文件
```





####  **由于router开启了History 模式 **

```js

// 后端：

            1.这仍然是个单页面应用，因为当 URL 改变时，页面不会重新加载(使用了history.pushState)，所以看起来像个正常的URL但是直接访问的话是会报404的。

            2.所以呢，你要在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回同一个 index.html 页面

例子：

    Apache：

            <IfModule mod_rewrite.c>

            RewriteEngine On

            RewriteBase /

            RewriteRule ^index\.html$ - [L]

            RewriteCond %{REQUEST_FILENAME} !-f

            RewriteCond %{REQUEST_FILENAME} !-d

            RewriteRule . /index.html [L]

            </IfModule>

    nginx：

            location / {

            try_files $uri $uri/ /index.html;

更多详细内容你可以参考：https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90

// 前端：

                你的服务器就不再返回 404 错误页面，因为对于所有response都会返回到 index.html 页面。如果又需求要做404页面的话，请更改现有 * 路由为以下

                  { path: '/404', component: NotFound },

                  { path: '*', redirect: '/404' },

                意思是： if the user is navigated to a path which does not match any routes, it will be redirected to the "404" route, which will contain the "not found" message.

}

```





##  **页面重构指南**

### **页面布局: **

```js
修改整体布局就请在Home.vue的template中修改渲染的逻辑

sofront\src\views\Home.vue
<Header>
   <Menu>
     <VHeader/>  // 组件的形式引入
   </Menu>
</Header>

<Sider>
   <Menu>
     <component :is/>   // 点击header出现相应的动态sider逻辑
   </Menu>
</Sider>

<router-view/>        // content里面的内容通过路由来切换 为文件夹内的register

具体更改请在src\components改对应的组件
```





### **页面用色**

sofront\src\styles\color.scss



##  **代码质量控制**

###  **Vue **

#### 要求文档

```
基础js是满足已规定好的的ESLint 和 Prettier代码风格，比如不能用var, 只能用单引号之类的
规范遵循到必要的，强烈推荐的按喜好，其他的不遵循(强行增加了复杂度)
文档:
https://cn.vuejs.org/v2/style-guide/#%E7%BB%84%E4%BB%B6%E5%90%8D%E4%B8%BA%E5%A4%9A%E4%B8%AA%E5%8D%95%E8%AF%8D-%E5%BF%85%E8%A6%81

其次是考虑组件的可复用性，高度可复用的组件需在目录下的index中统一export出

组件的可复用性,这个可以随着项目进度边做边改，再细分啥的

```

###  **scss **

#### 详细参考styles/readme


###  **其他说明 **