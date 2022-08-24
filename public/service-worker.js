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
    "revision": "c60c2431c71ab5e48b76fd48c54c1198"
  },
  {
    "url": "archives/index.html",
    "revision": "53cfd6ea2cbb2fffdcaee859707fe604"
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
    "url": "assets/js/13.9de3374c.js",
    "revision": "f88730f5630cde167dad79fafea9f114"
  },
  {
    "url": "assets/js/14.04a31990.js",
    "revision": "dd28a69ef84b9083113b1163eba005bf"
  },
  {
    "url": "assets/js/15.fa2c063e.js",
    "revision": "6779f23d374e05e043e078bc5ef5c81e"
  },
  {
    "url": "assets/js/16.7dd59d64.js",
    "revision": "d4e1dc0a9880281a6b3e53dd258ab41b"
  },
  {
    "url": "assets/js/17.a266632d.js",
    "revision": "7739d01852c607eb5a3be457190576f5"
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
    "url": "assets/js/20.209d065d.js",
    "revision": "cd08f99456e52f8ba5ed39212f021d4e"
  },
  {
    "url": "assets/js/21.811f7dfd.js",
    "revision": "245193c7f7bd4575a32cce2f94411c4a"
  },
  {
    "url": "assets/js/22.e87f3a64.js",
    "revision": "dd7858e1980d10b74bde96324c4fae24"
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
    "url": "assets/js/25.393852f9.js",
    "revision": "d073eb3b612642546f2f2193b746978c"
  },
  {
    "url": "assets/js/26.0ec2d159.js",
    "revision": "7a4bad1eb346301bb8f131a730a21461"
  },
  {
    "url": "assets/js/27.4e17d910.js",
    "revision": "f56058646f029b951a943aa0e692e55a"
  },
  {
    "url": "assets/js/28.8f2c1066.js",
    "revision": "a44950498af3c05eb68318941568a9e8"
  },
  {
    "url": "assets/js/29.65ec1503.js",
    "revision": "35a8595fb97f56d52d284eb132910a00"
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
    "url": "assets/js/31.d110c5a6.js",
    "revision": "ba08ef9622e79fb723b54b14dba9e696"
  },
  {
    "url": "assets/js/32.7898e89d.js",
    "revision": "3a0022d28ea4a36f2ced77c70613e674"
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
    "url": "assets/js/38.4420e193.js",
    "revision": "2007545c59f5e47184e81b305127a099"
  },
  {
    "url": "assets/js/39.62bcb260.js",
    "revision": "738b31374790a2c73cd40f609f746cc6"
  },
  {
    "url": "assets/js/4.aab0e518.js",
    "revision": "07da52315a78e7cf04162df4ec86b93a"
  },
  {
    "url": "assets/js/40.b72dcb92.js",
    "revision": "3e8e286a73786959262bd49f9db0d621"
  },
  {
    "url": "assets/js/41.bb63aa60.js",
    "revision": "200dd4f0094b0d491114651c21f3e8f4"
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
    "url": "assets/js/46.0f897f0a.js",
    "revision": "35886f9e149decac4931bbdbd00cb3c1"
  },
  {
    "url": "assets/js/47.d8d6f771.js",
    "revision": "e6169a0694a8681c1b859fff69ad5600"
  },
  {
    "url": "assets/js/48.aa0d6c3d.js",
    "revision": "20e6e2e144ce8e6d997e6ab279f3fe8d"
  },
  {
    "url": "assets/js/49.e6066761.js",
    "revision": "53ecf79d79adc562acd872cf97f8d6bf"
  },
  {
    "url": "assets/js/5.bede70ab.js",
    "revision": "99973afa49b9c0a2aa066890c1240954"
  },
  {
    "url": "assets/js/50.62900630.js",
    "revision": "2a461460cf5350ec51c44af11cad9ebf"
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
    "url": "assets/js/54.0edd77b9.js",
    "revision": "27da3ba012078515e39061b4ac848410"
  },
  {
    "url": "assets/js/55.7d477bb1.js",
    "revision": "7c7e5bcb0d576546c27a75a16e635f07"
  },
  {
    "url": "assets/js/56.6756ee0c.js",
    "revision": "898df636673c2d9ac89dba5dbd76276a"
  },
  {
    "url": "assets/js/57.0d5b12e9.js",
    "revision": "aab7008111508e47bcdbf515d33fd104"
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
    "url": "assets/js/60.0c84de81.js",
    "revision": "be9d9108c6415f8edc9089bc0ac05281"
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
    "url": "assets/js/63.5a3dfc3b.js",
    "revision": "30dc3f1b585c2b273c72735574bdb97e"
  },
  {
    "url": "assets/js/64.f6b9a2f9.js",
    "revision": "bb2017a952d4e1aaa928f08b641f7407"
  },
  {
    "url": "assets/js/65.76c58353.js",
    "revision": "e0852268a51ff65301c680a561b702ea"
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
    "url": "assets/js/68.876855cb.js",
    "revision": "55fcda78bfc04a71f12cf805ab55840e"
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
    "url": "assets/js/70.b76df882.js",
    "revision": "b433da144fe5021516e4ecdc35c5cce3"
  },
  {
    "url": "assets/js/71.a3bebc1b.js",
    "revision": "34ccfafd060c86973086b51983c2b875"
  },
  {
    "url": "assets/js/8.c71d612f.js",
    "revision": "7c17630863976a67d204821f9be90025"
  },
  {
    "url": "assets/js/9.5b6854a2.js",
    "revision": "a8800061955f07be227bdb06b96defbd"
  },
  {
    "url": "assets/js/app.83766930.js",
    "revision": "5b48864e2a81d11a1625438dd5942635"
  },
  {
    "url": "bookshop/friendslink/index.html",
    "revision": "6c91b77b285dc2c13f2db54953e44af8"
  },
  {
    "url": "bookshop/message-board/index.html",
    "revision": "cab55c73450ba21614acb7166b6c5257"
  },
  {
    "url": "categories/index.html",
    "revision": "5ffb8a8141815a1a6a720d815f63c31e"
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
    "revision": "1515f0527aeb6c3e01296bff831f2e04"
  },
  {
    "url": "love-fe.png",
    "revision": "c631ad86af0196d6257306305dd13659"
  },
  {
    "url": "pages/005afb7501ebf/index.html",
    "revision": "e2c93d9d40cd2a3db6be74c579da391f"
  },
  {
    "url": "pages/04ac7e87719d9/index.html",
    "revision": "2b167208c0019795616999381b840e56"
  },
  {
    "url": "pages/05c534dbae294/index.html",
    "revision": "fab0036388ab95719833fc9295d205b3"
  },
  {
    "url": "pages/12bb6ee186b54/index.html",
    "revision": "aa1e3dd534be0ba733e43a91ba88c024"
  },
  {
    "url": "pages/136f8f068dffe/index.html",
    "revision": "6a40e3a94fe2d735970c19f55085cc11"
  },
  {
    "url": "pages/1736b20fa8753/index.html",
    "revision": "2a563bdcdca3ea7582270f9d35214323"
  },
  {
    "url": "pages/290a2fbb1e629/index.html",
    "revision": "7cdf7935698572fb75ec7669cf1bb632"
  },
  {
    "url": "pages/3d292acfbd9ca/index.html",
    "revision": "9aad1030ba906b5be861993b33739801"
  },
  {
    "url": "pages/416517735bb6/index.html",
    "revision": "a6c43f2b6b46092cc2306a40af426b16"
  },
  {
    "url": "pages/4265332f4a648/index.html",
    "revision": "776c670c3850c41bd7601668b4fbf55d"
  },
  {
    "url": "pages/463caf542a8ff/index.html",
    "revision": "9c1f2a7ef8b67494d77f410abe0080fb"
  },
  {
    "url": "pages/4737f1e54803f/index.html",
    "revision": "bcb4046bd3bf6d979310a38ec26c6801"
  },
  {
    "url": "pages/4e3130c16c521/index.html",
    "revision": "38cc1b74dad526ae60e2cd1e5e6af504"
  },
  {
    "url": "pages/4e5aefd9d013e/index.html",
    "revision": "666bb572ef034d18280246e31afee282"
  },
  {
    "url": "pages/55e7bb3eb7802/index.html",
    "revision": "e5d717f48c9af73c776bc4c5ca97419e"
  },
  {
    "url": "pages/6db6295ccd96/index.html",
    "revision": "e553f6843ef85aa8e120a47ed2cfa4a3"
  },
  {
    "url": "pages/71971e006a13c/index.html",
    "revision": "8a639107b967d74e97e0f056bcea8016"
  },
  {
    "url": "pages/785710818c193/index.html",
    "revision": "6dc06fdbf098204af06c4e02aa243ac3"
  },
  {
    "url": "pages/7e7aff8d9771b/index.html",
    "revision": "17c6c0ee4ae2b225141f51c9aa83cd9f"
  },
  {
    "url": "pages/83bbb9b9abbe7/index.html",
    "revision": "2c8cb671c86c4a88f8d5f5ae3fc5e239"
  },
  {
    "url": "pages/8c4ef214c7886/index.html",
    "revision": "01996f4251e90b774c091f9f850eec90"
  },
  {
    "url": "pages/9c687ea799c4e/index.html",
    "revision": "772cdb9e08e2766eefb98f292ac3fc7d"
  },
  {
    "url": "pages/9c7717d989fc6/index.html",
    "revision": "2b663e433d2e285ce55fbf9ca34a4f99"
  },
  {
    "url": "pages/9de40adc21b12/index.html",
    "revision": "8e5adfab44d4a911247c1030ca93a9ec"
  },
  {
    "url": "pages/aa9d140ec6135/index.html",
    "revision": "5f3c47f3cb95b31de1fad75eec270ee1"
  },
  {
    "url": "pages/ac34940436a4a/index.html",
    "revision": "d0cecdab382a2fa484466be96d666b14"
  },
  {
    "url": "pages/ae21b75e82658/index.html",
    "revision": "0d9939a6b8f379f819426cdc317e0f02"
  },
  {
    "url": "pages/b4081db6efbd8/index.html",
    "revision": "f632e350826ed409bdeaea82d98ea506"
  },
  {
    "url": "pages/b4081db6efbd9/index.html",
    "revision": "2170d7e01efd98fb6a18e81203d8340e"
  },
  {
    "url": "pages/bc7fdbb035246/index.html",
    "revision": "470b63f14e00ff9e23c68721762dacaf"
  },
  {
    "url": "pages/be18cb94e364/index.html",
    "revision": "da105ea3bb766d214bfa00c9635bf205"
  },
  {
    "url": "pages/c863681e7285f/index.html",
    "revision": "44a82747bedf2fd1e5b1c004f97e2253"
  },
  {
    "url": "pages/cf42a74e3cc8f/index.html",
    "revision": "16e31cdace45df15aa46468ef2b24c2c"
  },
  {
    "url": "pages/dc00f73d9d1d9/index.html",
    "revision": "f6a45654210baad879beffb164daf40c"
  },
  {
    "url": "pages/eaca6b104f0f4/index.html",
    "revision": "d023ea99794a45e7b6273f349576aae5"
  },
  {
    "url": "pages/f16531008c5a4/index.html",
    "revision": "ee7a3fc1d79d6a433e6e9aad76e406cc"
  },
  {
    "url": "pages/f593514e1a9d6/index.html",
    "revision": "6effe95775392f30d58bf230aa19fb39"
  },
  {
    "url": "pages/f83fb19d191d9/index.html",
    "revision": "e34c12933e9582338f8702139d40b0c5"
  },
  {
    "url": "resource-tools/44207a5ef0a8a/index.html",
    "revision": "a652b2f3169e978239c4cd37a04a16c6"
  },
  {
    "url": "resource-tools/4c19c32335465/index.html",
    "revision": "3b9dd6103366d62c676ab560ebdb117e"
  },
  {
    "url": "resource-tools/5f440c9bb4359/index.html",
    "revision": "789a9169294c35905162bebb76985dcb"
  },
  {
    "url": "resource-tools/7566c0ff5a24c/index.html",
    "revision": "54584b4b9d2961e1096716a225ecf64b"
  },
  {
    "url": "resource-tools/8396c1c08f1b6/index.html",
    "revision": "cd85506b5e531acbcf9ece3af7b16b9c"
  },
  {
    "url": "resource-tools/9d5d91d08c126/index.html",
    "revision": "c1811892ae1616a695e7bca1d88d397a"
  },
  {
    "url": "resource-tools/c618db4b32e39/index.html",
    "revision": "9b2016695275ab1a6a49a9fdf121a77d"
  },
  {
    "url": "resource-tools/c9e44ab0fce9a/index.html",
    "revision": "6f567e8efd16f6a3c255eabbbddc3a37"
  },
  {
    "url": "resource-tools/ed602e9a815f6/index.html",
    "revision": "6e498ff72cde747fd90c6707affd131d"
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
    "revision": "23e7159d8e4b3b391caf269f6555387b"
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
    "revision": "2ff37b533f7710ff036b43225f507e43"
  },
  {
    "url": "web/docs/docschina/index.html",
    "revision": "4912cdb222505f33469e4a80cd51771a"
  },
  {
    "url": "web/docs/es6/index.html",
    "revision": "13d548237a6aafecb5a7342453fe25d5"
  },
  {
    "url": "web/docs/imooc/wiki/index.html",
    "revision": "1fb83af5f1ce3deab720c7e0ff17d638"
  },
  {
    "url": "web/docs/nav/index.html",
    "revision": "ba619ee943fdcfd8e1f943d95770c5f5"
  },
  {
    "url": "web/docs/node/index.html",
    "revision": "a5be817fab2852f48855638c69b766fc"
  },
  {
    "url": "web/docs/react/index.html",
    "revision": "9c03dc3b48e6a1b759493c526417fa53"
  },
  {
    "url": "web/docs/runoob/index.html",
    "revision": "e36ffff43131a6fdb1476a3398ddb8b7"
  },
  {
    "url": "web/docs/typescript/index.html",
    "revision": "7cd1cdf3bd0f345a1005fcde9863be5c"
  },
  {
    "url": "web/docs/vue/index.html",
    "revision": "be774d7b6c69c43eb9a5baf398c4cbee"
  },
  {
    "url": "web/docs/webpack/index.html",
    "revision": "c1c6a95dc9616b5e0fbed024e5d0817a"
  },
  {
    "url": "web/git/f85d0c838f3f3/index.html",
    "revision": "860c75060fbd2d13b44372fd609e74aa"
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
