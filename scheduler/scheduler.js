class Scheduler {
    constructor(num) {
        this.runCount = 0; // 正在执行的任务数
        this.queue = []; // 任务队列
        this.maxCount = num; // 最大任务执行数
    }
    add(time, content) {
        // 异步函数通过 promise 包裹后，可按顺序执行
        const promiseTask = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log(content)
                    resolve()
                }, time);
            })
        }
        // 队列 queue 增加 promise 异步函数
        this.queue.push(promiseTask);
    }
    // 调度器的开关
    taskStart() {
        // for循环后会执行 maxCount 次 request,即同时执行 maxCount 个任务
        // 如果没有 for 循环，直接调用 request ，则一次只会执行一个任务。
        for (let i = 0; i < this.maxCount; i++) {
            this.request();
        }
    }
    request() {
        // 如果没有队列 queue，或者正在运行的任务数runCount 大于 最大同时执行数，则不执行异步函数
        if(!this.queue || !this.queue.length || this.runCount >= this.maxCount) {
            return
        }
        // 每次执行任务前，都要将正在运行的任务数 runCount +1
        this.runCount++;
        // 数组.shift()返回数组的第一个子项，this.queue.shift()()表示返回this.queue的第一个子项（异步函数）并执行。
        this.queue.shift()().then(() => {
            // 任务执行完后，正在运行的任务数 runCount 要 -1
            this.runCount--;
            // 递归执行下一个队列任务
            this.request();
        })
    }
}

// 获得异步函数调度器 Scheduler 的实例，并设置最大任务执行数为2
let scheduler = new Scheduler(2);
function addTask(time, content) {
    // 使用调度器增加任务队列
    scheduler.add(time, content)
}
addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(400, "4");

// 开始执行任务
scheduler.taskStart();