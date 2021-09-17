/* 最高效的方法请看最后一个 */

// 准备需要去重的数组
let arr = [];
for(let ii = 0; ii < 200000; ii++) {
    arr.push(ii);   
}
let arr2 = [];
for(let jj = 0; jj < 10000; jj++) {
    arr2.push(jj + jj);   
}
console.log("arr.length",arr.length);
console.log("arr2.length",arr2.length);

/* 1. 双重 for 循环遍历去重： 不推荐 */

function distinctDoubleFor(arr1,arr2) {
    if(!Array.isArray(arr1) || !Array.isArray(arr2)) return;
    let arr = [...arr1,...arr2];
    for (let i = 0, len = arr.length; i < len; i++) {
        const item = arr[i];
        for (let j = i + 1; j < len; j++) {
            if(arr[i] === arr[j]) {
                arr.splice(j, 1);
                len--;
                j--
            }
        }
    }
    return arr;
}
let ds = new Date().getTime();
let newForArr = distinctDoubleFor(arr, arr2);
let de = new Date().getTime();
console.log('newForArr.length :>> ', newForArr.length);
console.log("双重 for 循环遍历去重：耗时", de - ds ,"毫秒\n")

/* 2. for 循环 ＋ Array.includes 去重： 不推荐 */
function distinctForInc(arr1, arr2) {
    if(!Array.isArray(arr1) || !Array.isArray(arr2)) return;
    let arr = [...arr1,...arr2];
    let newForIncArr = [];
    for (let ii = 0; ii < arr.length; ii++) {
        const item = arr[ii];
        if(!newForIncArr.includes(item)) {
            newForIncArr.push(item);
        }
    }
    return newForIncArr;
}
let ds1 = new Date().getTime();
let newForIncArr = distinctForInc(arr, arr2);
let de1 = new Date().getTime();
console.log('newForIncArr.length :>> ', newForIncArr.length);
console.log("for 循环 ＋ Array.includes 去重：耗时", de1 - ds1 ,"毫秒\n");


/* 3. Array.sort() + for 循环 去重：推荐 */
function distinctSortFor(arr1, arr2) {
    if(!Array.isArray(arr1) || !Array.isArray(arr2)) return;
    let arr = [...arr1,...arr2];
    arr.sort();
    let newSortArr = [];
    for (let ii = 0; ii < arr.length; ii++) {
        if(arr[ii] !== arr[ii - 1]) {
            newSortArr.push(arr[ii])
        }
    }
    return newSortArr;
}
let ds3 = new Date().getTime();
let newSortArr = distinctSortFor(arr, arr2);
let de3 = new Date().getTime();
console.log('newSortArr.length :>> ', newSortArr.length);
console.log("Array.sort() + for 循环 去重：耗时", de3 - ds3 ,"毫秒\n");

/* 4. 利用 Set 不重复性去重：推荐 */

function uniqueArr(arr1,arr2) {
    if(!Array.isArray(arr1) || !Array.isArray(arr2)) return;
    let arr = [...arr1,...arr2];
    return [...new Set(arr)];
}
let ds4 = new Date().getTime();
let newSetArr = uniqueArr(arr, arr2);
let de4 = new Date().getTime();
console.log('newSetArr.length :>> ', newSetArr.length);
console.log("利用set去重：耗时", de4 - ds4 ,"毫秒\n")

/* 5. 利用对象属性的唯一性去重：强烈推荐 */
/* 第 1 种：利用对象的属性唯一性 + forEach 循环 去重 */
function distinctObj1(arr1,arr2) {
    if(!Array.isArray(arr1) || !Array.isArray(arr2)) return;
    let arr = [...arr1,...arr2];
    let obj = {};
    let objArr1 = [];
    arr.forEach(function(item) {
        if(!obj[item]) {
            obj[item] = 1;
            objArr1.push(item);
        }
    })
    return objArr1
}
let ds5 = new Date().getTime();
let objArr1 = distinctObj1(arr,arr2);
let de5 = new Date().getTime();
console.log('objArr1.length :>> ', objArr1.length);
console.log("利用obj属性唯一 + forEach ：耗时", de5 - ds5 ,"毫秒\n")



/* 第 2 种：利用对象的属性唯一性 + reduce 循环 去重 */
function distinctObj2(arr1,arr2) {
    if(!Array.isArray(arr1) || !Array.isArray(arr2)) return;
    let arr = [...arr1,...arr2];
    let obj2 = {};
    let objArr2 = [];
    arr.reduce(function(prev,cur) {
        if(!obj2[cur]) {
            obj2[cur] = 1;
            prev.push(cur);
            return prev;
        }
        return prev
    },objArr2)
    return objArr2;
}
let ds6 = new Date().getTime();
let objArr2 = distinctObj2(arr, arr2);
let de6 = new Date().getTime();
console.log('objArr2.length :>> ', objArr2.length);
console.log("利用obj属性唯一 + reduce：耗时", de6 - ds6 ,"毫秒\n");