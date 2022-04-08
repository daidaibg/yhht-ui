/*
 * @Author: daidai
 * @Date: 2022-02-21 09:05:09
 * @LastEditors: daidai
 * @LastEditTime: 2022-02-21 11:42:17
 * @FilePath: \yhht-ui\src\views\com-js\Any-rule.js
 */
export const ruleList = [{
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "手机号(mobile phone)中国(严谨), 根据工信部2019年最新公布的手机号段",
        "rule": /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/,
        "demo": "例如: 008618311006933, +8617888829981, 19119255642"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "手机号(mobile phone)中国(宽松), 只要是13,14,15,16,17,18,19开头即可",
        "rule": /^(?:(?:\+|00)86)?1[3-9]\d{9}$/,
        "demo": "例如: 008618311006933, +8617888829981, 19119255642"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "手机号(mobile phone)中国(最宽松), 只要是1开头即可, 如果你的手机号是用来接收短信, 优先建议选择这一条",
        "rule": /^(?:(?:\+|00)86)?1\d{10}$/,
        "demo": "例如: 008618311006933, +8617888829981, 19119255642"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "date(日期)",
        "rule": /^\d{1,4}(-)(1[0-2]|0?[1-9])\1(0?[1-9]|[1-2]\d|30|31)$/,
        "demo": "例如: 1990-12-12, 1-1-1, 0000-1-1 , 反例: 2020-00-01"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "可以被moment转化成功的时间 YYYYMMDD HH:mm:ss",
        "rule": /^\d{4}([/:-\S])(1[0-2]|0?[1-9])\1(0?[1-9]|[1-2]\d|30|31) (?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/,
        "demo": "例如: 2020/01/01 23:59:59, 2020-01-01 00:00:00, 20200101 11:11:11 , 反例: 2020/00/01 23:59:59, 2020-01/01 23:59:59, 2020-01-01 23:59:61, 2020-01-0100:00:00"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "email(邮箱)",
        "rule": /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "demo": "例如: 90203918@qq.com, nbilly@126.com, 汉字@qq.com"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "大写字母，小写字母，数字，特殊符号 `@#$%^&*`~()-+=` 中任意3项密码",
        "rule": /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_!@#$%^&*`~()-+=]+$)(?![a-z0-9]+$)(?![a-z\W_!@#$%^&*`~()-+=]+$)(?![0-9\W_!@#$%^&*`~()-+=]+$)[a-zA-Z0-9\W_!@#$%^&*`~()-+=]/,
        "demo": "例如: a1@, A1@, Aa@"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "正整数，不包含0",
        "rule": /^\+?[1-9]\d*$/,
        "demo": "例如: 1231"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "负整数，不包含0",
        "rule": /^-[1-9]\d*$/,
        "demo": "例如: -1231"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "整数",
        "rule": /^\+?[1-9]\d*$/,
        "demo": "例如: -1231, 123"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "浮点数",
        "rule": /^(-?\d+)(\.\d+)?$/,
        "demo": "例如: 1.5"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "email(支持中文邮箱)",
        "rule": /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
        "demo": "例如: 90203918@qq.com, nbilly@126.com, 啦啦啦@126.com"
    },
    {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "数字/货币金额（支持负数、千分位分隔符）",
        "rule": /^-?\d+(,\d{3})*(\.\d{1,2})?$/,
        "demo": "例如: 100, -0.99, 3, 234.32, -1, 900, 235.09, 12,345,678.90"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "数字/货币金额 (只支持正数、不支持校验千分位分隔符)",
        "rule": /(?:^[1-9]([0-9]+)?(?:\.[0-9]{1,2})?$)|(?:^(?:0)$)|(?:^[0-9]\.[0-9](?:[0-9])?$)/,
        "demo": "例如: 0.99, 8.99, 666"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "火车车次",
        "rule": /^[GCDZTSPKXLY1-9]\d{1,4}$/,
        "demo": "例如: G1868, D102, D9, Z5, Z24, Z17"
    },
    {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "手机机身码(IMEI)",
        "rule": /^\d{15,17}$/,
        "demo": "例如: 123456789012345, 1234567890123456, 12345678901234567"
    },
    {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "必须带端口号的网址(或ip)",
        "rule": /^((ht|f)tps?:\/\/)?[\w-]+(\.[\w-]+)+:\d{1,5}\/?$/,
        "demo": "例如: https://www.qq.com:8080, 127.0.0.1:5050, baidu.com:8001, http://192.168.1.1:9090 , 反例: 192.168.1.1, https://www.jd.com"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "网址(URL)",
        "rule": /^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/,
        "demo": "例如: www.qq.com, https://vuejs.org/v2/api/#v-model, www.qq.99, //www.qq.com, www.腾讯.cs, ftp://baidu.qq, http://baidu.com, https://www.amap.com/search?id=BV10060895&city=420111&geoobj=113.207951%7C29.992557%7C115.785782%7C31.204369&query_type=IDQ&query=%E5%85%89%E8%B0%B7%E5%B9%BF%E5%9C%BA(%E5%9C%B0%E9%93%81%E7%AB%99)&zoom=10.15, 360.com:8080/vue/#/a=1&b=2 , 反例: ...."
    },
    {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "统一社会信用代码",
        "rule": /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/,
        "demo": "例如: 91230184MA1BUFLT44, 92371000MA3MXH0E3W"
    },
    {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "统一社会信用代码(宽松匹配)(15位/18位/20位数字/字母)",
        "rule": /^(([0-9A-Za-z]{15})|([0-9A-Za-z]{18})|([0-9A-Za-z]{20}))$/,
        "demo": "例如: 91110108772551611J, 911101085923662400"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "迅雷链接",
        "rule": /^thunderx?:\/\/[a-zA-Z\d]+=$/,
        "demo": "例如: thunder://QUEsICdtYWduZXQ6P3h0PXVybjpidGloOjBCQTE0RTUxRkUwNjU1RjE0Qzc4NjE4RjY4NDY0QjZFNTEyNjcyOUMnWlo="
    },
    {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "ed2k链接(宽松匹配)",
        "rule": /^ed2k:\/\/\|file\|.+\|\/$/,
        "demo": "例如: ed2k://|file|%E5%AF%84%E7%94%9F%E8%99%AB.PARASITE.2019.HD-1080p.X264.AAC-UUMp4(ED2000.COM).mp4|2501554832|C0B93E0879C6071CBED732C20CE577A3|h=5HTKZPQFYRKORN52I3M7GQ4QQCIHFIBV|/"
    },
    {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "磁力链接(宽松匹配)",
        "rule": /^magnet:\?xt=urn:btih:[0-9a-fA-F]{40,}.*$/,
        "demo": "例如: magnet:?xt=urn:btih:40A89A6F4FB1498A98087109D012A9A851FBE0FC"
    },
    {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "子网掩码(不包含 0.0.0.0)",
        "rule": /^(254|252|248|240|224|192|128)\.0\.0\.0|255\.(254|252|248|240|224|192|128|0)\.0\.0|255\.255\.(254|252|248|240|224|192|128|0)\.0|255\.255\.255\.(255|254|252|248|240|224|192|128|0)$/,
        "demo": "例如: 255.255.255.0, 255.255.255.255, 255.240.0.0"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "linux\"隐藏文件\"路径",
        "rule": /^\/(?:[^/]+\/)*\.[^/]*/,
        "demo": "例如: /usr/ad/.dd, /root/.gitignore, /.gitignore"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "linux文件夹路径",
        "rule": /^\/(?:[^/]+\/)*$/,
        "demo": "例如: /usr/ad/dd/, /, /root/, / a a / a / a a /"
    },
    {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "linux文件路径",
        "rule": /^\/(?:[^/]+\/)*[^/]+$/,
        "demo": "例如: /root/b.ts, /root/abc"
    },
    {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "window\"文件夹\"路径",
        "rule": /^[a-zA-Z]:\\(?:\w+\\?)*$/,
        "demo": "例如: C:\\Users\\Administrator\\Desktop, e:\\m\\"
    },
    {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "window下\"文件\"路径",
        "rule": /^[a-zA-Z]:\\(?:\w+\\)*\w+\.\w+$/,
        "demo": "例如: C:\\Users\\Administrator\\Desktop\\qq.link, e:\\m\\vscode.exe"
    },
    {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "股票代码(A股)",
        "rule": /^(s[hz]|S[HZ])(000[\d]{3}|002[\d]{3}|300[\d]{3}|600[\d]{3}|60[\d]{4})$/,
        "demo": "例如: sz000858, SZ002136, sz300675, SH600600, sh601155"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "大于等于0, 小于等于150, 支持小数位出现5, 如145.5, 用于判断考卷分数",
        "rule": /^150$|^(?:\d|[1-9]\d|1[0-4]\d)(?:\.5)?$/,
        "demo": "例如: 150, 100.5"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "html注释",
        "rule": /<!--[\s\S]*?-->/g,
        "demo": "例如: <!--<div class=\"_bubble\"></div>--><div>chenguzhen87</div><div class=\"_bubble\"></div>-->"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "md5格式(32位)",
        "rule": /^([a-f\d]{32}|[A-F\d]{32})$/,
        "demo": "例如: 21fe181c5bfc16306a6828c1f7b762e8"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "GUID/UUID",
        "rule": /^[a-f\d]{4}(?:[a-f\d]{4}-){4}[a-f\d]{12}$/i,
        "demo": "例如: e155518c-ca1b-443c-9be9-fe90fdab7345, 41E3DAF5-6E37-4BCC-9F8E-0D9521E2AA8D, 00000000-0000-0000-0000-000000000000"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "版本号(version)格式必须为X.Y.Z",
        "rule": /^\d+(?:\.\d+){2}$/,
        "demo": "例如: 16.3.10"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "视频(video)链接地址（视频格式可按需增删）",
        "rule": /^https?:\/\/(.+\/)+.+(\.(swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4))$/i,
        "demo": "例如: http://www.abc.com/video/wc.avi"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "图片(image)链接地址（图片格式可按需增删）",
        "rule": /^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i,
        "demo": "例如: https://www.abc.com/logo.png, http://www.abc.com/logo.png"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "24小时制时间（HH:mm:ss）",
        "rule": /^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/,
        "demo": "例如: 23:34:55"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "12小时制时间（hh:mm:ss）",
        "rule": /^(?:1[0-2]|0?[1-9]):[0-5]\d:[0-5]\d$/,
        "demo": "例如: 11:34:55 , 反例: 23:34:55"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "base64格式",
        "rule": /^\s*data:(?:[a-z]+\/[a-z0-9-+.]+(?:;[a-z-]+=[a-z0-9-]+)?)?(?:;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*?)\s*$/i,
        "demo": "例如: data:image/gif;base64,xxxx=="
    },
    {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "银行卡号（10到30位, 覆盖对公/私账户, 参考[微信支付](https://pay.weixin.qq.com/wiki/doc/api/xiaowei.php?chapter=22_1)）",
        "rule": /^[1-9]\d{9,29}$/,
        "demo": "例如: 6234567890, 6222026006705354000"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "中文姓名",
        "rule": /^(?:[\u4e00-\u9fa5·]{2,16})$/,
        "demo": "例如: 葛二蛋, 凯文·杜兰特, 德克·维尔纳·诺维茨基"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "英文姓名",
        "rule": /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/,
        "demo": "例如: James, Kevin Wayne Durant, Dirk Nowitzki"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "车牌号(新能源)",
        "rule": /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z](?:((\d{5}[A-HJK])|([A-HJK][A-HJ-NP-Z0-9][0-9]{4}))|[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳])$/,
        "demo": "例如: 京AD92035, 甘G23459F, 京AA92035"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "车牌号(非新能源)",
        "rule": /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]$/,
        "demo": "例如: 京A00599, 黑D23908"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "车牌号(新能源+非新能源)",
        "rule": /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4,5}[A-HJ-NP-Z0-9挂学警港澳]$/,
        "demo": "例如: 京A12345D, 京A00599, 京AD92035, 甘G23459F, 京AA92035 , 反例: 宁AD1234555555, 浙苏H6F681"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "座机(tel phone)电话(国内),如: 0341-86091234",
        "rule": /^(?:(?:\d{3}-)?\d{8}|^(?:\d{4}-)?\d{7,8})(?:-\d+)?$/,
        "demo": "例如: 0936-4211235, 89076543, 010-12345678-1234"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "身份证号(1代,15位数字)",
        "rule": /^[1-9]\d{7}(?:0\d|10|11|12)(?:0[1-9]|[1-2][\d]|30|31)\d{3}$/,
        "demo": "例如: 123456991010193"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "身份证号(2代,18位数字),最后一位是校验位,可能为数字或字符X",
        "rule": /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/,
        "demo": "例如: 12345619991205131x"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "身份证号, 支持1/2代(15位/18位数字)",
        "rule": /^\d{6}((((((19|20)\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(((19|20)\d{2})(0[13578]|1[02])31)|((19|20)\d{2})02(0[1-9]|1\d|2[0-8])|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))0229))\d{3})|((((\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|((\d{2})(0[13578]|1[02])31)|((\d{2})02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[048])0229))\d{2}))(\d|X|x)$/,
        "demo": "例如: 622223199912051311, 12345619991205131x, 123456991010193"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "护照（包含香港、澳门）",
        "rule": /(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/,
        "demo": "例如: s28233515, 141234567, 159203084, MA1234567, K25345719"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线组合",
        "rule": /^[a-zA-Z]\w{4,15}$/,
        "demo": "例如: justin, justin1989, justin_666"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "中文/汉字",
        "rule": /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/,
        "demo": "例如: 正则, 前端"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "小数",
        "rule": /^\d+\.\d+$/,
        "demo": "例如: 0.0, 0.09"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "数字",
        "rule": /^\d{1,}$/,
        "demo": "例如: 12345678"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "html标签(宽松匹配)",
        "rule": /<(\w+)[^>]*>(.*?<\/\1>)?/,
        "demo": "例如: <div id=\"app\"> 2333 </div>, <input type=\"text\">, <br>"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "qq号格式正确",
        "rule": /^[1-9][0-9]{4,10}$/,
        "demo": "例如: 903013545, 9020304"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "数字和字母组成",
        "rule": /^[A-Za-z0-9]+$/,
        "demo": "例如: james666, haha233hi"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "英文字母",
        "rule": /^[a-zA-Z]+$/,
        "demo": "例如: Russel"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "小写英文字母组成",
        "rule": /^[a-z]+$/,
        "demo": "例如: russel"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "大写英文字母",
        "rule": /^[A-Z]+$/,
        "demo": "例如: ABC, KD"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "密码强度校验，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符",
        "rule": /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/,
        "demo": "例如: Kd@curry666"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "用户名校验，4到16位（字母，数字，下划线，减号）",
        "rule": /^[a-zA-Z0-9_-]{4,16}$/,
        "demo": "例如: xiaohua_qq"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",

        "name": "ip-v4[:端口]",
        "rule": /^((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])(?::(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))?$/,
        "demo": "例如: 172.16.0.0, 172.16.0.0:8080, 127.0.0.0, 127.0.0.0:998"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "ip-v6[:端口]",
        "rule": /(^(?:(?:(?:[0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$)|(^\[(?:(?:(?:[0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))\](?::(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))?$)/i,
        "demo": "例如: 2031:0000:130f:0000:0000:09c0:876a:130b, [2031:0000:130f:0000:0000:09c0:876a:130b]:8080"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "16进制颜色",
        "rule": /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
        "demo": "例如: #f00, #F90, #000, #fe9de8"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "微信号(wx)，6至20位，以字母开头，字母，数字，减号，下划线",
        "rule": /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/,
        "demo": "例如: github666, kd_-666"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "邮政编码(中国)",
        "rule": /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/,
        "demo": "例如: 734500, 100101"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "中文和数字",
        "rule": /^((?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])|(\d))+$/,
        "demo": "例如: 哈哈哈, 你好6啊"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "不能包含字母",
        "rule": /^[^A-Za-z]*$/,
        "demo": "例如: 你好6啊, @¥()！"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "java包名",
        "rule": /^([a-zA-Z_]\w*)+([.][a-zA-Z_]\w*)+$/,
        "demo": "例如: com.bbb.name"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "mac地址",
        "rule": /^((([a-f0-9]{2}:){5})|(([a-f0-9]{2}-){5}))[a-f0-9]{2}$/i,
        "demo": "例如: 38:f9:d3:4b:f5:51, 00-0C-29-CA-E4-66"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "匹配连续重复的字符",
        "rule": /(.)\1+/,
        "demo": "例如: 我我我, 112233, 11234"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "数字和英文字母组成，并且同时含有数字和英文字母",
        "rule": /^(?=.*[a-zA-Z])(?=.*\d).+$/,
        "demo": "例如: 我a我1我, a对1"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "香港身份证",
        "rule": /^[a-zA-Z]\d{6}\([\dA]\)$/,
        "demo": "例如: K034169(1)"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "澳门身份证",
        "rule": /^[1|5|7]\d{6}\(\d\)$/,
        "demo": "例如: 5686611(1)"
    }, {
        blur: true,
        keyup: true,
        msg: "",
        value: "",
        "name": "台湾身份证",
        "rule": /^[a-zA-Z][0-9]{9}$/,
        "demo": "例如: U193683453"
    },
]