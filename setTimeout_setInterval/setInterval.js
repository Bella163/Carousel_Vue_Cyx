// 使用 setTimout实现 setInterval
function myInterval(fn, t) {
    let timer = null;
    function interval() {
        fn();
        timer = setTimeout(interval, t); // t毫秒后再次调用 interval，不断循环。
    }

    interval();
    return {
        cancel: function() {
            clearTimeout(timer);
        }
    }
}
myInterval(()=>{console.log(1)},1000)