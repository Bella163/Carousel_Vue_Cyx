# 手写数组去重的方法
列举了几种去重方法
1. 双重 for 循环遍历去重： 不推荐
2. for 循环 ＋ Array.includes 去重： 不推荐
3. Array.sort() 排序去重：推荐
4. 利用 Set 不重复行去重：推荐
5. 利用对象属性的唯一性去重：强烈推荐

![去重时间](./distinct_time.png)