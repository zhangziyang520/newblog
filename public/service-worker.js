/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "55f79ed33272d890013ff193de7d72b8"
  },
  {
    "url": "archives/index.html",
    "revision": "c1fbe47e54f2840fccee67e7c5398a9e"
  },
  {
    "url": "assets/css/0.styles.3a857f65.css",
    "revision": "8fd8df4ef82183a953a3f5731e3a448c"
  },
  {
    "url": "assets/img/loading.18d75e19.gif",
    "revision": "18d75e19791c1d042f102e088f463d8a"
  },
  {
    "url": "assets/js/10.74478068.js",
    "revision": "8e210ad90669a83836ead1240a8866d7"
  },
  {
    "url": "assets/js/11.45307845.js",
    "revision": "6a59118d10adf3875d936db437b159fe"
  },
  {
    "url": "assets/js/12.4bcd738e.js",
    "revision": "153d2996734e58a377e7a65b65339761"
  },
  {
    "url": "assets/js/13.c60c3104.js",
    "revision": "110da20b5793c3a3ff1ea2744a23dd70"
  },
  {
    "url": "assets/js/14.7dc56c88.js",
    "revision": "88596973430fab4cff5e43f62bc18e59"
  },
  {
    "url": "assets/js/15.d8c63567.js",
    "revision": "2cd158da73508bb5cdf93f899fb4c4e8"
  },
  {
    "url": "assets/js/16.94ef2c94.js",
    "revision": "b8ca895daf12da4d06179328cf5cd029"
  },
  {
    "url": "assets/js/17.a266632d.js",
    "revision": "7739d01852c607eb5a3be457190576f5"
  },
  {
    "url": "assets/js/18.efa95eb8.js",
    "revision": "79ddb9ac213928d76f7cce5c379e6706"
  },
  {
    "url": "assets/js/19.38ae6bf8.js",
    "revision": "45da5f87402374543cec6d80ba69a791"
  },
  {
    "url": "assets/js/2.a8013a11.js",
    "revision": "b573b01d3af08bf34f42a8970843b2de"
  },
  {
    "url": "assets/js/20.13e93dd3.js",
    "revision": "efc3475dee97ab5ea63057d55a912f17"
  },
  {
    "url": "assets/js/21.98fd0dc9.js",
    "revision": "a4bcdce39b1682152d918cf7d22079f9"
  },
  {
    "url": "assets/js/22.d8a28ddf.js",
    "revision": "0775cb71acef6061c9bea171bf8b5344"
  },
  {
    "url": "assets/js/23.9d71e9cf.js",
    "revision": "0158b281d3e4a22300a83c4e02ca76d5"
  },
  {
    "url": "assets/js/24.d7082f0f.js",
    "revision": "5f0e941b2f042bc20a9443dd82748e94"
  },
  {
    "url": "assets/js/25.84821119.js",
    "revision": "9b6c55efe33ca8eb22ade0da908ee665"
  },
  {
    "url": "assets/js/26.92ce3343.js",
    "revision": "c3c91f2497932c22ce4a2af9e76d06d7"
  },
  {
    "url": "assets/js/27.79e334ed.js",
    "revision": "3f6e050a0c7c7886e7da5c0a5685d8e5"
  },
  {
    "url": "assets/js/28.8f2c1066.js",
    "revision": "a44950498af3c05eb68318941568a9e8"
  },
  {
    "url": "assets/js/29.cba3e336.js",
    "revision": "4efd66444354e20f950c9480efb420ca"
  },
  {
    "url": "assets/js/3.8b40c051.js",
    "revision": "7e383ec232240cc695b8217678b0ac5e"
  },
  {
    "url": "assets/js/30.817f21c3.js",
    "revision": "ad43df9bd276a966092811b782b5a237"
  },
  {
    "url": "assets/js/31.46084066.js",
    "revision": "76e3066e1235821295e3976ea08a7b46"
  },
  {
    "url": "assets/js/32.3f6c17bf.js",
    "revision": "7860fec6159745dadce286d88c6184e8"
  },
  {
    "url": "assets/js/33.3fdbddbe.js",
    "revision": "d9f982c0d7830bb6033b12b233f63fbf"
  },
  {
    "url": "assets/js/34.a4244152.js",
    "revision": "409d2365529b943b8351b81633bcb90d"
  },
  {
    "url": "assets/js/35.7f93e50e.js",
    "revision": "5620e13fc9fd34f2065f674454e9c6dc"
  },
  {
    "url": "assets/js/36.4d6f4272.js",
    "revision": "7cba7b82865d28c4f2953df89f2a8431"
  },
  {
    "url": "assets/js/37.3bd73ee1.js",
    "revision": "ab5dae09c06dee79168171ef6b695721"
  },
  {
    "url": "assets/js/38.281590ee.js",
    "revision": "ba4b187ccf320bc0f328d014e18f97b3"
  },
  {
    "url": "assets/js/39.df45bf8e.js",
    "revision": "1124589b5f9b945d71854daaaa306a97"
  },
  {
    "url": "assets/js/4.aab0e518.js",
    "revision": "07da52315a78e7cf04162df4ec86b93a"
  },
  {
    "url": "assets/js/40.546bbd52.js",
    "revision": "c870d8eeef01cecb49b25eac74d8e6ad"
  },
  {
    "url": "assets/js/41.c9bff6b4.js",
    "revision": "d1c8a0ff360db8c984c8fad850c7e214"
  },
  {
    "url": "assets/js/42.a58d7e7a.js",
    "revision": "67464e1ef53df65cfc5e8e3077aa8293"
  },
  {
    "url": "assets/js/43.0dcea25c.js",
    "revision": "07710c31b3748020ecf9934c3d50f7a5"
  },
  {
    "url": "assets/js/44.68fa6417.js",
    "revision": "9e59bca0ceb9084bcf5d284ebafcfcfe"
  },
  {
    "url": "assets/js/45.9875740a.js",
    "revision": "2037ebd023aa02ade315de438c5cef33"
  },
  {
    "url": "assets/js/46.a159c509.js",
    "revision": "9beb8c759ad08c77e521a714ff31cb65"
  },
  {
    "url": "assets/js/47.d8d6f771.js",
    "revision": "e6169a0694a8681c1b859fff69ad5600"
  },
  {
    "url": "assets/js/48.42913a75.js",
    "revision": "5be1f69a7d0163adcfa955ae6fa5d25a"
  },
  {
    "url": "assets/js/49.a710d8a4.js",
    "revision": "598016eb9ad8e1ef7c8c2d8d6fe12be3"
  },
  {
    "url": "assets/js/5.bede70ab.js",
    "revision": "99973afa49b9c0a2aa066890c1240954"
  },
  {
    "url": "assets/js/50.c215a9c1.js",
    "revision": "ca7c918031ca7dbcc095a78a6ef17643"
  },
  {
    "url": "assets/js/51.ab177fa4.js",
    "revision": "6f328d14be271a27bc107cc4ceb81d1c"
  },
  {
    "url": "assets/js/52.698a0baf.js",
    "revision": "5a388b0f80ed22ef7cafff4ebe2ab041"
  },
  {
    "url": "assets/js/53.4e71e9b8.js",
    "revision": "d3ecbf4b7d541269d86838bd36670007"
  },
  {
    "url": "assets/js/54.4dcdb6d8.js",
    "revision": "a9d0ef4a6ad20fbb5b1358ef4f232f3d"
  },
  {
    "url": "assets/js/55.814a011f.js",
    "revision": "54eb24e70ad5724811fd72cc47d13a2d"
  },
  {
    "url": "assets/js/56.acd91701.js",
    "revision": "2fcfe9c9e60afc2c2055bf5879306795"
  },
  {
    "url": "assets/js/57.e796ae68.js",
    "revision": "d36ce0760c10be62ac79b251c21280f3"
  },
  {
    "url": "assets/js/58.38f77cd9.js",
    "revision": "226a3d43452a10a40f733f32c5bbef18"
  },
  {
    "url": "assets/js/59.9d86adfd.js",
    "revision": "9c979a7d49d91647f14aff9e563f69f4"
  },
  {
    "url": "assets/js/6.b5065b4a.js",
    "revision": "10e8ecf8e9eb593d0a16de0f1376ea20"
  },
  {
    "url": "assets/js/60.231f91b9.js",
    "revision": "026415f483c8bdba3038195652a37c8e"
  },
  {
    "url": "assets/js/61.774ca7cc.js",
    "revision": "337681ebb2efb7da6c9df0b155543bf6"
  },
  {
    "url": "assets/js/62.03c7ebdd.js",
    "revision": "ee887f6afbc92db25a8b8c69fcf1974e"
  },
  {
    "url": "assets/js/63.9dd77463.js",
    "revision": "e18a1c886d953a4dfb188e9030b767e7"
  },
  {
    "url": "assets/js/64.b7eeee2b.js",
    "revision": "38abf0afb19bc707cb1f243ac0eda9ad"
  },
  {
    "url": "assets/js/65.e88d2e16.js",
    "revision": "fb39d7b7859e900392bbbb6f829f790f"
  },
  {
    "url": "assets/js/66.09e80680.js",
    "revision": "c72b63b6e7b3d3447976a4729c04ec1a"
  },
  {
    "url": "assets/js/67.cfc60c09.js",
    "revision": "8e37f08fc8cee39badcac245613f643d"
  },
  {
    "url": "assets/js/68.2371683d.js",
    "revision": "336538890a92e1c4700d1c73dcec8b53"
  },
  {
    "url": "assets/js/69.70bc9801.js",
    "revision": "5d8ecb5cb9ec05e58da88509fc1b2a86"
  },
  {
    "url": "assets/js/7.c46b731b.js",
    "revision": "e10698296d8b5c1d0c9fbb4fb24ba0fd"
  },
  {
    "url": "assets/js/70.000357bf.js",
    "revision": "ae7398567f2cfa697deb39709b9b892c"
  },
  {
    "url": "assets/js/71.a3bebc1b.js",
    "revision": "34ccfafd060c86973086b51983c2b875"
  },
  {
    "url": "assets/js/8.1dc62163.js",
    "revision": "6c18c49f20254ad17cd62cb8e4267e12"
  },
  {
    "url": "assets/js/9.5b6854a2.js",
    "revision": "a8800061955f07be227bdb06b96defbd"
  },
  {
    "url": "assets/js/app.99278af3.js",
    "revision": "769d32b7243a669bbbd8fc4ac2ddea29"
  },
  {
    "url": "bookshop/friendslink/index.html",
    "revision": "cd9d6143068585f19c9cca3a58804500"
  },
  {
    "url": "bookshop/message-board/index.html",
    "revision": "595b191c4067b2242abb628669ae818f"
  },
  {
    "url": "categories/index.html",
    "revision": "51392067a62fb6769b62cd7b030a4da0"
  },
  {
    "url": "fe-optimize-ppt/index.html",
    "revision": "c86dd6ea27053e7493e374f9471bd07c"
  },
  {
    "url": "fe-optimize-ppt/plugin/highlight/highlight.esm.js",
    "revision": "57c199f193bb887fede5ac3482addfab"
  },
  {
    "url": "fe-optimize-ppt/plugin/highlight/highlight.js",
    "revision": "c9cf29026937693abb4e72b10e0a4b3c"
  },
  {
    "url": "fe-optimize-ppt/plugin/highlight/monokai.css",
    "revision": "61e38729dbd8f81f129ae38770c9cd68"
  },
  {
    "url": "fe-optimize-ppt/plugin/highlight/plugin.js",
    "revision": "0c152ba2ac0301663f5a8a7350dcff68"
  },
  {
    "url": "fe-optimize-ppt/plugin/highlight/zenburn.css",
    "revision": "b8210619cb21042d14d0676f27e2f41c"
  },
  {
    "url": "fe-optimize-ppt/plugin/markdown/markdown.esm.js",
    "revision": "78602f4b2f0d182c9bf27de1db7a18c0"
  },
  {
    "url": "fe-optimize-ppt/plugin/markdown/markdown.js",
    "revision": "1d16df2da37b71f7e751af0638d1f55b"
  },
  {
    "url": "fe-optimize-ppt/plugin/markdown/plugin.js",
    "revision": "45d8fba2fb1a8060386ac3933c46507a"
  },
  {
    "url": "fe-optimize-ppt/plugin/math/math.esm.js",
    "revision": "9db82a78147755e8f1a0486e5caa75a9"
  },
  {
    "url": "fe-optimize-ppt/plugin/math/math.js",
    "revision": "811d67482ea3828abe83e311cfccd246"
  },
  {
    "url": "fe-optimize-ppt/plugin/math/plugin.js",
    "revision": "08968126ddb481002f8c196adc76ad01"
  },
  {
    "url": "fe-optimize-ppt/plugin/notes/notes.esm.js",
    "revision": "64096f7638bd851673b0dd3fff227b57"
  },
  {
    "url": "fe-optimize-ppt/plugin/notes/notes.js",
    "revision": "c619607914139664e27dd952c3382dcf"
  },
  {
    "url": "fe-optimize-ppt/plugin/notes/plugin.js",
    "revision": "35315d10482b80d1e030df4842b5e849"
  },
  {
    "url": "fe-optimize-ppt/plugin/notes/speaker-view.html",
    "revision": "b89f40b06c44dae7df3fab6c8f995013"
  },
  {
    "url": "fe-optimize-ppt/plugin/search/plugin.js",
    "revision": "39d7032a1fc94d7feb5faac53d1fc560"
  },
  {
    "url": "fe-optimize-ppt/plugin/search/search.esm.js",
    "revision": "eade53551082ad7a67345e509ac3e09d"
  },
  {
    "url": "fe-optimize-ppt/plugin/search/search.js",
    "revision": "a3ffe49a083c3c5ac81c861b077abb62"
  },
  {
    "url": "fe-optimize-ppt/plugin/zoom/plugin.js",
    "revision": "82b21d46be52363892e7f2e92274d01d"
  },
  {
    "url": "fe-optimize-ppt/plugin/zoom/zoom.esm.js",
    "revision": "7af54141ec93fd412ffbb08413339532"
  },
  {
    "url": "fe-optimize-ppt/plugin/zoom/zoom.js",
    "revision": "88a66bec13d6577916d3db64488c38de"
  },
  {
    "url": "img/avatar-2.jpg",
    "revision": "55b9603cdb0caff91ecd803d047730b1"
  },
  {
    "url": "img/avatar-2.png",
    "revision": "d3a1ca94d8290aa71371dda0664aaf14"
  },
  {
    "url": "img/avatar.jpg",
    "revision": "037dec754a042491ae29f2bc02eb1814"
  },
  {
    "url": "img/avatar.png",
    "revision": "a19cc6aacf9b570b8a4047da4796146f"
  },
  {
    "url": "img/bg.jpg",
    "revision": "c8f26794a0ee092e62abbd0f99857064"
  },
  {
    "url": "img/fire.png",
    "revision": "5ed062672c7d4701ec655455e2c9efcc"
  },
  {
    "url": "img/logo.png",
    "revision": "421642f8c4c77139f133d7d1ec05168c"
  },
  {
    "url": "img/pikapika.jpg",
    "revision": "0b6e65b4475bc068ac04c9c24204f1d4"
  },
  {
    "url": "img/tiger.png",
    "revision": "387e1bec3f3a3e5ab83a0a5ed8ed5f12"
  },
  {
    "url": "img/wechat.png",
    "revision": "62c9dd61783e38f36b454af905cecae7"
  },
  {
    "url": "img/wechats.png",
    "revision": "5fd1c47dae075a3542795ae69fea138e"
  },
  {
    "url": "img/wx-global.png",
    "revision": "3910ef869c1c95ecd1211167c5c7721f"
  },
  {
    "url": "img/wx-global1.png",
    "revision": "345b8e76ab0868483dca7a7b33103c47"
  },
  {
    "url": "index.html",
    "revision": "f381b6b25d315460c565fe4e6c593018"
  },
  {
    "url": "love-fe.png",
    "revision": "c631ad86af0196d6257306305dd13659"
  },
  {
    "url": "pages/005afb7501ebf/index.html",
    "revision": "f401425d1c6003e4fc913b129fc80e07"
  },
  {
    "url": "pages/04ac7e87719d9/index.html",
    "revision": "20ad79facdc03c7501e00349c6a356b0"
  },
  {
    "url": "pages/05c534dbae294/index.html",
    "revision": "98bbbe15e3cee9295ab36dd8512a4c32"
  },
  {
    "url": "pages/12bb6ee186b54/index.html",
    "revision": "21398cb2c3f1c65f8f2075497566d431"
  },
  {
    "url": "pages/136f8f068dffe/index.html",
    "revision": "a8fa20e067036dd23815db56ab7579e6"
  },
  {
    "url": "pages/1736b20fa8753/index.html",
    "revision": "088754a25cffd6a7b3bf5d690a4cfeaa"
  },
  {
    "url": "pages/290a2fbb1e629/index.html",
    "revision": "68430345b6ff9b01082db1b12c6c3912"
  },
  {
    "url": "pages/3d292acfbd9ca/index.html",
    "revision": "38df1309b7417ef7ff7e9b70959bacd5"
  },
  {
    "url": "pages/416517735bb6/index.html",
    "revision": "dd20b484293455d771e41eeb29f37a34"
  },
  {
    "url": "pages/4265332f4a648/index.html",
    "revision": "93e520369959c72e0f02a3c64cdd2acc"
  },
  {
    "url": "pages/463caf542a8ff/index.html",
    "revision": "8d64b3635d1eacc71ce40ef997493410"
  },
  {
    "url": "pages/4737f1e54803f/index.html",
    "revision": "97f24e8c4302c5ce36e14a55a94c733e"
  },
  {
    "url": "pages/4e3130c16c521/index.html",
    "revision": "7173215b7a2da7b5bbe30765d154889b"
  },
  {
    "url": "pages/4e5aefd9d013e/index.html",
    "revision": "2f6db7722eaeb0d8e0f1adaba844960d"
  },
  {
    "url": "pages/55e7bb3eb7802/index.html",
    "revision": "42484baf9b6919b5e27c61d0c3c94a96"
  },
  {
    "url": "pages/6db6295ccd96/index.html",
    "revision": "37d211642848ba4fbcf82f9f246a32da"
  },
  {
    "url": "pages/71971e006a13c/index.html",
    "revision": "705ddecadbf766b878c839ac97e45bc2"
  },
  {
    "url": "pages/785710818c193/index.html",
    "revision": "6b37a7f0d9d466ee901398c724e5f43a"
  },
  {
    "url": "pages/7e7aff8d9771b/index.html",
    "revision": "4e31b16bb9bb741617010b72d8616090"
  },
  {
    "url": "pages/83bbb9b9abbe7/index.html",
    "revision": "3f48f3d8d7d28a8e2b3ff8ded8c07924"
  },
  {
    "url": "pages/8c4ef214c7886/index.html",
    "revision": "dd7badd2a52768ce53bfa3e5a54df417"
  },
  {
    "url": "pages/9c687ea799c4e/index.html",
    "revision": "9d88f8ca0869e74d411f7b2ecfe7fff6"
  },
  {
    "url": "pages/9c7717d989fc6/index.html",
    "revision": "93570dad67d145d8c1d33227f44054ff"
  },
  {
    "url": "pages/9de40adc21b12/index.html",
    "revision": "0e9e3f0746903c5fd0c9e45a163beef2"
  },
  {
    "url": "pages/aa9d140ec6135/index.html",
    "revision": "8bf8e6451414999e4a5824bb89ab4a91"
  },
  {
    "url": "pages/ac34940436a4a/index.html",
    "revision": "56aafec1f71ef0a03683c1b909f26260"
  },
  {
    "url": "pages/ae21b75e82658/index.html",
    "revision": "e258db389982c42a4d79aa741f1b3add"
  },
  {
    "url": "pages/b4081db6efbd8/index.html",
    "revision": "ba890951955a8eefe1454e6ea73333ef"
  },
  {
    "url": "pages/b4081db6efbd9/index.html",
    "revision": "fb3caa71f287f2b817f6a01aae8980bb"
  },
  {
    "url": "pages/bc7fdbb035246/index.html",
    "revision": "843c1ca327cc8d37e221aec2aa020e46"
  },
  {
    "url": "pages/be18cb94e364/index.html",
    "revision": "35f3eebf40d756946eaad46c065e5973"
  },
  {
    "url": "pages/c863681e7285f/index.html",
    "revision": "9929a14d6076d902a3f981605b18f1ff"
  },
  {
    "url": "pages/cf42a74e3cc8f/index.html",
    "revision": "3516dd41fc36d3d37b76d36f7187c65e"
  },
  {
    "url": "pages/dc00f73d9d1d9/index.html",
    "revision": "28bfda891c037dc8637756318ec7d9f7"
  },
  {
    "url": "pages/eaca6b104f0f4/index.html",
    "revision": "5de925a7ae1a1ded89d104ced486c16a"
  },
  {
    "url": "pages/f16531008c5a4/index.html",
    "revision": "5f3b6a0f7a83a9405eabc7ce05edc4b6"
  },
  {
    "url": "pages/f593514e1a9d6/index.html",
    "revision": "c58fbcd52557be6efbc18e1426baffb1"
  },
  {
    "url": "pages/f83fb19d191d9/index.html",
    "revision": "8cba188f784dfeb52274bf1b7537fd27"
  },
  {
    "url": "resource-tools/44207a5ef0a8a/index.html",
    "revision": "bb17528ed1af9e80d72483912f243b7e"
  },
  {
    "url": "resource-tools/4c19c32335465/index.html",
    "revision": "af7f6edf12820710f6ed830ed7e27bc3"
  },
  {
    "url": "resource-tools/5f440c9bb4359/index.html",
    "revision": "ab183513265448c8f687e37448319f8c"
  },
  {
    "url": "resource-tools/7566c0ff5a24c/index.html",
    "revision": "9eb2cc4924f6e608238d0c43686c5133"
  },
  {
    "url": "resource-tools/8396c1c08f1b6/index.html",
    "revision": "a65b9b6c2b8cbdd933300e3acf3b4d16"
  },
  {
    "url": "resource-tools/9d5d91d08c126/index.html",
    "revision": "2e0e03854b78e61a8b3c3204fd6f1e07"
  },
  {
    "url": "resource-tools/c618db4b32e39/index.html",
    "revision": "acffbcac5e9940dd4e42c3f8caef2432"
  },
  {
    "url": "resource-tools/c9e44ab0fce9a/index.html",
    "revision": "0242826dd5b1f5e02fd4b83fbe4b783d"
  },
  {
    "url": "resource-tools/ed602e9a815f6/index.html",
    "revision": "69b47411ebc100e9b96471f8cec144d3"
  },
  {
    "url": "study/css/reset.css",
    "revision": "37666e04d93aded7e21dc0f1d0879423"
  },
  {
    "url": "study/index.html",
    "revision": "097c6e1ad6de8e4ea871ff3e74b6cb23"
  },
  {
    "url": "study/precache-manifest.05b24b6636bd972f0f436263abc9dea0.js",
    "revision": "50ff6a5c5a0cbd62f45aa9c94661a085"
  },
  {
    "url": "tags/index.html",
    "revision": "0e20bde65d2f24a1b58f3ca790ddaf6c"
  },
  {
    "url": "vue-iframe-print/css/app.80764a13.css",
    "revision": "41670c952da5bab26acafc6186da19b0"
  },
  {
    "url": "vue-iframe-print/index.html",
    "revision": "96237c9fbc239de1496d1c1e8c36d7b9"
  },
  {
    "url": "vue-iframe-print/js/app.47469697.js",
    "revision": "cd1c40af0cc48bf045b6964d0d1b19de"
  },
  {
    "url": "vue-iframe-print/js/chunk-vendors.4f44ce85.js",
    "revision": "9fe43e915db4d7e06f89817632ddc968"
  },
  {
    "url": "web/docs/babel/index.html",
    "revision": "29252da772b366c60fa50f84688a8c35"
  },
  {
    "url": "web/docs/docschina/index.html",
    "revision": "b5ce1534190b873a35cde7d782d9c15d"
  },
  {
    "url": "web/docs/es6/index.html",
    "revision": "4c999f51df781908f87bff4270528835"
  },
  {
    "url": "web/docs/imooc/wiki/index.html",
    "revision": "f023fbc044accd275ed870994f89c5f5"
  },
  {
    "url": "web/docs/nav/index.html",
    "revision": "0e63dadfbde44017cc0377a1f60086e2"
  },
  {
    "url": "web/docs/node/index.html",
    "revision": "85707d5bd62256f39cb8ea6cb1603a4f"
  },
  {
    "url": "web/docs/react/index.html",
    "revision": "d7c8b97608a32fcf555ef2fdb09b5a4b"
  },
  {
    "url": "web/docs/runoob/index.html",
    "revision": "ab1faa51d74e929c77fbefda27099421"
  },
  {
    "url": "web/docs/typescript/index.html",
    "revision": "24ac54e3a572e6cd22a7956cbdb885e9"
  },
  {
    "url": "web/docs/vue/index.html",
    "revision": "3dfefe2339ee8653f6e84eda6b3adf83"
  },
  {
    "url": "web/docs/webpack/index.html",
    "revision": "ae204ae71edf24493539d87887f8b446"
  },
  {
    "url": "web/git/f85d0c838f3f3/index.html",
    "revision": "ea1c209708098962d21cb15736344415"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
