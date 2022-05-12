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
    "revision": "5771a6c4c2595fdbe06445ed50726895"
  },
  {
    "url": "archives/index.html",
    "revision": "de441e995ccb069dec8b4b6a3a67582b"
  },
  {
    "url": "assets/css/0.styles.069791ed.css",
    "revision": "ceace6fa67712674631237ab71463e78"
  },
  {
    "url": "assets/img/loading.18d75e19.gif",
    "revision": "18d75e19791c1d042f102e088f463d8a"
  },
  {
    "url": "assets/js/10.6869c256.js",
    "revision": "ca76aa3cbc2886d66edcca8b394a2086"
  },
  {
    "url": "assets/js/11.f9708e82.js",
    "revision": "b22156a01aa7d96f90297c46d2c76281"
  },
  {
    "url": "assets/js/12.d5a191e3.js",
    "revision": "4634cd72b81e1cb1c2ace1f6b755ae88"
  },
  {
    "url": "assets/js/13.f42d43b2.js",
    "revision": "ce632ec99352e8825661c10830d665c9"
  },
  {
    "url": "assets/js/14.7beefd64.js",
    "revision": "18eafba6edfb72eed66cf8974aba167b"
  },
  {
    "url": "assets/js/15.33f2495b.js",
    "revision": "c087658fee2f9f2615a47285470c0071"
  },
  {
    "url": "assets/js/16.f0b1e089.js",
    "revision": "e045de2713263ad81ac6b9494fbe2953"
  },
  {
    "url": "assets/js/17.6199b090.js",
    "revision": "33095373d82188b34a1e68167885f9de"
  },
  {
    "url": "assets/js/18.ed23daeb.js",
    "revision": "bba226c13d09f18868ca76924d3c2e2c"
  },
  {
    "url": "assets/js/19.906cf55b.js",
    "revision": "acbc365b9cdee6e1f1e84a3f51677f18"
  },
  {
    "url": "assets/js/2.d9e6805c.js",
    "revision": "0cdd18d962f62f1c03b1eda9e8d9b849"
  },
  {
    "url": "assets/js/20.390749e8.js",
    "revision": "e9bbc830db0903b27a19d4b3cc5761d9"
  },
  {
    "url": "assets/js/21.51c89293.js",
    "revision": "d7f4efa9810980ff1ecf5b77daf8399f"
  },
  {
    "url": "assets/js/22.9c83326e.js",
    "revision": "4f3cf3edff5a13b501bd571818f8b5c5"
  },
  {
    "url": "assets/js/23.19b76906.js",
    "revision": "67d9b4689c85331b0512a65b91f286c1"
  },
  {
    "url": "assets/js/24.d76979be.js",
    "revision": "0317082590783b0c62ef04f16855643a"
  },
  {
    "url": "assets/js/25.1f431f49.js",
    "revision": "86bf3147c21aec1ce67c17de07183879"
  },
  {
    "url": "assets/js/26.e5e4831f.js",
    "revision": "a34099e3f64dd6e56b395ee8e796f4d9"
  },
  {
    "url": "assets/js/27.68e60f08.js",
    "revision": "093cd9f869690780dfc487e1a88dc7c3"
  },
  {
    "url": "assets/js/28.36b42e15.js",
    "revision": "a0b2d5d5bf8fc9ff34350e6e2338d0cc"
  },
  {
    "url": "assets/js/29.aab3a1df.js",
    "revision": "76e6c1b00763cc888d547ef58ec50aa2"
  },
  {
    "url": "assets/js/3.8aeca38c.js",
    "revision": "4a7a70325976dbff1bb7a86bf442f0a4"
  },
  {
    "url": "assets/js/30.4f8899f0.js",
    "revision": "1e3c633367749f0fcaeb2cba7c8a9705"
  },
  {
    "url": "assets/js/31.f38b1945.js",
    "revision": "80ef0755edd11cbfb4426a4dbd31b985"
  },
  {
    "url": "assets/js/32.7e21ff02.js",
    "revision": "b7ef2fb411595258262830d41dcf161f"
  },
  {
    "url": "assets/js/33.5cce752f.js",
    "revision": "18c37acae6b1f676409654c0f4adc9f3"
  },
  {
    "url": "assets/js/34.42c7f78f.js",
    "revision": "f2b4a8da1974f563f314c661d1843e36"
  },
  {
    "url": "assets/js/35.e257736e.js",
    "revision": "98b1b5c956b7f828345f4c5c90fe3634"
  },
  {
    "url": "assets/js/36.1c29c1f4.js",
    "revision": "3f5fe94680f55fad235b80aa46fa1b50"
  },
  {
    "url": "assets/js/37.85d53a35.js",
    "revision": "d0f20c6c0408dff79c73434affe85381"
  },
  {
    "url": "assets/js/38.cfb5e9a2.js",
    "revision": "1de98f7a276a73dac607732a79b9c34e"
  },
  {
    "url": "assets/js/39.47d282a4.js",
    "revision": "bea77f60125b4e7a723b6376c319934b"
  },
  {
    "url": "assets/js/4.e7eb6539.js",
    "revision": "511ce0fe2c806c87434a895e7ed74ef6"
  },
  {
    "url": "assets/js/40.93e21e9a.js",
    "revision": "ceb05fd16ac616e35b788ffcbede3ace"
  },
  {
    "url": "assets/js/41.d516c3e8.js",
    "revision": "69106d8cf31b256d8274bc206715a1d1"
  },
  {
    "url": "assets/js/42.6988d55d.js",
    "revision": "3d19e3d50abd87c5ea4ae34aef9893ce"
  },
  {
    "url": "assets/js/43.88c0b675.js",
    "revision": "886395b363ebafc829c1f0290f7941cb"
  },
  {
    "url": "assets/js/44.d38de44c.js",
    "revision": "3df9200593c4a4bb762140882a90fb5d"
  },
  {
    "url": "assets/js/45.59b5dc25.js",
    "revision": "f4dd2a7a1293c04e0c8667fe0dbf7656"
  },
  {
    "url": "assets/js/46.9c048e54.js",
    "revision": "32b7f050d059970360f7a5f6239bdf4b"
  },
  {
    "url": "assets/js/47.85c927fe.js",
    "revision": "f24fa23eea05051579a48a3826ee5cf9"
  },
  {
    "url": "assets/js/48.4a1977ca.js",
    "revision": "81eae8f142c7080b60edb198567de9b0"
  },
  {
    "url": "assets/js/49.29e864a3.js",
    "revision": "f0dbe3043fc1c7c907cb30fd69a2857e"
  },
  {
    "url": "assets/js/5.3cb307c3.js",
    "revision": "6cf1c2a58df0bec07cc06487ef421a6d"
  },
  {
    "url": "assets/js/50.15bd7796.js",
    "revision": "3428b202d47ccee2e02176a4cfd8ce7c"
  },
  {
    "url": "assets/js/51.cd4e9381.js",
    "revision": "eafe42afa50d2bf33813facacca87b7f"
  },
  {
    "url": "assets/js/52.f4bd1d85.js",
    "revision": "4a96441207006c07bcbbf7e523bbb864"
  },
  {
    "url": "assets/js/53.f06eb1b0.js",
    "revision": "87f17f6b12c518fd3438c64f56ed1f85"
  },
  {
    "url": "assets/js/54.b6aa9627.js",
    "revision": "58528e11254e85d58f8a33cef0847ae9"
  },
  {
    "url": "assets/js/55.6ed03eb7.js",
    "revision": "dcf0fb0648cd1ddc083cc461d08cd8e1"
  },
  {
    "url": "assets/js/56.b529c6f3.js",
    "revision": "c4a68a22bbd033c50f9556825649c291"
  },
  {
    "url": "assets/js/57.1d2f8649.js",
    "revision": "69283e2f7de5edde315a7e267e6ed629"
  },
  {
    "url": "assets/js/58.8eeaf3d6.js",
    "revision": "c432b36ffad3aa4827647f96f3f83f5b"
  },
  {
    "url": "assets/js/59.5c3ee2de.js",
    "revision": "ba7c99b8daf1214a386df056afd23491"
  },
  {
    "url": "assets/js/6.c87b648f.js",
    "revision": "a87fc016c99ddc84d849462940551d52"
  },
  {
    "url": "assets/js/60.b1260295.js",
    "revision": "b6cb4858d0d8690e39421f400e30af05"
  },
  {
    "url": "assets/js/61.e6d87292.js",
    "revision": "85961244bef5f016ade3db57445e4c98"
  },
  {
    "url": "assets/js/62.58438349.js",
    "revision": "c817691b09b7c1bb2b2c081411eb93cf"
  },
  {
    "url": "assets/js/63.51e02f28.js",
    "revision": "7b5bb8f0ff6dc5cc1b41c8543484a527"
  },
  {
    "url": "assets/js/64.22c73ca8.js",
    "revision": "d1a6b79d3de8f7b23c535e57661bc63e"
  },
  {
    "url": "assets/js/65.2aa547f7.js",
    "revision": "28c91875d205055121f127a0fa0d0e36"
  },
  {
    "url": "assets/js/66.3dc9b876.js",
    "revision": "ca14bcda902f3c80aa1510a23963dfeb"
  },
  {
    "url": "assets/js/67.a60c69f9.js",
    "revision": "968ecfe3a1bee4658d2bc77cb3559637"
  },
  {
    "url": "assets/js/68.dd3560e7.js",
    "revision": "eb86bac6451d0a249bc41ff6e079aa32"
  },
  {
    "url": "assets/js/69.2facc895.js",
    "revision": "83354fe33dd356243c740a80a7eed28f"
  },
  {
    "url": "assets/js/7.d2631184.js",
    "revision": "ce77e1b65c3937a8a68407776acdf5fa"
  },
  {
    "url": "assets/js/70.0ad0d043.js",
    "revision": "a2b91fe2fa1e403a65f07f31c1b823ca"
  },
  {
    "url": "assets/js/71.8a2bcba6.js",
    "revision": "7b38e9aaaeeb1944b7056a3950867d2c"
  },
  {
    "url": "assets/js/72.7ff85d04.js",
    "revision": "8a1dfd3df596a64a329655ad92dcda33"
  },
  {
    "url": "assets/js/73.b62636ba.js",
    "revision": "267683c14c2f8c470c1ba0d2bec6e8ea"
  },
  {
    "url": "assets/js/74.1b36203c.js",
    "revision": "669630a3dbe336cbd98bba52afdf4c44"
  },
  {
    "url": "assets/js/75.726d1aba.js",
    "revision": "f82aaa5ac6e37567f12c835abede3749"
  },
  {
    "url": "assets/js/76.dea0d716.js",
    "revision": "07245fb497b291049b87139bd0912eca"
  },
  {
    "url": "assets/js/77.fcc9ad97.js",
    "revision": "9959e3741a61d99c28b68d08c65b7ab9"
  },
  {
    "url": "assets/js/78.d06d07e3.js",
    "revision": "88ecebd6351505d09fb0d451b372f73c"
  },
  {
    "url": "assets/js/79.c9dffc64.js",
    "revision": "5076f79e341484e05c1149e166a4e3e6"
  },
  {
    "url": "assets/js/8.1afd0385.js",
    "revision": "7453fe246610ae63fd6b68f011daac34"
  },
  {
    "url": "assets/js/80.f954edd9.js",
    "revision": "ac6f3f0f5008013435d20de4cf8fdcb3"
  },
  {
    "url": "assets/js/81.26d72cac.js",
    "revision": "ce7cd625eacee43f592c48cf0208f40f"
  },
  {
    "url": "assets/js/82.e54bb62b.js",
    "revision": "fa9c8748900364a8ba7bd5f230c537e0"
  },
  {
    "url": "assets/js/83.2f0e7273.js",
    "revision": "48c0699bc33f98fbe7bf7f5a0d82aa9d"
  },
  {
    "url": "assets/js/84.645f4704.js",
    "revision": "3e8c666b22ee14a6b55b56f285936385"
  },
  {
    "url": "assets/js/85.08f20898.js",
    "revision": "5a3ce12a7e0213f1f57570a9a47cd728"
  },
  {
    "url": "assets/js/86.7509f663.js",
    "revision": "30cf6eb1d1b4468a3b6a0faedece5866"
  },
  {
    "url": "assets/js/87.979f18b9.js",
    "revision": "a5ad386d898b8e1b993d5d6feeb75967"
  },
  {
    "url": "assets/js/88.1e4895f9.js",
    "revision": "b461eb21dd39e3c5adeb61bd23451b4c"
  },
  {
    "url": "assets/js/89.89d48896.js",
    "revision": "f0bd4d797a22a58b4e965b738288777f"
  },
  {
    "url": "assets/js/9.cc8b4126.js",
    "revision": "091b1de2fb43358686f8780cc38865ab"
  },
  {
    "url": "assets/js/90.aef30e84.js",
    "revision": "8530f2a22a4f69e78a4ad0719391e8e4"
  },
  {
    "url": "assets/js/91.35622aad.js",
    "revision": "b75a4069a072573cb2a741c7d3e5bee6"
  },
  {
    "url": "assets/js/app.602ab896.js",
    "revision": "ac5b845b001054334609803faf312d91"
  },
  {
    "url": "bookshop/friendslink/index.html",
    "revision": "e782d6a1a024054258592ffe30e9a856"
  },
  {
    "url": "bookshop/linkme/index.html",
    "revision": "ae2ba40e5ac0cdb88759a0d2d980e9b2"
  },
  {
    "url": "bookshop/message-board/index.html",
    "revision": "754d40f1b9879960dba8a4bbdc76b595"
  },
  {
    "url": "categories/index.html",
    "revision": "11cc47a1b610d3f1a21b75fb8d580914"
  },
  {
    "url": "fe-optimize-ppt/dist/index.css",
    "revision": "6a85ecbd56893b84c2ced56cac0d87ad"
  },
  {
    "url": "fe-optimize-ppt/dist/reset.css",
    "revision": "4042c1a43777d540673cabc97cec67b2"
  },
  {
    "url": "fe-optimize-ppt/dist/reveal.css",
    "revision": "fb190b58a8ad7e758578f8908f66e738"
  },
  {
    "url": "fe-optimize-ppt/dist/reveal.esm.js",
    "revision": "551ac08d8cf1e54d9f864fd9d997a977"
  },
  {
    "url": "fe-optimize-ppt/dist/reveal.js",
    "revision": "0d51b30ccefb9fa78c3b0299f70e8ba4"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/beige.css",
    "revision": "168843d058f77ce1b862753eca43d30c"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/black.css",
    "revision": "8a3401cc1e186995a9a7fc8a4b99bb82"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/blood.css",
    "revision": "19425df0662435565eb8e1a63e65dddc"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/league-gothic/league-gothic.css",
    "revision": "488966d15e97f072801d7e348f4b5141"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/league-gothic/league-gothic.eot",
    "revision": "9900a4643cc63c5d8f969d2196f72572"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/league-gothic/league-gothic.ttf",
    "revision": "91295fa87df918411b49b7531da5d558"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/league-gothic/league-gothic.woff",
    "revision": "cd382dc8a9d6317864b5810a320effc5"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/source-sans-pro/source-sans-pro-italic.eot",
    "revision": "72217712eb8d28872e7069322f3fda23"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/source-sans-pro/source-sans-pro-italic.ttf",
    "revision": "8256cfd7e4017a7690814879409212cd"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/source-sans-pro/source-sans-pro-italic.woff",
    "revision": "e74f0128884561828ce8c9cf5c284ab8"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/source-sans-pro/source-sans-pro-regular.eot",
    "revision": "1d71438462d532b62b05cdd7e6d7197d"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/source-sans-pro/source-sans-pro-regular.ttf",
    "revision": "2da39ecf9246383937da11b44b7bd9b4"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/source-sans-pro/source-sans-pro-regular.woff",
    "revision": "e7acc589bb558fe58936a853f570193c"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/source-sans-pro/source-sans-pro-semibold.eot",
    "revision": "0f3da1edf1b5c6a94a6ad948a7664451"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/source-sans-pro/source-sans-pro-semibold.ttf",
    "revision": "f3565095e6c9158140444970f5a2c5ed"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/source-sans-pro/source-sans-pro-semibold.woff",
    "revision": "1cb8e94f1185f1131a0c895165998f2b"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/source-sans-pro/source-sans-pro-semibolditalic.eot",
    "revision": "58153ac7194e141d1e73ea88c6b63861"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/source-sans-pro/source-sans-pro-semibolditalic.ttf",
    "revision": "c7e698a4d0956f4a939f42a05685bbf5"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/source-sans-pro/source-sans-pro-semibolditalic.woff",
    "revision": "6b058fc2634b01d837c3432316c3141f"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/source-sans-pro/source-sans-pro.css",
    "revision": "5ae239fba183e7f0dd606e4c79caf533"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/league.css",
    "revision": "2fab5ea22adfd7f54895534568de3a6c"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/moon.css",
    "revision": "4b5c35dbcf6447be91bdb5e8cc503057"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/night.css",
    "revision": "ab28f9552296fbef915916adf1d2bd8f"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/serif.css",
    "revision": "2a041eb1d6931608f224bd30c174f48c"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/simple.css",
    "revision": "a7b43905ec2f19f2e74d38233d45d44f"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/sky.css",
    "revision": "105ae904114465f48da51860171b6858"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/solarized.css",
    "revision": "ef1a9af27a4f36d2bf2955801b598b5a"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/white.css",
    "revision": "a3b0a31c1d49bbed890bf1a4b2222a29"
  },
  {
    "url": "fe-optimize-ppt/index.html",
    "revision": "52f44d587e55e82337a2445741bfdfef"
  },
  {
    "url": "fe-optimize-ppt/plugin/highlight/highlight.esm.js",
    "revision": "a8d0717a9a746848cff76bafdcdc295d"
  },
  {
    "url": "fe-optimize-ppt/plugin/highlight/highlight.js",
    "revision": "691702d292e8fc58261570028f7af601"
  },
  {
    "url": "fe-optimize-ppt/plugin/highlight/monokai.css",
    "revision": "8c43a819e1268fc57605f500adff816b"
  },
  {
    "url": "fe-optimize-ppt/plugin/highlight/plugin.js",
    "revision": "f6168dfe21b1bd3d98d09916fb6bd641"
  },
  {
    "url": "fe-optimize-ppt/plugin/highlight/zenburn.css",
    "revision": "28d5b9497037a12cb5a15644fea2f1c3"
  },
  {
    "url": "fe-optimize-ppt/plugin/markdown/markdown.esm.js",
    "revision": "fdfa34f2c1d23b8386ea91464acaf7ff"
  },
  {
    "url": "fe-optimize-ppt/plugin/markdown/markdown.js",
    "revision": "9166010a6466bbad0ea0ae00c52b2927"
  },
  {
    "url": "fe-optimize-ppt/plugin/markdown/plugin.js",
    "revision": "2fe72cc983411cf94dd81d679955f141"
  },
  {
    "url": "fe-optimize-ppt/plugin/math/math.esm.js",
    "revision": "1475913f4862b5e8f7f1536391893a18"
  },
  {
    "url": "fe-optimize-ppt/plugin/math/math.js",
    "revision": "533dd2f86ac5475cd0d20d2f77efde36"
  },
  {
    "url": "fe-optimize-ppt/plugin/math/plugin.js",
    "revision": "9be0251dd9411c0a96ee050d5bc3bef1"
  },
  {
    "url": "fe-optimize-ppt/plugin/notes/notes.esm.js",
    "revision": "22a20e5a835c1ce6ec06c8f87ba8dd44"
  },
  {
    "url": "fe-optimize-ppt/plugin/notes/notes.js",
    "revision": "25124c87ba29154deecbec4a95f12005"
  },
  {
    "url": "fe-optimize-ppt/plugin/notes/plugin.js",
    "revision": "49924c937e252f47ac915f643e01ec43"
  },
  {
    "url": "fe-optimize-ppt/plugin/notes/speaker-view.html",
    "revision": "1599c3637c3db09d47992d53891f7e08"
  },
  {
    "url": "fe-optimize-ppt/plugin/search/plugin.js",
    "revision": "032f7408cd38991c3bd861582dd6322d"
  },
  {
    "url": "fe-optimize-ppt/plugin/search/search.esm.js",
    "revision": "132b99229d67db17feda69678556142a"
  },
  {
    "url": "fe-optimize-ppt/plugin/search/search.js",
    "revision": "ecc723fcbd433db7b74fd2cab115ff67"
  },
  {
    "url": "fe-optimize-ppt/plugin/zoom/plugin.js",
    "revision": "20eb10e380080e9f750ec77dedb76618"
  },
  {
    "url": "fe-optimize-ppt/plugin/zoom/zoom.esm.js",
    "revision": "8e430e6444e4f75223fd407e59d20488"
  },
  {
    "url": "fe-optimize-ppt/plugin/zoom/zoom.js",
    "revision": "b209a75b6c4cc6df8dd5383cf9b6ee22"
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
    "url": "img/logo.png",
    "revision": "421642f8c4c77139f133d7d1ec05168c"
  },
  {
    "url": "img/pikapika.jpg",
    "revision": "0b6e65b4475bc068ac04c9c24204f1d4"
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
    "revision": "63e20ec24705f3b8440bb3356288acd9"
  },
  {
    "url": "love-fe.png",
    "revision": "c631ad86af0196d6257306305dd13659"
  },
  {
    "url": "pages/005afb7501ebf/index.html",
    "revision": "51d2ec82d26ec7dcf64159bc11f68a29"
  },
  {
    "url": "pages/02cc618debc84/index.html",
    "revision": "2a4c78ca8940d6ba0d6e51e1e229d547"
  },
  {
    "url": "pages/04ac7e87719d9/index.html",
    "revision": "42cd85ffa1626b9fe063821ae55cdf8f"
  },
  {
    "url": "pages/05c534dbae294/index.html",
    "revision": "b5e48538326ac83f7676ecd458babdad"
  },
  {
    "url": "pages/0d5c101d17afe/index.html",
    "revision": "821e89c168c8e7176ef517540ef84ccc"
  },
  {
    "url": "pages/12bb6ee186b54/index.html",
    "revision": "a4772486d2320b58ac1e7ba9a151cc30"
  },
  {
    "url": "pages/136f8f068dffe/index.html",
    "revision": "9f0043f6c722341020fe5358938b55ea"
  },
  {
    "url": "pages/1736b20fa8753/index.html",
    "revision": "f264d0036e52539462f923d34712c8d2"
  },
  {
    "url": "pages/290a2fbb1e629/index.html",
    "revision": "5029468e39ace171ed40501daacacdb6"
  },
  {
    "url": "pages/2c385d954af63/index.html",
    "revision": "07898baad48370ffe154b5d07c4e17e1"
  },
  {
    "url": "pages/38a448a32b1a5/index.html",
    "revision": "1dba1cff2067696dc53a475abba50de6"
  },
  {
    "url": "pages/3cea8c7d5577f/index.html",
    "revision": "7a944a6f044bfe67330dbbd6eb0cce64"
  },
  {
    "url": "pages/3d292acfbd9ca/index.html",
    "revision": "5c941af5547831fca75ba23fe4de6e98"
  },
  {
    "url": "pages/416517735bb6/index.html",
    "revision": "308f9150d39f61db60f3d58424eb0196"
  },
  {
    "url": "pages/4265332f4a648/index.html",
    "revision": "88dd0f87b079cad5ffa19e577ca01eee"
  },
  {
    "url": "pages/43eb19df1cf71/index.html",
    "revision": "40e729a9c4984d4fdf65a36cf0d150f9"
  },
  {
    "url": "pages/463caf542a8ff/index.html",
    "revision": "3d1308b2aabb4c643ca79591f7b13678"
  },
  {
    "url": "pages/4737f1e54803f/index.html",
    "revision": "23bdc37045cb0893717c2ace717d43fe"
  },
  {
    "url": "pages/49e2a780662e9/index.html",
    "revision": "e7d11b71903783cea05318319282d81d"
  },
  {
    "url": "pages/4e3130c16c521/index.html",
    "revision": "517dfd3233f3cf0a9cb34a2d08db8e80"
  },
  {
    "url": "pages/4e5aefd9d013e/index.html",
    "revision": "2a9e53242b8db60b1443a6c6a7bbb129"
  },
  {
    "url": "pages/512f6ae339a31/index.html",
    "revision": "d238a8c3af6db157a4e8f5dcf79ee947"
  },
  {
    "url": "pages/55e7bb3eb7802/index.html",
    "revision": "a02fd8d8fe8c1a5cc8f4efe6c190c183"
  },
  {
    "url": "pages/57a4c8a168dc4/index.html",
    "revision": "c8fbd4abe3a75f8027e07bb3d9a247ba"
  },
  {
    "url": "pages/6db6295ccd96/index.html",
    "revision": "9ac013f42b58062cca4b26ea4ad06ab0"
  },
  {
    "url": "pages/71a2332238f87/index.html",
    "revision": "9f604a7bbfbfae95ae4fed28232b6091"
  },
  {
    "url": "pages/72dcdd7f52781/index.html",
    "revision": "bf75fc95eb2d0cdd69cab76f2fbd8c5c"
  },
  {
    "url": "pages/74b89136d37c/index.html",
    "revision": "466ba069a0e5e4d3eb23f63efb853d53"
  },
  {
    "url": "pages/785710818c193/index.html",
    "revision": "2cd7ebde345afd45e6cb24bd188f0d36"
  },
  {
    "url": "pages/7e7aff8d9771b/index.html",
    "revision": "f7559ca310fe6796987aa37fb14b6fff"
  },
  {
    "url": "pages/83bbb9b9abbe7/index.html",
    "revision": "6f3b99d7f1280e9c156a01aac892a95e"
  },
  {
    "url": "pages/8c4ef214c7886/index.html",
    "revision": "4dfc20aaebf90e73f8f7634399d5286c"
  },
  {
    "url": "pages/90e7ed083bcfe/index.html",
    "revision": "20cb136c2c9ffb3acfff5d0f91ca8646"
  },
  {
    "url": "pages/91bad3266146c/index.html",
    "revision": "5a058d2614efc6c875f2318d82d3c841"
  },
  {
    "url": "pages/98a7a4ab3b308/index.html",
    "revision": "cbefb72d4e04fb6a70c92736bfdf314f"
  },
  {
    "url": "pages/9c687ea799c4e/index.html",
    "revision": "522539bc37b6c055537ade656691e658"
  },
  {
    "url": "pages/9c7717d989fc6/index.html",
    "revision": "589d4c8feeaf99145ed33388511a8cea"
  },
  {
    "url": "pages/9de40adc21b12/index.html",
    "revision": "30edddf50b304d0508c34d3cddfb6ab5"
  },
  {
    "url": "pages/a336385364f8/index.html",
    "revision": "3a236aae5b96c2bbe69b66c80e935e86"
  },
  {
    "url": "pages/a606010c57cc5/index.html",
    "revision": "de9aa1a4f5a01455968bb4395f152bad"
  },
  {
    "url": "pages/aa9d140ec6135/index.html",
    "revision": "3c614c49a7283ba2c71608b80ec5976d"
  },
  {
    "url": "pages/ac34940436a4a/index.html",
    "revision": "bad4cbda3ccbd4f89ff75b0e25636a5d"
  },
  {
    "url": "pages/ae21b75e82658/index.html",
    "revision": "ffa5952421b2e7091f65f229a5f6fadd"
  },
  {
    "url": "pages/b0c63028d916e/index.html",
    "revision": "99bb8c4a4a38dd46e4e25037ff4e2ef8"
  },
  {
    "url": "pages/b4081db6efbd9/index.html",
    "revision": "b0b94030a99ac03f1edb63d5c1f12b59"
  },
  {
    "url": "pages/bc7fdbb035246/index.html",
    "revision": "8e0e66614cb2c38f7f6f1b80933377e8"
  },
  {
    "url": "pages/be18cb94e364/index.html",
    "revision": "e7339ca6135c77291acc84029b332b0d"
  },
  {
    "url": "pages/c863681e7285f/index.html",
    "revision": "d666b9e68e0cdda268f88c92559a4b24"
  },
  {
    "url": "pages/cf42a74e3cc8f/index.html",
    "revision": "75bb06031379f3d635b42622247b91bf"
  },
  {
    "url": "pages/dc00f73d9d1d9/index.html",
    "revision": "32a8f3dc93b5ebdc3fba8f719774025d"
  },
  {
    "url": "pages/e8f47145dd883/index.html",
    "revision": "421be15a3dd461b0c8fbf3dc8177dc08"
  },
  {
    "url": "pages/eaca6b104f0f4/index.html",
    "revision": "22b2977c7e0e5d1811cf767795eaf553"
  },
  {
    "url": "pages/ef5b9c9dd32a7/index.html",
    "revision": "5e4d5e1831051fbe198e2b73dbac939c"
  },
  {
    "url": "pages/f15a7725f87e7/index.html",
    "revision": "998f93af4d3d00865a57102f4b87423e"
  },
  {
    "url": "pages/f16531008c5a4/index.html",
    "revision": "2c3fd345f179d3d31f118f18ca58ff9c"
  },
  {
    "url": "pages/f593514e1a9d6/index.html",
    "revision": "21569512ea424489dd9e86019b827568"
  },
  {
    "url": "pages/f83fb19d191d9/index.html",
    "revision": "7d1b90d580d78b3e119cbb1cc8964772"
  },
  {
    "url": "resource-tools/44207a5ef0a8a/index.html",
    "revision": "6ea1ce796783539c2287e2990c063de3"
  },
  {
    "url": "resource-tools/4c19c32335465/index.html",
    "revision": "c6f119101729ebd16f98d6af5b2e8934"
  },
  {
    "url": "resource-tools/5f440c9bb4359/index.html",
    "revision": "1fcf2efcfd3f3a07061019be1b39ec2f"
  },
  {
    "url": "resource-tools/7566c0ff5a24c/index.html",
    "revision": "be2f375e91a2d08498d2732e4d353761"
  },
  {
    "url": "resource-tools/8396c1c08f1b6/index.html",
    "revision": "f255c802f347436d1f1b8bdd61ef6f86"
  },
  {
    "url": "resource-tools/9d5d91d08c126/index.html",
    "revision": "a97529518bccd89ab528384a08b70dfd"
  },
  {
    "url": "resource-tools/c618db4b32e39/index.html",
    "revision": "9a18e5dedd03a910d93781bef5956eab"
  },
  {
    "url": "resource-tools/c9e44ab0fce9a/index.html",
    "revision": "773e9ed70a7288d8fb727e5f4dfbb8a7"
  },
  {
    "url": "resource-tools/ed602e9a815f6/index.html",
    "revision": "423f5549b50eaacd67ab8433ba28324a"
  },
  {
    "url": "study/css/reset.css",
    "revision": "c8df9e9e48e86c4fcd3972a0111e46fc"
  },
  {
    "url": "study/index.html",
    "revision": "097c6e1ad6de8e4ea871ff3e74b6cb23"
  },
  {
    "url": "study/precache-manifest.05b24b6636bd972f0f436263abc9dea0.js",
    "revision": "05b24b6636bd972f0f436263abc9dea0"
  },
  {
    "url": "study/static/css/2.8f6577cd.chunk.css",
    "revision": "8aacd14455dd3a1064dca30097202e31"
  },
  {
    "url": "study/static/css/main.61320533.chunk.css",
    "revision": "0ff1be3b98657889bb1d1ba0da308239"
  },
  {
    "url": "study/static/js/main.f022aa25.chunk.js",
    "revision": "b08cd1d21871988e888f3ea9f6a76fee"
  },
  {
    "url": "study/static/js/runtime-main.3725ae0b.js",
    "revision": "371fc4c0b43299ae7ad805c2e21ff81d"
  },
  {
    "url": "study/static/media/404.9161e238.png",
    "revision": "9161e238b798c444b732dbbb7420a09e"
  },
  {
    "url": "study/static/media/logo.421642f8.png",
    "revision": "421642f8c4c77139f133d7d1ec05168c"
  },
  {
    "url": "tags/index.html",
    "revision": "272d8f528bb8f217f67c28def51aeece"
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
    "revision": "1e472a8fb25771accb2f89487ccc440f"
  },
  {
    "url": "vue-iframe-print/js/chunk-vendors.4f44ce85.js",
    "revision": "5d2e1c01d27e71fb2895708d03590996"
  },
  {
    "url": "web/docs/babel/index.html",
    "revision": "200373c648bdbc8395c07c9f7f83bf56"
  },
  {
    "url": "web/docs/docschina/index.html",
    "revision": "2bc676fda4585e1df39fc3e34dc96ada"
  },
  {
    "url": "web/docs/es6/index.html",
    "revision": "c897e9e77a98bf74940521ca18cbeeef"
  },
  {
    "url": "web/docs/imooc/wiki/index.html",
    "revision": "f6efc166977408074199e130135b4241"
  },
  {
    "url": "web/docs/nav/index.html",
    "revision": "da9ff0cfdfe9fd8b29ffde25ded08ac6"
  },
  {
    "url": "web/docs/node/index.html",
    "revision": "58719269897053a4ee1fe9b39d268327"
  },
  {
    "url": "web/docs/react/index.html",
    "revision": "2019d07eef002d0b2319411a804ab95a"
  },
  {
    "url": "web/docs/runoob/index.html",
    "revision": "957421b751e4524ef6569399810e89d7"
  },
  {
    "url": "web/docs/typescript/index.html",
    "revision": "4e1c0dc9e6557ddd3f6e0c4d689e792a"
  },
  {
    "url": "web/docs/vue/index.html",
    "revision": "8270d6839719bde9d91fed5e4d25cf2e"
  },
  {
    "url": "web/docs/webpack/index.html",
    "revision": "a874f8c46793dbed6835bdfc1a9fcb6f"
  },
  {
    "url": "web/git/f85d0c838f3f3/index.html",
    "revision": "64676956892fff95b08c903e1b547843"
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
