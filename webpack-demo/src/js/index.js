// 导入模块
// - commonJS 导入
// const obj = require('./tools');

// - ES6 导入
// import {sayHello} from './tools';
import sum from './tools';
// 引入样式
// require('../less/index.less');
require('index-less');


(function() {
    // console.log(obj);
    // hello('Henry');
    sum(10, 6);
    let a = 10;
    console.log(`a = ${a}`);
    console.log('Hello, webpack!');

    $('#title').text('今天天气下雨了，有点冷');

    const img = require('../images/bg.jpeg');
    let oImg = document.getElementById('img');
    oImg.src = img;
})();



