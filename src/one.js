import Two from "./Two";
const test=(num)=>{
    console.log(Two.y)
}
test() 
function testable(target) {
    target.isTestable = true;
}
@testable //调用装饰器函数
class MyTestableClass {}
console.log("装饰器语法",MyTestableClass.isTestable) // true

const delay=new Promise(resolve=>console.log("new Promise()"));
function* helloWorldGenerator() {
    yield 'hello';
   yield 'world';
   return 'ending';
}
var hw = helloWorldGenerator();
