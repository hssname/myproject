export const menuList = [
  {
    request: false,
    branch: true,
    open: true,
    name: '作者笔记',
    children: [
      {
        branch: true,
        open: false,
        name: '移动端适配',
        children: [
          { childName: 'rem计算js方式',id: 0 },
          { childName: 'rem计算css方式',id: 1 },
          { childName: '项目全局样式',id: 2 },
        ]
      },
      {
        branch: true,
        open: false,
        name: 'HTML笔记',
        children: [
          { childName: '设置视图缩放比例',id: 0  },
          { childName: '关闭邮箱地址识别址识别',id: 1 },
          { childName: '设置站点图标',id: 2 },
          ]
      },
      {
        branch: true,
        open: false,
        name: 'CSS笔记',
        children: [
          { childName: '启用硬件加速',id: 0 },
          { childName: '去掉超链接点击高亮',id: 1 },
          { childName: '禁止保存或拷贝图像',id: 2 },
          { childName: '禁止选中内容',id: 3 },
          { childName: '禁止 IE10下文本框删除按钮',id: 4 },
          { childName: '禁止元素获得焦点时轮廓',id: 5 },
          { childName: 'input元素placeholder属性颜色',id: 6 },
        ]
      },
      {
        branch: true,
        open: false,
        name: 'javascript笔记',
        children: [
          { childName: '判读当前对象是否存在该属性',id: 0 },
          { childName: '字符串与数组的相互转换',id: 1 },
          { childName: '字符串与JSON的相互转换',id: 2 },
          { childName: '阻止事件冒泡',id: 3 },
          { childName: '取消默认行为',id: 4 },
          { childName: '字符串与JSON的相互转换',id: 5 },
          { childName: 'Arrry数组常用操作函数',id: 6 },
          { childName: 'BOM window对象层级关系',id: 7 },
          { childName: '浮点型数据计算',id: 8 },
          { childName: '圆形定位',id: 9 },
          { childName: '角度计算',id: 9 },
        ]
      },
      {
        branch: true,
        open: false,
        name: '正则表达式笔记',
        children: [
          { childName: '基本方法',id: 0 },
          { childName: '修饰符',id: 1 },
          { childName: '范围',id: 2 },
          { childName: '元字符',id: 3 },
          { childName: '量词',id: 4 },
          { childName: '分组',id: 5 },
          { childName: '位置',id: 6 },
          { childName: '风格',id: 7 },
          { childName: '示例',id: 7 },
        ]
      },
    ],
  },
  {
    request: false,
    branch: true,
    open: true,
    name: '资源收藏',
    children: [
      {
        branch: true,
        open: false,
        name: 'CSS',
        children: [
          { childName: '布局',id: 0 },
          { childName: 'CSS3动画',id: 1 },
          { childName: 'CSS3效果',id: 2 },
          { childName: '常用设置',id: 3 },
          { childName: '伪类',id: 4 },
          { childName: '伪元素',id: 4 },
        ]
      },
      {
        branch: true,
        open: false,
        name: 'JS库',
        children: [
          { childName: 'Vue',id: 0 },
          { childName: 'jQuery插件',id: 1 },
          { childName: 'lodash',id: 1 },
          { childName: 'art-template',id: 2 },
          { childName: 'layer',id: 3 },
          { childName: 'Swiper',id: 4 },
          { childName: 'mobileSelect',id: 5 },
          { childName: 'QRCode',id: 6 },
          { childName: 'require',id: 7 },
          { childName: 'cropper',id: 8 },
          { childName: 'fastclick',id: 9 },
          { childName: 'Web Uploader',id: 9 },
        ]
      },
      {
        branch: true,
        open: false,
        name: '框架推荐',
        children: [
          { childName: 'APP框架',id: 0 },
          { childName: 'Layui',id: 1 },
          { childName: 'Bootstrap',id: 1 },
          { childName: 'Element',id: 2 },
          { childName: 'YDUI',id: 3 },
          { childName: 'ColorUI',id: 4 },
          { childName: 'Vant',id: 4 },
        ]
      },
      {
        branch: true,
        open: false,
        name: '实用工具',
        children: [
          { childName: 'Iconfont' ,id: 0},
          { childName: 'BootCDN',id: 1 },
          { childName: 'Font Awesome',id: 1 },
          { childName: 'CSS clip-path',id: 2 },
          { childName: 'RGB转16进制',id: 3 },
          { childName: '图片转base64',id: 4 },
          { childName: 'PNG图片压缩',id: 5 },
          { childName: 'Can I use',id: 6 },
          { childName: 'Autoprefixer',id: 7 },
        ]
      },
      {
        branch: true,
        open: false,
        name: '文档&教程&开发工具',
        children: [
          { childName: '文档查询',id: 0 },
          { childName: '优秀教程',id: 1 },
          { childName: '开发工具',id: 2 },
        ]
      },
    ],
  },
  {
    request: false,
    branch: true,
    open: true,
    name: '关于',
    children: [
      {
        branch: true,
        open: false,
        name: '作者',
        id: 0
      },
    ]
  }
]

export const contentList = [
  {
    name: '作者笔记',
    children: [
      {
        name: '移动端适配',
        children: [
          {
            name: 'rem计算JS方式',
            description: '',
            list: [
              {name:'计算尺寸参照的标准尺寸 750px', url: ''},
              {name:'换算比例为 100:1 （100px=1rem 50px=0.5rem 5px=0.05rem）', url: ''},
              {name:'下载 helang-flexible.js', url: ''}
            ],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: ''
          },
          {
            name: 'rem计算CSS方式',
            description: '给 &lt;html&gt; 添加样式 font-size:calc(100vw/7.5)，源码如下：',
            list: [],
            pre: '{ </br> font-size:calc(100vw/7.5) </br>}',
            code: 'html',
            remarks: '说明',
            remarksCon:'说明：同JS方式，但此方式兼容性稍低于JS方式，请谨慎选择',
            link: ''
          },
          {
            name: '项目全局样式表',
            description: '',
            list: [],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: '下载 helang-mobile.css'
          },
        ]
      },
      {
        name: 'HTML笔记',
        children: [
          {
            name: '设置视图缩放比例',
            description: '【移动端】设置视图缩放比例',
            list: [],
            pre: ' &lt;meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover"&gt;',
            code: '',
            remarks: '',
            remarksCon:'',
            link: ''
          },
          {
            name: '关闭邮箱地址识别址识别',
            description: '【移动端】邮箱关闭邮箱地址识别址识别（在 Android （iOS不会）上，浏览器会自动识别看起来像邮箱地址的字符串，不论有你没有加上邮箱链接）',
            list: [],
            pre: '&lt;meta name="format-detection" content="email=no" /&gt;',
            code: '',
            remarks: '',
            remarksCon:'',
            link: ''
          },
          {
            name: '设置站点图标',
            description: '',
            list: [],
            pre: ' &lt;link rel="shortcut icon" href="favicon.ico" /&gt;',
            code: '',
            remarks: '',
            remarksCon:'',
            link: ''
          },
        ]
      },
      {
        name: 'CSS笔记',
        children: [
          {
            name: '启用硬件加速',
            description: '【移动端】启用硬件加速，使IOS系统下元素滚动条滑动流畅。',
            list: [],
            pre: '-webkit-overflow-scrolling: touch;',
            code: '',
            remarks: '',
            remarksCon:'',
            link: '',
          },
          {
            name: '去掉超链接点击高亮',
            description: '【移动端】去掉超链接点击高亮（移动端超链接在点击时会有淡蓝色半透明状的点亮样式）',
            list: [],
            pre: '-webkit-tap-highlight-color:transparent;',
            code: '',
            remarks: '',
            remarksCon:'',
            link: '',
          },
          {
            name: '禁止保存或拷贝图像',
            description: '【移动端】禁止保存或拷贝图像（通常当你在手机或者pad上长按图像 img ，会弹出选项 存储图像 或者 拷贝图像）',
            list: [],
            pre: 'img {-webkit-touch-callout: none;}',
            code: '',
            remarks: '',
            remarksCon:'',
            link: '',
          },
          {
            name: '禁止选中内容',
            description: '禁止选中内容（移动端长按，PC端双击）',
            list: [],
            pre: 'user-select: none;',
            code: '',
            remarks: '',
            remarksCon:'',
            link: '',
          },
          {
            name: '禁止 IE10下文本框删除按钮',
            description: '',
            list: [],
            pre: 'input[type=text]::-ms-clear { display:none }',
            code: '',
            remarks: '',
            remarksCon:'',
            link: '',
          },
          {
            name: '禁止元素获得焦点时轮廓',
            description: '禁止元素获得焦点时轮廓（蓝色边框线）',
            list: [],
            pre: 'outline:none;',
            code: '',
            remarks: '',
            remarksCon:'',
            link: '',
          },
          {
            name: 'input元素placeholder属性颜色',
            description: '',
            list: [],
            pre: 'input::-webkit-input-placeholder{color:red;}',
            code: '',
            remarks: '',
            remarksCon:'',
            link: '',
          },
        ]
      },
      {
        name: 'javascript笔记',
        children: [
          {
            name: '判读当前对象是否存在该属性',
            description: '',
            list: [],
            pre: 'Object.hasOwnProperty("属性名");',
            code: '',
            remarks: '',
            remarksCon:'',
            link: '',
          },
          {
            name: '字符串与数组的相互转换',
            description: '【移动端】去掉超链接点击高亮（移动端超链接在点击时会有淡蓝色半透明状的点亮样式）',
            list: [],
            code: 'Arrry.join(","); // 数组转为字符串</br>',
            pre: 'String.split(","); // 字符串转为字符串',
            remarks: '',
            remarksCon:'',
            link: '',
          },
          {
            name: '字符串与JSON的相互转换',
            description: '',
            list: [],
            pre: 'JSON.stringify(json); // JSON转为字符串',
            code: 'JSON.parse(str); // 字符串转为JSON</br>',
            remarks: '',
            remarksCon:'',
            link: '',
          },
          {
            name: '阻止事件冒泡',
            description: '',
            list: [],
            pre: 'window.event.cancelBubble = true; // IE版',
            code: 'event.stopPropagation(); // W3C版</br>',
            remarks: '',
            remarksCon:'',
            link: '',
          },
          {
            name: '取消默认行为',
            description: '',
            list: [],
            pre: 'window.event.returnValue = false; // IE版',
            code: 'event.preventDefault(); // W3C版</br>',
            remarks: '',
            remarksCon:'',
            link: '',
          },
          {
            name: 'Arrry数组常用操作函数',
            description: '',
            list: [],
            pre: 'ArrObj1.concat(ArrObj2)\t\t' +
              '// 数组合并 </br>ArrayObject.pop()\t' +
              '// 删除并返回数组的最后一个元素\t</br>' +
              'ArrayObject.shift()\t\t' +
              '// 删除并返回数组的第一个元素\t</br>' +
              'ArrayObject.unshift(value)\t\t' +
              '// 向数组的开头添加一个或更多元素，并返回新的长度\t</br>' +
              'ArrayObject.splice(index,length,newItem)\t\t' +
              '// 从指定的位置开始删除，删除指定的长度，并插入新值，如果未有未值则只做删除操作，并返回被删除的项\t</br>' +
              'ArrayObject.reverse()\t\t//颠倒数组中元素的顺序',
            code: '',
            remarks: '',
            remarksCon:'',
            link: '',
          },
          {
            name: 'BOM window对象层级关系',
            description: '',
            list: [],
            pre: 'window.self\t// 是对当前窗口自身的引用。和( window，self )属性是等价的\t</br>' +
              'window.top\t// 返回顶层窗口，即浏览器窗口\t</br>' +
              'window.parent\t// 返回父窗口',
            code: '',
            remarks: '',
            remarksCon:'',
            link: '',
          },
          {
            name: '浮点型数据计算',
            description: '',
            list: [],
            pre: 'let digit = a.toString().length >= b.toString().length ? a.toString().length : b.toString().length </br>' +
              'let m = Math.pow(10, digit)</br>return Math.round((a + b) * m, 10) / m</br>}',
            code: 'floatingCalculate(a, b){</br>',
            remarks: '',
            remarksCon:'',
            link: '',
          },
          {
            name: '圆形定位',
            description: '圆形定位(根据三角形的正玄、余弦来得值)',
            list: [],
            pre: ' var hudu = (2*Math.PI / 360) * 6 * times;</br>' +
              'var X = a + Math.sin(hudu) * r;</br>' +
              'var Y = b - Math.cos(hudu) * r;' +
              '/* 注意此处是“-”号，因为我们要得到的Y是相对于（0,0）而言的。*/ </br>}',
            code: '/*</br>' +
              '假设一个圆的圆心坐标是(a,b)，半径为r，</br>' +
              '则圆上每个点的X坐标=a + Math.sin(2*Math.PI / 360) * r；</br>' +
              'Y坐标=b + Math.cos(2*Math.PI / 360) * r；</br>' +
              '</br>' +
              '假设秒针的初始值（起点）为12点钟方向，圆心的坐标为（a,b)。</br>' +
              '解决思路：一分钟为60秒，一个圆为360°，所以平均每秒的转动角度为 360°/60 = 6°；</br>' +
              '*/</br>for(var times=0; times<60; times++) {</br>',
            remarks: '',
            remarksCon:'',
            link: '',
          },
          {
            name: '角度计算',
            description: '角度计算(根据两点坐标计算)',
            list: [],
            pre: ' let diff_x = end.pageX - start.pageX;</br>' +
              'let diff_y = end.pageY - start.pageY;</br>' +
              'return 360 * Math.atan(diff_y / diff_x) / (2 * Math.PI); }',
            code: 'getAngle(end, start) {</br>',
            remarks: '',
            remarksCon:'',
            link: '',
          },
        ]
      },
      {
        name: '正则表达式笔记',
        children: [
          {
            name: '基本方法',
            description: '【移动端】启用硬件加速，使IOS系统下元素滚动条滑动流畅。',
            list: [
              {name: 'search() 用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串，并返回子串的起始位置', url:''},
              {name: 'match() 用于提取字符串中符合规则的字符串，并返回一个数组对象', url: ''},
              {name: 'replace() 用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串', url: ''},
              {name: 'test() 用于检测一个字符串是否匹配某个模式，如果字符串中含有匹配的文本，则返回 true，否则返回 false', url: ''},
              {name: 'split() 用于把一个字符串分割成字符串数组（接收字符串或者正则）修饰符', url: ''},
            ],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: '',
          },
          {
            name: '修饰符',
            description: '',
            list: [
              {name: 'i 执行对大小写不敏感的匹配', url:''},
              {name: 'g 执行全局匹配', url:''},
              {name: 'm 执行多行匹配', url:''},
            ],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: '',
          },
          {
            name: '范围',
            description: '',
            list: [
              {name: '[abc] 查找方括号之间的任何字符', url:''},
              {name: '[1-9] 查找任何从 1 至 9 的数字', url:''},
              {name: '[a|1] 查找a 或 1', url:''},
            ],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: '',
          },
          {
            name: '元字符',
            description: '',
            list: [
              {name: '\\d 数字字符，等价于 [0-9]', url:''},
              {name: '\\D 非数字字符，等价于 [^0-9]', url:''},
              {name: '\\s 空白字符（空格、制表符、换页符），等价于 [ \\f\</br>\\r\\t\\v]', url: ''},
              {name: '\\S 非空白字符，等价于 [^ \\f\</br>\\r\\t\\v]', url: ''},
              {name: '\\w 字母、数字、下划线，等价于 [A-Za-z0-9_]', url: ''},
              {name: '\\W 非字母、数字、下划线，等价于 [^A-Za-z0-9_]', url: ''},
              {name: '\\f 分页符', url: ''},
              {name: '\</br> 换行符', url: ''},
              {name: '\\r 回车符', url: ''},
              {name:'\\t 制表符',url: ''},
              {name: '\\ 转义符', url: ''},
              {name: '. 除换行符（\</br>、\\r）之外的任何单个字符。要匹配包括 \</br> 在内的任何字符，请使用 (.|\</br>) 的模式',url: ''}
            ],
            pre: '',
            code: '',
            remarks: '元字符表：http://www.runoob.com/regexp/regexp-metachar.html',
            remarksCon:'',
            link: '',
          },
          {
            name: '量词',
            description: '',
            list: [
              {name:'+ 匹配前面的子表达式一次或多次', url: ''},
              {name:'? 匹配前面的子表达式零次或一次',url: ''},
              {name: '* 配前面的子表达式零次或多次，等价于 {0,}', url: ''},
              {name: '{n} 匹配确定的 n 次', url: ''},
              {name: '{n,} 至少匹配 n 次', url: ''},
              {name: '{n,m} 最少匹配 n 次且最多匹配 m 次', url: ''}
            ],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: '',
          },
          {
            name: '分组',
            description: '',
            list: [{name: '() 圆括号包裹的规则为一组——通过$1..$n的方式获取，看示例',url: ''}],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: '',
          },
          {
            name: '位置',
            description: '',
            list: [{name: '^ 行首（字符串开头）', url: ''}, {name: '$ 行首（字符串结尾）', url: ''}],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: '',
          },
          {
            name: '风格',
            description: '',
            list: [{name:'javaScript风格——new RegExp(表达式,修饰符)',url: ''},{name: 'perl风格——/表达式/修饰符',url: ''}],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: '',
          },
        ]
      },
    ]
  },
  {
    name: '资源收藏',
    children: [
      {
        name: 'CSS',
        children: [
          {
            name: '布局',
            description: '',
            list: [
              {name: 'flex：弹性',url: 'http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html'},
              {name: 'float：浮动', url:'http://www.w3school.com.cn/cssref/pr_class_float.asp'},
              {name: 'clear：清除浮动', url:'http://www.w3school.com.cn/cssref/pr_class_clear.asp'},
              {name: '@media：媒体查询',url:'http://www.runoob.com/cssref/css3-pr-mediaquery.html'}
            ],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: ''
          },
          {
            name: ' CSS3动画',
            description: '',
            list: [
              {name:'transition：过渡动画', url: 'http://www.w3school.com.cn/cssref/pr_transition.asp'},
              {name:'transform：2D或3D转换', url: 'https://www.w3school.com.cn/cssref/pr_transform.asp',},
              {name:'animation：动画', url:'https://www.w3school.com.cn/cssref/pr_animation.asp',},
              {name:'@keyframes：动画规则', url: 'https://www.w3school.com.cn/cssref/pr_keyframes.asp'}
            ],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: ''
          },
          {
            name: 'CSS3效果',
            description: '',
            list: [
              {name: '(linear/radial)-gradient：渐变', url: 'http://www.runoob.com/css3/css3-gradients.html'},
              {name:'box-shadow：元素阴影',url: 'http://www.w3school.com.cn/cssref/pr_box-shadow.asp'},
              {name:'text-shadow：文字阴影',url: 'http://www.w3school.com.cn/cssref/pr_text-shadow.asp'},
              {name: 'text-stroke：文字描边',url: 'https://www.css88.com/book/css/properties/only-webkit/text-stroke.htm'},
              {name: 'opacity：透明度',url: 'http://www.w3school.com.cn/cssref/pr_opacity.asp'},
              {name: 'transparent：全透明 同等于 rgba(0,0,0,0)',url:'https://www.css88.com/book/css/values/color/transparent.htm'}
            ],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: ''
          },
          {
            name: '常用设置',
            description: '',
            list: [
              {name:'letter-spacing：字符间距',url:'http://www.w3school.com.cn/cssref/pr_text_letter-spacing.asp'},
              {name:'text-indent：首行缩进',url:'http://www.w3school.com.cn/cssref/pr_text_text-indent.asp'},
              {name:'word-wrap：强制换行',url:'http://www.w3school.com.cn/cssref/pr_word-wrap.asp'},
              {name:'cursor：光标的类型（形状） （手型：pointer）',url:'http://www.w3school.com.cn/cssref/pr_class_cursor.asp'},
              {name:'outline：轮廓属性 （表现为元素获得焦点后有轮毂线，设置node则取消）',url:'http://www.w3school.com.cn/cssref/pr_outline.asp'},
            ],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: ''
          },
          {
            name: '伪类',
            description: '',
            list: [{name:'伪类',url:'http://www.w3school.com.cn/css/css_pseudo_classes.asp'}],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: ''
          },
          {
            name: '伪元素',
            description: '',
            list: [{name:'伪元素',url:'http://www.w3school.com.cn/css/css_pseudo_elements.asp'}],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: ''
          },
        ]
      },
      {
        name: 'JS库',
        children: [
          {
            name: 'Vue',
            description: 'Vue.js（读音 /vjuː/, 类似于 view）是一个构建数据驱动的 web 界面的渐进式框架',
            list: [
              {name:'文档', url:'https://cn.vuejs.org/'},
              {name:'文件外链',url:'https://cn.vuejs.org/v2/guide/installation.html'}
            ],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: ''
          },
          {
            name: 'jQuery',
            description: 'jQuery是一个快速、简洁的JavaScript框架，是继Prototype之后又一个优秀的JavaScript代码库（或JavaScript框架）。jQuery设计的宗旨是“write Less，Do More”，即倡导写更少的代码，做更多的事情',
            list: [
              {name: '文档', url: 'https://www.w3school.com.cn/jquery/index.asp'},
              {name: '文件外链', url: 'https://www.bootcdn.cn/jquery/'}
            ],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: ''
          },
          {
            name: 'jQuery插件 --- jQuery Mobile',
            description: 'jQuery Mobile 是一种 web 框架，用于创建移动 web 应用程序。封装了滑动、触摸等事件',
            list: [
              {name:'文档', url:'https://www.w3school.com.cn/jquerymobile/index.asp'},
              {name: '文件外链',url:'https://www.bootcdn.cn/jquery-touch-events/'}
            ],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: ''
          },
          {
            name: 'jQuery插件 --- jquery.cookie',
            description: '一个轻量级的cookie 插件，可以读取、写入、删除 cookie',
            list: [{name:'文档', url: 'https://blog.csdn.net/csdnshenzhen/article/details/73046761'}],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: ''
          },
          {
            name: 'jQuery插件 --- jquery.lazyload',
            description: '图片延迟加载插件,使用延迟加载在可提高网页下载速度',
            list: [{name:'文档',url: 'http://www.jq22.com/jquery-info390'}],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: ''
          },
          {
            name: 'jQuery插件 --- jquery.freezeheader',
            description: '一个简单的jQuery固定表头表格插件',
            list: [{name:'文档', url:'http://www.jq22.com/jquery-info5769'}],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: ''
          },
          {
            name: 'jQuery插件 --- jquery.fullPage',
            description: '它能够很方便、很轻松的制作出全屏网站',
            list: [{name:'文档',url:'http://www.jq22.com/jquery-info1124'}],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: ''
          },
          {
            name: 'lodash',
            description: '一个一致性、模块化、高性能的 JavaScript 实用工具库。',
            list: [
              {name:'文档',url: 'https://www.lodashjs.com/'},
              {name:'文件外链', url: 'https://www.bootcdn.cn/lodash.js/'},
              {name:'4.x版本支持IE8+，3.x支持IE8'}
            ],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: ''
          },
          {
            name: 'art-template',
            description: '新一代 javascript 模板引擎，采用预编译方式让性能有了质的飞跃。',
            list: [
              {name:'文档', url: 'https://aui.github.io/art-template/zh-cn/'},
              {name: '1+版本支持IE8+，1.x支持IE8',url: ''}
            ],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: ''
          },
          {
            name: 'layer',
            description: '近年来备受青睐的WEB弹层组件。',
            list: [{name:'文档', url:'https://layer.layui.com/'}],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: ''
          },
          {
            name: 'Swiper',
            description: '纯javascript打造的滑动特效插件，面向手机、平板电脑等移动终端。',
            list: [{name:'文档', url:'https://www.swiper.com.cn/'}],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: ''
          },
          {
            name: 'mobileSelect',
            description: '一款多功能的移动端滚动选择器。',
            list: [{name:'文档',url:'https://github.com/onlyhom/mobileSelect.js'}],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: ''
          },
          {
            name: 'QRCode',
            description: '一个用于生成二维码图片的插件。',
            list: [{name:'文档', url: 'http://code.ciaoca.com/javascript/qrcode/'}],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: ''
          },
          {
            name: 'require',
            description: '一个JavaScript模块加载器。',
            list: [{name: '文档', url: 'http://www.ruanyifeng.com/blog/2012/11/require_js.html'}],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: ''
          },
          {
            name: 'cropper',
            description: '一个 jQuery 图片剪切插件。',
            list: [{name: '文档', url: 'https://fengyuanchen.github.io/cropper/'}],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: ''
          },
          {
            name: 'fastclick',
            description: '解决移动设备上的浏览器 click 事件 延迟300毫秒',
            list: [{name:'文档',url: 'https://github.com/ftlabs/fastclick'}],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: ''
          },
          {
            name: 'Web Uploader',
            description: 'Baidu WebFE(FEX)团队开发的一个简单的以HTML5为主，FLASH为辅的现代文件上传组件。',
            list: [{name: '文档',url:'http://fex.baidu.com/webuploader/'}],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: ''
          },
        ]
      },
      {
        name: '框架推荐',
        children: [
          {
            name: 'APP框架 --- uni-app',
            description: '一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、H5、以及各种小程序（微信/支付宝/百度/头条/QQ/钉钉）等多个平台',
            list: [{name:'文档', url:'https://uniapp.dcloud.io/'}],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: '',
          },
          {
            name: 'EEUI',
            description: '使用 Vue.js 跨平台开发高质量原生（Android/iOS）应用',
            list: [{name: '文档', url:'https://eeui.app/'}],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: '',
          },
          {
            name: 'APICloud',
            description: 'APICloud是国内低代码开发平台。',
            list: [{name: '文档', url:'https://www.apicloud.com/'}],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: '',
          },
          {
            name: 'Layui',
            description: '经典模块化前端框架。',
            list: [{name:'文档', url:'https://www.layui.com/'}],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: '',
          },
          {
            name: 'Bootstrap',
            description: '最受欢迎的 HTML、CSS 和 JS 框架，用于开发响应式布局、移动设备优先的 WEB 项目。',
            list: [{name:'文档', url:'https://v3.bootcss.com/'}],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: '',
          },
          {
            name: 'Element',
            description: '一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库',
            list: [{name: '文档', url: 'https://element.eleme.cn/'}],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: '',
          },
          {
            name: 'YDUI',
            description: '一只注重审美，且性能高效的移动端&微信UI。',
            list: [{name: '文档', url: 'http://www.ydui.org/'}],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: '',
          },
          {
            name: 'ColorUI',
            description: '高颜值小程序组件库',
            list: [{name:'文档',url:'https://www.color-ui.com/'}],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: '',
          },
          {
            name: 'Vant',
            description: '轻量、可靠的小程序 UI 组件库',
            list: [{name: '文档', url:'http://www.ydui.org/'}],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: '',
          },
        ]
      },
      {
        name: '实用工具',
        children: [
          {
            name: 'Iconfont',
            description: '阿里妈妈MUX倾力打造的矢量图标管理、交流平台。',
            list: [{name:'链接', url:'https://www.iconfont.cn/'}],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: '',
          },
          {
            name: 'BootCDN',
            description: '稳定、快速、免费的前端开源项目 CDN 加速服务',
            list: [{name:'链接', url:'https://www.bootcdn.cn/'}],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: '',
          },
          {
            name: 'Font Awesome',
            description: '一套绝佳的图标字体库和CSS框架',
            list: [{name: '链接', url:'https://fontawesome.dashgame.com/'}],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: '',
          },
          {
            name: 'CSS clip-path',
            description: 'CSS路径裁剪工具',
            list: [{name: '链接', url:'https://www.html.cn/tool/css-clip-path/'}],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: '',
          },
          {
            name: 'RGB转16进制',
            description: 'RGB转16进制工具具用于将RGB颜色值与十六进制字符串相互转换',
            list: [{name:'链接', url:'https://c.runoob.com/front-end/55'}],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: '',
          },
          {
            name: '图片转base64',
            description: 'base64图片在线转换工具',
            list: [{name: '链接', url:'http://tool.chinaz.com/tools/imgtobase'}],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: '',
          },
          {
            name: 'PNG图片压缩',
            description: 'PNG图片在线压缩工具',
            list: [{name: '链接',url:'https://tinypng.com/'}],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: '',
          },
          {
            name: 'Can I use',
            description: '一款前端兼容性自查工具',
            list: [{name:'链接',url: 'https://caniuse.com/'}],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: '',
          },
          {
            name: 'Autoprefixer',
            description: '一款能够在线补齐CSS3浏览器兼容性标签的网站',
            list: [{name:'链接',url:'http://autoprefixer.github.io/'}],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: '',
          },
        ]
      },
      {
        name: '文档&教程&开发工具',
        children: [
          {
            name: '文档查询 ---- MDN web docs ',
            description: '一个汇集众多Mozilla基金会产品和网络技术开发文档的免费网站。',
            list: [{name:'链接', url: 'https://developer.mozilla.org/zh-CN/'}],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: '',
          },
          {
            name: 'w3school',
            description: '是因特网上最大的 WEB 开发者资源，其中包括全面的教程、完善的参考手册以及庞大的代码库。',
            list: [{name: '链接', url: 'https://www.w3school.com.cn/'}],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: '',
          },
          {
            name: '菜鸟教程',
            description: '本站包括了HTML、CSS、Javascript、PHP、C、Python等各种基础编程教程。同时本站中也提供了大量的在线实例，通过实例，您可以更好地学习如何建站。',
            list: [{name:'链接', url: 'https://www.runoob.com/'}],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: '',
          },
          {
            name: 'HTML中文网',
            description: '作者觉得很赞的文档查询网站，拥有非常全面的文档资料。',
            list: [{name:'链接', url: 'https://www.html.cn/'}],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: '',
          },
          {
            name: 'ES6',
            description: '《ECMAScript 6 入门教程》是一本开源的 JavaScript 语言教程，全面介绍 ECMAScript 6 新引入的语法特性。',
            list: [{name:'链接',url:'https://es6.ruanyifeng.com/'}],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: '',
          },
          {
            name: 'Gulp',
            description: 'gulpjs是一个前端构建工具，API也非常简单，学习起来很容易。',
            list: [{name:'链接', url:'http://www.ybao.org/book/gulp/820.html'}],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: '',
          },
          {
            name: 'CSS变量',
            description: '',
            list: [{name:'链接', url: 'https://www.html.cn/'}],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: '',
          },
          {
            name: '常用Git命令',
            description: '',
            list: [{name:'链接', url: 'http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html'}],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: '',
          },
          {
            name: '中文字体网页开发指南',
            description: '字体的选择，是网页开发的关键因素之一。合适的字体，对网页的美观度（或可读性）有着举足轻重的影响。',
            list: [{name:'链接', url: 'http://www.ruanyifeng.com/blog/2014/07/chinese_fonts.html'}],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: '',
          },
          {
            name: '开发工具 --- WebStorm',
            description: '',
            list: [{name:'链接', url: 'https://www.jetbrains.com/webstorm/'}],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: '',
          },
          {
            name: '开发工具 --- HBuilderX',
            description: '',
            list: [{name:'链接', url:'https://www.dcloud.io/hbuilderx.html'}],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: '',
          },
          {
            name: '开发工具 --- Visual Studio Code',
            description: '',
            list: [{name:'链接', url:'https://code.visualstudio.com/'}],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: '',
          },
          {
            name: '开发工具 --- Notepad++',
            description: '',
            list: [{name:'链接',html:'http://www.mydown.com/soft/399/473303899.shtml'}],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: '',
          },
        ]
      },
    ]
  },
  {
    name: '关于',
    children: [
      {
        name: '作者',
        children: [
          {
            name: '基本信息',
            description: '',
            list: [
              {name: '昵称', url: ''},
              {name:'职业',url: ''},
              {name:'邮箱', url: ''},
              {name: '掌握技术：ES6、CSS3、Vue.js、jQuery、小程序、uni-app、APICloud、Node.js、sass、gulp', url: ''},
              {name: '掌握框架：bootstrap、layui、element UI、Vant、Color UI', url: ''}
            ],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: ''
          },
          {
            name: '个人主页',
            description: '',
            list: [
              {name: 'CSDN博客', url: ''},
              {name: 'gitee主页', url: ''}
            ],
            pre: '',
            code: '',
            remarks: '',
            remarksCon:'',
            link: ''
          },
        ]
      },
    ]
  }
]
