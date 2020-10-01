const deepClone = require("./deepClone");

let obj = {
    simple: 1,
    obj: { a: 1 },
    arry: [1, 2, 3],
    func: function (x) {
        console.log(x);
    },
    date: new Date(),
    reg: /^(object|function)$/,
    symbol: Symbol("key"),
    undefined: undefined,
    null: null,
    circle: {},
};
obj.circle.self = obj;
