
function deepClone(target) {
    if (!(target instanceof Object)) return target;

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

    for (let key in target) {
        if (!target.hasOwnProperty(key)) break;
        clone[key] = deepClone(target[key]);
    }
    return clone;
}

module.exports = {
    deepClone,
};
