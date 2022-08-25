(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{574:function(a,s,r){"use strict";r.r(s);var t=r(6),n=Object(t.a)({},(function(){var a=this,s=a.$createElement,r=a._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("blockquote",[r("p",[a._v("个人感觉 【数据结构与算法图解】这本书讲的比较简单，有计算机基础的不推荐看\n")])]),a._v(" "),r("h2",{attrs:{id:"尽量减少重复劳动力"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#尽量减少重复劳动力"}},[a._v("#")]),a._v(" 尽量减少重复劳动力")]),a._v(" "),r("p",[a._v("系统学习推荐小伙伴直接去"),r("a",{attrs:{href:"http://www.conardli.top/docs/",target:"_blank",rel:"noopener noreferrer"}},[a._v(" awesome-coding-js"),r("OutboundLink")],1)]),a._v(" "),r("p",[a._v("这里是我个人学习的的一些小结")]),a._v(" "),r("h2",{attrs:{id:"【数据结构与算法图解】-结合-awesome-coding-js-总结的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#【数据结构与算法图解】-结合-awesome-coding-js-总结的"}},[a._v("#")]),a._v(" 【数据结构与算法图解】 结合 awesome-coding-js 总结的")]),a._v(" "),r("p",[a._v("个人感觉 【数据结构与算法图解】这本书讲的比较简单，有计算机基础的不推荐看")]),a._v(" "),r("h3",{attrs:{id:"_1、一些概念"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1、一些概念"}},[a._v("#")]),a._v(" 1、一些概念")]),a._v(" "),r("ul",[r("li",[a._v("时间复杂度 理论：操作的速度，并不按时间计算，而是按步数 计算")]),a._v(" "),r("li",[a._v("读取：一步，查找：最多N步，插入：最多N+1（N次移动，1次插入），删除：最多N")])]),a._v(" "),r("h3",{attrs:{id:"_2、查找"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2、查找"}},[a._v("#")]),a._v(" 2、查找")]),a._v(" "),r("ul",[r("li",[a._v("线性查找： 一个个查，比对")]),a._v(" "),r("li",[a._v("二分查找： 每次有序数组长度乘以 2，二分查找所需的最多步数只会加 1。")])]),a._v(" "),r("h2",{attrs:{id:"_3、大-o-记法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3、大-o-记法"}},[a._v("#")]),a._v(" 3、大 O 记法")]),a._v(" "),r("p",[a._v("一般指： "),r("strong",[a._v("最坏的情况")])]),a._v(" "),r("ul",[r("li",[a._v("O(1) 不管需要多少步，步数不变就是O(1)")]),a._v(" "),r("li",[a._v("O(N) 根据数据量变化而变化")]),a._v(" "),r("li",[a._v("O(log N) 对数时间，比如二分查找，数据量翻倍时，步数+1")])]),a._v(" "),r("p",[a._v("JavaScript简单记（不准）：根据for循环的数量来记，2个for就是O(n2)")]),a._v(" "),r("h2",{attrs:{id:"_4、冒泡排序"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4、冒泡排序"}},[a._v("#")]),a._v(" 4、冒泡排序")]),a._v(" "),r("h3",{attrs:{id:"概念"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[a._v("#")]),a._v(" 概念")]),a._v(" "),r("p",[a._v("循环数组，比较当前元素和下一个元素，如果当前元素比下一个元素大，向上冒泡。")]),a._v(" "),r("p",[a._v("这样一次循环之后最后一个数就是本数组最大的数。")]),a._v(" "),r("p",[a._v("下一次循环继续上面的操作，不循环已经排序好的数。")]),a._v(" "),r("p",[a._v("优化：当一次循环没有发生冒泡，说明已经排序完成，停止循环")]),a._v(" "),r("h3",{attrs:{id:"解法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[a._v("#")]),a._v(" 解法")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("function bubbleSort(array) {\n      for (let j = 0; j < array.length; j++) {\n        let complete = true;\n        for (let i = 0; i < array.length - 1 - j; i++) {\n          // 比较相邻数\n          if (array[i] > array[i + 1]) {\n            [array[i], array[i + 1]] = [array[i + 1], array[i]];\n            complete = false;\n          }\n        }\n        // 没有冒泡结束循环\n        if (complete) {\n          break;\n        }\n      }\n      return array;\n    }\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br"),r("span",{staticClass:"line-number"},[a._v("7")]),r("br"),r("span",{staticClass:"line-number"},[a._v("8")]),r("br"),r("span",{staticClass:"line-number"},[a._v("9")]),r("br"),r("span",{staticClass:"line-number"},[a._v("10")]),r("br"),r("span",{staticClass:"line-number"},[a._v("11")]),r("br"),r("span",{staticClass:"line-number"},[a._v("12")]),r("br"),r("span",{staticClass:"line-number"},[a._v("13")]),r("br"),r("span",{staticClass:"line-number"},[a._v("14")]),r("br"),r("span",{staticClass:"line-number"},[a._v("15")]),r("br"),r("span",{staticClass:"line-number"},[a._v("16")]),r("br"),r("span",{staticClass:"line-number"},[a._v("17")]),r("br")])]),r("h3",{attrs:{id:"复杂度"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#复杂度"}},[a._v("#")]),a._v(" 复杂度")]),a._v(" "),r("p",[a._v("时间复杂度：O(n2)")]),a._v(" "),r("p",[a._v("空间复杂度:O(1)")]),a._v(" "),r("h2",{attrs:{id:"_5、选择排序"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5、选择排序"}},[a._v("#")]),a._v(" 5、选择排序")]),a._v(" "),r("p",[a._v("每次循环选取一个最小的数字放到前面的有序序列中。")]),a._v(" "),r("h3",{attrs:{id:"解法-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#解法-2"}},[a._v("#")]),a._v(" 解法")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v(" function selectionSort(array) {\n      for (let i = 0; i < array.length - 1; i++) {\n        let minIndex = i;\n        for (let j = i + 1; j < array.length; j++) {\n          if (array[j] < array[minIndex]) {\n            minIndex = j;\n          }\n        }\n        [array[minIndex], array[i]] = [array[i], array[minIndex]];\n      }\n    }\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br"),r("span",{staticClass:"line-number"},[a._v("7")]),r("br"),r("span",{staticClass:"line-number"},[a._v("8")]),r("br"),r("span",{staticClass:"line-number"},[a._v("9")]),r("br"),r("span",{staticClass:"line-number"},[a._v("10")]),r("br"),r("span",{staticClass:"line-number"},[a._v("11")]),r("br")])]),r("h3",{attrs:{id:"复杂度-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#复杂度-2"}},[a._v("#")]),a._v(" 复杂度")]),a._v(" "),r("p",[a._v("时间复杂度：O(n2)")]),a._v(" "),r("p",[a._v("空间复杂度:O(1)")]),a._v(" "),r("h3",{attrs:{id:"大o记法忽略常数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#大o记法忽略常数"}},[a._v("#")]),a._v(" 大O记法忽略常数")]),a._v(" "),r("p",[a._v("选择排序的步数大概只有冒泡排序的一半，即选择排序比冒泡排序 快一倍。")]),a._v(" "),r("p",[a._v("但是严格来说选择排序应为 O(N2 / 2)，最终得写成 O(N2 )。")]),a._v(" "),r("p",[a._v("类似地，O(2N)要写成 O(N)； O(N / 2)也写成 O(N)；就算是比 O(N)慢 100 倍的 O(100N)，也要写成 O(N)。")]),a._v(" "),r("h2",{attrs:{id:"_6、插入排序"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6、插入排序"}},[a._v("#")]),a._v(" 6、插入排序")]),a._v(" "),r("p",[a._v("将左侧序列看成一个有序序列，每次将一个数字插入该有序序列。")]),a._v(" "),r("p",[a._v("插入时，从有序序列最右侧开始比较，若比较的数较大，后移一位。")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("function insertSort(array) {\n      for (let i = 1; i < array.length; i++) {\n        let target = i;\n        for (let j = i - 1; j >= 0; j--) {\n          if (array[target] < array[j]) {\n            [array[target], array[j]] = [array[j], array[target]]\n            target = j;\n          } else {\n            break;\n          }\n        }\n      }\n      return array;\n    }\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br"),r("span",{staticClass:"line-number"},[a._v("7")]),r("br"),r("span",{staticClass:"line-number"},[a._v("8")]),r("br"),r("span",{staticClass:"line-number"},[a._v("9")]),r("br"),r("span",{staticClass:"line-number"},[a._v("10")]),r("br"),r("span",{staticClass:"line-number"},[a._v("11")]),r("br"),r("span",{staticClass:"line-number"},[a._v("12")]),r("br"),r("span",{staticClass:"line-number"},[a._v("13")]),r("br"),r("span",{staticClass:"line-number"},[a._v("14")]),r("br")])]),r("h3",{attrs:{id:"复杂度-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#复杂度-3"}},[a._v("#")]),a._v(" 复杂度")]),a._v(" "),r("p",[a._v("时间复杂度：O(n2)")]),a._v(" "),r("p",[a._v("空间复杂度:O(1)")]),a._v(" "),r("h2",{attrs:{id:"_7、快速排序"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_7、快速排序"}},[a._v("#")]),a._v(" 7、快速排序")]),a._v(" "),r("p",[a._v("快速排序：通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据比另一部分的所有数据要小，再按这种方法对这两部分数据分别进行快速排序，整个排序过程可以递归进行，使整个数据变成有序序列。")]),a._v(" "),r("p",[a._v("先从右往左找一个小于 "),r("strong",[a._v("基准值")]),a._v(" 的数，再从左往右找一个大于 "),r("strong",[a._v("基准值")]),a._v(" 的数，然后交换他们。")]),a._v(" "),r("p",[a._v("这个图解很清楚："),r("a",{attrs:{href:"https://wiki.jikexueyuan.com/project/easy-learn-algorithm/fast-sort.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("算法 3：最常用的排序——快速排序"),r("OutboundLink")],1)]),a._v(" "),r("p",[a._v("实现步骤：")]),a._v(" "),r("ul",[r("li",[a._v("选择一个基准元素target（一般选择第一个数）")]),a._v(" "),r("li",[a._v("将比target小的元素移动到数组左边，比target大的元素移动到数组右边")]),a._v(" "),r("li",[a._v("分别对target左侧和右侧的元素进行快速排序")])]),a._v(" "),r("p",[a._v("简单版本")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("function quickSort(array) {\n      if (array.length < 2) {\n        return array;\n      }\n      const target = array[0];\n      const left = [];\n      const right = [];\n      for (let i = 1; i < array.length; i++) {\n        if (array[i] < target) {\n          left.push(array[i]);\n        } else {\n          right.push(array[i]);\n        }\n      }\n      return quickSort(left).concat([target], quickSort(right));\n    }\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br"),r("span",{staticClass:"line-number"},[a._v("7")]),r("br"),r("span",{staticClass:"line-number"},[a._v("8")]),r("br"),r("span",{staticClass:"line-number"},[a._v("9")]),r("br"),r("span",{staticClass:"line-number"},[a._v("10")]),r("br"),r("span",{staticClass:"line-number"},[a._v("11")]),r("br"),r("span",{staticClass:"line-number"},[a._v("12")]),r("br"),r("span",{staticClass:"line-number"},[a._v("13")]),r("br"),r("span",{staticClass:"line-number"},[a._v("14")]),r("br"),r("span",{staticClass:"line-number"},[a._v("15")]),r("br"),r("span",{staticClass:"line-number"},[a._v("16")]),r("br")])]),r("h2",{attrs:{id:"_8、数据结构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_8、数据结构"}},[a._v("#")]),a._v(" 8、数据结构")]),a._v(" "),r("ul",[r("li",[a._v("链表（带有存储下一个结点地址的）插入和删除效率比数组高很多")]),a._v(" "),r("li")]),a._v(" "),r("h2",{attrs:{id:"_9、空间复杂度"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_9、空间复杂度"}},[a._v("#")]),a._v(" 9、空间复杂度")]),a._v(" "),r("p",[a._v("空间复杂度：当所处理的数据有 N 个元素时，该算法还需"),r("strong",[a._v("额外")]),a._v("消耗多少元素大小的内存空间")]),a._v(" "),r("p",[a._v("O(1)： 记住，时间 复杂度的O(1)意味着一个算法无论处理多少数据，其速度恒定。相似地，空间复杂度的 O(1)则 意味着一个算法无论处理多少数据，其"),r("strong",[a._v("消耗的内存恒定")]),a._v("。")])])}),[],!1,null,null,null);s.default=n.exports}}]);