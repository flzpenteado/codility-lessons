const solution = N => {
    const binaryArray = (N).toString(2)
    let max = 0;
    let currentCount = 0;
    for (const item of binaryArray) {
        if (item === '1') {
            if (currentCount > max) {
                max = currentCount;
            }
            currentCount = 0;
        } else {
            currentCount ++;
        }
    }
    return max;
}

module.exports = solution;