## webpack

> 这是由本人配置的webpack自动化构建工具，用于对项目的打包和压缩。此处配置了对html,css,js及image的压缩打包

####在使用此工具之前首先要熟悉基于nodeJS的npm包管理工具的使用

> 注：src文件是代码编写目录，dis文件是代码经过**打包压缩**生成的目录，`webpack.config.js`为配置文件,分模块的配置文件为``build/webpack.div.config.js`` 二者选择一种即可。

## 本处使用此工具的步骤：

> 提示：在当前根目录下使用下面命令

1.安装gulp所需要的依赖

```shell
$ npm i
```

2.对项目进行打包压缩，将src下面的文件**打包压缩**到dist下

```shell
$ npm run build
```

3.运行项目命令

```shell
$ npm run dev
```

#### 注：

​	此处使用了两种方式配置文件      `build文件夹` 是分模块配置的webpack，而 `webpack.config.js` 是整体配置的，一般使用其中一种方式即可，此处默认使用模块化以方便项目设置。

​	使用方法：

​	分模块

```js
"scripts": {
    "build": "./node_modules/.bin/webpack --config ./build/webpack.dev.config.js,
    "dev": "webpack-dev-server --config ./build/webpack.dev.config.js"
  },
```

​	整体配置更改为

```js
"scripts": {
    "build": "./node_modules/.bin/webpack,
    "dev": "webpack-dev-server --config ./build/webpack.dev.config.js"
  },
```





