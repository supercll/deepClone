function deepClone(target) {
    if (!(target instanceof Object)) return target;

    let clone = {};

    for (let key in target) {
        if (!target.hasOwnProperty(key)) break;
        clone[key] = deepClone(target[key]);
    }
    return clone;
}

module.exports = {
    deepClone,
};
