const { deepClone } = require("./deepClone");

let obj = {
    simple: 1,
    obj: { a: 1 },
    arry: [1, 2, 3],
    func: function (x) {
        return x;
    },
    date: new Date(),
    reg: /^(object|function)$/,
    symbol: Symbol("key"),
    undefined: undefined,
    null: null,
    circle: {},
};
obj.circle.self = obj;

let obj2 = deepClone(obj);

console.log(obj2);
console.log(obj2.arry === obj.arry);
console.log(obj2.obj === obj.obj);

console.log(obj2.func(1))