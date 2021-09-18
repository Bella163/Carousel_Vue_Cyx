

/* 常规用法 */
function flatter(multiArr) {
    if(!Array.isArray(multiArr) || multiArr.length === 0 ) return
    return multiArr.reduce((pre, cur) => {
        return Array.isArray(cur) ? [...pre, ...flatter(cur)] : [...pre, cur]
    })
}

/* 利用 some 方法 */
function flatter2(arr) {
    if(!Array.isArray(ar)) return new Error('请传入数组');
    if(!arr.length) return;
    // 只要有一个 item 是数组，some 都会返回 true。
    // 都会执行 while 内部代码
    while(arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
    }
}

// console.log(flatter([1, 2, [3, [4, 5, [6, 7, [8]]]]]));