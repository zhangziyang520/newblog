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
    "revision": "59702487968dec64e10475eaa0c0b7f5"
  },
  {
    "url": "archives/index.html",
    "revision": "c4627999f7c17efaa3be2e901535bdc2"
  },
  {
    "url": "assets/css/0.styles.cdaa481e.css",
    "revision": "dba7cf8345f40258f9fc1877e07f8d5a"
  },
  {
    "url": "assets/img/loading.18d75e19.gif",
    "revision": "18d75e19791c1d042f102e088f463d8a"
  },
  {
    "url": "assets/js/10.dfeba00e.js",
    "revision": "3062aef05275e859346365611630d73a"
  },
  {
    "url": "assets/js/11.6b025925.js",
    "revision": "e7a4e5bf3f00604cc13dfb7f2af02e24"
  },
  {
    "url": "assets/js/12.fca1f6e1.js",
    "revision": "5b0d5973baf9cf46828af5c6de591e32"
  },
  {
    "url": "assets/js/13.5de17974.js",
    "revision": "3ccb0ba319ea7c8c83b29405452c9237"
  },
  {
    "url": "assets/js/14.29e40d4f.js",
    "revision": "957de5f562b08597e132a0248c858ce3"
  },
  {
    "url": "assets/js/15.28651f5e.js",
    "revision": "b1f0f3283577416750d05fca2d4b31b7"
  },
  {
    "url": "assets/js/16.8336d2ab.js",
    "revision": "2781ccdc3cf0749cad4eea66ceea68c2"
  },
  {
    "url": "assets/js/17.b543b468.js",
    "revision": "7a86b69de7525c7696558c5100a55b7e"
  },
  {
    "url": "assets/js/18.fdef4665.js",
    "revision": "413682ae8c82e327e337e33d6e69c392"
  },
  {
    "url": "assets/js/19.14bfd667.js",
    "revision": "f55d25b947644ede22a736b8017421ee"
  },
  {
    "url": "assets/js/2.967d582f.js",
    "revision": "0a018e17fb41c01516e999ed3c79d02b"
  },
  {
    "url": "assets/js/20.c2309d92.js",
    "revision": "6a8bc23e2cf0d1ca49e933db9ec078b1"
  },
  {
    "url": "assets/js/21.287aca53.js",
    "revision": "388bf8f1e5dfff2fe0ff5f3610347c04"
  },
  {
    "url": "assets/js/22.5228549a.js",
    "revision": "4b5005156dc116029b4a63a508e364de"
  },
  {
    "url": "assets/js/23.3015ef07.js",
    "revision": "296f0c889b432a5fb2425497ea7dc962"
  },
  {
    "url": "assets/js/24.c8d0322e.js",
    "revision": "69ae7d19c25bbed77422d4d9ce889c44"
  },
  {
    "url": "assets/js/25.12af9345.js",
    "revision": "04dbc14648f7491c8d3489ffb54644f2"
  },
  {
    "url": "assets/js/26.7b4f4499.js",
    "revision": "1eeebaea12ded2369b6080e6cd132787"
  },
  {
    "url": "assets/js/27.62d5211c.js",
    "revision": "c7810ce44d49136618d65d509fe2a932"
  },
  {
    "url": "assets/js/28.a036b463.js",
    "revision": "e0bb13a93020b5ab29bd9592a2a41882"
  },
  {
    "url": "assets/js/29.9109b240.js",
    "revision": "3b16ce60fef4e1632e7b89b7a5f943d0"
  },
  {
    "url": "assets/js/3.8aeca38c.js",
    "revision": "4a7a70325976dbff1bb7a86bf442f0a4"
  },
  {
    "url": "assets/js/30.598998d2.js",
    "revision": "abf7b8b1dff911b96e83cd2a0fa29c07"
  },
  {
    "url": "assets/js/31.dd14454f.js",
    "revision": "3fd11c9b80a7b8ba698e6d713027c317"
  },
  {
    "url": "assets/js/32.ac4ca7c4.js",
    "revision": "247f77663bd166c621242d53a2db7a36"
  },
  {
    "url": "assets/js/33.7152e4ef.js",
    "revision": "66119f7274e5a05638fbc76e357bb409"
  },
  {
    "url": "assets/js/34.0325e3cb.js",
    "revision": "67f3e60e7fa58a48e6953621c7cbfaa3"
  },
  {
    "url": "assets/js/35.7924793a.js",
    "revision": "8b805334d9363539e01fa50b97805dd5"
  },
  {
    "url": "assets/js/36.6f80580d.js",
    "revision": "6332c9193d5f5e2ef898f6b5b9b4c4b8"
  },
  {
    "url": "assets/js/37.a1dc32ea.js",
    "revision": "29d54600fe284780a058b6f3577e2542"
  },
  {
    "url": "assets/js/38.b844fe94.js",
    "revision": "2c7a69486c9706331d18bca14261703e"
  },
  {
    "url": "assets/js/39.9841d286.js",
    "revision": "b0ef0835d42d933c3b0a12c1d50c6904"
  },
  {
    "url": "assets/js/4.e7eb6539.js",
    "revision": "511ce0fe2c806c87434a895e7ed74ef6"
  },
  {
    "url": "assets/js/40.00980156.js",
    "revision": "62b780f78bcd2bb1a613f807e8999613"
  },
  {
    "url": "assets/js/41.1c4389d6.js",
    "revision": "ef438f6212a7164c6af1786607c2c649"
  },
  {
    "url": "assets/js/42.b51ba613.js",
    "revision": "c7647d2435c5008c217192e0a20cdd9d"
  },
  {
    "url": "assets/js/43.ac16b1b0.js",
    "revision": "501ab73633f02b5a0961dc52c6e1c530"
  },
  {
    "url": "assets/js/44.13bd41a4.js",
    "revision": "9090d137732f9c99536f926248b9e5ef"
  },
  {
    "url": "assets/js/45.c3cca36c.js",
    "revision": "b530c7e9a1096e78f553e3d860ae584f"
  },
  {
    "url": "assets/js/46.2ceb5952.js",
    "revision": "24c321557897b3b1bc66b66da86abe31"
  },
  {
    "url": "assets/js/47.3ebaf5fb.js",
    "revision": "3c792e900422c2f59c39f99d0b5f2eac"
  },
  {
    "url": "assets/js/48.0ed16ad3.js",
    "revision": "9ad42c5be2983aca40ad73becb5bede9"
  },
  {
    "url": "assets/js/49.09ca5169.js",
    "revision": "f3496d28d7db129e43111b53107ba327"
  },
  {
    "url": "assets/js/5.200a72e2.js",
    "revision": "6bfc0976f4beda983be5b93a835d12d1"
  },
  {
    "url": "assets/js/50.bd6b5473.js",
    "revision": "5929009ec3007f58da97ed5888e8f9af"
  },
  {
    "url": "assets/js/51.ce2330e9.js",
    "revision": "cb814b103fabb53e55575590b2c1a7c3"
  },
  {
    "url": "assets/js/52.dd8a7ec2.js",
    "revision": "b675cb380abcfb7521dd0ea1b021f882"
  },
  {
    "url": "assets/js/53.0db53e93.js",
    "revision": "43902267dd0678ae828ea0009ad57046"
  },
  {
    "url": "assets/js/54.d4459b4c.js",
    "revision": "ebee03366e40c3cbd065281d61bf1330"
  },
  {
    "url": "assets/js/55.7baac913.js",
    "revision": "12c8c77864aa010213b559ce4689e778"
  },
  {
    "url": "assets/js/56.ec71a457.js",
    "revision": "879fc83a6c331035d2d7a592d08312d5"
  },
  {
    "url": "assets/js/57.f00daf63.js",
    "revision": "a7f430488e2a20b896914ef540c40eec"
  },
  {
    "url": "assets/js/58.0bb72a57.js",
    "revision": "f7a26c5d66ec9bf8e452bc7f1ab2f2f2"
  },
  {
    "url": "assets/js/59.5d486a2a.js",
    "revision": "49d041328d8300851c7af35df6bf7f39"
  },
  {
    "url": "assets/js/6.495d4810.js",
    "revision": "353dfc3ae6bb16f99a40609b66c7f505"
  },
  {
    "url": "assets/js/60.07774549.js",
    "revision": "eb7b9edd598597e7f08c246f0d07de4b"
  },
  {
    "url": "assets/js/61.7e27bf7a.js",
    "revision": "204852b1e85de0ad9b75c67648114186"
  },
  {
    "url": "assets/js/62.37a2b5d8.js",
    "revision": "bd4ba40afe5531db02939ec81c5f0b4b"
  },
  {
    "url": "assets/js/63.7c9390ac.js",
    "revision": "458bdb1f45b21dfe6b1d77217d9ff4e0"
  },
  {
    "url": "assets/js/64.db88bdf7.js",
    "revision": "06aa12c417822f0fc598707bc80a1ffc"
  },
  {
    "url": "assets/js/65.8c46fe95.js",
    "revision": "47d7b23debf5587ef7b7c220088c2949"
  },
  {
    "url": "assets/js/66.126ca41b.js",
    "revision": "c02641b6e56c82fa02d44a2f09d3dc5b"
  },
  {
    "url": "assets/js/67.355a66ba.js",
    "revision": "f8092fe01324f5f157488dbfe393f836"
  },
  {
    "url": "assets/js/68.c9ceba63.js",
    "revision": "bcf7816d5d663915c871d0851137fe31"
  },
  {
    "url": "assets/js/69.47953a1c.js",
    "revision": "ca866e1ae7a389ad31261645a68243da"
  },
  {
    "url": "assets/js/7.c244370a.js",
    "revision": "d38f1a4adbb78f84824df37addb74ff2"
  },
  {
    "url": "assets/js/70.6b5c06c6.js",
    "revision": "d47352fa418934f7ceaa4b29ea84db83"
  },
  {
    "url": "assets/js/8.9af0a267.js",
    "revision": "c8ffc68cdd8618d3e3815dc9f4c31d81"
  },
  {
    "url": "assets/js/9.e25108ec.js",
    "revision": "6151fa9ed0f36b0dd47c00ba3ea20627"
  },
  {
    "url": "assets/js/app.914649f8.js",
    "revision": "82f03f0b91fb8dca35bdd99045385dd4"
  },
  {
    "url": "bookshop/friendslink/index.html",
    "revision": "aac12dd0f29e87b9643f8ddb21ae1283"
  },
  {
    "url": "bookshop/message-board/index.html",
    "revision": "9cc75c319ee01528b652619bc00167ce"
  },
  {
    "url": "categories/index.html",
    "revision": "6e43eb0049d18dc6cfa84a6e00c218ac"
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
    "revision": "7c0f81d1b4c6e819220617effed05b76"
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
    "revision": "bc7aaf0f4f0ed52b585defca08042ea2"
  },
  {
    "url": "love-fe.png",
    "revision": "c631ad86af0196d6257306305dd13659"
  },
  {
    "url": "pages/005afb7501ebf/index.html",
    "revision": "20273ad833e2f63073f5e9ba537e5d55"
  },
  {
    "url": "pages/04ac7e87719d9/index.html",
    "revision": "34683158da4c1bb33b37a500caad8779"
  },
  {
    "url": "pages/05c534dbae294/index.html",
    "revision": "70a7de71b2b83b0c424e4ffe6e219465"
  },
  {
    "url": "pages/12bb6ee186b54/index.html",
    "revision": "d53b18040426c130ad9a1fb3621205fb"
  },
  {
    "url": "pages/136f8f068dffe/index.html",
    "revision": "c990365c9d003e38217b1cc871e741d4"
  },
  {
    "url": "pages/1736b20fa8753/index.html",
    "revision": "8e1c5ae39259abe8d07f8582a66626ca"
  },
  {
    "url": "pages/290a2fbb1e629/index.html",
    "revision": "3b487b4895a899d46f876b3dcadb3157"
  },
  {
    "url": "pages/3d292acfbd9ca/index.html",
    "revision": "52c2381c9c95ceba07d73531c9456824"
  },
  {
    "url": "pages/416517735bb6/index.html",
    "revision": "c3740cd6192103ef661264a04818915a"
  },
  {
    "url": "pages/4265332f4a648/index.html",
    "revision": "366e1c83b52afae89abe01c6c89d1529"
  },
  {
    "url": "pages/463caf542a8ff/index.html",
    "revision": "fea571ba769749f3c3c97fde1680d505"
  },
  {
    "url": "pages/4737f1e54803f/index.html",
    "revision": "4902a465592afd52d7c322dbc9b0f604"
  },
  {
    "url": "pages/4e3130c16c521/index.html",
    "revision": "484535f8ce52ad7be7dba6e2e6570819"
  },
  {
    "url": "pages/4e5aefd9d013e/index.html",
    "revision": "91254de39b88a9204b9145b590765988"
  },
  {
    "url": "pages/55e7bb3eb7802/index.html",
    "revision": "432b015183cce16190281f5073c8ceff"
  },
  {
    "url": "pages/6db6295ccd96/index.html",
    "revision": "662f121e330b7b861d4dd4ffdbca7577"
  },
  {
    "url": "pages/785710818c193/index.html",
    "revision": "c606b436d7c058ba31dae95f2a3809e6"
  },
  {
    "url": "pages/7e7aff8d9771b/index.html",
    "revision": "fe8868fc854e2dc4d57cc6bf2075d8c9"
  },
  {
    "url": "pages/83bbb9b9abbe7/index.html",
    "revision": "e1bff3b125b87cabef882cf45d183647"
  },
  {
    "url": "pages/8c4ef214c7886/index.html",
    "revision": "e0319e06cff07be7ee8c22c5a89cf011"
  },
  {
    "url": "pages/9c687ea799c4e/index.html",
    "revision": "540a5017310463462857505e9395f70e"
  },
  {
    "url": "pages/9c7717d989fc6/index.html",
    "revision": "cd336fbb2c9a04aa03d23fc415db4005"
  },
  {
    "url": "pages/9de40adc21b12/index.html",
    "revision": "d7e90158fc2509415d87926bf8d81ba2"
  },
  {
    "url": "pages/aa9d140ec6135/index.html",
    "revision": "e942d51464555cfafe933a742c20085b"
  },
  {
    "url": "pages/ac34940436a4a/index.html",
    "revision": "55192b5ec26ac12765e05df609ad4199"
  },
  {
    "url": "pages/ae21b75e82658/index.html",
    "revision": "bff3f6161991fdc14c6225ac228b6db5"
  },
  {
    "url": "pages/b4081db6efbd8/index.html",
    "revision": "5f226f43d64781f8578f64f1ff09b3e3"
  },
  {
    "url": "pages/b4081db6efbd9/index.html",
    "revision": "cce351b2822be3a792e6123d588df157"
  },
  {
    "url": "pages/bc7fdbb035246/index.html",
    "revision": "f30ecd8cf085ba81954585b5eb3100ef"
  },
  {
    "url": "pages/be18cb94e364/index.html",
    "revision": "dd708468d9241110c1157a9dabe8fb80"
  },
  {
    "url": "pages/c863681e7285f/index.html",
    "revision": "84f7d76905689be5012c58b3f7106aaa"
  },
  {
    "url": "pages/cf42a74e3cc8f/index.html",
    "revision": "7f6d86ff0fc159e7f114c52e75c3a079"
  },
  {
    "url": "pages/dc00f73d9d1d9/index.html",
    "revision": "9691321c1e15b901ddd9f5833d0f80ae"
  },
  {
    "url": "pages/eaca6b104f0f4/index.html",
    "revision": "8dc44b51d8fee35925499782d019913b"
  },
  {
    "url": "pages/f16531008c5a4/index.html",
    "revision": "dc1444ba3638b04dd203206839bd54a0"
  },
  {
    "url": "pages/f593514e1a9d6/index.html",
    "revision": "f066be309705aa7eb9e70ee624bed8cd"
  },
  {
    "url": "pages/f83fb19d191d9/index.html",
    "revision": "88c396f1d4f352a843db7977a6ebbb96"
  },
  {
    "url": "resource-tools/44207a5ef0a8a/index.html",
    "revision": "d023efd8deb79207020e46c43076d28a"
  },
  {
    "url": "resource-tools/4c19c32335465/index.html",
    "revision": "2dc6972b123183c24caf373dd63573fb"
  },
  {
    "url": "resource-tools/5f440c9bb4359/index.html",
    "revision": "c1b4cc522a968ea0c1c78309f8b6f86a"
  },
  {
    "url": "resource-tools/7566c0ff5a24c/index.html",
    "revision": "fb1c6bd89405cc44955c924bae0d58d2"
  },
  {
    "url": "resource-tools/8396c1c08f1b6/index.html",
    "revision": "0af440583e59477550be44cb8d3ed991"
  },
  {
    "url": "resource-tools/9d5d91d08c126/index.html",
    "revision": "f6096e37c34c51dd5cfb6300d7a9a81f"
  },
  {
    "url": "resource-tools/c618db4b32e39/index.html",
    "revision": "678ce97926a2e8c392cf96ad89fdeb63"
  },
  {
    "url": "resource-tools/c9e44ab0fce9a/index.html",
    "revision": "b50a5ff10e6329d010fd9f059f979b92"
  },
  {
    "url": "resource-tools/ed602e9a815f6/index.html",
    "revision": "97132577b118b8d3f25f58be6a6d3230"
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
    "revision": "8d8ce53e0d355d732a8279c88fa98c55"
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
    "revision": "e6c29f40cd2d8530519a923240334c4c"
  },
  {
    "url": "web/docs/docschina/index.html",
    "revision": "3d572b6b5337c71dc60949190b03e8b1"
  },
  {
    "url": "web/docs/es6/index.html",
    "revision": "8060151d0c61307e502efb4732f068a3"
  },
  {
    "url": "web/docs/imooc/wiki/index.html",
    "revision": "df1dd31cc90e04b303aef796f42605ee"
  },
  {
    "url": "web/docs/nav/index.html",
    "revision": "b3f50a265874701526c1fdfbce5e6f79"
  },
  {
    "url": "web/docs/node/index.html",
    "revision": "206ac4164ff8970fbb68954714d6ba3f"
  },
  {
    "url": "web/docs/react/index.html",
    "revision": "6e433aa58e14e198c5144c69bb917899"
  },
  {
    "url": "web/docs/runoob/index.html",
    "revision": "f0449d5ce0949ff55deeea38b70853c9"
  },
  {
    "url": "web/docs/typescript/index.html",
    "revision": "d29ddb8037b90c9c1ea44eba1a58420f"
  },
  {
    "url": "web/docs/vue/index.html",
    "revision": "12b87a9cc63756244140f23cf4e696ef"
  },
  {
    "url": "web/docs/webpack/index.html",
    "revision": "751b525398daa11336b8b7d13cc2563f"
  },
  {
    "url": "web/git/f85d0c838f3f3/index.html",
    "revision": "28cae64ef57b6b4f55c65ae1ffcf0d10"
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
