/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/index.html","433383a680f840d6bb17765203f3c1c4"],["/icons/favicon-16x16.png","564bc8a425165ebe8f7f8608fa167dc8"],["/icons/favicon-32x32.png","c07d49aa6dfd7a03454645d856e1c7d1"],["/img/1_1_计算机基本组成.png","9714118f3c9e17c3f0d4cf9965f71e5a"],["/img/1_3_典型的冯诺依曼计算机结构框图-17170535066181.png","aa64fe41ea492b4ebf2529ab8916a65f"],["/img/1_3_典型的冯诺依曼计算机结构框图-17170535144652.png","aa64fe41ea492b4ebf2529ab8916a65f"],["/img/1_3_典型的冯诺依曼计算机结构框图-17170535209243.png","aa64fe41ea492b4ebf2529ab8916a65f"],["/img/1_3_典型的冯诺依曼计算机结构框图.png","aa64fe41ea492b4ebf2529ab8916a65f"],["/img/1_6_计算机系统5级层次结构-17170543616504.png","2bb1a22e04021d387facfcb801747ecd"],["/img/1_7_源程序转换为可执行程序的过程-171742827721612.png","23e9f4671da36c080ce632bb91705845"],["/img/1_7_源程序转换为可执行程序的过程.png","23e9f4671da36c080ce632bb91705845"],["/img/1_8_存储程序的基本思想.png","cc3e115258d7b116482bcd6f5d349c9f"],["/img/1_9_细化的计算机组成框图.png","2c3f5262b61910ab26fbe287a5562056"],["/img/2_1_两种定点数的格式.png","a40ec88aab46314b35bb4f8256ed2319"],["/img/2_25_原码一位乘计算通式.png","d86bf62c390afd7d1bcaeaf1746467c6"],["/img/2_26_原码一位乘法示例.png","1a36b47664e7131bb3c1f7499d9a5103"],["/img/2_28_定点小数的补码表示.png","bea3c9e5df5820e57293ab095bb8978a"],["/img/2_29_正数补码一位乘法通式.png","b1b2eb18287e586b4ed4ef6f56cdea03"],["/img/2_2_定点整数的表示.png","1e52949ffd356adbeb616b478edd118b"],["/img/2_30_乘数为负时的真值表达式.png","5aad343230aafd082b491d9558e80ef4"],["/img/2_31_乘数为负时的真值乘积表达式.png","22735c174c8d0032175855d358e6bce0"],["/img/2_32_乘数为负时的补码运算表达式.png","88e02e62ff4a02735ff0565274afabed"],["/img/2_33_乘数为正补码一位乘法.png","9d21bf69ed25bc01f36f882d2c80a96f"],["/img/2_34_乘数为正的补码一位乘法示例.png","5c10a3835d29dbe538167015958a0640"],["/img/2_35_Booth算法补码一位乘法通式.png","f149886a87595651dc8df3695c70fd5a"],["/img/2_36_Booth算法的迭代公式推导.png","c1369442d40c9d6dc515d59d756d0874"],["/img/2_37_Booth算法最终计算公式.png","0fe145bb9638e906d602d8144a11c5b4"],["/img/2_38_Booth算法的移位规则.png","3e4d379803b4e35c00bac6932d0db3a0"],["/img/2_39_补码一位乘法示例（Booth算法）.png","3d2f410b6fce5f155afad8e61215a22c"],["/img/2_3_定点小数的表示.png","a9651ead53e8741e61f01498118398f5"],["/img/2_41_竖式除法示例.png","d5a1f795dcde71dd3fa506476d0d4f0d"],["/img/2_43_原码一位除法示例_恢复余数法.png","555526f884ef01d1f8a0a323d0577357"],["/img/2_44_原码一位除法示例_加减交替法.png","b6e9cf4379f94fa2453241c4e11d0d9d"],["/img/2_45_补码除法的分情况比较算法表.png","3acd49c2c809f705d9fe390d8ff069bd"],["/img/2_46_补码除法商值的简化判断.png","2126d9e6072beeff1250910e945766da"],["/img/2_47_补码除法进一步化简.png","2e8a93c2bcad73dd67c2eb6c5512ba23"],["/img/2_48_补码一位除法示例.png","e7aee256219e92f37453bc8d5da0a8bf"],["/img/2_4_定点小数的原码表示.png","1478753f4373bbe13ddb2c0774b56195"],["/img/2_50_浮点数表示格式.png","7fa9eb442b81daabafaef57ae27d6dac"],["/img/2_51_采用原码表示的阶码尾数范围.png","821f64ab9fd4ef9f1cef6fcb48e6bae2"],["/img/2_52_采用原码表示的浮点数取值范围.png","e9d21378fdaefffe9c038c26e8639b19"],["/img/2_53_浮点数取值范围在数轴上的表示.png","6d450bfd8e51e213766e578974f2339c"],["/img/2_54_采用补码表示的阶码尾数范围.png","e166d4349cfa609af81bf785b0111d2d"],["/img/2_55_采用移码表示阶码的浮点数范围.png","2c24da0417348b3a6b0fe9c1589319ef"],["/img/2_56_规格化数的尾数范围.png","d2967aa8bbcb0dc75f3fcfe9166581e5"],["/img/2_58_IEEE 浮点数形式-17170735321978.png","054a83e3c0734ebd675d135f20e1daf7"],["/img/2_58_IEEE 浮点数形式-171707522309712.png","054a83e3c0734ebd675d135f20e1daf7"],["/img/2_59_IEEE 三种浮点数格式-171707523089113.png","8203ad2f40a6a4cc72df1f6245372c3c"],["/img/2_59_IEEE 三种浮点数格式.png","8203ad2f40a6a4cc72df1f6245372c3c"],["/img/2_5_整数的原码表示.png","6a0524b73934d8468dec4f6aaeae0380"],["/img/2_60_IEEE 单精度32位浮点数表示范围-171707523739914.png","f43acd0726ef8ec8a53514256c0cbd69"],["/img/2_60_IEEE 单精度32位浮点数表示范围.png","f43acd0726ef8ec8a53514256c0cbd69"],["/img/2_61_IEEE 浮点数示例（一）_数的二进制浮点表达-17170736230759.png","b16ca569cdc100212e919e03702d41e0"],["/img/2_61_IEEE 浮点数示例（一）_数的二进制浮点表达-171707524581315.png","b16ca569cdc100212e919e03702d41e0"],["/img/2_62_IEEE 浮点数示例（二）_IEEE标准短浮点数-171707525240816.png","551895b98cbabf8e0686251022b8fcd9"],["/img/2_62_IEEE 浮点数示例（二）_IEEE标准短浮点数.png","551895b98cbabf8e0686251022b8fcd9"],["/img/2_63_按边界对齐方式存储示例.png","d1c2df7928e0d96775bd19b7ee67549d"],["/img/2_64_不按边界对齐方式存储示例.png","e346831570815e70fd019e0513235f85"],["/img/2_65_结构体按边界对齐方式存储示例-171707454680110.png","1fb22fb60f2eaca43779001ac4692b3d"],["/img/2_66_大端和小端方式示例.png","a06440cde24a58f0cefedce3d88ff870"],["/img/2_67_真题2-2公式.png","95731e299fe676bc2ce61f8165bdf99f"],["/img/2_6_整数的补码表示-17170652109566.png","5558dfd22337397c8b67d34efe5b67f9"],["/img/2_6_整数的补码表示-17170652329327.png","5558dfd22337397c8b67d34efe5b67f9"],["/img/2_6_整数的补码表示.png","5558dfd22337397c8b67d34efe5b67f9"],["/img/2_7_变形补码.png","5ce3f9f51b17e47c6eee48829b2b87ed"],["/img/2_8_移码原理.png","5738d6a04feb38d07170ae3a7aaaab15"],["/img/2_9_整数的移码表示-17170639443845.png","fbb9c6f0616d94c2ced57f3b892bf173"],["/img/3_10_Intel2114矩阵存储结构.png","2e45a62821249724760344f31e1ee35c"],["/img/3_11_动态RAM的基本单元电路.png","fd8e5bacce8eb8bf00d4a96beba2debe"],["/img/3_12_Intel4116芯片基本结构.png","90c2dbd98efada5ab1f9f69e8ae5d6c0"],["/img/3_13_Intel4116矩阵存储结构.png","6f9c9d8759229b47937be65b4f4a7638"],["/img/3_14_DRAM 集中刷新时间分布.png","4970ca3303030acd0f35a27c7f7625d1"],["/img/3_15_DRAM 分散刷新时间分布.png","f2831ebe80b568d62c571dd19bf78d99"],["/img/3_16_DRAM 异步刷新时间分布.png","5a1874e0ce4d0969436fb4e65b19ae54"],["/img/3_17_DRAM vs SRAM.png","1c4171bb3d2d0a9a77f8a1e487385aee"],["/img/3_18_SRAM vs DRAM vs ROM.png","db32784d0c4af321493700934f29f3f2"],["/img/3_19_主存基本组成实际结构.png","11311784461c49438134cc5d744b9a0a"],["/img/3_1_存储器不同角度的分类.png","d415fcae7a7763e423109300c7f8a46c"],["/img/3_20_主存与CPU的联系.png","41c33fd3b96d7f3d62ca6c9fd1b10009"],["/img/3_22_字节寻址的主存地址分配.png","41ad62ff5cd41edcec7769db15688171"],["/img/3_24_2114位扩展.png","94987b08f150745d703df7499779a71f"],["/img/3_25_2114字扩展.png","bf828b4861e795ad00af13dfec0e356e"],["/img/3_26_2114字位同时扩展.png","ac839e30ced39d554a627e2862d2e06f"],["/img/3_27_单体四字结构存储器.png","0798406d331bd9df60fe8d7fc1ec002d"],["/img/3_28_高位交叉编址多体存储器.png","c2a3c83c9fc0b7159dedb65d03f75157"],["/img/3_29_低位交叉多体存储器.png","e663d818ff88347ac16a10c0d5413be6"],["/img/3_2_存储器按照计算机中作用的分类-171707496067111.png","59f22027f5e97f65b2749325924893f3"],["/img/3_30_模4编址地址分布.png","03b9bd743b901e0c96e435deaf8bff21"],["/img/3_31_四字低位交叉编址流水线工作时间.png","1dbdb5fd5be11bcdebf005f7bdbaf61a"],["/img/3_32_磁盘和磁带的磁道.png","e3dcfd58d027b3b2de25ff691ea52d20"],["/img/3_33_磁表面存储器写入原理-171708472611019.png","76e3ff46e96ac37d680d5dc57e451006"],["/img/3_33_磁表面存储器写入原理.png","76e3ff46e96ac37d680d5dc57e451006"],["/img/3_33_磁表面存储器读出原理.png","7e3ec4f669f0bddd95dbe199d5b8fb5c"],["/img/3_35_固定磁头和移动磁头硬磁盘结构示意图.png","e849de553d29a2f30a022d8164056d68"],["/img/3_36_磁盘存储器基本结构-171708478845020.png","4e28fc13af291210eec2770a99f5430d"],["/img/3_37_磁盘驱动器结构.png","eb8486c2375aec03d84830b157ed27c5"],["/img/3_38_磁道和扇区.png","ce66271dba51a297d44d9fe96ad99f0b"],["/img/3_39_柱面.png","0accae17cdb08ca7d0973581ea541d23"],["/img/3_3_存储器层级金字塔-171707527852817.png","ac29bd3345ef61ad327f6fa9605b10a9"],["/img/3_40_机械硬盘 vs SSD.png","32d3ac1e11129c7f577c462612276b6c"],["/img/3_41_SSD结构.png","90f552e47b4cf7073b625f301fc6143f"],["/img/3_42_块号和块内地址.png","3e39b2e8dc361f49e94853d69f4087bd"],["/img/3_43_块号和块内地址_加标记.png","7016355540a3a67851d9ce7d494073d7"],["/img/3_44_Cache基本结构原理图.png","a53a23da4c1f6cea8bfebe459519ac5c"],["/img/3_45_直接映射.png","16f1b12d3d9fc4a56d03cea1758b5a7c"],["/img/3_46_直接映射地址结构.png","4bc4e7bba1347a593eadc93eceb76d08"],["/img/3_47_访存过程.png","02e76a7db06d2b269ed002a026223062"],["/img/3_48_全相联映射.png","c621f1aada2516fe652eff905dc3e644"],["/img/3_49_全相联映射地址结构.png","780e84ff18a725cbaf4f13ec0b2e4a26"],["/img/3_4_存储器层次结构.png","a92c3b8bba60266cecbd881b08daa41f"],["/img/3_50_组相联映射.png","5a48c892617863a433faae0f23a712f4"],["/img/3_51_组相联映射地址结构-17172234272921.png","4dd431f6600162aee024a2a2deaf40ab"],["/img/3_52_三种映射方式对比.png","30402d32d18c63985ebe0ed57a58ffb9"],["/img/3_53_LRU替换策略示例.png","16b8fd01d4284e99a6e08f73422a6b2a"],["/img/3_54_有LRU位的Cache行.png","6729bc8415a7b4f858a54795d994d962"],["/img/3_55_多个程序对内存的争用.png","d825ccc1165a882bef040ac4da9146bb"],["/img/3_56_物理地址和虚拟地址的转换.png","8c7c896d4ea13d74ff59d92945686d3b"],["/img/3_57_虚拟存储器中多个程序对内存的共享.png","724e0ad88e5dfcb0c8e46ba1546bbf13"],["/img/3_58_逻辑地址结构.png","f8d4bf1146f618609f5c37e15066c742"],["/img/3_59_页表-17173428722842.png","e093d80a7d7c6237fb1b0c0b9b969052"],["/img/3_60_多级缓存关系.png","8fec996af10340d9eb0162f942bc2f7c"],["/img/3_61_TLB项.png","7368d9c6591aa9e94f8e6a7626a7cc69"],["/img/3_62_有TLB和Cache的多级存储系统-17173430030003.png","4125ddcb5b48474e8595f4f091b5b3f2"],["/img/3_63_TLB、Page、Cache命中情况组合.png","e445adcd36b594eb34f0086ab4269bc7"],["/img/3_64_段式虚拟存储器.png","643b3e2d23fc411d7f23220f1ec993fd"],["/img/3_65_段页式逻辑地址结构-17173430556674.png","7057ffbc7f992d056ad5479b7626ad9c"],["/img/3_66_26题图-17173430904655.png","2226308ebb58668ab756865d48336a94"],["/img/3_67_27题图.png","e2db384ff2f4e707eaee3552c24839dc"],["/img/3_68_大题1题图-17173431193556.png","8250a94473f5d116235cc09e5a4519da"],["/img/3_69_大题2题图.png","1e00ae09aa0d5d86d8353c94801ef377"],["/img/3_6_存储芯片基本结构.png","58e3503a14b578ce5f1cebefbd101bc8"],["/img/3_7_线选法256×1B存储芯片结构示意图-171707581985518.png","ff35a6067e9af0b46e121373fd594480"],["/img/3_7_线选法256×1B存储芯片结构示意图.png","ff35a6067e9af0b46e121373fd594480"],["/img/3_8_重合法16×16存储芯片结构示意图.png","dbd5bafccce0296b9cbaf79418abce37"],["/img/3_9_静态RAM的基本单元电路.png","b9a65ae4ce2ac3227dedcd99ae1744df"],["/img/4_10_扩展操作码示例.png","e9aa7dbd9a1d7783bc530d2ea69d12d5"],["/img/4_11_扩展操作码示例（二）.png","cbec395401c0bf5cdcbcbc7f937bed32"],["/img/4_12_调用和返回指令-17173881622057.png","db9b2e5753635e3f1a88024180b59f97"],["/img/4_13_指令寻址方式.png","4f1ded299b3ae12cf6bcc532c786de9b"],["/img/4_14_加寻址特征的一地址指令.png","3776a5e4560097ed352cc8f59e5a47ac"],["/img/4_15_加寻址特征的二地址指令.png","f95f38ae7a97aafd6cb64e83ade6396d"],["/img/4_16_立即寻址.png","e385d59cdb51fbdeb764110db50a78c6"],["/img/4_17_直接寻址.png","d8f0d1a2503c9fa449753b3a7aef2dbe"],["/img/4_18_间接寻址.png","f1223cf07d6663b0a07622f0c5f94027"],["/img/4_19_隐含寻址.png","c04f5fd049589fb8d7d62d81eba16156"],["/img/4_1_指令基本格式.png","0424e4c83e34e399d1f3645b537e7f28"],["/img/4_20_寄存器寻址-17173882741198.png","09b35dfc36f0bcaafd671f87da3c9b04"],["/img/4_21_寄存器间接寻址.png","4e7c8ee8c545134f0c1fc592a3c9efed"],["/img/4_22_基址寻址-17173883561639.png","ce984b3c66a5e69098b0876dd1a7113b"],["/img/4_22_基址寻址.png","ce984b3c66a5e69098b0876dd1a7113b"],["/img/4_23_变址寻址-171738838493510.png","78b6e65b4a5f8dba25032f87dc602229"],["/img/4_23_变址寻址.png","78b6e65b4a5f8dba25032f87dc602229"],["/img/4_24_数组求和_直接寻址实现.png","43a5d31a93d4c07bba856c6af259fcb0"],["/img/4_25_数组求和_变址寻址实现.png","a3323f30d9be913d18d71174a45df332"],["/img/4_26_相对寻址.png","29e00d5c5e2153e5546b764719fa5157"],["/img/4_27_相对寻址案例.png","d9706ef33f175511055516fa82c586a4"],["/img/4_28_堆栈寻址PUSH.png","8b986942d206249ea10670e1071fdae7"],["/img/4_29_堆栈寻址POP.png","931ae2477c849134d21b46dd1088e41f"],["/img/4_2_定长指令字结构.png","6c9b7486510ed5bce13507ca9c2f5070"],["/img/4_3_变长指令字结构.png","492610f415124bdebcfdb649b4b0dd1d"],["/img/4_40_IA32寄存器.png","047ace1a5d8744e205f58f7415f5c63c"],["/img/4_41_x64寄存器-1.png","0dfaf267abc446925326f7e2ece95d54"],["/img/4_41_x64寄存器-2.png","39028f5c4e96a0d2760f0325c5528257"],["/img/4_42_ATT vs Intel格式.png","a6443cc624db58bd7b781ef575da1b30"],["/img/4_43_ATT vs Intel寻址方式.png","d29dd59c85b224a9a2ae2357d8708723"],["/img/4_45_ATT vs Intel mov 指令.png","f6be30fee180af5e5a4de12d2c5131b8"],["/img/4_46_算术和逻辑指令.png","842ea167e1cdc898d3b7dec711b72c79"],["/img/4_47_常用转移指令-171742805663211.png","2ecf990bf38172984d8f9de0a46c11ac"],["/img/4_48_比较和测试指令.png","baf6d9a4b2dc38bcd65d6c8f1c821985"],["/img/4_49_选择结构的汇编表示-171742969024013.png","fcdb627df1543756309ae668a03c2cef"],["/img/4_49_选择结构的汇编表示.png","fcdb627df1543756309ae668a03c2cef"],["/img/4_4_四地址指令.png","883e4073447e52ca24eb118978904f26"],["/img/4_50_do-while的汇编表示.png","c58dbb41bba8d72202df48e0c3b1d8fe"],["/img/4_51_while的汇编表示.png","912179cd4de6de3d68fdd5901d310e71"],["/img/4_52_for的汇编表示.png","1ed7529fdc28b1200b3b07f946d6ec54"],["/img/4_53_进程的内存映像.png","386a9e2d29c72d69ad0d3ebf7bf042ca"],["/img/4_54_栈帧.png","3e2b8da37d30a9068046f7b383663476"],["/img/4_55_参数构造.png","f6b3284ec21cae7566a84c01e2c75b34"],["/img/4_56_返回地址_1.png","8dc9288d2497ad4b1562895648058af7"],["/img/4_57_返回地址_2.png","4952cbc1fd02c1913843c2b5a7a6de9e"],["/img/4_58_保存上下文.png","2310ce87a439d68b75e4e755bbc52996"],["/img/4_59_栈帧结构.png","0cc6e3156d39223ba6ce7effbf719d2b"],["/img/4_5_四地址指令分析.png","b0a88e0991e09c9d960f95163ea4a043"],["/img/4_61_过程调用_子程序.png","a05e25ea54672e828225c1a204e5aba1"],["/img/4_62_小题题图-171742981482814.png","bc2df3e2b94f2b27ceec24d074def0bd"],["/img/4_62_小题题图.png","bc2df3e2b94f2b27ceec24d074def0bd"],["/img/4_63_大题题2图.png","e539122c1f5b498715aec42e2c251457"],["/img/4_64_大题题3图.png","d6fae017bcb65bb797da30e35c742c4e"],["/img/4_6_三地址指令.png","33e4a879cc9b56c813b2aeddfdb855b5"],["/img/4_7_二地址指令.png","c0d465867fa94ca82a8ea06c634e4fa4"],["/img/4_8_一地址指令.png","321f38ef57d7c0e11a94753e26b05769"],["/img/4_9_定长操作码指令.png","61d146ce1fef5464612200220729ff4a"],["/img/5_100_14年真题题图1-171767130669214.png","c4f721f345a79f7c13ce1d278fa22997"],["/img/5_101_14年真题题图2.png","c7042802cfcc560a70ce57df911a61ac"],["/img/5_102_14年真题题解.png","6e9183f821d2421efcc0e9369db32c2c"],["/img/5_103_22年真题题图1.png","de3cf484e5d178272b39586e9c021c61"],["/img/5_10_未采用流水线的指令执行过程-171751497090117.png","eb9a272e1fb38283c4ecd4849f049edc"],["/img/5_11_采用流水线的指令执行过程.png","1d3a97dca8a79a9eaf65c529912d1a5d"],["/img/5_12_指令的六级流水时序.png","14ba383f2cab3eaa66dba0b0018d66df"],["/img/5_13_不同类型指令在各流水段中的操作.png","c8439a1c79c7b83af77e12235837f207"],["/img/5_14_结构冒险.png","4f7d43ceb88baec99e2459d9ec8b9f70"],["/img/5_15_用暂停解决结构冒险.png","1035451239aa267f918ac57503631a2e"],["/img/5_16_数据冒险.png","e57617fc26cdbfecc6de5eb3a8bf6127"],["/img/5_17_数据冒险案例-171751537787918.png","b0f0ea68cd284098d9b02576da472624"],["/img/5_18_后推法解决数据冒险.png","d9aaa9a04ca188b7ce14ca9ba748dde6"],["/img/5_19_带有旁路技术的ALU.png","54ef1e2ef545dfc047bd6ad7826a4806"],["/img/5_1_指令执行过程-171751470445715.png","f10365ea9b5681bfd2ae722b5967bd6a"],["/img/5_20_控制冒险-171751541193619.png","ce37517bd3dd160134d4f1b5aa823868"],["/img/5_21_流水线的时空图.png","69b909ea6bdf161b94b6a3b5488a900d"],["/img/5_22_超标量流水线.png","2b1518ead1f3f8018e5e68e45bd8fc7b"],["/img/5_23_超流水线-17176639273351.png","4af5d87088c0b6c4153698282f1b8ac1"],["/img/5_24_超长指令字.png","5c17ac6f18bc4996afa53e27dd9b6b51"],["/img/5_25_取指周期数据流.png","983695802508df817c62a4871af0a6c8"],["/img/5_26_间址周期数据流.png","fdd73b4fbb09cc55b7fc8388d10768cd"],["/img/5_27_中断周期数据流.png","bd3b19b5670b0b4f4fbb4403b3836222"],["/img/5_2_CPU的结构-17176639655542.png","0d0ae30c3fcb870954a574166a4e0180"],["/img/5_2_CPU的结构.png","0d0ae30c3fcb870954a574166a4e0180"],["/img/5_30_取指周期微操作.png","f2fe363ded5452c4498b5ad98cc34bf4"],["/img/5_31_间址周期微操作.png","f664df0556de1e20fee20af8895f3ba7"],["/img/5_32_执行周期微操作_非访存指令.png","83491efdcdd5926d78e855f8caf93d77"],["/img/5_33_执行周期微操作_访存指令.png","8df0539a00489557b185160bfe90e973"],["/img/5_34_执行周期微操作_转移指令.png","751e4426bcc97d4f9861671342d1baf2"],["/img/5_35_中断周期微操作-171767078534410.png","3a05c28a4380f551b12576404165fa65"],["/img/5_35_中断周期微操作.png","3a05c28a4380f551b12576404165fa65"],["/img/5_36_专用数据通路.png","feba08141324785c16cd86638d9d5055"],["/img/5_37_专用数据通路_取指周期.png","9f54913d379a27391b61a45fba8de3cf"],["/img/5_38_专用数据通路_间址周期.png","71d48cc023a8d8784eeca74b20a84d93"],["/img/5_39_专用数据通路_执行周期.png","91b81a0a873118bdbe15de23ad84c416"],["/img/5_3_指令周期.png","35ae4e61e180620507ab32c79fbedddc"],["/img/5_40_采用CPU内部总线方式的数据通路.png","4aeb2143159b484bd9f2e4ad2e8e6f30"],["/img/5_41_采用CPU内部总线方式的数据通路_取指周期.png","9f59779facb7589b8141c05e32628ccc"],["/img/5_42_采用CPU内部总线方式的数据通路_间址周期-17176644985043.png","eca47dbed29809fb3d31fa549c392837"],["/img/5_42_采用CPU内部总线方式的数据通路_间址周期.png","eca47dbed29809fb3d31fa549c392837"],["/img/5_43_采用CPU内部总线方式的数据通路_执行周期.png","2811bfa7c32d81309bb8eb62654f87db"],["/img/5_44_中央控制和局部控制结合.png","e3faf80d4f87411d5990d56f8df372e3"],["/img/5_45_CU输入输出框图.png","d7facb015cb1c8c562e509b8f4742ad3"],["/img/5_46_取指周期节拍安排-17176700379486.png","0d0add9642fb871d6cfeb324621627e2"],["/img/5_46_取指周期节拍安排-171767149527715.png","0d0add9642fb871d6cfeb324621627e2"],["/img/5_47_间址周期节拍安排.png","0794669a609316184866300ece70d20d"],["/img/5_48_执行周期节拍安排_非访存.png","8e4f5484fb924e8eab917ca2db52527e"],["/img/5_49_执行周期节拍安排_访存-17176700845627.png","c3de7b66bc6cd664844f2d5a15febf19"],["/img/5_4_具有间址周期的指令周期.png","70fc8d422f453e87fd936c560560260b"],["/img/5_50_执行周期节拍安排_转移.png","8cd1ecb1c6e3ab2a93157dc1a26b86c0"],["/img/5_51_中断周期节拍安排.png","36e786e727db17c479fd993483da11d9"],["/img/5_52_操作时间表.png","35662c735e2a66bd2376da4859a70a83"],["/img/5_54_机器指令对应的微程序.png","e1082899fe190e0573b7357dd27c4410"],["/img/5_55_微指令格式.png","9197eb4ec68d23ad094a55c2aad068db"],["/img/5_56_微程序控制单元结构框图.png","39e66db2bbe43f203de66dcbd50f818b"],["/img/5_57_微程序控制单元工作过程_取指阶段.png","a10d425b54bb7f83dceb8713a1f8f816"],["/img/5_58_微程序控制单元工作过程_执行阶段.png","ebba4292188abe735e7f89230e297e67"],["/img/5_59_微指令的编码方式_直接编码.png","0314bca0f495eceb7f4e0dd026e89191"],["/img/5_5_指令周期处理流程.png","1c9e09a29af93363f03c54280b098100"],["/img/5_60_微指令的编码方式_字段直接编码.png","779ddfa426c4c220d184c6cf519a9114"],["/img/5_61_微指令的编码方式_字段间接编码.png","4010c1b274b7e4b257f63c0297b2c0c3"],["/img/5_62_微指令格式.png","45d7e705f242275a314b5d76334e14d9"],["/img/5_63_微指令后续地址的形成.png","7850f6e29c88b88db503e172fc12909f"],["/img/5_64_微程序设计_取指阶段1-17176704375398.png","0a017db68be0ada402b32cc085c31719"],["/img/5_65_微程序设计_取指阶段2.png","289288f4e92677b4ef26070b20775023"],["/img/5_66_微程序设计_执行阶段1_非访存.png","32b671d78073ac4fcb70dca938c51cff"],["/img/5_67_微程序设计_执行阶段2_访存.png","01f040d09b30ccd12cedb58379bde1d7"],["/img/5_68_微程序设计_执行阶段3_转移.png","3396b0a71be7681b025b3c64855d2a14"],["/img/5_69_微程序设计_省去CMAR的控制单元.png","f6c042602ebec0f7ff43d9e14c36003a"],["/img/5_6_CPU工作周期的标志触发器.png","c86b0462eadef51f6b5879dae0d08d9e"],["/img/5_70_微程序设计_微指令格式.png","af597c0f1c33e7828aa93bd00473febe"],["/img/5_71_微程序设计_微指令控制字段对应的微操作.png","3e18f5537b0391aab670027a1eb19665"],["/img/5_72_微程序设计_微指令码点.png","8d840b30310680e5b30aa83944f40f26"],["/img/5_75_中断和异常.png","10bf33904f176b2fa5e99d531d65e0c9"],["/img/5_76_中断和异常的分类.png","1fc2b2345806fc660e31e1da63201007"],["/img/5_77_中断请求标记寄存器.png","2b3aedea4eabafe0ab278a92dd77a78b"],["/img/5_78_集成在CPU中的排队器.png","ee57ac73507d2cfc32ab961df61c904a"],["/img/5_79_链式排队器.png","97c6062e640902d5a58ab512fe525ec8"],["/img/5_7_CPU时钟信号.png","3e99dfbdd7b0f8814abbbe487c29920f"],["/img/5_80_软件排队.png","301fdc276d0df6e451ca6624d9888c20"],["/img/5_81_x86架构标志寄存器efl.png","8be5d684b2e2c84e86e4bdfc5e6a387d"],["/img/5_82_CPU发出中断查询信号.png","082fb58cdae9dc37135e5862331dd828"],["/img/5_83_中断向量地址形成部件.png","a75e4fe464d0906219d578977774493b"],["/img/5_84_通过向量地址寻找入口地址.png","67b81319cebf3d47547bb1bd434349e1"],["/img/5_85_中断流程（单重多重中断）.png","eae8685d4fce45a65543252df9b7077d"],["/img/5_86_多重中断-171767096915411.png","2cdb2d93bcd9d8562c218412b9ffc7dd"],["/img/5_87_多重中断的响应顺序-171767098368512.png","d58d44fa0d89118cd6aa8f2fa0e668a1"],["/img/5_88_接口电路中的MASK和INTR.png","9f0d00a2795f0b244cf3046f8f32a50e"],["/img/5_89_有屏蔽功能的排队器.png","f7c6a344b8cdc76c7a71c99ceadf6adb"],["/img/5_8_定长的机器周期-171751493452516.png","ccce0f0065c3f9742cfbab7e5ed4f3d3"],["/img/5_8_定长的机器周期-17176645756684.png","ccce0f0065c3f9742cfbab7e5ed4f3d3"],["/img/5_90_屏蔽字示例.png","fccc470799c3b52348d989bd1a857f2d"],["/img/5_91_不采用屏蔽技术的中断处理顺序.png","fcef44a5167af294481c9e880eadfa3e"],["/img/5_92_更改中断源的屏蔽字.png","d362eb27d55a13d975c5770e594ff0e5"],["/img/5_93_采用屏蔽技术改变中断处理顺序.png","298dbcd198df2ebfd132bcfb64c94cdc"],["/img/5_94_中断服务程序流程.png","c1515b4d9c17e6a714c2c7509702b1e1"],["/img/5_95_费林分类法-171767123098013.png","54b3f910b1a83bcb1a3f70dc967d4651"],["/img/5_95_费林分类法.png","54b3f910b1a83bcb1a3f70dc967d4651"],["/img/5_96_逻辑内核和物理内核.png","8a7dee4dfabdfa8d32d81099b1cb5e33"],["/img/5_97_多核处理器.png","f954ee1c271400fa491038e728d118c9"],["/img/5_98_SMP典型结构.png","b98f5d13d71917800c019c4de108db4c"],["/img/5_99_MPP典型结构.png","d38d6ff6ae67cf0efbafd12b21e48124"],["/img/5_9_不定长的机器周期-17176645876525.png","07a308d278791366350b2f34a8072e81"],["/img/5_9_不定长的机器周期.png","07a308d278791366350b2f34a8072e81"],["/img/cee83d5e4c0ec6e1e6b1158c8ec56dba-17201867095971.png","b6bc77bf550155ab7dcf117f5317bd5e"],["/img/cee83d5e4c0ec6e1e6b1158c8ec56dba-17201867400533.png","b6bc77bf550155ab7dcf117f5317bd5e"],["/img/cee83d5e4c0ec6e1e6b1158c8ec56dba-17201868156155.png","b6bc77bf550155ab7dcf117f5317bd5e"],["/img/cee83d5e4c0ec6e1e6b1158c8ec56dba-17201868711717.png","b6bc77bf550155ab7dcf117f5317bd5e"],["/img/cee83d5e4c0ec6e1e6b1158c8ec56dba.png","b6bc77bf550155ab7dcf117f5317bd5e"],["/img/image-20240530152933503.png","125783c305a154c968e4d884f5223420"],["/img/image-20240530153139441.png","125783c305a154c968e4d884f5223420"],["/img/image-20240530153624057.png","9390b2696941a99d9ada5d85edc64743"],["/img/image-20240531184327835.png","d81790d0d1577cd6731013b950c02a1f"],["/img/image-20240531184401454.png","d38d82c4c1fe40346995d0922d6877fa"],["/img/image-20240531184419204.png","fcdd26002d7dbf814dc8804244304ea1"],["/img/image-20240531184747902.png","07a955be63aaa5993a88237b94e99a20"],["/img/image-20240531184927947.png","0ab3bf43bd252c8c55b8e23fee13f7c4"],["/img/image-20240531184947324.png","861a4dfbc5f5008fb57521160811a2dc"],["/img/image-20240531185001909.png","8f86fb177a4a0b463b023063ee30789a"],["/img/image-20240601222247908.png","df4450271a5b3d06cbc32cf527445532"],["/img/image-20240601222609327.png","f0503b64cdfef4083127c686b2313cfc"],["/img/image-20240601234055038.png","c987a52e3a065262ed89c7ddb30a0ddb"],["/img/image-20240601234227954.png","f11fe2ff4f811c24eedb00ff6c5e173c"],["/img/image-20240601234231643.png","f11fe2ff4f811c24eedb00ff6c5e173c"],["/img/image-20240601234903007.png","48bacfea68e2cc4bd01eb79f780a8502"],["/img/image-20240601235512302.png","3bc7114082a190d0c13f647ce9a656ce"],["/img/image-20240602001800328.png","0cff8bae9061803834202fc0f94216e8"],["/img/image-20240602001815653.png","0cff8bae9061803834202fc0f94216e8"],["/img/image-20240603121300145.png","7e94099e717c384d0e997d7ad566639b"],["/img/image-20240603121400670.png","08c74b725a5f7d78cb16534e847e51cc"],["/img/image-20240603121420214.png","7d2141c3b39cb8129c7e66a7a8c7911b"],["/img/image-20240603121443693.png","9783e989e279f302382f7b80308f42e0"],["/img/image-20240603121456890.png","d05c95fb6d99b7ea4ab2dacb310de669"],["/img/image-20240603121700330.png","ed2b36f51ea844094a9f6d11b1630b73"],["/img/image-20240603121723656.png","b1aaa290e3e3a66f6f8a18d03d061c13"],["/img/image-20240603121807441.png","13a290d222be77ab217118efaa383781"],["/img/image-20240603121921212.png","04cb01fcfca7500049f401ae3c62e2e7"],["/img/image-20240603121935753.png","666fc788e4c8c38ecd56f7b258da51e4"],["/img/image-20240603122020210.png","3839b6b2b1eb69a84a69ff0e650980cc"],["/img/image-20240603165635774.png","483497314f6d731ac0a2b8c7a0a740bd"],["/img/image-20240604233905657.png","967529b06f186846cdb0f3d104309be4"],["/img/image-20240604234112869.png","76c06f1aa9c21f8b47a80e6d5e467e93"],["/img/image-20240604234132086.png","36b16e598ccc52d011eae66c6821d85a"],["/img/image-20240604234158745.png","507a096f6bb990680a743e9dd4114a4e"],["/img/image-20240604234247766.png","6a141dba5febcfa483ded06a852b1e67"],["/img/image-20240604234652536.png","700eb09dbcd7553a41e013617b22318f"],["/img/image-20240604234713743.png","e23307fe40239c9d63b8047540b84616"],["/img/image-20240604234801546.png","b1a58ea278e8e441c6b78ce5b6b2f4fb"],["/img/image-20240606183624112.png","8d75ab87df0adb3858f0349d97895f31"],["/img/image-20240606185634991.png","e4a3f1be2d41c28f1bf40dac85f69e41"],["/img/image-20240606185642605.png","f3abe8f9b9358abc5ea497cf6d3509e0"],["/img/image-20240606185656300.png","d0957db05bbe257fec1721bf58c3ad3a"],["/img/image-20240606185745298.png","d47450c1ecc7e7b3194954ed4f891b97"],["/img/image-20240606185758413.png","7cb918acd72b09ecd22232f58b6a0f16"],["/img/image-20240708214935885.png","da36743020df1bd58de6120a273844ae"],["/img/image-20240708222036402.png","e5fed85a5f03f1d942dbc9fa79c2f6f1"],["/img/image-20240708222645852.png","928d3f69eaa3faae38a435c49b9bc1cd"],["/img/image-20240708224653615.png","58619e0aa81a2c726f0f9ec1ef1c6440"],["/img/image-20240708225916220.png","56e3597fcb3711004e92369d9ac6b852"],["/img/image-20240708230304033.png","6af6e5c8c2357e0f37fc2d468a807c90"],["/img/image-20240711182844695.png","65f18f98879eb45ee654e06515245855"],["/img/test1.png","1a211d1fdf887ab85c0d031e07bbb22e"],["/img/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0hzRm9yUHlw,size_16,color_FFFFFF,t_70#pic_center.png","71248aec76c5b76d18e8f9bb9e38a3bf"],["/img/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDg5NTY1MQ==,size_16,color_FFFFFF,t_70.png","4f65a7801cf8af3350ab35c9a758e4b6"],["/index.html","433383a680f840d6bb17765203f3c1c4"],["/page/about/index.html","433383a680f840d6bb17765203f3c1c4"],["/post/Linux操作系统（搬运）.html","433383a680f840d6bb17765203f3c1c4"],["/post/intro.html","433383a680f840d6bb17765203f3c1c4"],["/post/计算机组成原理.html","433383a680f840d6bb17765203f3c1c4"],["/static/886a749e.css","3638ea8e20fee2ad15debc3ad07f3020"],["/static/css/3e25f349.css","196bfab004e6ab7e58144cd81989d749"],["/static/css/6b275704.css","a8593cd7c691c8acada389bb398a4649"],["/static/css/882f9706.css","5ab3d62ccb7f03dfea708386c39769b9"],["/static/css/8e0e69c4.css","93c831a6abfee7ad2c8310a8a77c4586"],["/static/css/9a0271b0.css","513473f526a5ba6e4c4c6223c10921f2"],["/static/css/a14e1a22.css","599b7ef5cab13e2a965cd04042e2bd4f"],["/static/img/dccf965f.jpg","df7c128cc07926a8db429348ffc7e4b3"],["/static/js/120aa8f8.js","dc0bfb52a8800189a573da70d1472d26"],["/static/js/22ac7e7f.js","e771ec8ed1f0dd1b114a875b90df86ba"],["/static/js/36429e9b.js","5b144e4cb76a628d9b86f0ced66c8eab"],["/static/js/415fa29b.js","8512ed100ce36361d7a4123fbd5ff547"],["/static/js/53ed1a6f.js","74084e3d6e397f62db1f1f327a5755fe"],["/static/js/7d897144.js","56d96fb52ef962698b3f5a2ea623d87b"],["/static/js/7e80f274.js","a8ea2f3b909c3a497c88aa52b6b19489"],["/static/js/8da07a12.js","bb7bc312dc748deabfa6d06a0acefb90"],["/static/js/9aa0d897.js","55185e8f2bf9f008fc79d4ad44d6f35a"],["/static/js/9cb479b5.js","857e2c1d2e29c17d3182b063753ea6e1"],["/static/js/a92e6a1c.js","0103e69000a369ac762374193e86b78d"],["/static/js/c562793b.js","965271df22b6be5a6960b7b77ce28bac"],["/static/js/d57a5994.js","9f8c1c45921e3e643d1e9d47320e92aa"],["/static/js/ff251d5d.js","f204cb7ad341030deaf0f98312bebbe7"],["/static/js/fffbee97.js","54bbee7dc262898ca886a2b05d681957"],["/sw-register.js","72294d07de6765b2a7f64e229862fa19"],["/tags/index.html","433383a680f840d6bb17765203f3c1c4"],["/tags/search/index.html","433383a680f840d6bb17765203f3c1c4"]];
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
