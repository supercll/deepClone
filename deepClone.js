function deepClone(target) {
    if (!(target instanceof Object)) return target;
}

module.exports = {
    deepClone,
};
