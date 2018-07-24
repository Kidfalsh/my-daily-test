一、ES6 ES7 ES8 learning
  1.ES6常用新特性
    1.1 let&const
      let 命令也用于变量声明，但是作用域为局部
        {
          let a = 10;
          var b = 1;        
        }
      在函数外部可以获取到b，获取不到a，因此例如for循环计数器就适合使用let。
      const用于声明一个常量，设定后值不会再改变
      const PI = 3.1415;
      PI // 3.1415
      PI = 3; //TypeError: Assignment to constant variable.
    1.2 iterable类型
      为了统一集合类型，ES6标准引入了新的iterable类型，Array、Map和Set都属于iterable类型，
      具有iterable类型的集合可以通过新的for … of循环来遍历。
      var a = ['A', 'B', 'C'];
      var s = new Set(['A', 'B', 'C']);
      var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
      for (var x of a) { // 遍历Array
          alert(x);
      }
      for (var x of s) { // 遍历Set
          alert(x);
      }
      for (var x of m) { // 遍历Map
          alert(x[0] + '=' + x[1]);
      }
      Map相关操作如下， Set同理：
      var m = new Map(); // 空Map
      m.set('Adam', 67); // 添加新的key-value
      m.set('Bob', 59);
      m.has('Adam'); // 是否存在key 'Adam': true
      m.get('Adam'); // 67
      m.delete('Adam'); // 删除key 'Adam'
      m.get('Adam'); // undefined
    1.3 解构赋值
      ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。 
      例如数组：
        let [a, b, c] = [1, 2, 3];
        //等同于
        let a = 1;
        let b = 2;
        let c = 3;
      这真的让代码看起来更优美，有种python赋值的既视感。 
      对象的解构赋值：获取对象的多个属性并且使用一条语句将它们赋给多个变量。
      var {
        StyleSheet,
        Text,
        View
      } = React;
      等同于
      var StyleSheet = React.StyleSheet;
      var Text = React.Text;
      var View = React.Text;
    1.4 箭头函数
      ES6中新增箭头操作符用于简化函数的写法，操作符左边为参数，右边为具体操作和返回值。
        var sum = (num1, num2) => { return num1 + num2; }
        //等同于
        var sum = function(num1, num2) {
            return num1 + num2;
        };
      箭头函数还修复了this的指向，使其永远指向词法作用域：
        var obj = {
          birth: 1990,
          getAge: function () {
            var b = this.birth; // 1990
            var fn = () => new Date().getFullYear() - this.birth; // this指向obj对象
            return fn();
          }
        };
        obj.getAge(); // 25
    1.5 ...操作符
      这个的引入几乎不会用到extend这个函数来。通过它可以将数组作为参数直接传入函数：
        var people=['Wayou','John','Sherlock'];
        function sayHello(people1,people2,people3){
          console.log(`Hello ${people1},${people2},${people3}`);
        }
        //改写为
        sayHello(...people);//输出：Hello Wayou,John,Sherlock 
      在函数定义时可以通过…rest获取定义参数外的所有参数（类似C#中的参数数组，可以有任意多个参数）：
        function foo(a, b, ...rest) {
          console.log('a = ' + a);
          console.log('b = ' + b);
          console.log(rest);
        }
        foo(1, 2, 3, 4, 5);
        // 结果:
        // a = 1
        // b = 2
        // Array [ 3, 4, 5 ]
        这个真是完美！关于更多...的说明参考 https://blog.csdn.net/qq_30100043/article/details/53391308
    1.6 类
      ES6提供了更接近传统语言的写法，引入了Class（类）这个概念，作为对象的模板。
      通过class关键字，可以定义类，与多数传统语言类似。
      //定义类
      class Point {
        constructor(x, y) {
          this.x = x;
          this.y = y;
        }
        toString() {
          return '(' + this.x + ', ' + this.y + ')';
        }
      }   
  2.ES7新特性
    2.1 Array.prototype.includes
      　Array.prototype.includes用法都容易和简单。它是一个替代indexOf，开发人员用来检查数组中是否存在值，
        indexOf是一种尴尬的使用，因为它返回一个元素在数组中的位置或者-1当这样的元素不能被找到的情况下。
        所以它返回一个数字，而不是一个布尔值。开发人员需要实施额外的检查。
        在ES6，要检查是否存在值你需要做一些如下图所示小技巧，因为他们没有匹配到值，
        Array.prototype.indexOf返回-1变成了true（转换成true），但是当匹配的元素为0位置时候，
        该数组包含元素，却变成了false。
          let arr = ['react', 'angular', 'vue']
          // WRONG
          if (arr.indexOf('react')) { // 0 -> evaluates to false, definitely as we expected
            console.log('Can use React') // this line would never be executed
          }
          // Correct
          if (arr.indexOf('react') !== -1) {
            console.log('Can use React')
          }
        或者使用一点点hack 位运算符 ~ 使代码更加紧凑一些，因为~（位异或）对任何数字相当于-(a + 1):
          let arr = ['react', 'angular', 'vue']
          // Correct
          if (~arr.indexOf('react')) {
            console.log('Can use React')
          }
        在ES7中使用includes代码如下:
          let arr = ['react', 'angular', 'vue']
          // Correct
          if (arr.includes('react')) {
            console.log('Can use React')
          }
        还能在字符串中使用includes:
          let str = 'React Quickly'
          // Correct
          if (str.toLowerCase().includes('react')) {  // true
            console.log('Found "react"')  
          }
        除了增强了可读性语义化，实际上给开发者返回布尔值，而不是匹配的位置。
        includes也可以在NaN(非数字)使用。最后 ，includes第二可选参数fromIndex，这对于优化是有好处的，
        因为它允许从特定位置开始寻找匹配。
        更多例子：
          console.log([1, 2, 3].includes(2)) // === true)
          console.log([1, 2, 3].includes(4)) // === false)
          console.log([1, 2, NaN].includes(NaN)) // === true)
          console.log([1, 2, -0].includes(+0)) // === true)
          console.log([1, 2, +0].includes(-0)) // === true)
          console.log(['a', 'b', 'c'].includes('a')) // === true)
          console.log(['a', 'b', 'c'].includes('a', 1)) // === false)
        总而言之，includes在一个数组或者列表中检查是否存在一个值，给任何开发人员带来简单性。
    2.2 Exponentiation Operator(求幂运算)
      求幂运算大多数是做一些数学计算，对于3D，VR，SVG还有数据可视化非常有用。
      在ES6或者早些版本，不得不创建一个循环，创建一个递归函数或者使用Math.pow,
      如果忘记了什么是指数,当你有相同数字（基数）自相相乘多次（指数）。例如，7的3次方是7*7*7
      所以在ES6/2015ES，你能使用Math.pow创建一个短的递归箭头函数：
        calculateExponent = (base, exponent) => base*((--exponent>1)?calculateExponent(base, exponent):base)
        console.log(calculateExponent(7,12) === Math.pow(7,12)) // true
        console.log(calculateExponent(2,7) === Math.pow(2,7)) // true
      现在在ES7 /ES2016，以数学向导的开发者可以使用更短的语法:
        let a = 7 ** 12
        let b = 2 ** 7
        console.log(a === Math.pow(7,12)) // true
        console.log(b === Math.pow(2,7)) // true
      开发者还可以操作结果:
        let a = 7
        a **= 12
        let b = 2
        b **= 7
        console.log(a === Math.pow(7,12)) // true
        console.log(b === Math.pow(2,7)) // true
      许多ES新特性是从其他语言（CoffeeScript，Ruby，python等）模仿而来的
  3.ES8新特性
    3.1 Object.values/Object.entries
        Object.values和 Object.entries是在ES2017规格中，它和Object.keys类似，返回数组类型，
      其序号和Object.keys序号对应。类似python中的dict.iteritems()。
        Object.values,Object.entries和Object.keys各自项返回是数组，
      相对应包括key,value或者可枚举特定对象property/attribute
        在ES8 /ES2017之前，Javascript开发者需要迭代一个对象的自身属性时候不得不用Object.keys，
      通过迭代且使用obj[key]获取value值返回一个数组，很挫的：
        let obj = {a: 1, b: 2, c: 3}
        Object.keys(obj).forEach((key, index)=>{
          console.log(key, obj[key])
        })
      而使用ES6/ES2015 中for/of稍微好点：
        let obj = {a: 1, b: 2, c: 3}
        for (let key of Object.keys(obj)) {
          console.log(key, obj[key])
        }
      Object.values返回对象自身可以迭代属性值（values）为数组类型。
      我们最好使用Array.prototype.forEach迭代它，结合ES6的箭头函数隐形返回值：
        let obj = {a: 1, b: 2, c: 3}
        Object.values(obj).forEach(value=>console.log(value)) // 1, 2, 3   
      或者实用for/of:
        let obj = {a: 1, b: 2, c: 3}
        for (let value of Object.values(obj)) {
          console.log(value)
        }
        // 1, 2, 3 
      ·Object.entries·，在另一方面，将会返回对象自身可迭代属性key-value对数组（作为一个数组），
      他们（key-value）分别以数组存放数组中:
        let obj = {a: 1, b: 2, c: 3}
        JSON.stringify(Object.entries(obj))
        "[["a",1],["b",2],["c",3]]"
      可以使用ES6/ES2015解构，从这嵌套数组中分别声明key和value
        let obj = {a: 1, b: 2, c: 3}
        Object.entries(obj).forEach(([key, value]) => {
        console.log(`${key} is ${value}`)
        })
        // a is 1, b is 2, c is 3
      同样使用ES6for/of（毕竟全部都是数组）遍历Object.entries返回来的结果值：
        let obj = {a: 1, b: 2, c: 3}
        for (let [key, value] of Object.entries(obj)) {
          console.log(`${key} is ${value}`)
        }
        // a is 1, b is 2, c is 3
      现在从对象中提取values和key-value pairs 变得非常容易了。
      Object.values和Object.entries这种方式不想之前 Object.keys(自身属性key+顺序相同)结合for/of(ES6)一起，
      我们不仅仅可以提取他们还可以迭代他们。
    3.2 String padding(字符串填充)
      String.prototype.padStart 和 String.prototype.padEnd在javascript字符操作是一个不错的体验，
      帮助避免依赖而外的库。
      padStart()在开始部位填充，返回一个给出长度的字符串，填充物给定字符串，把字符串填充到期望的长度。
      从字符串的左边开始（至少大部分西方语言），一个经典例子是使用空格创建列：
        console.log('react'.padStart(10).length)         // "       react" is 10
        console.log('backbone'.padStart(10).length)         // "  backbone" is 10
        它对于财务方面非常有用：  
          console.log('0.00'.padStart(20))            
          console.log('10,000.00'.padStart(20))    
          console.log('250,000.00'.padStart(20)) 
        如果是为会计做账之类的，这个很实用，帐做的很整齐😄
                  0.00
             10,000.00
            250,000.00    
        第二个参数，让我们放一些其他的填充字符替代空字符串，一个字符串填充：
          console.log('react'.padStart(10, '_'))         // "_____react"
          console.log('backbone'.padStart(10, '*'))         // "**backbone"
        padEnd顾名思义就是从字符串的尾端右边开始填充。第二个参数，你能实际上用一个任何长度的字符串。例如：
          console.log('react'.padEnd(10, ':-)'))         // "react:-):-" is 10
          console.log('backbone'.padEnd(10, '*'))         // "backbone**" is 10
        再赏几个例子作为总结：
          // String.prototype.padStart(targetLength [, padString])
          'hello'.padStart(10); // '     hello'
          'hello'.padStart(10, '0'); // '00000hello'
          'hello'.padStart(); // 'hello'
          'hello'.padStart(6, '123'); // '1hello'
          'hello'.padStart(3); // 'hello'
          'hello'.padStart(3, '123'); // 'hello';
          // String.prototype.padEnd(targetLength [, padString])
          'hello'.padEnd(10); // 'hello     '
          'hello'.padEnd(10, '0'); // 'hello00000'
          'hello'.padEnd(); // 'hello'
          'hello'.padEnd(6, '123'); // 'hello1'
          'hello'.padEnd(3); // 'hello'
          'hello'.padEnd(3, '123'); // 'hello';
    3.3 























