/* 最理想的继承方式：寄生组合式继承 */
/**
 * 1. 第一步，实现寄生式继承的方法 inheritPrototype
 *      1.1 接收2个参数 subType(子类) 和 superType(父类)，通过Object.create(superType.prototype),浅复制父类的原型，得到 prototype 。
 *      1.2 重新赋值 prototype 中的 constructor，由指向 superType 改成指向 subType。
 *      1.3 将 subType 的原型重新赋值为 prototype
 * 
 * 2. 第二步，使用 inheritPrototype 函数。
 *      2.1 声明父类变量和子类变量
 *      2.2 将父类、子类变量传入 inheritPrototype 函数进行继承。
 *      2.3 得到的 子类 可通过 prototype 设置新方法
 * 
*/
// 1. 声明 inheritPrototype 函数
function inheritPrototype(subType, superType) {
    let prototype = Object.create(superType.prototype); // 浅复制父类
    prototype.constructor = subType; // 浅复制后的consctructor是指向superType，要重新指向subType。
    subType.prototype = prototype;
}
// 2. 构造父类
function SuperType(name) {
    this.name = name;
    this.descriptions = ["这是父类描述","SuperType是父类"]
}
SuperType.prototype.consoleDescription = function() {
    // 写在原型链上的方法可被继承
    console.log('description', this.descriptions)
}
// 3. 构造子类, 构造函数式继承，通过 call 在子类构造函数中执行父类构造函数
function SubType(name, age) {
    SuperType.call(this, name);
    this.age = age;
}
// 4. 使用 inhereitPrototype 继承
inheritPrototype(SubType, SuperType);
SubType.prototype.getName = function() {
    console.log(this.name);
}

// 分别生产出 父类实例 和 子类实例
var superType = new SuperType('superType');
var subType = new SubType('subType', 20);

console.log('superType',superType)
console.log('subType',subType)

/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
