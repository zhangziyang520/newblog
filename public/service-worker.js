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
    "revision": "9bdb40ca133e9bdf3e736bec9b2b0707"
  },
  {
    "url": "archives/index.html",
    "revision": "01e04ca7d46831e9bcddfe60b3954f23"
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
    "url": "assets/js/10.ecb3d0e7.js",
    "revision": "fbe7a16426039228c529d8462080e8a1"
  },
  {
    "url": "assets/js/11.58e95a03.js",
    "revision": "085a34d1ed8475031ce48306a9397b3e"
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
    "url": "assets/js/15.a38b497b.js",
    "revision": "2d29899d662ddb40afcaad02264c7712"
  },
  {
    "url": "assets/js/16.769d356f.js",
    "revision": "ecafc6e0a088fa1874212866828d3b24"
  },
  {
    "url": "assets/js/17.07308034.js",
    "revision": "14e33aca4cc608492e80313e0c670930"
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
    "url": "assets/js/23.a9cee09e.js",
    "revision": "3279fa0fd260657d903c8c957de2f1a9"
  },
  {
    "url": "assets/js/24.cef938aa.js",
    "revision": "c3fb4d7acc8fff888d5ce2b2b4f1d54f"
  },
  {
    "url": "assets/js/25.ad103e06.js",
    "revision": "4e2f8affe06ac37d26a78638e4910e57"
  },
  {
    "url": "assets/js/26.bd5b115e.js",
    "revision": "20f51c9f5a06bce03f8591b6b5ef3a5f"
  },
  {
    "url": "assets/js/27.8794f930.js",
    "revision": "7b65f37ce73515c92b3ede6fdfca4b26"
  },
  {
    "url": "assets/js/28.affabaec.js",
    "revision": "2de9dd47470d95d03e195430533829d7"
  },
  {
    "url": "assets/js/29.ef1f4c01.js",
    "revision": "b50f0aef370dbf2c8967bb21325a7353"
  },
  {
    "url": "assets/js/3.8b40c051.js",
    "revision": "7e383ec232240cc695b8217678b0ac5e"
  },
  {
    "url": "assets/js/30.cee89c19.js",
    "revision": "12de5886b405f95e4081a819372dd997"
  },
  {
    "url": "assets/js/31.28475068.js",
    "revision": "e721748e463b90a5e030614ffa5cca4b"
  },
  {
    "url": "assets/js/32.792aac4c.js",
    "revision": "d39b294a1a01ebf1b1aad85606dd26c5"
  },
  {
    "url": "assets/js/33.57eecb25.js",
    "revision": "229c77c6b02bc8883b9623ea906a1341"
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
    "url": "assets/js/41.c9007d77.js",
    "revision": "54f60aa377a2b3dd682d10c00447ff1e"
  },
  {
    "url": "assets/js/42.0283c2a5.js",
    "revision": "8c8229b43cd95f2d0dac9db5f84de543"
  },
  {
    "url": "assets/js/43.391b1c3c.js",
    "revision": "3c55fe313d24b7a9b7b78d205661aa16"
  },
  {
    "url": "assets/js/44.78530cc3.js",
    "revision": "f691cec94969e2f45c7d4441ec23a56f"
  },
  {
    "url": "assets/js/45.cb0795fb.js",
    "revision": "01426247af2e985b085c127c6bcde105"
  },
  {
    "url": "assets/js/46.9f0ce196.js",
    "revision": "d29276de03067fc885d4c77b50a47eb3"
  },
  {
    "url": "assets/js/47.68fcac2e.js",
    "revision": "1f19c4546a348064970841e81efce3aa"
  },
  {
    "url": "assets/js/48.7f91ae20.js",
    "revision": "99229383ecb137bf7cf6f56674ae9e33"
  },
  {
    "url": "assets/js/49.bab0d845.js",
    "revision": "ffc22a74d51bd72cba1c0500f821a8cf"
  },
  {
    "url": "assets/js/5.bede70ab.js",
    "revision": "99973afa49b9c0a2aa066890c1240954"
  },
  {
    "url": "assets/js/50.43a7b6f6.js",
    "revision": "f8c0bd3f81e57bfd293314874bb43d23"
  },
  {
    "url": "assets/js/51.27cbfb8a.js",
    "revision": "f07a4e75fcee406cf85b38c6a0dbe70d"
  },
  {
    "url": "assets/js/52.3dea77d6.js",
    "revision": "bc2b31b2f15abce77031e84cd91e31a2"
  },
  {
    "url": "assets/js/53.6735a8b1.js",
    "revision": "3d04d36985d97ad2d941b9885152c6f0"
  },
  {
    "url": "assets/js/54.4aa5fda5.js",
    "revision": "d492257c5243553291190873c646e62b"
  },
  {
    "url": "assets/js/55.7d147c59.js",
    "revision": "0477c5887ce9fd7942e669850251dc9f"
  },
  {
    "url": "assets/js/56.dc2a1a4c.js",
    "revision": "d8a1b842462eac6498cb8d5ae21d12d5"
  },
  {
    "url": "assets/js/57.53da0339.js",
    "revision": "e1fcdf9f925e0b9cc4e15ee08a3f0b5f"
  },
  {
    "url": "assets/js/58.0ddfe769.js",
    "revision": "590329f6aab689fa147c7fb90d417710"
  },
  {
    "url": "assets/js/59.8745a191.js",
    "revision": "4141dd4aaa993762fed6f531ec9504bd"
  },
  {
    "url": "assets/js/6.b5065b4a.js",
    "revision": "10e8ecf8e9eb593d0a16de0f1376ea20"
  },
  {
    "url": "assets/js/60.cf9bb61c.js",
    "revision": "5c4f2ddd9486246c3967f5a28aaa52cf"
  },
  {
    "url": "assets/js/61.774ca7cc.js",
    "revision": "337681ebb2efb7da6c9df0b155543bf6"
  },
  {
    "url": "assets/js/62.aaca1ca7.js",
    "revision": "ba7a59468daf09cbbc2ef135ecc6dd81"
  },
  {
    "url": "assets/js/63.42abdf42.js",
    "revision": "30dc3f1b585c2b273c72735574bdb97e"
  },
  {
    "url": "assets/js/64.b505d2c2.js",
    "revision": "d2df78bbf5cc5aefa809971ddad5b1d9"
  },
  {
    "url": "assets/js/65.2efb0232.js",
    "revision": "f362f10bb4e4ff23bb0329c9185d6c90"
  },
  {
    "url": "assets/js/66.3bb68ffd.js",
    "revision": "6dc4e6b271465fbb79331b033c3a3ad6"
  },
  {
    "url": "assets/js/67.032643de.js",
    "revision": "abb6eacf3e1e4d109ece8f4c1e7a93bc"
  },
  {
    "url": "assets/js/68.2371683d.js",
    "revision": "336538890a92e1c4700d1c73dcec8b53"
  },
  {
    "url": "assets/js/69.5823bc7b.js",
    "revision": "f4e6cdc02c89fd606565d1a74a38d434"
  },
  {
    "url": "assets/js/7.d9bcc1c7.js",
    "revision": "d8f8c79c20c9fa345349aa54538b5609"
  },
  {
    "url": "assets/js/70.b76df882.js",
    "revision": "b433da144fe5021516e4ecdc35c5cce3"
  },
  {
    "url": "assets/js/71.a3bebc1b.js",
    "revision": "34ccfafd060c86973086b51983c2b875"
  },
  {
    "url": "assets/js/8.5c40b2e5.js",
    "revision": "81635921a243b1c9816a330d027ab6c6"
  },
  {
    "url": "assets/js/9.efc510f1.js",
    "revision": "16d7fb3b89ab9970555715a18009f61b"
  },
  {
    "url": "assets/js/app.ebc4803c.js",
    "revision": "9cc0991c9d5682fc91c893c6afa01f04"
  },
  {
    "url": "bookshop/friendslink/index.html",
    "revision": "e4767edbe69f450c0385df6909bb8a09"
  },
  {
    "url": "bookshop/message-board/index.html",
    "revision": "7b834f1f84f5cacac9ea6c2cf595fdb0"
  },
  {
    "url": "categories/index.html",
    "revision": "b31da5e23e77d4b5c4ee0d68d52078a2"
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
    "revision": "40e0eb27aa2e2d825039f2216849faaa"
  },
  {
    "url": "love-fe.png",
    "revision": "c631ad86af0196d6257306305dd13659"
  },
  {
    "url": "pages/005afb7501ebf/index.html",
    "revision": "81b80f5331cb0fed5dfd0858c9e98f63"
  },
  {
    "url": "pages/04ac7e87719d9/index.html",
    "revision": "7bb1cd3f3901a12b7b5a16c9f0210ffe"
  },
  {
    "url": "pages/05c534dbae294/index.html",
    "revision": "6fce474ae08ad3e30920cc72ba36cc88"
  },
  {
    "url": "pages/12bb6ee186b54/index.html",
    "revision": "52b5796df3b7ed9ed3732d8f19fae661"
  },
  {
    "url": "pages/136f8f068dffe/index.html",
    "revision": "4551e9d1a6d48abb08a809355794f81e"
  },
  {
    "url": "pages/1736b20fa8753/index.html",
    "revision": "8adf527613eac108621f6bc094d8615f"
  },
  {
    "url": "pages/290a2fbb1e629/index.html",
    "revision": "3fdf34719acfaba15b983fc6695510c9"
  },
  {
    "url": "pages/3d292acfbd9ca/index.html",
    "revision": "1b15e448fb03f86654e8e16c6475a864"
  },
  {
    "url": "pages/416517735bb6/index.html",
    "revision": "6670fb0249eea921f5d7efb3ddbd4fb8"
  },
  {
    "url": "pages/4265332f4a648/index.html",
    "revision": "e604b75536d5e077e4a02a636e29fcda"
  },
  {
    "url": "pages/463caf542a8ff/index.html",
    "revision": "bc167cd60280ed9a11f017705ed1804d"
  },
  {
    "url": "pages/4737f1e54803f/index.html",
    "revision": "097873a557f1370d30a4ce5cabd54b1b"
  },
  {
    "url": "pages/4e3130c16c521/index.html",
    "revision": "d7e95f0980e686c6fc2ba37621239d69"
  },
  {
    "url": "pages/4e5aefd9d013e/index.html",
    "revision": "2b519a66a4119caba6c3b5c187494c6c"
  },
  {
    "url": "pages/55e7bb3eb7802/index.html",
    "revision": "7c0bff274904357a5eaea9c2cce1b9a9"
  },
  {
    "url": "pages/6db6295ccd96/index.html",
    "revision": "b6036af846e432a3c3cf1efb5e06f789"
  },
  {
    "url": "pages/71971e006a13c/index.html",
    "revision": "34cd43f5b2b7d642158e0c2288a9716c"
  },
  {
    "url": "pages/785710818c193/index.html",
    "revision": "2dc296d4bca3a37b9a4f810e2d5cab1b"
  },
  {
    "url": "pages/7e7aff8d9771b/index.html",
    "revision": "c7339c66a8bf6abb0c01fea02b69c4dd"
  },
  {
    "url": "pages/83bbb9b9abbe7/index.html",
    "revision": "a052ef9529994167dfd4defbecd9b23d"
  },
  {
    "url": "pages/8c4ef214c7886/index.html",
    "revision": "13571602aa3917b6fb4b97fd8053a86d"
  },
  {
    "url": "pages/9c687ea799c4e/index.html",
    "revision": "9da283e0eef080b51a630d5e51326fa5"
  },
  {
    "url": "pages/9c7717d989fc6/index.html",
    "revision": "751df85d10ec6c0a530fe6b59dcca089"
  },
  {
    "url": "pages/9de40adc21b12/index.html",
    "revision": "3e88e47a8467f9566d398dbe3f528348"
  },
  {
    "url": "pages/aa9d140ec6135/index.html",
    "revision": "ee27061279bf09555dede25550ad4eb1"
  },
  {
    "url": "pages/ac34940436a4a/index.html",
    "revision": "84b61e5e51fec784a25e3eeafed36aa3"
  },
  {
    "url": "pages/ae21b75e82658/index.html",
    "revision": "bee6a4a6058f20667cf7190859cac327"
  },
  {
    "url": "pages/b4081db6efbd8/index.html",
    "revision": "9df036655d8dd95b2a01cccd17e94341"
  },
  {
    "url": "pages/b4081db6efbd9/index.html",
    "revision": "bf20e3d4baf7e1d2314e7c19672f2795"
  },
  {
    "url": "pages/bc7fdbb035246/index.html",
    "revision": "5209c61a2149338d354380bf55936c92"
  },
  {
    "url": "pages/be18cb94e364/index.html",
    "revision": "065b32ac2f52283bde6dc26feaa27335"
  },
  {
    "url": "pages/c863681e7285f/index.html",
    "revision": "9da27fd80f8ea685be1a86f45bca4b0f"
  },
  {
    "url": "pages/cf42a74e3cc8f/index.html",
    "revision": "af6019692c1d9089306c321cadbcb64c"
  },
  {
    "url": "pages/dc00f73d9d1d9/index.html",
    "revision": "136e708ed07adc8dacb05a9e90da4c53"
  },
  {
    "url": "pages/eaca6b104f0f4/index.html",
    "revision": "47d66d8fddaaa2f7a62d9dd5280906ca"
  },
  {
    "url": "pages/f16531008c5a4/index.html",
    "revision": "8a882faf947b8cf66233786a79098f98"
  },
  {
    "url": "pages/f593514e1a9d6/index.html",
    "revision": "47c73cbd3c62e0f233cf4d643aed4af2"
  },
  {
    "url": "pages/f83fb19d191d9/index.html",
    "revision": "d226b128c6614b30aa0055e1779ed250"
  },
  {
    "url": "resource-tools/44207a5ef0a8a/index.html",
    "revision": "ab0da72f88aa8927b3d651f9881fa57d"
  },
  {
    "url": "resource-tools/4c19c32335465/index.html",
    "revision": "b9fc6efd129f7c423c37c4697ff22a03"
  },
  {
    "url": "resource-tools/5f440c9bb4359/index.html",
    "revision": "d3535b0ea54e98958bfa9bd57ad63381"
  },
  {
    "url": "resource-tools/7566c0ff5a24c/index.html",
    "revision": "6557dff5d25e98b28c3ddb5784506e8a"
  },
  {
    "url": "resource-tools/8396c1c08f1b6/index.html",
    "revision": "3ed59ac4c78b188a1abc58fb55c63cbc"
  },
  {
    "url": "resource-tools/9d5d91d08c126/index.html",
    "revision": "d9ceeb2814860dfda695e9493d8d1866"
  },
  {
    "url": "resource-tools/c618db4b32e39/index.html",
    "revision": "c390f5987f972768ab706ab9bab4f4c7"
  },
  {
    "url": "resource-tools/c9e44ab0fce9a/index.html",
    "revision": "9f4c7404f36034692ed87f0952df1a5c"
  },
  {
    "url": "resource-tools/ed602e9a815f6/index.html",
    "revision": "a5c6163f90e20bc05cc3c56406877b81"
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
    "revision": "90c1c0dab09fbc26bbb48dba49787f47"
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
    "revision": "3c8964132e17bcfd83f1fa0b3a177781"
  },
  {
    "url": "web/docs/docschina/index.html",
    "revision": "4cf4b3371e983ee447e7b49ccc04c4a5"
  },
  {
    "url": "web/docs/es6/index.html",
    "revision": "8fe0a9b5a651034d0c5b6c781f7b7e98"
  },
  {
    "url": "web/docs/imooc/wiki/index.html",
    "revision": "05a614164e0b65b8b5124768fa585fe6"
  },
  {
    "url": "web/docs/nav/index.html",
    "revision": "6a4c9bb4bf80f40c42aef60bb1d73aad"
  },
  {
    "url": "web/docs/node/index.html",
    "revision": "d8b6890138da3432c4d47538a19d4169"
  },
  {
    "url": "web/docs/react/index.html",
    "revision": "bd9dafb60283914d3d21ed42f1d82185"
  },
  {
    "url": "web/docs/runoob/index.html",
    "revision": "1ff240dc0a63cd0a607d92a6ea9b3503"
  },
  {
    "url": "web/docs/typescript/index.html",
    "revision": "87b822ad313e2dbe00b318446c66cf85"
  },
  {
    "url": "web/docs/vue/index.html",
    "revision": "db50ce404e3c2646cd14bd795c5f00df"
  },
  {
    "url": "web/docs/webpack/index.html",
    "revision": "d54a39d3a2a061b8101fa1de292a2fd2"
  },
  {
    "url": "web/git/f85d0c838f3f3/index.html",
    "revision": "1e56d6e852b44cea0608cfe73b60784a"
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
