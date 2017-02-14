## 你好

谢谢您查看我的简历,上面代码是inchm.com的源码.

*注: 上传代码之前,我将所有注释都删除了.这样的话,面试时能让贵公司了解我更多*

## 目录

+ src(项目开发文件夹)
 - components(组件文件夹)
 - data(数据文件夹)
 - iconfont(字体图标文件夹)
 - images(图片文件夹)
 - js(项目入口文件及)
 - services(数据请求文件夹)
 - index.html(开发环境html)
 - template.html(出版html)
 
+ .babelrc (babel配置文件)

+ .editorconfig (代码格式化约束)

+ .eslintrc.js (代码约束)

+ .gitignore (git推送忽略文件)

+ package.json (开发依赖)

+ webpack.develop.config.js (webpack开发环境配置项)

+ webpack.publish.config.js (webpack出版配置项)


## src(项目开发文件夹)

#### components(组件文件夹)

&#160; &#160; &#160; &#160;components文件夹中,包含了AppContainer组件、HomeContainer组件、InforMationContainer组件、DetailsContainer组件。

        AppContainer: 应用整体架构及布局;
        HomeContainer: 首页组件;
        InforMationContainer: 个人信息页面及其组件;
        DetailsContainer: 个人评价页面

#### data(数据文件夹)

&#160; &#160; &#160; &#160;data文件夹中,包含了infomation.json和detail.json。

        infomation.json : 个人信息页面所需要的数据;
        detail.json : 个人评价页面所需要的数据

#### inconfont & images

&#160; &#160; &#160; &#160;inconfont和images文件夹,分别是字体图标文件夹和图片文件夹。

#### js

&#160; &#160; &#160; &#160;js文件夹包含: app.js和Routers.js 。
        
        app.js: 项目的入口文件;
        Routers.js: 项目的总路由文件

#### services(服务文件夹)

&#160; &#160; &#160; &#160;services文件夹用于服务请求和数据请求,该文件夹包含了: infomationService.js和detailService.js。
        
        infomationService.js : 请求有关个人信息页面的相关数据;
        detailService.js : 请求个人评价页面的相关数据

## .babelrc

&#160; &#160; &#160; &#160;通过babel对ES6和React代码进行转义。例:
`
{
  "presets": ["es2015", "react"]
}
`
## .editorconfig & .eslintrc.js

&#160; &#160; &#160; &#160;.editorconfig和.eslintrc.js均为开发中,对代码进行统一化、规范化的约束。

## .gitignore

&#160; &#160; &#160; &#160;.gitignore在上传github仓库时,忽略的文件。

        node_modules
        dist
        .vscode

## package.json

&#160; &#160; &#160; &#160;package.json依赖配置项。用来管理项目开发中所需的依赖
