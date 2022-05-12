(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{619:function(t,a,s){"use strict";s.r(a);var e=s(11),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("重学前端，温故知新 🤔🤔🤔")])]),t._v(" "),s("h1",{attrs:{id:"_1-小知识点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-小知识点"}},[t._v("#")]),t._v(" 1.小知识点")]),t._v(" "),s("ul",[s("li",[t._v("在head中可以出现任意多个meta标签。一般的meta标签由name和content两个属性来定义。name表示元信息的名，content则用于表示元信息的值。")]),t._v(" "),s("li",[t._v("浏览器实际的实现中会把阴影作为一个独立的盒来处理。")]),t._v(" "),s("li",[t._v("把宿主发起的任务称为宏观任务，把JavaScript引擎发起的任务称为微观任务。许多的微观任务的队列组成了宏观任务。")]),t._v(" "),s("li",[t._v("语义上void运算表示忽略后面表达式的值，变成undefined")]),t._v(" "),s("li",[t._v("javascript引擎在解释代码时对于“1.toString()”认为“.”是浮点符号，但因小数点后面的字符是非法的，所以报语法错误；1.2.toString()就不会报错")])]),t._v(" "),s("h1",{attrs:{id:"_2-css"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-css"}},[t._v("#")]),t._v(" 2.CSS")]),t._v(" "),s("p",[t._v("CSS支持一批特定的计算型函数：")]),t._v(" "),s("ul",[s("li",[t._v("calc() 加减乘除四则运算。在针对维度进行计算时，calc()函数允许不同单位混合运算")]),t._v(" "),s("li",[t._v("max()")]),t._v(" "),s("li",[t._v("min()")]),t._v(" "),s("li",[t._v("clamp()  是给一个值限定一个范围，超出范围外则使用范围的最大或者最小值。")]),t._v(" "),s("li",[t._v("toggle() 在规则选中多于一个元素时生效，它会在几个值之间来回切换")]),t._v(" "),s("li",[t._v("attr()")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("section {\n  float: left;\n  margin: 1em; border: solid 1px;\n  width: calc(100%/3 - 2*1em - 2*1px);\n}\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h3",{attrs:{id:"css的渲染过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css的渲染过程"}},[t._v("#")]),t._v(" css的渲染过程：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("流式渲染，每生成一个dom节点，便立刻去匹配相应的css规则")])]),t._v(" "),s("li",[s("p",[t._v("dom节点的生成顺序是 从父-> 子。 css的渲染顺序也是 从 父节点-》子节点")])])]),t._v(" "),s("h3",{attrs:{id:"伪元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#伪元素"}},[t._v("#")]),t._v(" 伪元素")]),t._v(" "),s("p",[t._v("目前兼容性达到可用的伪元素有以下几种。\n::first-line   第一行\n::first-letter   第一个字母\n::before   元素内容之前插入一个虚拟的元素\n::after           之后")]),t._v(" "),s("h3",{attrs:{id:"css动画"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css动画"}},[t._v("#")]),t._v(" css动画")]),t._v(" "),s("h4",{attrs:{id:"animation的基本用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#animation的基本用法"}},[t._v("#")]),t._v(" animation的基本用法")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("@keyframes mykf\n{\n  from {background: red;}\n  to {background: yellow;}\n}\n\ndiv\n{\n    animation:mykf 5s infinite;\n}\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("ul",[s("li",[t._v("animation-name 动画的名称，这是一个keyframes类型的值（我们在第9讲“CSS语法：除了属性和选择器，你还需要知道这些带@的规则”讲到过，keyframes产生一种数据，用于定义动画关键帧）；")]),t._v(" "),s("li",[t._v("animation-duration 动画的时长；")]),t._v(" "),s("li",[t._v("animation-timing-function 动画的时间曲线；")]),t._v(" "),s("li",[t._v("animation-delay 动画开始前的延迟；")]),t._v(" "),s("li",[t._v("animation-iteration-count 动画的播放次数；")]),t._v(" "),s("li",[t._v("animation-direction 动画的方向。")])]),t._v(" "),s("h1",{attrs:{id:"_3-浏览器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-浏览器"}},[t._v("#")]),t._v(" 3.浏览器")]),t._v(" "),s("p",[t._v("从HTTP请求回来，就产生了流式的数据，后续的DOM树构建、CSS计算、渲染、合成、绘制，都是尽可能地流式处理前一步的产出：即不需要等到上一步骤完全结束，就开始处理上一步的输出，这样我们在浏览网页时，才会看到逐步出现的页面。")]),t._v(" "),s("p",[t._v("3xx系列比较复杂，301和302两个状态表示当前资源已经被转移，只不过一个是永久性转移，一个是临时性转移。实际上301更接近于一种报错，提示客户端下次别来了。")]),t._v(" "),s("p",[t._v("304又是一个每个前端必知必会的状态，产生这个状态的前提是：客户端本地已经有缓存的版本，并且在Request中告诉了服务端，当服务端通过时间或者tag，发现没有更新的时候，就会返回一个不含body的304状态。")]),t._v(" "),s("h2",{attrs:{id:"dom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dom"}},[t._v("#")]),t._v(" DOM")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/11/14/16e67e0bcddfe648?w=1532&h=1206&f=png&s=339020",alt:""}}),t._v("\n一一对应：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Element: <tagname>...</tagname>\nText: text\nComment: \x3c!-- comments --\x3e\nDocumentType: <!Doctype html>\nProcessingInstruction: <?a 1?>\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("我们可以把元素的Attribute当作字符串来看待，这样就有以下的API：")]),t._v(" "),s("ul",[s("li",[t._v("getAttribute")]),t._v(" "),s("li",[t._v("setAttribute")]),t._v(" "),s("li",[t._v("removeAttribute")]),t._v(" "),s("li",[t._v("hasAttribute")])]),t._v(" "),s("p",[t._v("document节点提供了查找元素的能力。比如有下面的几种。")]),t._v(" "),s("ul",[s("li",[t._v("querySelector")]),t._v(" "),s("li",[t._v("querySelectorAll")]),t._v(" "),s("li",[t._v("getElementById")]),t._v(" "),s("li",[t._v("getElementsByName")]),t._v(" "),s("li",[t._v("getElementsByTagName")]),t._v(" "),s("li",[t._v("getElementsByClassName")])]),t._v(" "),s("h1",{attrs:{id:"_4-cssdom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-cssdom"}},[t._v("#")]),t._v(" 4.CSSDOM")]),t._v(" "),s("blockquote",[s("p",[t._v("document.styleSheets  获取文档中所有样式表")])]),t._v(" "),s("h3",{attrs:{id:"窗口-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#窗口-api"}},[t._v("#")]),t._v(" 窗口 API")]),t._v(" "),s("p",[t._v("窗口API用于操作浏览器窗口的位置、尺寸等。")]),t._v(" "),s("ul",[s("li",[t._v("moveTo(x, y) 窗口移动到屏幕的特定坐标；")]),t._v(" "),s("li",[t._v("moveBy(x, y) 窗口移动特定距离；")]),t._v(" "),s("li",[t._v("resizeTo(x, y) 改变窗口大小到特定尺寸；")]),t._v(" "),s("li",[t._v("resizeBy(x, y) 改变窗口大小特定尺寸。")])]),t._v(" "),s("h2",{attrs:{id:"视口滚动api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#视口滚动api"}},[t._v("#")]),t._v(" 视口滚动API")]),t._v(" "),s("p",[t._v("可视区域（视口）滚动行为由window对象上的一组API控制，我们先来了解一下：")]),t._v(" "),s("ul",[s("li",[t._v("scrollX 是视口的属性，表示X方向上的当前滚动距离，有别名 pageXOffset；")]),t._v(" "),s("li",[t._v("scrollY 是视口的属性，表示Y方向上的当前滚动距离，有别名 pageYOffset；")]),t._v(" "),s("li",[t._v("scroll(x, y) 使得页面滚动到特定的位置，有别名scrollTo，支持传入配置型参数 {top, left}；")]),t._v(" "),s("li",[t._v("scrollBy(x, y) 使得页面滚动特定的距离，支持传入配置型参数 {top, left}。\n通过这些属性和方法，我们可以读取视口的滚动位置和操纵视口滚动。不过，要想监听视口滚动事件，我们需要在document对象上绑定事件监听函数：")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('document.addEventListener("scroll", function(event){\n  //......\n})\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h2",{attrs:{id:"全局尺寸信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局尺寸信息"}},[t._v("#")]),t._v(" 全局尺寸信息")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/11/14/16e67f5095bc32f6?w=1134&h=424&f=png&s=114596",alt:""}})]),t._v(" "),s("p",[t._v("我们主要使用的是innerHeight、innerWidth和devicePixelRatio三个属性，因为我们前端开发工作只需要跟视口打交道，其它信息大概了解即可")]),t._v(" "),s("p",[t._v("获取盒子布局信息")]),t._v(" "),s("ul",[s("li",[t._v("getClientRects();")]),t._v(" "),s("li",[t._v("getBoundingClientRect()。")])]),t._v(" "),s("h2",{attrs:{id:"简单的编译原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简单的编译原理"}},[t._v("#")]),t._v(" 简单的编译原理")]),t._v(" "),s("ul",[s("li",[t._v("定义四则运算：产出四则运算的词法定义和语法定义。")]),t._v(" "),s("li",[t._v("词法分析：把输入的字符串流变成token。")]),t._v(" "),s("li",[t._v("语法分析：把token变成抽象语法树AST。")]),t._v(" "),s("li",[t._v("解释执行：后序遍历AST，执行得出结果。")])])])}),[],!1,null,null,null);a.default=n.exports}}]);