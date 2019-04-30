# h-list

#### 如果本项目对你有帮助，请不要吝啬你的star

## 安装

```javascript

// 克隆项目

git clone --depth=1 git@github.com:Bruce-zxy/h-list.git h-list

// 安装项目

yarn add @hadesz/h-list

// or

npm i -D @hadesz/h-list

```
## 使用

```javascript

// 引用(ES6+)

import HList from "@hadesz/h-list";

// 使用方式

// Step 1:

const action = [{
    text: "编辑",
    action: () => {
        console.log('BJ');
    }
}, {
    text: "确认",
    action: () => {
        console.log('QR');
    }
}, {
    text: "取消",
    action: () => {
        console.log('QX');
    }
}]

// Step 2:

const datas = [{
    title: "1这是一个超长的标题有多长呢我也不知道所以就是超长的",
    labels: [{ text: "标签1" }, { text: "标签1" }, { text: "标签1" }, { text: "标签1" }, { text: "标签1" }, { text: "标签1" }, { text: "标签1" }, { text: "标签1" }],
    currPrice: "￥23333.22",
    origPrice: "￥0.01",
    thumbnail: "http://xvhweb.jxxnhjq.com/Content/official-new/img/section1.jpg",
    extra: "这也是一个超长的文本，具体有多长呢，我也不知道，但是我想试一试能不能自动溢出",
    action: action
}, {
    title: "2这是一个超长的标题有多长呢我也不知道所以就是超长的",
    // labels: [{text:"标签2"}, {text:"标签2"}, {text:"标签2"}, {text:"标签2"}, {text:"标签2"}, {text:"标签2"}, {text:"标签2"}, {text:"标签2"}], 
    currPrice: "￥23333.22",
    origPrice: "￥0.01",
    thumbnail: "http://xvhadmin.jxxnhjq.com/Content/website/myimg/Group11.png",
    extra: "这也是一个超长的文本，具体有多长呢，我也不知道，但是我想试一试能不能自动溢出",
    action: action
}, {
    title: "3这是一个超长的标题有多长呢我也不知道所以就是超长的3这是一个超长的标题有多长呢我也不知道所以就是超长的",
    labels: [{ text: "标签3" }, { text: "标签3" }, { text: "标签3" }, { text: "标签3" }, { text: "标签3" }, { text: "标签3" }, { text: "标签3" }, { text: "标签3" }],
    currPrice: "￥23333.22",
    origPrice: "￥0.01",
    // thumbnail: "http://xvhweb.jxxnhjq.com/Content/official-new/img/section1.jpg", 
    extra: "这也是一个超长的文本，具体有多长呢，我也不知道，但是我想试一试能不能自动溢出",
    action: action
}, {
    title: "4这是一个超长的标题有多长呢我也不知道所以就是超长的",
    labels: [{ text: "标签4" }, { text: "标签4" }, { text: "标签4" }, { text: "标签4" }, { text: "标签4" }, { text: "标签4" }, { text: "标签4" }, { text: "标签4" }],
    currPrice: "￥23333.22",
    origPrice: "￥100.25",
    thumbnail: "http://xvhweb.jxxnhjq.com/Content/official-new/img/section1.jpg",
    extra: "这也是一个超长的文本，具体有多长呢，我也不知道，但是我想试一试能不能自动溢出",
    action: action
}, {
    title: "5这是一个超长的标题有多长呢我也不知道所以就是超长的",
    labels: [{ text: "标签5" }, { text: "标签5" }, { text: "标签5" }, { text: "标签5" }, { text: "标签5" }, { text: "标签5" }, { text: "标签5" }, { text: "标签5" }],
    currPrice: "￥23333.22",
    origPrice: "￥0.01",
    thumbnail: "http://xvhweb.jxxnhjq.com/Content/official-new/img/section1.jpg",
    extra: "这也是一个超长的文本，具体有多长呢，我也不知道，但是我想试一试能不能自动溢出",
    action: action
}, {
    title: "6这是一个超长的标题有多长呢我也不知道所以就是超长的",
    labels: [{ text: "标签6" }, { text: "标签5" }, { text: "标签5" }, { text: "标签5" }, { text: "标签5" }, { text: "标签5" }, { text: "标签5" }, { text: "标签5" }],
    currPrice: "￥23333.22",
    origPrice: "￥0.01",
    thumbnail: "http://xvhweb.jxxnhjq.com/Content/official-new/img/section1.jpg",
    extra: "这也是一个超长的文本，具体有多长呢，我也不知道，但是我想试一试能不能自动溢出",
    action: action
}, {
    title: "7这是一个超长的标题有多长呢我也不知道所以就是超长的",
    labels: [{ text: "标签7" }, { text: "标签5" }, { text: "标签5" }, { text: "标签5" }, { text: "标签5" }, { text: "标签5" }, { text: "标签5" }, { text: "标签5" }],
    currPrice: "￥23333.22",
    origPrice: "￥0.01",
    thumbnail: "http://xvhweb.jxxnhjq.com/Content/official-new/img/section1.jpg",
    extra: "这也是一个超长的文本，具体有多长呢，我也不知道，但是我想试一试能不能自动溢出",
    action: action
}]

// Step 3:

const react_component = (
  <HList
    className="List"
    style={{
      width: "100%"
    }}
    datas={listData}
    renderItem={(data, i) => {
      return (
        <HList.Item key={i}>
          <HList.Item.Image
            image={data.thumbnail}
            radius
          />
          <HList.Item.Content>
            <HList.Item.Content.Title>{data.title}</HList.Item.Content.Title>
            <HList.Item.Content.Tags
              tags={data.labels}
            />
            <HList.Item.Content.Highlight
              highlight={data.currPrice}
              lowlight={data.origPrice}
              color="red"
            />
            <HList.Item.Content.Extra>{data.extra}</HList.Item.Content.Extra>
          </HList.Item.Content>
        </HList.Item>
      )
    }}
  />
)

```


## 样式

使用less作为样式语言，在使用期前，可以了解一下less的相关特性。[Less](http://lesscss.org/)

为了避免样式的全局污染和多人开发带来的命名冲突，推荐使用Css modules模块化方案。 [Css Modules](https://github.com/camsong/blog/issues/5)
严格区分全局样式，局部样式，以及组件库样式覆盖。



## 移动端滚动问题

避免使用 外层容器设置overflow:hidden模拟的滚动，在ios下会很卡顿，加了-webkit-overflow-scrolling : touch；之后，会引起更多的问题。详情请看这里 [深入研究-webkit-overflow-scrolling:touch以及ios滚动](https://www.cnblogs.com/xiahj/p/8036419.html)

正确的姿势：
1. 通过布局技巧，使用body滚动。如本项目中，我对tabBar组件嵌套路由的处理。
2. 封装滚动容器实现局部滚动。目前封装了 [better-scroll](https://github.com/ustbhuangyi/better-scroll)



## iPhone x兼容处理 例子

1. 第一步：设置网页在可视窗口的布局方式

```html
<meta name="viewport" content="width=device-width, viewport-fit=cover">
```
2. 第二步：页面主体内容限定在安全区域内

```css
body {
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}
```
3. fixed元素适配。示例：

这里我们只需要关注 safe-area-inset-bottom 这个变量，因为它对应的就是小黑条的高度（横竖屏时值不一样）。

参考： [iphone X 适配方案](https://aotu.io/notes/2017/11/27/iphonex/index.html)

```html
<!-- 布局例子 -->

<div className="container">
<div className="box"></div>
<div className="fixed-bottom footer"></div>
</div>
```

```css
/* 定义在global.css，可以直接使用 */

.fixed-bottom{
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
  position: fixed;
  z-index: 10;
  background-color: #fff;
  /* 具体应用位置，通过叠加css确定元素本身样式
  width: 100%;
  left: 0px;
  right: 0px;
  bottom: 0px;
  height: 50px; */
}
.footer{
   width:100%;
   height:50px;
   left:0px;
   right:0px;
   bottom:0px;
}
.box{
  padding-bottom: calc(50px + env(safe-area-inset-bottom));
}
```
## 支持环境

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br> iOS Safari | [<img src="https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=356c6916013387449cc5287a6934bec4/d53f8794a4c27d1e11530c8216d5ad6eddc4387a.jpg" alt="Android" width="24px" height="24px" />](https://developer.android.com/)</br> Android 
| --------- | --------- |
| iOS 8+ | Android 4.4+ |


## 与我联系

<a href="mailto:bruce_zxy@163.com">bruce_zxy@163.com</a>
