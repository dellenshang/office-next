# CSS 开发参考

[TOC]


## **1. 整体介绍**





### **1.2 结构**

```scss
|-styles
|-scss            // 组件分类
| |- headers      // 顶部菜单
| |- login        // 登陆页
| |- content      // 内容页，包含header按钮，searchbar布局
| |- sider       // 侧边菜单
| |- components  // 小组件
| |  |- buttons  // 所有按钮，自定义以及iview默认的，包含点开后的步鄹条样式
| |  |- form     // 表单
| |  |- icon     // 图标，为CSS sprite生成后的mixin利用样式
| |  |- table    // 表格
| |  |- utils   // 功能性css以及不好分类的css
|-index // 入口文件
|-color // 整体颜色
|-mixins // 复用的scss
```



#### 1.2.1 入口文件 index.scss

```scss
@import "./reset.scss";
@import "./scss/content.scss";
....
你能在入口文件中将新的scss文件引入
```



#### 1.2.2 功能性css

```scss
比如iview并没有只能选择时间或分钟的时间picker
则可以通过css隐藏其中之一的面板
```





## **2. 注意事项**

### **2.1 CSS该写在哪**



这个Styles文件夹管理所有` 复用` 的样式，包含自定义的` 通用组件样式` 和` 覆盖iview` 的样式，网站一旦打开便会全部加载

所以如果该css并不是`多处复用`的，应该分别写在组件内的scope中，这样才能够在分别各自的画面中才加载该组件的css

```js
例子:

比如打刻按钮的样式就仅写在该文件中

sofront\src\components\Header\VHeader.vue
```



### 2.2 颜色建议使用rgb 或 hsl

```js
👍      rgb(251,146,140) rgba(251,146,140,.9)

👎      rgb(251,146,140) rgb(254,160,170)

👎👎    #FB928C #FEA0AA

// 不能相似颜色只是深浅不一而用不一样的
```

### 2.3 大小单位尽量选择rem

```js
👍   rem是相对根元素html的大小，易于控制

🙂　 px 不具备适应性

👎  em是相对与父级的大小，难以控制　
```



### 2.4 宽高选择vw vh，calc()

```js
👍   vw vh 只在根部及外层元素中使用，内层元素尽量不设置宽度，通过padding来使得页面适应性更好

🙂　 calc() 需要精确计算的部分
🙂   % 百分比其实是运算单位，也可以接受

👎  em是相对与父级的大小，难以控制　
```



### 2.5 避免不必要的div 和grid布局

```js
无意义的div和row col 会加深html，不利于DOM渲染，并且
1000行的html 和500行html维护的代价时不同的

👍 采用flex布局，兼容好，不破化页面流动性

👎  float 造成父元素坍陷，还需要cleanboth
```



### 2.5 资源网站


你能使用这个来转换16进制的颜色：https://www.webfx.com/web-design/hex-to-rgb/

选色网站：http://nipponcolors.com/





## **3. SCSS**

### **3.1 基本用法**

```scss
1. 嵌套虽好，但不应该超过5层，以3层为佳，否则应该考虑选择器是否精确，或者将样式拆分写在别处了
2. color中采用了$变量，让颜色有语意，便于管理
3. 引用父选择符： &
a {
  &:hover { text-decoration: underline; }
  &.i { text-decoration: underline; }
  body & { font-weight: normal; }
}
被编译为：
a {
  a:hover {
    text-decoration: underline; }
  a.i { text-decoration: underline; }
  body a {
    font-weight: normal; }

4.mixins

flex布局mixins已写好，也可以根据需要修改
@mixin flex-row($justify) {
  display: flex;
  flex-flow: row nowrap;
  justify-content: $justify;
  align-items: center
}

a{
  @include flex-row(center）;
}

被编译为：

a{
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center
}

```

更多参考：http://sass.bootcss.com/docs/sass-reference/#including_a_mixin


