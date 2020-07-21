let html = document.querySelector("#html");
let css = document.querySelector("#style");
let str = `
 /*大家好，我是一个前端程序猿
 接下来，
 我要开始画一个太极了
 首先准备一个div
 */
    #div1 {
        border: 1px solid red;
        width: 200px;
        height: 200px;
    }
 /* 把div变成一个圆 
 背景渐变
 左右阴阳
 */
    #div1 {
        border-radius: 50%;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
        border: none;
        background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 49%,
                rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 100%);

    }
 /*开始制作阴阳眼
 */
    #div1::before {
        content: '';
        display: block;
        background-color: #fff;
        width: 100px;
        height: 100px;
        position: relative;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 50%;
        background: radial-gradient(circle, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 25%, rgba(255, 255, 255, 1) 25%, rgba(255, 255, 255, 1) 100%);
    }

    #div1::after {
        display: block;
        content: '';
        background-color: #000;
        width: 100px;
        height: 100px;
        position: relative;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 50%;
        background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 25%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 100%);
    }
    /*让太极旋转起来*/
    #div1{
        animation: xuanzhuan 3s linear infinite;
    }

`;

let n = 0;
// str2用于缓存
let str2 = "";

//使用递归调用，可以随意控制停止  
let step = () => {
    setTimeout(() => {
        if (str[n] === '\n') {
            // 如果是回车就换行
            str2 += "<br>";
        } else if (str[n] === ' ') {
            //如果是空格
            str2 += "&nbsp;";
        } else {
            //如果不是就继续打字
            str2 += str[n];
        }
        html.innerHTML = str2;
        css.innerHTML = str.substring(0, n);
        window.scrollTo(0, 9999);
        html.scrollTo(0, 99999);
        if (n + 1 < str.length) {
            n = n + 1;

            step();
        }

    }, 0)
}
step();