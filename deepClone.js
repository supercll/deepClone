let cache = [];

function findTarget(target) {
    for (let i = 0; i < cache.length; i++) {
        if (cache[i][0] === target) {
            return cache[i][1];
        }
    }
    return -1;
}

function deepClone(target) {
    if (!(target instanceof Object)) return target;
    let res = findTarget(target);
    if (res !== -1) {
        return res;
    }

    let clone = {};
    if (target instanceof Array) clone = [];
    if (target instanceof Function) {
        clone = function (...args) {
            return target.call(this, ...args);
        };
    }

    if (target instanceof RegExp) {
        return new RegExp(target.source, target.flags);
    }

    if (target instanceof Date) {
        return new Date(target);
    }

    cache.push([target, clone]);

    for (let key in target) {
        if (!target.hasOwnProperty(key)) break;
        clone[key] = deepClone(target[key]);
    }
    return clone;
}

module.exports = {
    deepClone,
};
