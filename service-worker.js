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
    "revision": "880fb9a89dfeab3fe5381df34d4f499e"
  },
  {
    "url": "archives/index.html",
    "revision": "a0d086ab58805eec0858c03d28423062"
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
    "url": "assets/js/12.1d0eaa50.js",
    "revision": "f4966e5f4b78e67b4ac7b906407eb607"
  },
  {
    "url": "assets/js/13.9792156e.js",
    "revision": "32a60babef23e3fe18557474564fa759"
  },
  {
    "url": "assets/js/14.b3d6ffae.js",
    "revision": "6d20aebb584cd45aa018f26180ec69c3"
  },
  {
    "url": "assets/js/15.9f3c783e.js",
    "revision": "307936a53ce75e765fc7ec89afab9c17"
  },
  {
    "url": "assets/js/16.175bd189.js",
    "revision": "e048eee0110bb5514df6c22478e3182f"
  },
  {
    "url": "assets/js/17.94273617.js",
    "revision": "17f5c5d226633ac80a101e5014bf9bb7"
  },
  {
    "url": "assets/js/18.2249488d.js",
    "revision": "e0fd4eca25312aab92f7a0a7ae844d17"
  },
  {
    "url": "assets/js/19.bf0ea930.js",
    "revision": "e2b3eaa79e0d486444b77d567c25f341"
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
    "url": "assets/js/21.981317d8.js",
    "revision": "4b8568b24b0a32a929293d99773b620a"
  },
  {
    "url": "assets/js/22.e87f3a64.js",
    "revision": "dd7858e1980d10b74bde96324c4fae24"
  },
  {
    "url": "assets/js/23.86f54e9f.js",
    "revision": "ad94dbb2419cfda45e91b267ed4f3b21"
  },
  {
    "url": "assets/js/24.59add3b7.js",
    "revision": "9c3bf0acb7ddaadec7e95d8b46199beb"
  },
  {
    "url": "assets/js/25.f1475f74.js",
    "revision": "06d22d0c23b7fb59edf161cb969a6133"
  },
  {
    "url": "assets/js/26.47b3d4cf.js",
    "revision": "e0ab34721dfeb5426aa88e865fbbe870"
  },
  {
    "url": "assets/js/27.8892b0d4.js",
    "revision": "f303d4a63186a7da603b2a802b53bcee"
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
    "url": "assets/js/30.92640bb5.js",
    "revision": "416f7ceb861f1efb0688b48d8fd93811"
  },
  {
    "url": "assets/js/31.46084066.js",
    "revision": "76e3066e1235821295e3976ea08a7b46"
  },
  {
    "url": "assets/js/32.c16f8eca.js",
    "revision": "31c1b1b4a6af3d12f033c136a77c166c"
  },
  {
    "url": "assets/js/33.57eecb25.js",
    "revision": "229c77c6b02bc8883b9623ea906a1341"
  },
  {
    "url": "assets/js/34.cf3ac603.js",
    "revision": "61716b19f2ca75e8a0127bb1832f1d48"
  },
  {
    "url": "assets/js/35.caade2df.js",
    "revision": "5f738bdb3e58ca671f18bb6c74b2d3d1"
  },
  {
    "url": "assets/js/36.13121950.js",
    "revision": "f12abf450d2c04163ab11d0e0ec2234e"
  },
  {
    "url": "assets/js/37.64a80065.js",
    "revision": "adbdf5edd3912fe2486221322b474af4"
  },
  {
    "url": "assets/js/38.37dc8002.js",
    "revision": "ce5f787d4bfe214bee2946af23cee22f"
  },
  {
    "url": "assets/js/39.742f304d.js",
    "revision": "89b719ca45616062f8323642cece552d"
  },
  {
    "url": "assets/js/4.aab0e518.js",
    "revision": "07da52315a78e7cf04162df4ec86b93a"
  },
  {
    "url": "assets/js/40.9a84e3e2.js",
    "revision": "e0a9b18e40b3edb9fdbe612508fc7f5e"
  },
  {
    "url": "assets/js/41.e72de6fc.js",
    "revision": "366c631dd7d0523d0f067d4c1957a430"
  },
  {
    "url": "assets/js/42.a58d7e7a.js",
    "revision": "67464e1ef53df65cfc5e8e3077aa8293"
  },
  {
    "url": "assets/js/43.ac9951be.js",
    "revision": "e3f67e9d3f3e3eff06c955be3ff8817d"
  },
  {
    "url": "assets/js/44.86570cd8.js",
    "revision": "a80c660122c57a50b07bb61b62b6686e"
  },
  {
    "url": "assets/js/45.3fb5a580.js",
    "revision": "48699e42cbf873e3c2022dff3650116a"
  },
  {
    "url": "assets/js/46.5261de20.js",
    "revision": "57a84eb43089a222aebd30aca1df448f"
  },
  {
    "url": "assets/js/47.4a0fbe6d.js",
    "revision": "b2bc947a755d6aca51a40b7feabf63e0"
  },
  {
    "url": "assets/js/48.aa0d6c3d.js",
    "revision": "20e6e2e144ce8e6d997e6ab279f3fe8d"
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
    "url": "assets/js/50.0c71ff48.js",
    "revision": "46a567137365bddd316642cf0c6afcb1"
  },
  {
    "url": "assets/js/51.067fc6b4.js",
    "revision": "b77a24262b7018dbdc2c86f1b90094c9"
  },
  {
    "url": "assets/js/52.4b9703a7.js",
    "revision": "5e1514224fefed813d95910beff244ef"
  },
  {
    "url": "assets/js/53.1bc92255.js",
    "revision": "977ff2db3ada198558d63053bc20910f"
  },
  {
    "url": "assets/js/54.24343495.js",
    "revision": "289bbd40a4079235699ea6392b9f2c6e"
  },
  {
    "url": "assets/js/55.7d147c59.js",
    "revision": "0477c5887ce9fd7942e669850251dc9f"
  },
  {
    "url": "assets/js/56.9bef0cc9.js",
    "revision": "464a6d5a34174f7b7cea131453d997ce"
  },
  {
    "url": "assets/js/57.53da0339.js",
    "revision": "e1fcdf9f925e0b9cc4e15ee08a3f0b5f"
  },
  {
    "url": "assets/js/58.a5728e59.js",
    "revision": "2776b5878d9b18cc66f871fe49f855c6"
  },
  {
    "url": "assets/js/59.72c850fa.js",
    "revision": "b82ce2ae74c59b132fc29ba3f479e12f"
  },
  {
    "url": "assets/js/6.b5065b4a.js",
    "revision": "10e8ecf8e9eb593d0a16de0f1376ea20"
  },
  {
    "url": "assets/js/60.9369f11a.js",
    "revision": "021c51f10400d879b6120b4eca5c10c8"
  },
  {
    "url": "assets/js/61.1c96a8d5.js",
    "revision": "9716d0cc6ff09c9d8d14ef9fa1a6eaf5"
  },
  {
    "url": "assets/js/62.d33f4178.js",
    "revision": "f226b7db6cfc9a32c1a77c8b1abb9180"
  },
  {
    "url": "assets/js/63.15dba310.js",
    "revision": "01f4feee8d167b5bdfc05d31c4fa62cb"
  },
  {
    "url": "assets/js/64.b7eeee2b.js",
    "revision": "38abf0afb19bc707cb1f243ac0eda9ad"
  },
  {
    "url": "assets/js/65.2efb0232.js",
    "revision": "f362f10bb4e4ff23bb0329c9185d6c90"
  },
  {
    "url": "assets/js/66.a59cb70f.js",
    "revision": "5ceb6bef6a5bb2907b216091196eec19"
  },
  {
    "url": "assets/js/67.3243e02a.js",
    "revision": "5ad06726ac033d7c3b32566752020f52"
  },
  {
    "url": "assets/js/68.8ec9baeb.js",
    "revision": "92cde410e36548464b49a3c668414b2e"
  },
  {
    "url": "assets/js/69.d7b02022.js",
    "revision": "fbbff4d0607fc2e5f6d4ff8728cf24aa"
  },
  {
    "url": "assets/js/7.d9bcc1c7.js",
    "revision": "d8f8c79c20c9fa345349aa54538b5609"
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
    "url": "assets/js/8.5c40b2e5.js",
    "revision": "81635921a243b1c9816a330d027ab6c6"
  },
  {
    "url": "assets/js/9.efc510f1.js",
    "revision": "16d7fb3b89ab9970555715a18009f61b"
  },
  {
    "url": "assets/js/app.e8a28d77.js",
    "revision": "ed0639b3ab27158591a4b28599d35901"
  },
  {
    "url": "bookshop/friendslink/index.html",
    "revision": "7b2d0dafbd9485e87fbefe475564410b"
  },
  {
    "url": "bookshop/message-board/index.html",
    "revision": "7ec90a9793641591799696dc234daba6"
  },
  {
    "url": "categories/index.html",
    "revision": "712e8c0dfbf9bee036a7d2e665e738f7"
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
    "revision": "5acad4e3ec1062c0d03f220dedac0475"
  },
  {
    "url": "love-fe.png",
    "revision": "c631ad86af0196d6257306305dd13659"
  },
  {
    "url": "pages/005afb7501ebf/index.html",
    "revision": "6a77d2e9afee9b9ac53ecdeb34ccc8bc"
  },
  {
    "url": "pages/04ac7e87719d9/index.html",
    "revision": "3c5e93991d4ffc360ac932ca3fcc63d1"
  },
  {
    "url": "pages/05c534dbae294/index.html",
    "revision": "1afc01582e4f58767831fdf76b86147d"
  },
  {
    "url": "pages/12bb6ee186b54/index.html",
    "revision": "1bc0eea16ab6a574163be960f2278c2f"
  },
  {
    "url": "pages/136f8f068dffe/index.html",
    "revision": "5326db22df7e36791bcefa97555210f3"
  },
  {
    "url": "pages/1736b20fa8753/index.html",
    "revision": "7b82dbb42d2132e1d885e5d480eb619c"
  },
  {
    "url": "pages/290a2fbb1e629/index.html",
    "revision": "4b3432353fefa4728a909aa2d5cb315a"
  },
  {
    "url": "pages/3d292acfbd9ca/index.html",
    "revision": "55b595d8b57027c1ad483ca152976215"
  },
  {
    "url": "pages/416517735bb6/index.html",
    "revision": "b6a7684ad82c076d8b4f8ae259efcc76"
  },
  {
    "url": "pages/4265332f4a648/index.html",
    "revision": "013dc9258e90c4838f50c0be6b0b9390"
  },
  {
    "url": "pages/463caf542a8ff/index.html",
    "revision": "deb0b1ba46111f3ba22096fb54a0707b"
  },
  {
    "url": "pages/4737f1e54803f/index.html",
    "revision": "c972dabffc44c90a2bfc3ecc48df7797"
  },
  {
    "url": "pages/4e3130c16c521/index.html",
    "revision": "b3ed69545689f69fc588790cddafc126"
  },
  {
    "url": "pages/4e5aefd9d013e/index.html",
    "revision": "c4e8a0a26271ec93ef8c361b0fe06994"
  },
  {
    "url": "pages/55e7bb3eb7802/index.html",
    "revision": "2c5738695b9249c26eb6bbdb67929acb"
  },
  {
    "url": "pages/6db6295ccd96/index.html",
    "revision": "1f4a8cd04116047e7fa30649dde3e8e5"
  },
  {
    "url": "pages/71971e006a13c/index.html",
    "revision": "ab3e58e1f5992c25115571a4aa08b93a"
  },
  {
    "url": "pages/785710818c193/index.html",
    "revision": "1b33e317a5ca27cd5c69e46050c5c903"
  },
  {
    "url": "pages/7e7aff8d9771b/index.html",
    "revision": "5fc7b837239ae84790cc63e77e338096"
  },
  {
    "url": "pages/83bbb9b9abbe7/index.html",
    "revision": "be224de2daefd884ea6fc35011c4e3de"
  },
  {
    "url": "pages/8c4ef214c7886/index.html",
    "revision": "678c51dc1e57cfb2dcf966671cbbadd1"
  },
  {
    "url": "pages/9c687ea799c4e/index.html",
    "revision": "bc4f742eeb2b65919af6d956130ffbc0"
  },
  {
    "url": "pages/9c7717d989fc6/index.html",
    "revision": "f351e57f19fb14b92ba9090ba4698fa0"
  },
  {
    "url": "pages/9de40adc21b12/index.html",
    "revision": "32c3d36021bae659acfaf031975a947c"
  },
  {
    "url": "pages/aa9d140ec6135/index.html",
    "revision": "b30984f1f528ede29fa435a6c8cbf43d"
  },
  {
    "url": "pages/ac34940436a4a/index.html",
    "revision": "c5cff6c8b9534d8460a33afb99d95fb2"
  },
  {
    "url": "pages/ae21b75e82658/index.html",
    "revision": "f2229cb315677fe56328f60582da2dc5"
  },
  {
    "url": "pages/b4081db6efbd8/index.html",
    "revision": "efb9d6beb1b4ab6eb2525ee33b03e51e"
  },
  {
    "url": "pages/b4081db6efbd9/index.html",
    "revision": "c03c343f6ed838b73b6e47ae425e4960"
  },
  {
    "url": "pages/bc7fdbb035246/index.html",
    "revision": "930dce181c7751a1c72a3649074099cb"
  },
  {
    "url": "pages/be18cb94e364/index.html",
    "revision": "19a8d4f58b6d87087b982a8530a3b666"
  },
  {
    "url": "pages/c863681e7285f/index.html",
    "revision": "d95d7e17929296f2e1a11ad35d028aec"
  },
  {
    "url": "pages/cf42a74e3cc8f/index.html",
    "revision": "9567a3f5cbff2a7c4f65e38bdddcccb1"
  },
  {
    "url": "pages/dc00f73d9d1d9/index.html",
    "revision": "6c6550b729d5073b13a2ec718126a8cc"
  },
  {
    "url": "pages/eaca6b104f0f4/index.html",
    "revision": "3beb7e5c018de1f9b924c6ec82c5037b"
  },
  {
    "url": "pages/f16531008c5a4/index.html",
    "revision": "3a9c2589d75bc01f537389584b2d21d1"
  },
  {
    "url": "pages/f593514e1a9d6/index.html",
    "revision": "e1e563acdd04dab854060095be586157"
  },
  {
    "url": "pages/f83fb19d191d9/index.html",
    "revision": "cee7bef39b257757dd692e440c3b7b77"
  },
  {
    "url": "resource-tools/44207a5ef0a8a/index.html",
    "revision": "bfa26972ddfdf6dc0b535457ebd23710"
  },
  {
    "url": "resource-tools/4c19c32335465/index.html",
    "revision": "0249d1eb279252b8c2fb06dd4f46a43d"
  },
  {
    "url": "resource-tools/5f440c9bb4359/index.html",
    "revision": "86b9f00ff11c1d255eaa80deeb01c141"
  },
  {
    "url": "resource-tools/7566c0ff5a24c/index.html",
    "revision": "d900ad5efc1ef19c3639bb0d9a76360b"
  },
  {
    "url": "resource-tools/8396c1c08f1b6/index.html",
    "revision": "30d030f1f3b926557b0484659affbee7"
  },
  {
    "url": "resource-tools/9d5d91d08c126/index.html",
    "revision": "0ff73be46e2ffb6313f14cb83c2c9dcc"
  },
  {
    "url": "resource-tools/c618db4b32e39/index.html",
    "revision": "ba7ea2877575f359aad59207cecd87bc"
  },
  {
    "url": "resource-tools/c9e44ab0fce9a/index.html",
    "revision": "808e471c02d14831c0f7b25e704a24ff"
  },
  {
    "url": "resource-tools/ed602e9a815f6/index.html",
    "revision": "224dc87421b69702b9df01237c884b83"
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
    "revision": "a0e6956d2c546753f67a77138e67a653"
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
    "revision": "12c6f07ea8cb48d28cbf264184f32067"
  },
  {
    "url": "web/docs/docschina/index.html",
    "revision": "9d2a3f88a33bb6afeed52cf42713399a"
  },
  {
    "url": "web/docs/es6/index.html",
    "revision": "903117e736a70eef2895e91a72ce6f30"
  },
  {
    "url": "web/docs/imooc/wiki/index.html",
    "revision": "2442221dc2d28763f6ccc4db49723dbf"
  },
  {
    "url": "web/docs/nav/index.html",
    "revision": "eb7e8963235850871bc89f780336e5e2"
  },
  {
    "url": "web/docs/node/index.html",
    "revision": "f6d8ff9862611eaccd456ce3a52e0c87"
  },
  {
    "url": "web/docs/react/index.html",
    "revision": "01121d91b8c4c107136d29836c306906"
  },
  {
    "url": "web/docs/runoob/index.html",
    "revision": "8abde0a306ba2ff4fbdd80496ae46712"
  },
  {
    "url": "web/docs/typescript/index.html",
    "revision": "47e93c7dddabecedb46675a8f13eced6"
  },
  {
    "url": "web/docs/vue/index.html",
    "revision": "0a139566bd964771b8403f2e4018ccfb"
  },
  {
    "url": "web/docs/webpack/index.html",
    "revision": "b7ad2b6118889b15043b6d7acb52056d"
  },
  {
    "url": "web/git/f85d0c838f3f3/index.html",
    "revision": "a5b6a6a44629a8633bb549f0ba8160a0"
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
