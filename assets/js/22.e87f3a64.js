(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{550:function(e,t,r){"use strict";r.r(t);var a=r(6),v=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("blockquote"),e._v(" "),r("h2",{attrs:{id:"第4周-9-30"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第4周-9-30"}},[e._v("#")]),e._v(" 第4周(- 9.30)")]),e._v(" "),r("h3",{attrs:{id:"已合并master的代码被revert后"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#已合并master的代码被revert后"}},[e._v("#")]),e._v(" 已合并master的代码被revert后")]),e._v(" "),r("p",[e._v("正常gitlab会默认把已经合并的分支删除掉，但是当自己的代码有问题需要回滚时就没有了自己分支，本地分支恰好也被我删除了。。。")]),e._v(" "),r("p",[e._v("这个时候就需要在本地先revert到 当初Merge Revert的分支，然后commit到本地暂存区，然后切分支，提交分支。")]),e._v(" "),r("p",[e._v("搞了半天，其实不难。只是走了一些弯路，脑子一时转不过来。。。")]),e._v(" "),r("h3",{attrs:{id:"peerdependencies"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#peerdependencies"}},[e._v("#")]),e._v(" PeerDependencies")]),e._v(" "),r("p",[e._v("假设我们的项目使用了vuex作为状态管理器。不知道大家有没有注意，vuex并没有dependencies。虽然我们都知道vuex一定会依赖vue。可以直接点开"),r("a",{attrs:{href:"https://github.com/vuejs/vuex/blob/dev/package.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("这里"),r("OutboundLink")],1),e._v("看下vuex的依赖。")]),e._v(" "),r("p",[e._v("之所以vuex这样做，因为vuex知道你如果要使用他，"),r("code",[e._v("就一定也会使用vue")]),e._v("，所以他也就不会在dependencies中写入。事实上，这种情况是非常多的，尤其是对于插件而言，比如webpack，babel，eslint等等他们的插件都知道使用者一定会提供"),r("code",[e._v("宿主自身（host）")]),e._v("。")]),e._v(" "),r("p",[e._v("当然，插件仍旧是需要指明他所依赖"),r("code",[e._v("宿主的版本号")]),e._v("，而且他们往往对宿主环境依赖的版本号有更准确的要求。因为"),r("code",[e._v("他们一般更可能会使用底层的api")]),e._v("，而这些api可能在某一次minor或者patch的版本的升级中改变了。")]),e._v(" "),r("p",[e._v("为此，"),r("code",[e._v("peerDependencies")]),e._v("就派上用场了。如果宿主环境和指定环境不一致，可能会导致某些问题。")]),e._v(" "),r("p",[e._v("安装peer相关包，"),r("code",[e._v("yarn add xxx --peer")])]),e._v(" "),r("h3",{attrs:{id:"host-hostname区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#host-hostname区别"}},[e._v("#")]),e._v(" host & hostname区别")]),e._v(" "),r("p",[e._v("如果有端口号，host会带上。没有的情况下两者相等")]),e._v(" "),r("h3",{attrs:{id:"monorepo"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#monorepo"}},[e._v("#")]),e._v(" monorepo")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.cn/post/6855129007185362952",target:"_blank",rel:"noopener noreferrer"}},[e._v("lerna 和 yarn 实现 monorepo"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("讲的很清楚，一个monorepo项目的搭建过程。")]),e._v(" "),r("h3",{attrs:{id:"版本号-和-区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#版本号-和-区别"}},[e._v("#")]),e._v(" 版本号^和~区别")]),e._v(" "),r("p",[e._v("波浪符号（~）：body-parser:~1.15.2，这个库会去匹配更新到1.15.x的最新版本，如果出了一个新的版本为1.16.0，则不会自动升级。")]),e._v(" "),r("p",[e._v("插入符号（^）：bluebird:^3.3.4，这个库会去匹配3.x.x中最新的版本，但是他不会自动更新到4.0.0。")]),e._v(" "),r("h3",{attrs:{id:"yarn-why-xxx"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#yarn-why-xxx"}},[e._v("#")]),e._v(" yarn why xxx")]),e._v(" "),r("p",[e._v("通过why的命令可以查找当前包有没有用")]),e._v(" "),r("h2",{attrs:{id:"第3周-9-17"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第3周-9-17"}},[e._v("#")]),e._v(" 第3周(- 9.17)")]),e._v(" "),r("h3",{attrs:{id:"生活节奏"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#生活节奏"}},[e._v("#")]),e._v(" 生活节奏")]),e._v(" "),r("p",[e._v("新公司转正后，有点乱了套。和家里吵、和女朋友吵，总感觉看不到生活的希望。逐渐有些悲观，游戏瘾君子，生活不如意，在游戏中发泄自己。")]),e._v(" "),r("p",[e._v("怎么突破，怎么改变，不知道。")]),e._v(" "),r("p",[e._v("给自己一些目标，已经没有动力了。看不得别人号")]),e._v(" "),r("h2",{attrs:{id:"第2周-9-1"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第2周-9-1"}},[e._v("#")]),e._v(" 第2周(- 9.1)")]),e._v(" "),r("h2",{attrs:{id:"第1周-9-4"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第1周-9-4"}},[e._v("#")]),e._v(" 第1周(- 9.4)")])])}),[],!1,null,null,null);t.default=v.exports}}]);