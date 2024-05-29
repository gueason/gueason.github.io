/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/index.html","40f291d0ec0e2b809bc4c9cedcbf3588"],["/icons/favicon-16x16.png","564bc8a425165ebe8f7f8608fa167dc8"],["/icons/favicon-32x32.png","c07d49aa6dfd7a03454645d856e1c7d1"],["/index.html","40f291d0ec0e2b809bc4c9cedcbf3588"],["/page/about/index.html","40f291d0ec0e2b809bc4c9cedcbf3588"],["/page/message-board/index.html","40f291d0ec0e2b809bc4c9cedcbf3588"],["/post/hello-world.html","40f291d0ec0e2b809bc4c9cedcbf3588"],["/post/pictures.html","40f291d0ec0e2b809bc4c9cedcbf3588"],["/post/pictures/1_1_计算机基本组成.png","9714118f3c9e17c3f0d4cf9965f71e5a"],["/post/pictures/1_2_三个级别的编程语言.png","59134e4bda1af9511eaa968f0e66c461"],["/post/pictures/1_3_典型的冯诺依曼计算机结构框图.png","aa64fe41ea492b4ebf2529ab8916a65f"],["/post/pictures/1_4_以存储器为中心的计算机结构框图.png","32e07aa8c4336eee8523d9bb98141030"],["/post/pictures/1_5_现代计算机的组成框图.png","198c00804ab53dac28186291bc5c0eb6"],["/post/pictures/1_6_计算机系统5级层次结构.png","2bb1a22e04021d387facfcb801747ecd"],["/post/pictures/1_7_源程序转换为可执行程序的过程.png","23e9f4671da36c080ce632bb91705845"],["/post/pictures/1_8_存储程序的基本思想.png","cc3e115258d7b116482bcd6f5d349c9f"],["/post/pictures/1_9_细化的计算机组成框图.png","2c3f5262b61910ab26fbe287a5562056"],["/post/pictures/2_10_逻辑门_与或非.png","8f9147d6c6f07a890ab73eaa80f8eeb9"],["/post/pictures/2_11_逻辑门_与非或非异或.png","8e0710d0ff875cb44fc67a9f72c20f54"],["/post/pictures/2_12_逻辑运算规则.png","080cae70b06b0829327f31f6403b56c3"],["/post/pictures/2_13_全加器真值表.png","5b9072fc7d7254b70f0548a61e3ec379"],["/post/pictures/2_14_全加器输出表达式.png","dd07ce59239147d4efeb3526ee655a07"],["/post/pictures/2_15_全加器的门电路实现.png","0a880fb1eb2e85ff5ed5449bb2e332d7"],["/post/pictures/2_16_可以级联的一位全加器.png","83f2cc49a2751ff69c550fa17d7027eb"],["/post/pictures/2_17_串联进位的并行加法器.png","3889b152eaea130926303d2dba870046"],["/post/pictures/2_18_可以级联的一位全加器表达式.png","ecccad2f34daed61c0ccd5ff33eda39a"],["/post/pictures/2_19_简写的全加器表达式.png","aeddfdf5e548e8517b9c90bfff63d892"],["/post/pictures/2_1_两种定点数的格式.png","a40ec88aab46314b35bb4f8256ed2319"],["/post/pictures/2_20_串行进位链全加器进位表达式.png","fb92c96914a8c5795f3cd1d6298dcc61"],["/post/pictures/2_21_并行进位链全加器进位表达式.png","7e1ea8ee1aa29ff716f496f57a351bea"],["/post/pictures/2_22_并行进位链全加器框图.png","348a8c000a2e035eabe2668f8bc154ab"],["/post/pictures/2_23_ALU基本结构图.png","01c2178587ea95180b3736c1a919d4bd"],["/post/pictures/2_24_带标志的加法器实现补码加减运算电路.png","304b5b0024b93f576c3a813675f089a5"],["/post/pictures/2_25_原码一位乘计算通式.png","d86bf62c390afd7d1bcaeaf1746467c6"],["/post/pictures/2_26_原码一位乘法示例.png","1a36b47664e7131bb3c1f7499d9a5103"],["/post/pictures/2_27_32位无符号数乘法运算的逻辑结构图.png","88da9206e88c57abde621d58d8640966"],["/post/pictures/2_28_定点小数的补码表示.png","bea3c9e5df5820e57293ab095bb8978a"],["/post/pictures/2_29_正数补码一位乘法通式.png","b1b2eb18287e586b4ed4ef6f56cdea03"],["/post/pictures/2_2_定点整数的表示.png","1e52949ffd356adbeb616b478edd118b"],["/post/pictures/2_30_乘数为负时的真值表达式.png","5aad343230aafd082b491d9558e80ef4"],["/post/pictures/2_31_乘数为负时的真值乘积表达式.png","22735c174c8d0032175855d358e6bce0"],["/post/pictures/2_32_乘数为负时的补码运算表达式.png","88e02e62ff4a02735ff0565274afabed"],["/post/pictures/2_33_乘数为正补码一位乘法.png","9d21bf69ed25bc01f36f882d2c80a96f"],["/post/pictures/2_34_乘数为正的补码一位乘法示例.png","5c10a3835d29dbe538167015958a0640"],["/post/pictures/2_35_Booth算法补码一位乘法通式.png","f149886a87595651dc8df3695c70fd5a"],["/post/pictures/2_36_Booth算法的迭代公式推导.png","c1369442d40c9d6dc515d59d756d0874"],["/post/pictures/2_37_Booth算法最终计算公式.png","0fe145bb9638e906d602d8144a11c5b4"],["/post/pictures/2_38_Booth算法的移位规则.png","3e4d379803b4e35c00bac6932d0db3a0"],["/post/pictures/2_39_补码一位乘法示例（Booth算法）.png","3d2f410b6fce5f155afad8e61215a22c"],["/post/pictures/2_3_定点小数的表示.png","a9651ead53e8741e61f01498118398f5"],["/post/pictures/2_40_32位补码乘法运算逻辑结构图.png","dfb69743fce88c125f2fc5589c34661b"],["/post/pictures/2_41_竖式除法示例.png","d5a1f795dcde71dd3fa506476d0d4f0d"],["/post/pictures/2_42_原码一位除基本公式.png","03770486fe6678c1957c74d7f80f2995"],["/post/pictures/2_43_原码一位除法示例_恢复余数法.png","555526f884ef01d1f8a0a323d0577357"],["/post/pictures/2_44_原码一位除法示例_加减交替法.png","b6e9cf4379f94fa2453241c4e11d0d9d"],["/post/pictures/2_45_补码除法的分情况比较算法表.png","3acd49c2c809f705d9fe390d8ff069bd"],["/post/pictures/2_46_补码除法商值的简化判断.png","2126d9e6072beeff1250910e945766da"],["/post/pictures/2_47_补码除法进一步化简.png","2e8a93c2bcad73dd67c2eb6c5512ba23"],["/post/pictures/2_48_补码一位除法示例.png","e7aee256219e92f37453bc8d5da0a8bf"],["/post/pictures/2_49_补码除法运算电路逻辑结构图.png","ea0f6237e34856f90ce073a7e0572405"],["/post/pictures/2_4_定点小数的原码表示.png","1478753f4373bbe13ddb2c0774b56195"],["/post/pictures/2_50_浮点数表示格式.png","7fa9eb442b81daabafaef57ae27d6dac"],["/post/pictures/2_51_采用原码表示的阶码尾数范围.png","821f64ab9fd4ef9f1cef6fcb48e6bae2"],["/post/pictures/2_52_采用原码表示的浮点数取值范围.png","e9d21378fdaefffe9c038c26e8639b19"],["/post/pictures/2_53_浮点数取值范围在数轴上的表示.png","6d450bfd8e51e213766e578974f2339c"],["/post/pictures/2_54_采用补码表示的阶码尾数范围.png","e166d4349cfa609af81bf785b0111d2d"],["/post/pictures/2_55_采用移码表示阶码的浮点数范围.png","2c24da0417348b3a6b0fe9c1589319ef"],["/post/pictures/2_56_规格化数的尾数范围.png","d2967aa8bbcb0dc75f3fcfe9166581e5"],["/post/pictures/2_57_规格化浮点数取值范围在数轴上的表示.png","d86a6f4f4ef1f75032c5bc2c5808ca90"],["/post/pictures/2_58_IEEE 浮点数形式.png","054a83e3c0734ebd675d135f20e1daf7"],["/post/pictures/2_59_IEEE 三种浮点数格式.png","8203ad2f40a6a4cc72df1f6245372c3c"],["/post/pictures/2_5_整数的原码表示.png","6a0524b73934d8468dec4f6aaeae0380"],["/post/pictures/2_60_IEEE 单精度32位浮点数表示范围.png","f43acd0726ef8ec8a53514256c0cbd69"],["/post/pictures/2_61_IEEE 浮点数示例（一）_数的二进制浮点表达.png","b16ca569cdc100212e919e03702d41e0"],["/post/pictures/2_62_IEEE 浮点数示例（二）_IEEE标准短浮点数.png","551895b98cbabf8e0686251022b8fcd9"],["/post/pictures/2_63_按边界对齐方式存储示例.png","d1c2df7928e0d96775bd19b7ee67549d"],["/post/pictures/2_64_不按边界对齐方式存储示例.png","e346831570815e70fd019e0513235f85"],["/post/pictures/2_65_结构体按边界对齐方式存储示例.png","1fb22fb60f2eaca43779001ac4692b3d"],["/post/pictures/2_66_大端和小端方式示例.png","a06440cde24a58f0cefedce3d88ff870"],["/post/pictures/2_67_真题2-2公式.png","95731e299fe676bc2ce61f8165bdf99f"],["/post/pictures/2_6_整数的补码表示.png","5558dfd22337397c8b67d34efe5b67f9"],["/post/pictures/2_7_变形补码.png","5ce3f9f51b17e47c6eee48829b2b87ed"],["/post/pictures/2_8_移码原理.png","5738d6a04feb38d07170ae3a7aaaab15"],["/post/pictures/2_9_整数的移码表示.png","fbb9c6f0616d94c2ced57f3b892bf173"],["/post/pictures/3_10_Intel2114矩阵存储结构.png","2e45a62821249724760344f31e1ee35c"],["/post/pictures/3_11_动态RAM的基本单元电路.png","fd8e5bacce8eb8bf00d4a96beba2debe"],["/post/pictures/3_12_Intel4116芯片基本结构.png","90c2dbd98efada5ab1f9f69e8ae5d6c0"],["/post/pictures/3_13_Intel4116矩阵存储结构.png","6f9c9d8759229b47937be65b4f4a7638"],["/post/pictures/3_14_DRAM 集中刷新时间分布.png","4970ca3303030acd0f35a27c7f7625d1"],["/post/pictures/3_15_DRAM 分散刷新时间分布.png","f2831ebe80b568d62c571dd19bf78d99"],["/post/pictures/3_16_DRAM 异步刷新时间分布.png","5a1874e0ce4d0969436fb4e65b19ae54"],["/post/pictures/3_17_DRAM vs SRAM.png","1c4171bb3d2d0a9a77f8a1e487385aee"],["/post/pictures/3_18_SRAM vs DRAM vs ROM.png","db32784d0c4af321493700934f29f3f2"],["/post/pictures/3_19_主存基本组成实际结构.png","11311784461c49438134cc5d744b9a0a"],["/post/pictures/3_1_存储器不同角度的分类.png","d415fcae7a7763e423109300c7f8a46c"],["/post/pictures/3_20_主存与CPU的联系.png","41c33fd3b96d7f3d62ca6c9fd1b10009"],["/post/pictures/3_21_译码器.png","48db3bd60351af27154fdd697bca9383"],["/post/pictures/3_22_字节寻址的主存地址分配.png","41ad62ff5cd41edcec7769db15688171"],["/post/pictures/3_23_内存条上的存储芯片.png","aa513e2d1bf5be147fe3fca37c494a47"],["/post/pictures/3_24_2114位扩展.png","94987b08f150745d703df7499779a71f"],["/post/pictures/3_25_2114字扩展.png","bf828b4861e795ad00af13dfec0e356e"],["/post/pictures/3_26_2114字位同时扩展.png","ac839e30ced39d554a627e2862d2e06f"],["/post/pictures/3_27_单体四字结构存储器.png","0798406d331bd9df60fe8d7fc1ec002d"],["/post/pictures/3_28_高位交叉编址多体存储器.png","c2a3c83c9fc0b7159dedb65d03f75157"],["/post/pictures/3_29_低位交叉多体存储器.png","e663d818ff88347ac16a10c0d5413be6"],["/post/pictures/3_2_存储器按照计算机中作用的分类.png","59f22027f5e97f65b2749325924893f3"],["/post/pictures/3_30_模4编址地址分布.png","03b9bd743b901e0c96e435deaf8bff21"],["/post/pictures/3_31_四字低位交叉编址流水线工作时间.png","1dbdb5fd5be11bcdebf005f7bdbaf61a"],["/post/pictures/3_32_磁盘和磁带的磁道.png","e3dcfd58d027b3b2de25ff691ea52d20"],["/post/pictures/3_33_磁表面存储器写入原理.png","76e3ff46e96ac37d680d5dc57e451006"],["/post/pictures/3_33_磁表面存储器读出原理.png","7e3ec4f669f0bddd95dbe199d5b8fb5c"],["/post/pictures/3_34_硬磁盘实物图.png","977dee90261c5a3335b2aa0cfabd4d16"],["/post/pictures/3_35_固定磁头和移动磁头硬磁盘结构示意图.png","e849de553d29a2f30a022d8164056d68"],["/post/pictures/3_36_磁盘存储器基本结构.png","4e28fc13af291210eec2770a99f5430d"],["/post/pictures/3_37_磁盘驱动器结构.png","eb8486c2375aec03d84830b157ed27c5"],["/post/pictures/3_38_磁道和扇区.png","ce66271dba51a297d44d9fe96ad99f0b"],["/post/pictures/3_39_柱面.png","0accae17cdb08ca7d0973581ea541d23"],["/post/pictures/3_3_存储器层级金字塔.png","ac29bd3345ef61ad327f6fa9605b10a9"],["/post/pictures/3_40_机械硬盘 vs SSD.png","32d3ac1e11129c7f577c462612276b6c"],["/post/pictures/3_41_SSD结构.png","90f552e47b4cf7073b625f301fc6143f"],["/post/pictures/3_42_块号和块内地址.png","3e39b2e8dc361f49e94853d69f4087bd"],["/post/pictures/3_43_块号和块内地址_加标记.png","7016355540a3a67851d9ce7d494073d7"],["/post/pictures/3_44_Cache基本结构原理图.png","a53a23da4c1f6cea8bfebe459519ac5c"],["/post/pictures/3_45_直接映射.png","16f1b12d3d9fc4a56d03cea1758b5a7c"],["/post/pictures/3_46_直接映射地址结构.png","4bc4e7bba1347a593eadc93eceb76d08"],["/post/pictures/3_47_访存过程.png","02e76a7db06d2b269ed002a026223062"],["/post/pictures/3_48_全相联映射.png","c621f1aada2516fe652eff905dc3e644"],["/post/pictures/3_49_全相联映射地址结构.png","780e84ff18a725cbaf4f13ec0b2e4a26"],["/post/pictures/3_4_存储器层次结构.png","a92c3b8bba60266cecbd881b08daa41f"],["/post/pictures/3_50_组相联映射.png","5a48c892617863a433faae0f23a712f4"],["/post/pictures/3_51_组相联映射地址结构.png","4dd431f6600162aee024a2a2deaf40ab"],["/post/pictures/3_52_三种映射方式对比.png","30402d32d18c63985ebe0ed57a58ffb9"],["/post/pictures/3_53_LRU替换策略示例.png","16b8fd01d4284e99a6e08f73422a6b2a"],["/post/pictures/3_54_有LRU位的Cache行.png","6729bc8415a7b4f858a54795d994d962"],["/post/pictures/3_55_多个程序对内存的争用.png","d825ccc1165a882bef040ac4da9146bb"],["/post/pictures/3_56_物理地址和虚拟地址的转换.png","8c7c896d4ea13d74ff59d92945686d3b"],["/post/pictures/3_57_虚拟存储器中多个程序对内存的共享.png","724e0ad88e5dfcb0c8e46ba1546bbf13"],["/post/pictures/3_58_逻辑地址结构.png","f8d4bf1146f618609f5c37e15066c742"],["/post/pictures/3_59_页表.png","e093d80a7d7c6237fb1b0c0b9b969052"],["/post/pictures/3_5_存储芯片Intel6264.png","90fa6cbe7e5685b84356a8266dd9a5b6"],["/post/pictures/3_5_存储芯片Intel6264引脚图.png","3e4ac837c8cf483ed3820b57c5400938"],["/post/pictures/3_60_多级缓存关系.png","8fec996af10340d9eb0162f942bc2f7c"],["/post/pictures/3_61_TLB项.png","7368d9c6591aa9e94f8e6a7626a7cc69"],["/post/pictures/3_62_有TLB和Cache的多级存储系统.png","4125ddcb5b48474e8595f4f091b5b3f2"],["/post/pictures/3_63_TLB、Page、Cache命中情况组合.png","e445adcd36b594eb34f0086ab4269bc7"],["/post/pictures/3_64_段式虚拟存储器.png","643b3e2d23fc411d7f23220f1ec993fd"],["/post/pictures/3_65_段页式逻辑地址结构.png","7057ffbc7f992d056ad5479b7626ad9c"],["/post/pictures/3_66_26题图.png","2226308ebb58668ab756865d48336a94"],["/post/pictures/3_67_27题图.png","e2db384ff2f4e707eaee3552c24839dc"],["/post/pictures/3_68_大题1题图.png","8250a94473f5d116235cc09e5a4519da"],["/post/pictures/3_69_大题2题图.png","1e00ae09aa0d5d86d8353c94801ef377"],["/post/pictures/3_6_存储芯片基本结构.png","58e3503a14b578ce5f1cebefbd101bc8"],["/post/pictures/3_7_线选法256×1B存储芯片结构示意图.png","ff35a6067e9af0b46e121373fd594480"],["/post/pictures/3_8_重合法16×16存储芯片结构示意图.png","dbd5bafccce0296b9cbaf79418abce37"],["/post/pictures/3_9_静态RAM的基本单元电路.png","b9a65ae4ce2ac3227dedcd99ae1744df"],["/post/pictures/4_10_扩展操作码示例.png","e9aa7dbd9a1d7783bc530d2ea69d12d5"],["/post/pictures/4_11_扩展操作码示例（二）.png","cbec395401c0bf5cdcbcbc7f937bed32"],["/post/pictures/4_12_调用和返回指令.png","db9b2e5753635e3f1a88024180b59f97"],["/post/pictures/4_13_指令寻址方式.png","4f1ded299b3ae12cf6bcc532c786de9b"],["/post/pictures/4_14_加寻址特征的一地址指令.png","3776a5e4560097ed352cc8f59e5a47ac"],["/post/pictures/4_15_加寻址特征的二地址指令.png","f95f38ae7a97aafd6cb64e83ade6396d"],["/post/pictures/4_16_立即寻址.png","e385d59cdb51fbdeb764110db50a78c6"],["/post/pictures/4_17_直接寻址.png","d8f0d1a2503c9fa449753b3a7aef2dbe"],["/post/pictures/4_18_间接寻址.png","f1223cf07d6663b0a07622f0c5f94027"],["/post/pictures/4_19_隐含寻址.png","c04f5fd049589fb8d7d62d81eba16156"],["/post/pictures/4_1_指令基本格式.png","0424e4c83e34e399d1f3645b537e7f28"],["/post/pictures/4_20_寄存器寻址.png","09b35dfc36f0bcaafd671f87da3c9b04"],["/post/pictures/4_21_寄存器间接寻址.png","4e7c8ee8c545134f0c1fc592a3c9efed"],["/post/pictures/4_22_基址寻址.png","ce984b3c66a5e69098b0876dd1a7113b"],["/post/pictures/4_23_变址寻址.png","78b6e65b4a5f8dba25032f87dc602229"],["/post/pictures/4_24_数组求和_直接寻址实现.png","43a5d31a93d4c07bba856c6af259fcb0"],["/post/pictures/4_25_数组求和_变址寻址实现.png","a3323f30d9be913d18d71174a45df332"],["/post/pictures/4_26_相对寻址.png","29e00d5c5e2153e5546b764719fa5157"],["/post/pictures/4_27_相对寻址案例.png","d9706ef33f175511055516fa82c586a4"],["/post/pictures/4_28_堆栈寻址PUSH.png","8b986942d206249ea10670e1071fdae7"],["/post/pictures/4_29_堆栈寻址POP.png","931ae2477c849134d21b46dd1088e41f"],["/post/pictures/4_2_定长指令字结构.png","6c9b7486510ed5bce13507ca9c2f5070"],["/post/pictures/4_30_MOS 6502.png","137b375958a0078735bac362d2d36b5c"],["/post/pictures/4_30_二八定律.png","c67e92d1f2e93079924d332b1665854e"],["/post/pictures/4_31_红白机.png","27261638afba095000ffd90a27fef6bc"],["/post/pictures/4_32_8051.png","f08ae49de018f81b3f251b96c3554430"],["/post/pictures/4_33_Intel 8080.png","66cb93957ab3225b476d73b5f3ff4a30"],["/post/pictures/4_34_51单片机.png","5ccd75089b66546fb3db0a0410272610"],["/post/pictures/4_35_奔腾4.png","e88a8bf029d1f906af4e45569b4f3caf"],["/post/pictures/4_36_酷睿.png","b68a69fd78e4bea688df4b666804509d"],["/post/pictures/4_37_苹果A17.png","d72816706db8674c2a33a50962f33008"],["/post/pictures/4_38_高通骁龙8gen1.png","f9698bb1b3f80c6d37673ef533674f01"],["/post/pictures/4_39_麒麟9000s.png","92ea47f72e80afeb9ff54e4b6b620f60"],["/post/pictures/4_3_变长指令字结构.png","492610f415124bdebcfdb649b4b0dd1d"],["/post/pictures/4_40_IA32寄存器.png","047ace1a5d8744e205f58f7415f5c63c"],["/post/pictures/4_41_x64寄存器-1.png","0dfaf267abc446925326f7e2ece95d54"],["/post/pictures/4_41_x64寄存器-2.png","39028f5c4e96a0d2760f0325c5528257"],["/post/pictures/4_42_ATT vs Intel格式.png","a6443cc624db58bd7b781ef575da1b30"],["/post/pictures/4_43_ATT vs Intel寻址方式.png","d29dd59c85b224a9a2ae2357d8708723"],["/post/pictures/4_45_ATT vs Intel mov 指令.png","f6be30fee180af5e5a4de12d2c5131b8"],["/post/pictures/4_46_算术和逻辑指令.png","842ea167e1cdc898d3b7dec711b72c79"],["/post/pictures/4_47_常用转移指令.png","2ecf990bf38172984d8f9de0a46c11ac"],["/post/pictures/4_48_比较和测试指令.png","baf6d9a4b2dc38bcd65d6c8f1c821985"],["/post/pictures/4_49_选择结构的汇编表示.png","fcdb627df1543756309ae668a03c2cef"],["/post/pictures/4_4_四地址指令.png","883e4073447e52ca24eb118978904f26"],["/post/pictures/4_50_do-while的汇编表示.png","c58dbb41bba8d72202df48e0c3b1d8fe"],["/post/pictures/4_51_while的汇编表示.png","912179cd4de6de3d68fdd5901d310e71"],["/post/pictures/4_52_for的汇编表示.png","1ed7529fdc28b1200b3b07f946d6ec54"],["/post/pictures/4_53_进程的内存映像.png","386a9e2d29c72d69ad0d3ebf7bf042ca"],["/post/pictures/4_54_栈帧.png","3e2b8da37d30a9068046f7b383663476"],["/post/pictures/4_55_参数构造.png","f6b3284ec21cae7566a84c01e2c75b34"],["/post/pictures/4_56_返回地址_1.png","8dc9288d2497ad4b1562895648058af7"],["/post/pictures/4_57_返回地址_2.png","4952cbc1fd02c1913843c2b5a7a6de9e"],["/post/pictures/4_58_保存上下文.png","2310ce87a439d68b75e4e755bbc52996"],["/post/pictures/4_59_栈帧结构.png","0cc6e3156d39223ba6ce7effbf719d2b"],["/post/pictures/4_5_四地址指令分析.png","b0a88e0991e09c9d960f95163ea4a043"],["/post/pictures/4_60_过程调用_主程序.png","72ea2a274eae0821fc38707c316665c5"],["/post/pictures/4_61_过程调用_子程序.png","a05e25ea54672e828225c1a204e5aba1"],["/post/pictures/4_62_小题题图.png","bc2df3e2b94f2b27ceec24d074def0bd"],["/post/pictures/4_63_大题题2图.png","e539122c1f5b498715aec42e2c251457"],["/post/pictures/4_64_大题题3图.png","d6fae017bcb65bb797da30e35c742c4e"],["/post/pictures/4_6_三地址指令.png","33e4a879cc9b56c813b2aeddfdb855b5"],["/post/pictures/4_7_二地址指令.png","c0d465867fa94ca82a8ea06c634e4fa4"],["/post/pictures/4_8_一地址指令.png","321f38ef57d7c0e11a94753e26b05769"],["/post/pictures/4_9_定长操作码指令.png","61d146ce1fef5464612200220729ff4a"],["/post/pictures/5_100_14年真题题图1.png","c4f721f345a79f7c13ce1d278fa22997"],["/post/pictures/5_101_14年真题题图2.png","c7042802cfcc560a70ce57df911a61ac"],["/post/pictures/5_102_14年真题题解.png","6e9183f821d2421efcc0e9369db32c2c"],["/post/pictures/5_103_22年真题题图1.png","de3cf484e5d178272b39586e9c021c61"],["/post/pictures/5_10_未采用流水线的指令执行过程.png","eb9a272e1fb38283c4ecd4849f049edc"],["/post/pictures/5_11_采用流水线的指令执行过程.png","1d3a97dca8a79a9eaf65c529912d1a5d"],["/post/pictures/5_12_指令的六级流水时序.png","14ba383f2cab3eaa66dba0b0018d66df"],["/post/pictures/5_13_不同类型指令在各流水段中的操作.png","c8439a1c79c7b83af77e12235837f207"],["/post/pictures/5_14_结构冒险.png","4f7d43ceb88baec99e2459d9ec8b9f70"],["/post/pictures/5_15_用暂停解决结构冒险.png","1035451239aa267f918ac57503631a2e"],["/post/pictures/5_16_数据冒险.png","e57617fc26cdbfecc6de5eb3a8bf6127"],["/post/pictures/5_17_数据冒险案例.png","b0f0ea68cd284098d9b02576da472624"],["/post/pictures/5_18_后推法解决数据冒险.png","d9aaa9a04ca188b7ce14ca9ba748dde6"],["/post/pictures/5_19_带有旁路技术的ALU.png","54ef1e2ef545dfc047bd6ad7826a4806"],["/post/pictures/5_1_指令执行过程.png","f10365ea9b5681bfd2ae722b5967bd6a"],["/post/pictures/5_20_控制冒险.png","ce37517bd3dd160134d4f1b5aa823868"],["/post/pictures/5_21_流水线的时空图.png","69b909ea6bdf161b94b6a3b5488a900d"],["/post/pictures/5_22_超标量流水线.png","2b1518ead1f3f8018e5e68e45bd8fc7b"],["/post/pictures/5_23_超流水线.png","4af5d87088c0b6c4153698282f1b8ac1"],["/post/pictures/5_24_超长指令字.png","5c17ac6f18bc4996afa53e27dd9b6b51"],["/post/pictures/5_25_取指周期数据流.png","983695802508df817c62a4871af0a6c8"],["/post/pictures/5_26_间址周期数据流.png","fdd73b4fbb09cc55b7fc8388d10768cd"],["/post/pictures/5_27_中断周期数据流.png","bd3b19b5670b0b4f4fbb4403b3836222"],["/post/pictures/5_28_三态门电路符号.png","8ed14d1fe9adabd1076106dd4b04554f"],["/post/pictures/5_29_三态门等效电路png.png","f285f299e7861f81971ee90fcaf7a1e8"],["/post/pictures/5_2_CPU的结构.png","0d0ae30c3fcb870954a574166a4e0180"],["/post/pictures/5_30_取指周期微操作.png","f2fe363ded5452c4498b5ad98cc34bf4"],["/post/pictures/5_31_间址周期微操作.png","f664df0556de1e20fee20af8895f3ba7"],["/post/pictures/5_32_执行周期微操作_非访存指令.png","83491efdcdd5926d78e855f8caf93d77"],["/post/pictures/5_33_执行周期微操作_访存指令.png","8df0539a00489557b185160bfe90e973"],["/post/pictures/5_34_执行周期微操作_转移指令.png","751e4426bcc97d4f9861671342d1baf2"],["/post/pictures/5_35_中断周期微操作.png","3a05c28a4380f551b12576404165fa65"],["/post/pictures/5_36_专用数据通路.png","feba08141324785c16cd86638d9d5055"],["/post/pictures/5_36x_专用数据通路（画图专用，无控制信号）.png","2af025aeb7515db0a90bb0d804f778d0"],["/post/pictures/5_37_专用数据通路_取指周期.png","9f54913d379a27391b61a45fba8de3cf"],["/post/pictures/5_38_专用数据通路_间址周期.png","71d48cc023a8d8784eeca74b20a84d93"],["/post/pictures/5_39_专用数据通路_执行周期.png","91b81a0a873118bdbe15de23ad84c416"],["/post/pictures/5_3_指令周期.png","35ae4e61e180620507ab32c79fbedddc"],["/post/pictures/5_40_采用CPU内部总线方式的数据通路.png","4aeb2143159b484bd9f2e4ad2e8e6f30"],["/post/pictures/5_40x_采用CPU内部总线方式的数据通路（画图专用）.png","e421abb49d8a45cc69cff8cbb971100f"],["/post/pictures/5_41_采用CPU内部总线方式的数据通路_取指周期.png","9f59779facb7589b8141c05e32628ccc"],["/post/pictures/5_42_采用CPU内部总线方式的数据通路_间址周期.png","eca47dbed29809fb3d31fa549c392837"],["/post/pictures/5_43_采用CPU内部总线方式的数据通路_执行周期.png","2811bfa7c32d81309bb8eb62654f87db"],["/post/pictures/5_44_中央控制和局部控制结合.png","e3faf80d4f87411d5990d56f8df372e3"],["/post/pictures/5_45_CU输入输出框图.png","d7facb015cb1c8c562e509b8f4742ad3"],["/post/pictures/5_46_取指周期节拍安排.png","0d0add9642fb871d6cfeb324621627e2"],["/post/pictures/5_47_间址周期节拍安排.png","0794669a609316184866300ece70d20d"],["/post/pictures/5_48_执行周期节拍安排_非访存.png","8e4f5484fb924e8eab917ca2db52527e"],["/post/pictures/5_49_执行周期节拍安排_访存.png","c3de7b66bc6cd664844f2d5a15febf19"],["/post/pictures/5_4_具有间址周期的指令周期.png","70fc8d422f453e87fd936c560560260b"],["/post/pictures/5_50_执行周期节拍安排_转移.png","8cd1ecb1c6e3ab2a93157dc1a26b86c0"],["/post/pictures/5_51_中断周期节拍安排.png","36e786e727db17c479fd993483da11d9"],["/post/pictures/5_52_操作时间表.png","35662c735e2a66bd2376da4859a70a83"],["/post/pictures/5_53_组合逻辑电路图.png","a4b4c620eb6e636cb50fa8df06ead04f"],["/post/pictures/5_54_机器指令对应的微程序.png","e1082899fe190e0573b7357dd27c4410"],["/post/pictures/5_55_微指令格式.png","9197eb4ec68d23ad094a55c2aad068db"],["/post/pictures/5_56_微程序控制单元结构框图.png","39e66db2bbe43f203de66dcbd50f818b"],["/post/pictures/5_57_微程序控制单元工作过程_取指阶段.png","a10d425b54bb7f83dceb8713a1f8f816"],["/post/pictures/5_58_微程序控制单元工作过程_执行阶段.png","ebba4292188abe735e7f89230e297e67"],["/post/pictures/5_59_微指令的编码方式_直接编码.png","0314bca0f495eceb7f4e0dd026e89191"],["/post/pictures/5_5_指令周期处理流程.png","1c9e09a29af93363f03c54280b098100"],["/post/pictures/5_60_微指令的编码方式_字段直接编码.png","779ddfa426c4c220d184c6cf519a9114"],["/post/pictures/5_61_微指令的编码方式_字段间接编码.png","4010c1b274b7e4b257f63c0297b2c0c3"],["/post/pictures/5_62_微指令格式.png","45d7e705f242275a314b5d76334e14d9"],["/post/pictures/5_63_微指令后续地址的形成.png","7850f6e29c88b88db503e172fc12909f"],["/post/pictures/5_64_微程序设计_取指阶段1.png","0a017db68be0ada402b32cc085c31719"],["/post/pictures/5_65_微程序设计_取指阶段2.png","289288f4e92677b4ef26070b20775023"],["/post/pictures/5_66_微程序设计_执行阶段1_非访存.png","32b671d78073ac4fcb70dca938c51cff"],["/post/pictures/5_67_微程序设计_执行阶段2_访存.png","01f040d09b30ccd12cedb58379bde1d7"],["/post/pictures/5_68_微程序设计_执行阶段3_转移.png","3396b0a71be7681b025b3c64855d2a14"],["/post/pictures/5_69_微程序设计_省去CMAR的控制单元.png","f6c042602ebec0f7ff43d9e14c36003a"],["/post/pictures/5_6_CPU工作周期的标志触发器.png","c86b0462eadef51f6b5879dae0d08d9e"],["/post/pictures/5_70_微程序设计_微指令格式.png","af597c0f1c33e7828aa93bd00473febe"],["/post/pictures/5_71_微程序设计_微指令控制字段对应的微操作.png","3e18f5537b0391aab670027a1eb19665"],["/post/pictures/5_72_微程序设计_微指令码点.png","8d840b30310680e5b30aa83944f40f26"],["/post/pictures/5_73_查询_刷手机.png","984863d044c5eb044720aa5beb428d6c"],["/post/pictures/5_74_中断_打电话.png","53a651c40f282af1df32818ca90781da"],["/post/pictures/5_75_中断和异常.png","10bf33904f176b2fa5e99d531d65e0c9"],["/post/pictures/5_76_中断和异常的分类.png","1fc2b2345806fc660e31e1da63201007"],["/post/pictures/5_77_中断请求标记寄存器.png","2b3aedea4eabafe0ab278a92dd77a78b"],["/post/pictures/5_78_集成在CPU中的排队器.png","ee57ac73507d2cfc32ab961df61c904a"],["/post/pictures/5_79_链式排队器.png","97c6062e640902d5a58ab512fe525ec8"],["/post/pictures/5_7_CPU时钟信号.png","3e99dfbdd7b0f8814abbbe487c29920f"],["/post/pictures/5_80_软件排队.png","301fdc276d0df6e451ca6624d9888c20"],["/post/pictures/5_81_x86架构标志寄存器efl.png","8be5d684b2e2c84e86e4bdfc5e6a387d"],["/post/pictures/5_82_CPU发出中断查询信号.png","082fb58cdae9dc37135e5862331dd828"],["/post/pictures/5_83_中断向量地址形成部件.png","a75e4fe464d0906219d578977774493b"],["/post/pictures/5_84_通过向量地址寻找入口地址.png","67b81319cebf3d47547bb1bd434349e1"],["/post/pictures/5_85_中断流程（单重多重中断）.png","eae8685d4fce45a65543252df9b7077d"],["/post/pictures/5_86_多重中断.png","2cdb2d93bcd9d8562c218412b9ffc7dd"],["/post/pictures/5_87_多重中断的响应顺序.png","d58d44fa0d89118cd6aa8f2fa0e668a1"],["/post/pictures/5_88_接口电路中的MASK和INTR.png","9f0d00a2795f0b244cf3046f8f32a50e"],["/post/pictures/5_89_有屏蔽功能的排队器.png","f7c6a344b8cdc76c7a71c99ceadf6adb"],["/post/pictures/5_8_定长的机器周期.png","ccce0f0065c3f9742cfbab7e5ed4f3d3"],["/post/pictures/5_90_屏蔽字示例.png","fccc470799c3b52348d989bd1a857f2d"],["/post/pictures/5_91_不采用屏蔽技术的中断处理顺序.png","fcef44a5167af294481c9e880eadfa3e"],["/post/pictures/5_92_更改中断源的屏蔽字.png","d362eb27d55a13d975c5770e594ff0e5"],["/post/pictures/5_93_采用屏蔽技术改变中断处理顺序.png","298dbcd198df2ebfd132bcfb64c94cdc"],["/post/pictures/5_94_中断服务程序流程.png","c1515b4d9c17e6a714c2c7509702b1e1"],["/post/pictures/5_95_费林分类法.png","54b3f910b1a83bcb1a3f70dc967d4651"],["/post/pictures/5_96_逻辑内核和物理内核.png","8a7dee4dfabdfa8d32d81099b1cb5e33"],["/post/pictures/5_97_多核处理器.png","f954ee1c271400fa491038e728d118c9"],["/post/pictures/5_98_SMP典型结构.png","b98f5d13d71917800c019c4de108db4c"],["/post/pictures/5_99_MPP典型结构.png","d38d6ff6ae67cf0efbafd12b21e48124"],["/post/pictures/5_9_不定长的机器周期.png","07a308d278791366350b2f34a8072e81"],["/post/pictures/5_x_数据通路示例09真题.png","80b2306f68aafc233713fbb8843d4e4c"],["/post/pictures/6_10_独立请求.png","96219d13bbfb26a23288af7a69b4903c"],["/post/pictures/6_11_异步通信.png","4ba8c39d6cef654938444e907e5613e3"],["/post/pictures/6_12_早期阶段的IO系统.png","ee2996ba9b9a6b4d7e87fc6889f05232"],["/post/pictures/6_13_接口模块阶段的IO系统.png","934147f52a22b676433210b0de6d273e"],["/post/pictures/6_14_IO指令格式.png","87ef90d8c3fa5fbd311b196403fcaaf6"],["/post/pictures/6_15_主机和外设.png","cc4bb2628a03a229da477793c03e8f5e"],["/post/pictures/6_16_IO设备组成.png","cbac5a6a1731e80afe942c215c2c47fe"],["/post/pictures/6_17_IO接口和总线连接数据通路.png","a675267fe111cd6e840f6e94a01b4983"],["/post/pictures/6_18_设备选择和命令译码.png","fb78a8c88a4384d722fe1670c2099235"],["/post/pictures/6_19_IO接口组成.png","442d291c2fff675de09e6f07de6249ff"],["/post/pictures/6_1_总线连接.png","5c51d3a3762c5f5a4cde296ed1939fce"],["/post/pictures/6_20_单个设备程序查询.png","4600b0fbd41088bc939f6e4e8967ddaf"],["/post/pictures/6_21_多个设备程序查询.png","1778ce70ba907874660e390c1f23837f"],["/post/pictures/6_22_程序查询方式具体流程.png","5c5106b98c4d767ade1578de149440d5"],["/post/pictures/6_23_程序查询方式接口电路.png","cf40e9db9593e060a88921e4cfa0af1b"],["/post/pictures/6_24_程序中断方式示意图.png","dc9d7b2e19cd1b62191539c5731ac679"],["/post/pictures/6_25_程序中断方式接口电路.png","465a5bfb7b0963b39b1031b27e5688ca"],["/post/pictures/6_26_DMA和程序中断方式数据通路.png","b84ea9d31b64bf987cbc8f8e1e5f33ca"],["/post/pictures/6_27_DMA访存冲突时间示意图_CPU停止.png","ba0340e3f948c61ed23f8ad91693fa71"],["/post/pictures/6_28_DMA访存冲突时间示意图_周期挪用.png","162b211ca4b6684fb07e0f49d2b9d460"],["/post/pictures/6_29_DMA访存冲突时间示意图_交替访问.png","e7f287cbff603b5da47dd5cac8aca9a7"],["/post/pictures/6_2_总线连接2.png","5a814a650e9ae3a6e7e0c7c487e9ff56"],["/post/pictures/6_30_DMA接口组成.png","cce2bd832266172dd5ff55fd7d227aeb"],["/post/pictures/6_31_DMA工作过程.png","68328fd63b2d9992323801014f358bec"],["/post/pictures/6_32_程序中断和DMA对比.png","8c2b6d5ba506af7d89a8223a8005ffa7"],["/post/pictures/6_3_系统总线.png","7aee2a7bcb9d8956b7cbed4a6068dc3d"],["/post/pictures/6_4_单总线结构.png","dd7e3094563fe48f1cf976ecd9b503a4"],["/post/pictures/6_5_双总线结构.png","09d8c576300075429d2116657e61d7f3"],["/post/pictures/6_6_三总线结构.png","08e405e59a8b6d2f4bd29dbc6971f80a"],["/post/pictures/6_7_USB.png","381e558d8df9fdb2c64a0e5c105e3b83"],["/post/pictures/6_8_链式查询.png","60598893e5a3021ca45a897e7f3ae7b7"],["/post/pictures/6_9_计数器定时查询.png","b6b9a641eb426288d91648094754c2fc"],["/post/test.html","40f291d0ec0e2b809bc4c9cedcbf3588"],["/post/test/屏幕截图 2024-05-22 232141-17169444824351.png","3425acd6c77577ad3d7aad617bf65a87"],["/post/test/屏幕截图 2024-05-22 232141.png","3425acd6c77577ad3d7aad617bf65a87"],["/static/886a749e.css","3638ea8e20fee2ad15debc3ad07f3020"],["/static/css/3e25f349.css","196bfab004e6ab7e58144cd81989d749"],["/static/css/6b275704.css","a8593cd7c691c8acada389bb398a4649"],["/static/css/882f9706.css","5ab3d62ccb7f03dfea708386c39769b9"],["/static/css/8e0e69c4.css","93c831a6abfee7ad2c8310a8a77c4586"],["/static/css/9a0271b0.css","513473f526a5ba6e4c4c6223c10921f2"],["/static/css/a14e1a22.css","599b7ef5cab13e2a965cd04042e2bd4f"],["/static/img/dccf965f.jpg","df7c128cc07926a8db429348ffc7e4b3"],["/static/js/120aa8f8.js","dc0bfb52a8800189a573da70d1472d26"],["/static/js/22ac7e7f.js","e771ec8ed1f0dd1b114a875b90df86ba"],["/static/js/36429e9b.js","5b144e4cb76a628d9b86f0ced66c8eab"],["/static/js/415fa29b.js","8512ed100ce36361d7a4123fbd5ff547"],["/static/js/53ed1a6f.js","74084e3d6e397f62db1f1f327a5755fe"],["/static/js/7d897144.js","56d96fb52ef962698b3f5a2ea623d87b"],["/static/js/7e80f274.js","a8ea2f3b909c3a497c88aa52b6b19489"],["/static/js/8da07a12.js","bb7bc312dc748deabfa6d06a0acefb90"],["/static/js/9aa0d897.js","55185e8f2bf9f008fc79d4ad44d6f35a"],["/static/js/9cb479b5.js","857e2c1d2e29c17d3182b063753ea6e1"],["/static/js/a92e6a1c.js","0103e69000a369ac762374193e86b78d"],["/static/js/c562793b.js","965271df22b6be5a6960b7b77ce28bac"],["/static/js/d57a5994.js","9f8c1c45921e3e643d1e9d47320e92aa"],["/static/js/ff251d5d.js","f204cb7ad341030deaf0f98312bebbe7"],["/static/js/fffbee97.js","54bbee7dc262898ca886a2b05d681957"],["/sw-register.js","d6910407f6fd6b31513fdceb1b234c4a"],["/tags/index.html","40f291d0ec0e2b809bc4c9cedcbf3588"],["/tags/search/index.html","40f291d0ec0e2b809bc4c9cedcbf3588"]];
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
