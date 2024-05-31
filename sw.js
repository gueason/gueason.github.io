/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/index.html","40f291d0ec0e2b809bc4c9cedcbf3588"],["/icons/favicon-16x16.png","564bc8a425165ebe8f7f8608fa167dc8"],["/icons/favicon-32x32.png","c07d49aa6dfd7a03454645d856e1c7d1"],["/img/1_1_计算机基本组成.png","9714118f3c9e17c3f0d4cf9965f71e5a"],["/img/1_3_典型的冯诺依曼计算机结构框图-17170535066181.png","aa64fe41ea492b4ebf2529ab8916a65f"],["/img/1_3_典型的冯诺依曼计算机结构框图-17170535144652.png","aa64fe41ea492b4ebf2529ab8916a65f"],["/img/1_3_典型的冯诺依曼计算机结构框图-17170535209243.png","aa64fe41ea492b4ebf2529ab8916a65f"],["/img/1_3_典型的冯诺依曼计算机结构框图.png","aa64fe41ea492b4ebf2529ab8916a65f"],["/img/1_6_计算机系统5级层次结构-17170543616504.png","2bb1a22e04021d387facfcb801747ecd"],["/img/1_7_源程序转换为可执行程序的过程.png","23e9f4671da36c080ce632bb91705845"],["/img/1_8_存储程序的基本思想.png","cc3e115258d7b116482bcd6f5d349c9f"],["/img/1_9_细化的计算机组成框图.png","2c3f5262b61910ab26fbe287a5562056"],["/img/2_1_两种定点数的格式.png","a40ec88aab46314b35bb4f8256ed2319"],["/img/2_25_原码一位乘计算通式.png","d86bf62c390afd7d1bcaeaf1746467c6"],["/img/2_26_原码一位乘法示例.png","1a36b47664e7131bb3c1f7499d9a5103"],["/img/2_28_定点小数的补码表示.png","bea3c9e5df5820e57293ab095bb8978a"],["/img/2_29_正数补码一位乘法通式.png","b1b2eb18287e586b4ed4ef6f56cdea03"],["/img/2_2_定点整数的表示.png","1e52949ffd356adbeb616b478edd118b"],["/img/2_30_乘数为负时的真值表达式.png","5aad343230aafd082b491d9558e80ef4"],["/img/2_31_乘数为负时的真值乘积表达式.png","22735c174c8d0032175855d358e6bce0"],["/img/2_32_乘数为负时的补码运算表达式.png","88e02e62ff4a02735ff0565274afabed"],["/img/2_33_乘数为正补码一位乘法.png","9d21bf69ed25bc01f36f882d2c80a96f"],["/img/2_34_乘数为正的补码一位乘法示例.png","5c10a3835d29dbe538167015958a0640"],["/img/2_35_Booth算法补码一位乘法通式.png","f149886a87595651dc8df3695c70fd5a"],["/img/2_36_Booth算法的迭代公式推导.png","c1369442d40c9d6dc515d59d756d0874"],["/img/2_37_Booth算法最终计算公式.png","0fe145bb9638e906d602d8144a11c5b4"],["/img/2_38_Booth算法的移位规则.png","3e4d379803b4e35c00bac6932d0db3a0"],["/img/2_39_补码一位乘法示例（Booth算法）.png","3d2f410b6fce5f155afad8e61215a22c"],["/img/2_3_定点小数的表示.png","a9651ead53e8741e61f01498118398f5"],["/img/2_41_竖式除法示例.png","d5a1f795dcde71dd3fa506476d0d4f0d"],["/img/2_43_原码一位除法示例_恢复余数法.png","555526f884ef01d1f8a0a323d0577357"],["/img/2_44_原码一位除法示例_加减交替法.png","b6e9cf4379f94fa2453241c4e11d0d9d"],["/img/2_45_补码除法的分情况比较算法表.png","3acd49c2c809f705d9fe390d8ff069bd"],["/img/2_46_补码除法商值的简化判断.png","2126d9e6072beeff1250910e945766da"],["/img/2_47_补码除法进一步化简.png","2e8a93c2bcad73dd67c2eb6c5512ba23"],["/img/2_48_补码一位除法示例.png","e7aee256219e92f37453bc8d5da0a8bf"],["/img/2_4_定点小数的原码表示.png","1478753f4373bbe13ddb2c0774b56195"],["/img/2_50_浮点数表示格式.png","7fa9eb442b81daabafaef57ae27d6dac"],["/img/2_51_采用原码表示的阶码尾数范围.png","821f64ab9fd4ef9f1cef6fcb48e6bae2"],["/img/2_52_采用原码表示的浮点数取值范围.png","e9d21378fdaefffe9c038c26e8639b19"],["/img/2_53_浮点数取值范围在数轴上的表示.png","6d450bfd8e51e213766e578974f2339c"],["/img/2_54_采用补码表示的阶码尾数范围.png","e166d4349cfa609af81bf785b0111d2d"],["/img/2_55_采用移码表示阶码的浮点数范围.png","2c24da0417348b3a6b0fe9c1589319ef"],["/img/2_56_规格化数的尾数范围.png","d2967aa8bbcb0dc75f3fcfe9166581e5"],["/img/2_58_IEEE 浮点数形式-17170735321978.png","054a83e3c0734ebd675d135f20e1daf7"],["/img/2_58_IEEE 浮点数形式-171707522309712.png","054a83e3c0734ebd675d135f20e1daf7"],["/img/2_59_IEEE 三种浮点数格式-171707523089113.png","8203ad2f40a6a4cc72df1f6245372c3c"],["/img/2_59_IEEE 三种浮点数格式.png","8203ad2f40a6a4cc72df1f6245372c3c"],["/img/2_5_整数的原码表示.png","6a0524b73934d8468dec4f6aaeae0380"],["/img/2_60_IEEE 单精度32位浮点数表示范围-171707523739914.png","f43acd0726ef8ec8a53514256c0cbd69"],["/img/2_60_IEEE 单精度32位浮点数表示范围.png","f43acd0726ef8ec8a53514256c0cbd69"],["/img/2_61_IEEE 浮点数示例（一）_数的二进制浮点表达-17170736230759.png","b16ca569cdc100212e919e03702d41e0"],["/img/2_61_IEEE 浮点数示例（一）_数的二进制浮点表达-171707524581315.png","b16ca569cdc100212e919e03702d41e0"],["/img/2_62_IEEE 浮点数示例（二）_IEEE标准短浮点数-171707525240816.png","551895b98cbabf8e0686251022b8fcd9"],["/img/2_62_IEEE 浮点数示例（二）_IEEE标准短浮点数.png","551895b98cbabf8e0686251022b8fcd9"],["/img/2_63_按边界对齐方式存储示例.png","d1c2df7928e0d96775bd19b7ee67549d"],["/img/2_64_不按边界对齐方式存储示例.png","e346831570815e70fd019e0513235f85"],["/img/2_65_结构体按边界对齐方式存储示例-171707454680110.png","1fb22fb60f2eaca43779001ac4692b3d"],["/img/2_66_大端和小端方式示例.png","a06440cde24a58f0cefedce3d88ff870"],["/img/2_67_真题2-2公式.png","95731e299fe676bc2ce61f8165bdf99f"],["/img/2_6_整数的补码表示-17170652109566.png","5558dfd22337397c8b67d34efe5b67f9"],["/img/2_6_整数的补码表示-17170652329327.png","5558dfd22337397c8b67d34efe5b67f9"],["/img/2_6_整数的补码表示.png","5558dfd22337397c8b67d34efe5b67f9"],["/img/2_7_变形补码.png","5ce3f9f51b17e47c6eee48829b2b87ed"],["/img/2_8_移码原理.png","5738d6a04feb38d07170ae3a7aaaab15"],["/img/2_9_整数的移码表示-17170639443845.png","fbb9c6f0616d94c2ced57f3b892bf173"],["/img/3_10_Intel2114矩阵存储结构.png","2e45a62821249724760344f31e1ee35c"],["/img/3_11_动态RAM的基本单元电路.png","fd8e5bacce8eb8bf00d4a96beba2debe"],["/img/3_12_Intel4116芯片基本结构.png","90c2dbd98efada5ab1f9f69e8ae5d6c0"],["/img/3_13_Intel4116矩阵存储结构.png","6f9c9d8759229b47937be65b4f4a7638"],["/img/3_14_DRAM 集中刷新时间分布.png","4970ca3303030acd0f35a27c7f7625d1"],["/img/3_15_DRAM 分散刷新时间分布.png","f2831ebe80b568d62c571dd19bf78d99"],["/img/3_16_DRAM 异步刷新时间分布.png","5a1874e0ce4d0969436fb4e65b19ae54"],["/img/3_17_DRAM vs SRAM.png","1c4171bb3d2d0a9a77f8a1e487385aee"],["/img/3_18_SRAM vs DRAM vs ROM.png","db32784d0c4af321493700934f29f3f2"],["/img/3_19_主存基本组成实际结构.png","11311784461c49438134cc5d744b9a0a"],["/img/3_1_存储器不同角度的分类.png","d415fcae7a7763e423109300c7f8a46c"],["/img/3_20_主存与CPU的联系.png","41c33fd3b96d7f3d62ca6c9fd1b10009"],["/img/3_22_字节寻址的主存地址分配.png","41ad62ff5cd41edcec7769db15688171"],["/img/3_24_2114位扩展.png","94987b08f150745d703df7499779a71f"],["/img/3_25_2114字扩展.png","bf828b4861e795ad00af13dfec0e356e"],["/img/3_26_2114字位同时扩展.png","ac839e30ced39d554a627e2862d2e06f"],["/img/3_27_单体四字结构存储器.png","0798406d331bd9df60fe8d7fc1ec002d"],["/img/3_28_高位交叉编址多体存储器.png","c2a3c83c9fc0b7159dedb65d03f75157"],["/img/3_29_低位交叉多体存储器.png","e663d818ff88347ac16a10c0d5413be6"],["/img/3_2_存储器按照计算机中作用的分类-171707496067111.png","59f22027f5e97f65b2749325924893f3"],["/img/3_30_模4编址地址分布.png","03b9bd743b901e0c96e435deaf8bff21"],["/img/3_31_四字低位交叉编址流水线工作时间.png","1dbdb5fd5be11bcdebf005f7bdbaf61a"],["/img/3_32_磁盘和磁带的磁道.png","e3dcfd58d027b3b2de25ff691ea52d20"],["/img/3_33_磁表面存储器写入原理-171708472611019.png","76e3ff46e96ac37d680d5dc57e451006"],["/img/3_33_磁表面存储器写入原理.png","76e3ff46e96ac37d680d5dc57e451006"],["/img/3_33_磁表面存储器读出原理.png","7e3ec4f669f0bddd95dbe199d5b8fb5c"],["/img/3_35_固定磁头和移动磁头硬磁盘结构示意图.png","e849de553d29a2f30a022d8164056d68"],["/img/3_36_磁盘存储器基本结构-171708478845020.png","4e28fc13af291210eec2770a99f5430d"],["/img/3_37_磁盘驱动器结构.png","eb8486c2375aec03d84830b157ed27c5"],["/img/3_38_磁道和扇区.png","ce66271dba51a297d44d9fe96ad99f0b"],["/img/3_39_柱面.png","0accae17cdb08ca7d0973581ea541d23"],["/img/3_3_存储器层级金字塔-171707527852817.png","ac29bd3345ef61ad327f6fa9605b10a9"],["/img/3_40_机械硬盘 vs SSD.png","32d3ac1e11129c7f577c462612276b6c"],["/img/3_41_SSD结构.png","90f552e47b4cf7073b625f301fc6143f"],["/img/3_4_存储器层次结构.png","a92c3b8bba60266cecbd881b08daa41f"],["/img/3_6_存储芯片基本结构.png","58e3503a14b578ce5f1cebefbd101bc8"],["/img/3_7_线选法256×1B存储芯片结构示意图-171707581985518.png","ff35a6067e9af0b46e121373fd594480"],["/img/3_7_线选法256×1B存储芯片结构示意图.png","ff35a6067e9af0b46e121373fd594480"],["/img/3_8_重合法16×16存储芯片结构示意图.png","dbd5bafccce0296b9cbaf79418abce37"],["/img/3_9_静态RAM的基本单元电路.png","b9a65ae4ce2ac3227dedcd99ae1744df"],["/img/image-20240530152933503.png","125783c305a154c968e4d884f5223420"],["/img/image-20240530153139441.png","125783c305a154c968e4d884f5223420"],["/img/image-20240530153624057.png","9390b2696941a99d9ada5d85edc64743"],["/img/test1.png","1a211d1fdf887ab85c0d031e07bbb22e"],["/index.html","40f291d0ec0e2b809bc4c9cedcbf3588"],["/page/about/index.html","40f291d0ec0e2b809bc4c9cedcbf3588"],["/post/intro.html","40f291d0ec0e2b809bc4c9cedcbf3588"],["/post/计算机组成原理.html","40f291d0ec0e2b809bc4c9cedcbf3588"],["/static/886a749e.css","3638ea8e20fee2ad15debc3ad07f3020"],["/static/css/3e25f349.css","196bfab004e6ab7e58144cd81989d749"],["/static/css/6b275704.css","a8593cd7c691c8acada389bb398a4649"],["/static/css/882f9706.css","5ab3d62ccb7f03dfea708386c39769b9"],["/static/css/8e0e69c4.css","93c831a6abfee7ad2c8310a8a77c4586"],["/static/css/9a0271b0.css","513473f526a5ba6e4c4c6223c10921f2"],["/static/css/a14e1a22.css","599b7ef5cab13e2a965cd04042e2bd4f"],["/static/img/dccf965f.jpg","df7c128cc07926a8db429348ffc7e4b3"],["/static/js/120aa8f8.js","dc0bfb52a8800189a573da70d1472d26"],["/static/js/22ac7e7f.js","e771ec8ed1f0dd1b114a875b90df86ba"],["/static/js/36429e9b.js","5b144e4cb76a628d9b86f0ced66c8eab"],["/static/js/415fa29b.js","8512ed100ce36361d7a4123fbd5ff547"],["/static/js/53ed1a6f.js","74084e3d6e397f62db1f1f327a5755fe"],["/static/js/7d897144.js","56d96fb52ef962698b3f5a2ea623d87b"],["/static/js/7e80f274.js","a8ea2f3b909c3a497c88aa52b6b19489"],["/static/js/8da07a12.js","bb7bc312dc748deabfa6d06a0acefb90"],["/static/js/9aa0d897.js","55185e8f2bf9f008fc79d4ad44d6f35a"],["/static/js/9cb479b5.js","857e2c1d2e29c17d3182b063753ea6e1"],["/static/js/a92e6a1c.js","0103e69000a369ac762374193e86b78d"],["/static/js/c562793b.js","965271df22b6be5a6960b7b77ce28bac"],["/static/js/d57a5994.js","9f8c1c45921e3e643d1e9d47320e92aa"],["/static/js/ff251d5d.js","f204cb7ad341030deaf0f98312bebbe7"],["/static/js/fffbee97.js","54bbee7dc262898ca886a2b05d681957"],["/sw-register.js","a73f14860b021a043706f1d42f7768c4"],["/tags/index.html","40f291d0ec0e2b809bc4c9cedcbf3588"],["/tags/search/index.html","40f291d0ec0e2b809bc4c9cedcbf3588"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
